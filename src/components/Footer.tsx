import { motion } from 'framer-motion'

const links = {
  Product: [
    { href: '#features', label: 'Features' },
    { href: '#privacy', label: 'Privacy' },
    { href: '#screenshots', label: 'Screenshots' },
    { href: '#download', label: 'Download' },
  ],
  Support: [
    { href: '#faq', label: 'FAQ' },
    { href: 'mailto:support@subsens.app', label: 'Support' },
    { href: `${import.meta.env.BASE_URL}privacy.html`, label: 'Privacy Policy' },
    { href: `${import.meta.env.BASE_URL}terms.html`, label: 'Terms' },
  ],
}

export function Footer() {
  return (
    <footer className="py-16 border-t border-border bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={`${import.meta.env.BASE_URL}images/icon-192.png`} alt="SubSens" className="w-8 h-8 rounded-lg" />
              <span className="font-display font-bold text-lg">SubSens</span>
            </div>
            <p className="text-white/50 text-sm">
              Take control of your subscriptions. 100% private.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              {links.Product.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {links.Support.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                    {...(l.href.startsWith('http') || l.href.startsWith('mailto') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-white/40">&copy; 2025 SubSens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
