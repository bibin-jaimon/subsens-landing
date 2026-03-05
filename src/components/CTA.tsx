import { motion } from 'framer-motion'
import { APP_STORE_URL, DOWNLOAD_SECTION_ID } from '../lib/constants'

export function CTA() {
  return (
    <section id={DOWNLOAD_SECTION_ID} className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-display-sm font-bold text-black mb-4"
        >
          Ready to stop wasting?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-black/80 mb-10"
        >
          Free tier. No credit card.
        </motion.p>
        <motion.a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white rounded-full font-semibold text-lg hover:bg-black/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.84 14.16l-1.68-2.88-2.88 4.8c-.22.36-.68.48-1.04.26-.36-.22-.48-.68-.26-1.04l3.6-6c.22-.36.68-.48 1.04-.26.36.22.48.68.26 1.04L9.6 16.8c-.22.36-.68.48-1.04.26-.36-.22-.48-.68-.26-1.04l2.4-4 1.68 2.88c.22.36.68.48 1.04.26.36-.22.48-.68.26-1.04z" />
          </svg>
          Get SubSens Free
        </motion.a>
      </div>
    </section>
  )
}
