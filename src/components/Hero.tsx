import { motion } from 'framer-motion'
import { HeroVideo } from './HeroVideo'
import { APP_STORE_URL } from '../lib/constants'

export function Hero() {
  return (
    <section className="min-h-[100dvh] flex items-center justify-center pt-20 pb-8 sm:pt-24 sm:pb-12 px-4 sm:px-6 lg:px-8 relative overflow-visible">
      {/* Ambient glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 right-0 w-[min(500px,40vw)] h-[min(500px,40vw)] -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/12 blur-[80px] pointer-events-none"
      />

      <div className="w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-w-0 w-full">
          <div className="lg:order-2 min-w-0 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative w-full max-w-[min(320px,85vw)] lg:max-w-[min(380px,calc(72dvh*9/19.5))]"
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
              className="text-accent font-medium text-sm uppercase tracking-widest mb-3"
              >
                Subscription tracker for iOS
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="font-display font-bold text-white mb-4 break-words text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl leading-tight tracking-tight"
              >
                Take control.
                <br />
                <span className="text-accent">Stop wasting.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base sm:text-lg text-white/80 max-w-md mb-6"
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
                  href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-white text-black rounded-full font-semibold text-base sm:text-lg hover:bg-white/90 transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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
