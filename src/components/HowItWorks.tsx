import { motion } from 'framer-motion'

const steps = [
  { n: '1', title: 'Add Subscriptions', desc: 'Name, price, billing cycle. Category, payment method.' },
  { n: '2', title: 'Log Usage', desc: 'Mark days used. Streaks. Usage rate at a glance.' },
  { n: '3', title: 'See Insights', desc: 'Money Insight—value vs. waste. Cancel what you don\'t use.' },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 lg:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-display-sm font-bold text-white mb-4">
            How it works
          </h2>
          <p className="text-xl text-white/60">Minutes to set up. No account.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-accent/50 flex items-center justify-center"
              >
                <span className="font-display font-bold text-2xl text-accent">{step.n}</span>
              </motion.div>
              <h3 className="font-semibold text-xl text-white mb-3">{step.title}</h3>
              <p className="text-white/60">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
