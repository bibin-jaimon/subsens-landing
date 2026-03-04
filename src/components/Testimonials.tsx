import { motion } from 'framer-motion'

const testimonials = [
  { quote: 'Finally know where my money goes. Cancelled 3 subs. Saved $40/mo.', author: 'Sarah' },
  { quote: 'Money Insight changed how I think. No more guessing.', author: 'Mike' },
  { quote: '100% local, no account. Exactly what I wanted.', author: 'Alex' },
]

export function Testimonials() {
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-display-sm font-bold text-white mb-4">
            Loved by thousands
          </h2>
          <p className="text-xl text-white/60">What users say</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-8 rounded-2xl bg-elevated border border-border"
            >
              <p className="text-white/90 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-accent font-semibold">— {t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
