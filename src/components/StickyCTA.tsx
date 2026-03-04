import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const [pastCta, setPastCta] = useState(false)

  useEffect(() => {
    const handler = () => {
      const hero = document.querySelector('section')?.getBoundingClientRect()
      const cta = document.getElementById('download')?.getBoundingClientRect()
      if (hero && window.scrollY > hero.height * 0.6) setVisible(true)
      else setVisible(false)
      if (cta && cta.top < window.innerHeight - 100) setPastCta(true)
      else setPastCta(false)
    }
    window.addEventListener('scroll', handler)
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const show = visible && !pastCta

  return (
    <motion.div
      initial={false}
      animate={{
        y: show ? 0 : 100,
        opacity: show ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-xl border-t border-border p-4"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4 min-w-0">
        <span className="font-medium text-white">Ready to take control?</span>
        <a
          href="#app-store-link"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 bg-accent hover:bg-accent-dark rounded-full font-semibold text-black text-sm transition-colors"
        >
          Get SubSens Free
        </a>
      </div>
    </motion.div>
  )
}
