import { motion } from 'framer-motion'

const stats = [
  { value: '4.8★', label: 'App Store' },
  { value: '10K+', label: 'Active Users' },
  { value: '500K+', label: 'Tracked' },
]

export function SocialProof() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 border-y border-border"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <span className="text-2xl font-bold text-accent">{stat.value}</span>
              <span className="text-sm text-white/50">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
