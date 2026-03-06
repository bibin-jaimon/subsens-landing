import { motion } from 'framer-motion'
import { screenshots as screenshotFiles } from 'virtual:screenshots'

const base = import.meta.env.BASE_URL ?? ''
const raw = Array.isArray(screenshotFiles) ? screenshotFiles : []
const screenshots = raw
  .filter((item): item is { file: string; label: string } => item && typeof item.file === 'string')
  .map(({ file, label }) => ({
    src: `${base}images/screenshots/${file}`,
    alt: label ?? file,
    label: label ?? file,
  }))

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='606' viewBox='0 0 280 606'%3E%3Crect fill='%231a1a1e' width='280' height='606'/%3E%3Ctext x='140' y='300' fill='%23FF9500' font-size='24' text-anchor='middle'%3ESubSens%3C/text%3E%3C/svg%3E"

export function Screenshots() {
  return (
    <section id="screenshots" className="py-20 md:py-28 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-display-sm font-bold text-white mb-4">
            See it in action
          </h2>
          <p className="text-xl text-white/60">Beautiful. Intuitive. iOS.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {screenshots.map((s, i) => (
            <motion.div
              key={s.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="flex flex-col items-center"
            >
              <div className="rounded-2xl overflow-hidden border border-border bg-elevated aspect-[9/19.5] w-full max-w-[280px]">
                <img
                  src={s.src}
                  alt={s.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = PLACEHOLDER
                  }}
                />
              </div>
              <p className="text-center text-sm text-white/50 mt-3">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
