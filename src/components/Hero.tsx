import { motion } from 'framer-motion'
import { HeroVideo } from './HeroVideo'

export function Hero() {
  return (
    <section className="min-h-[100dvh] flex items-center justify-center pt-20 pb-6 sm:pt-24 sm:pb-8 md:pt-20 md:pb-8 lg:pt-16 lg:pb-10 relative overflow-visible">
      {/* Ambient glow - fully contained */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 right-0 w-[min(500px,40vw)] h-[min(500px,40vw)] -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/12 blur-[80px] pointer-events-none"
      />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative min-w-0">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center min-w-0 w-full">
          <div className="lg:order-2 min-w-0 flex justify-center">
            {/* Phone as large as possible while fitting viewport - uses ~72dvh */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative w-full max-w-[min(400px,min(92vw,calc(72dvh*9/19.5)))]"
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full aspect-[9/19.5] rounded-[36px] sm:rounded-[44px] p-3 sm:p-4 bg-elevated border border-border shadow-2xl shadow-black/50"
              >
                <HeroVideo className="w-full h-full aspect-[9/19.5]" />
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:order-1 min-w-0">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-accent font-medium text-sm uppercase tracking-widest mb-4"
            >
              Subscription tracker for iOS
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="font-display text-display font-bold tracking-tight text-white mb-3 sm:mb-4 break-words"
            >
              Take control.
              <br />
              <span className="text-accent">Stop wasting.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-white/70 max-w-md mb-4 sm:mb-6"
            >
              Track usage. Spot money drain. Never miss a renewal. 100% private—no account, no servers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <a
                href="#app-store-link"
                target="_blank"
                rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-white text-black rounded-full font-semibold text-base sm:text-lg hover:bg-white/90 transition-colors shrink-0"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.84 14.16l-1.68-2.88-2.88 4.8c-.22.36-.68.48-1.04.26-.36-.22-.48-.68-.26-1.04l3.6-6c.22-.36.68-.48 1.04-.26.36.22.48.68.26 1.04L9.6 16.8c-.22.36-.68.48-1.04.26-.36-.22-.48-.68-.26-1.04l2.4-4 1.68 2.88c.22.36.68.48 1.04.26.36-.22.48-.68.26-1.04z" />
                </svg>
                Get SubSens Free
              </a>
              <span className="text-sm text-white/50 shrink-0">4.8★ App Store · 10K+ users</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
