'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/constants/translations';

interface FooterProps {
  setCursorVariant: (variant: 'default' | 'hover' | 'click') => void;
}

export default function Footer({ setCursorVariant }: FooterProps) {
  const { language } = useLanguage();
  const t = translations[language];

  const footerLinks = {
    product: [
      { label: 'DVIA-ULF', href: '/products/active-vibration-systems/dvia-ulf' },
      { label: 'DVIA-MLP1000', href: '/products/active-vibration-systems/dvia-mlp1000' },
      { label: t.opticalTables, href: '/products/optical-tables' },
      { label: t.allProducts, href: '/products' },
    ],
    company: [
      { label: t.about, href: '/company' },
      { label: t.visionMission, href: '/company/vision-mission' },
      { label: t.history, href: '/company/company-history' },
      { label: t.contact, href: '/contact' },
    ],
    resources: [
      { label: t.technicalNotes, href: '/support/technical-notes' },
      { label: t.caseStudies, href: '/support/case-studies' },
      { label: t.resources, href: '/support' },
      { label: t.newsroom, href: '/newsroom' },
    ],
    legal: [
      { label: t.privacyPolicy, href: '/privacy-policy' },
      { label: t.termsOfUse, href: '/terms-of-use' },
      { label: t.warrantyPolicy, href: '/support/warranty-policy' },
      { label: t.contact, href: '/contact' },
    ],
  };

  const socialLinks = [
    { label: 'Facebook', href: 'https://www.facebook.com/daeilsystems/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/14623938' },
    { label: 'YouTube', href: 'https://www.youtube.com/channel/UCdt-FbeboSTxAlcYuW62j6w' },
    { label: 'Instagram', href: 'https://www.instagram.com/daeilsystems/' },
  ];

  return (
    <footer className="relative border-t border-white/10 px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-4">DAEIL SYSTEMS</h3>
              <p className="text-sm opacity-70 leading-relaxed mb-6">
                {t.footerDescription}
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 0.6, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, opacity: 1 }}
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    {social.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-bold tracking-wider mb-4 opacity-60">{t.products.toUpperCase()}</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity inline-block"
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-bold tracking-wider mb-4 opacity-60">{t.company.toUpperCase()}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity inline-block"
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-sm font-bold tracking-wider mb-4 opacity-60">{t.resources.toUpperCase()}</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity inline-block"
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-sm font-bold tracking-wider mb-4 opacity-60">{t.legal}</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity inline-block"
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-white/10 pt-12 mb-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-bold mb-4">{t.stayUpdated}</h4>
            <p className="text-sm opacity-70 mb-6">
              {t.newsletterDescription}
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t.enterEmail}
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 focus:border-white/40 outline-none transition-colors"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              />
              <motion.button
                className="px-6 py-3 bg-white text-[#1a1a1a] font-medium hover:bg-opacity-90 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                {t.subscribe}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60"
        >
          <p>{t.copyright}</p>
          <p className="text-xs">
            {t.footerTagline}
          </p>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-32 bg-gradient-to-t from-transparent to-white/20" />
    </footer>
  );
}
