import type { Plugin } from 'vite'
import * as fs from 'fs'
import * as path from 'path'

const SCREENSHOTS_DIR = 'public/images/screenshots'
/** Add custom labels here; new files default to filename (e.g. S6.png → "S6") */
const KNOWN_LABELS: Record<string, string> = {
  S1: 'Overview',
  S2: 'List',
  S3: 'Up Next',
  S4: 'Free Trial',
  S5: 'Calendar',
}

export function screenshotsPlugin(): Plugin {
  const virtualId = 'virtual:screenshots'
  const resolvedVirtualId = '\0' + virtualId

  const dirPath = path.resolve(process.cwd(), SCREENSHOTS_DIR)

  return {
    name: 'screenshots-manifest',
    enforce: 'pre',
    configureServer(server) {
      if (fs.existsSync(dirPath)) {
        server.watcher.add(path.join(dirPath, '**'))
      }
    },
    handleHotUpdate({ server, file }) {
      const rel = path.relative(dirPath, file)
      if (!rel.startsWith('..') && !path.isAbsolute(rel) && /\.(png|jpg|jpeg|webp)$/i.test(path.basename(file))) {
        const mod = server.moduleGraph.getModuleById(resolvedVirtualId)
        if (mod) {
          server.moduleGraph.invalidateModule(mod)
          return [mod]
        }
      }
    },
    resolveId(id) {
      if (id === virtualId) return resolvedVirtualId
    },
    load(id) {
      if (id !== resolvedVirtualId) return
      try {
        if (!fs.existsSync(dirPath)) {
          return `export const screenshots = []`
        }
        const files = fs
          .readdirSync(dirPath)
          .filter((f) => /\.(png|jpg|jpeg|webp)$/i.test(f))
          .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
        const items = files.map((f) => {
          const name = path.basename(f, path.extname(f))
          return {
            file: f,
            label: KNOWN_LABELS[name] ?? (name.replace(/([A-Z])/g, ' $1').trim() || name),
          }
        })
        return `export const screenshots = ${JSON.stringify(items)}`
      } catch {
        return `export const screenshots = []`
      }
    },
  }
}
