import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  { q: 'Is SubSens free?', a: 'Yes. Free tier: 5 subs. Pro: unlimited. Check App Store for pricing.' },
  { q: 'What if I cancel Pro?', a: 'Back to free. Keep 5 subs. Data stays. Upgrade anytime.' },
  { q: 'Is my data secure?', a: '100% local. We have no servers. Your data stays on your device.' },
  { q: 'Do you collect data?', a: 'Never. No analytics. No tracking. No servers to store anything.' },
  { q: 'Can I import or export my data?', a: 'Yes. Export creates a full backup (subscriptions, payment methods, categories, usage history) to the Files app. Import restores from a backup file and merges with existing data. Your data, your control.' },
  { q: 'Offline?', a: 'Fully offline. All data is stored locally on your device.' },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 md:py-28 lg:py-32 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-display-sm font-bold text-white mb-4">
            FAQ
          </h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-medium text-white">{faq.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  className="text-2xl text-accent font-light"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-white/60 text-sm">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
