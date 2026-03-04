import { motion } from 'framer-motion'

const features = [
  { icon: '📊', title: 'Overview Dashboard', desc: 'Daily, monthly, yearly commitment at a glance.', highlight: false },
  { icon: '⏰', title: 'Up Next', desc: 'Renewals with 1wk, 2wk, 1mo ranges.', highlight: false },
  { icon: '🎯', title: 'Free Trial Tracking', desc: 'Notify before conversion. No surprises.', highlight: false },
  { icon: '🔍', title: 'Review These', desc: 'Low-use subs (<25%) sorted by money wasted.', highlight: true },
  { icon: '📈', title: 'Usage & Streaks', desc: 'Money Insight—value vs. waste, progress bar.', highlight: true },
  { icon: '📅', title: 'Renewal Calendar', desc: 'Visual calendar. Plan budget.', highlight: false },
  { icon: '💰', title: 'Most Expensive', desc: 'Biggest expenses. Informed decisions.', highlight: false },
  { icon: '🔔', title: 'Smart Notifications', desc: '1, 3, 7 days before renewal. All local.', highlight: false },
  { icon: '📤', title: 'Import & Export', desc: 'Backup and restore. Subscriptions, payment methods, categories, usage history.', highlight: false },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export function Features() {
  return (
    <section id="features" className="py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-display-sm font-bold text-white mb-4">
            Everything you need
          </h2>
          <p className="text-xl text-white/60 max-w-xl mx-auto">
            One app. Full control.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`p-8 rounded-2xl border ${
                f.highlight
                  ? 'bg-elevated border-accent/40 hover:border-accent/60'
                  : 'bg-elevated/50 border-border hover:border-white/20'
              }`}
            >
              <span className="text-4xl block mb-4">{f.icon}</span>
              <h3 className="font-semibold text-lg text-white mb-2">{f.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
