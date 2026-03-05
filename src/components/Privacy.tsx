import { motion } from 'framer-motion'

const items = [
  { icon: '📱', title: '100% Local', desc: 'Data on your device. No servers.' },
  { icon: '🔐', title: 'End-to-End', desc: "Apple encryption. Even Apple can't read it." },
  { icon: '🚫', title: 'No Collection', desc: 'No analytics. No tracking. No ads.' },
  { icon: '👤', title: 'No Account', desc: "Download. Start. That's it." },
]

export function Privacy() {
  return (
    <section id="privacy" className="py-20 md:py-28 lg:py-32 bg-elevated border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-widest">Privacy First</span>
          <h2 className="font-display text-display-sm font-bold text-white mt-2 mb-4">
            Your data never leaves.
          </h2>
          <p className="text-xl text-white/60 max-w-2xl">
            Zero server storage. We don&apos;t touch your data. Ever.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -2 }}
              className="p-6 rounded-2xl bg-black/40 border border-white/5"
            >
              <span className="text-3xl block mb-3">{item.icon}</span>
              <h3 className="font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-sm text-white/60">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
