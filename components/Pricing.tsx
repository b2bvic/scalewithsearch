import React from 'react';
import { motion } from 'framer-motion';

const tiers = [
  {
    id: 'TIER-01',
    name: 'Self-Paced',
    price: '$3,497',
    link: 'https://buy.stripe.com/eVq00ifz65EM7vmafM5EY0h',
    featured: false,
    features: [
      'All 5 courses (77 modules)',
      'All code repositories',
      'All templates & starter files',
      'Capstone projects',
      'Lifetime access'
    ]
  },
  {
    id: 'TIER-02',
    name: 'Accelerator',
    price: '$7,500',
    link: 'https://buy.stripe.com/6oU3cu86Ec3a9DubjQ5EY0i',
    featured: true,
    features: [
      'Everything in Tier 1',
      'Private Skool community',
      'Weekly live Q&A with Vic',
      'Build-in-public sessions',
      '"I\'m obliged to help you" guarantee'
    ]
  },
  {
    id: 'TIER-03',
    name: 'Done-For-You',
    price: '$40,000+',
    link: 'https://buy.stripe.com/3cIfZgev2d7e8zq87E5EY0j',
    featured: false,
    features: [
      'Full system implementation',
      'Expertise extraction',
      'SOP documentation',
      'Local AI deployment',
      'Compliance alignment'
    ]
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 border-b" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-12 gap-4 mb-12"
        >
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Section</span>
              <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--accent)' }}>03</span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }}></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Select Tier
            </h2>
            <p className="mt-2 text-sm uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
              One payment • Lifetime access • No subscriptions
            </p>
          </div>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative border transition-all hover:translate-y-[-2px] ${
                tier.featured ? 'lg:scale-105 z-10' : ''
              }`}
              style={{
                backgroundColor: 'var(--bg-panel)',
                borderColor: tier.featured ? 'var(--accent)' : 'var(--border)'
              }}
            >
              {/* Featured Badge */}
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-white text-[10px] uppercase tracking-widest font-bold px-4 py-1" style={{ backgroundColor: 'var(--accent)' }}>
                    Recommended
                  </span>
                </div>
              )}

              {/* Card Header */}
              <div className="border-b px-6 py-4 flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
                <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>
                  {tier.id}
                </span>
                <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                  License
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2" style={{ color: 'var(--text-primary)' }}>
                  {tier.name}
                </h3>

                <div className="mb-6">
                  <span className="text-4xl font-black" style={{ color: tier.featured ? 'var(--accent)' : 'var(--text-primary)' }}>
                    {tier.price}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest ml-2" style={{ color: 'var(--text-muted)' }}>
                    One-Time
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <span style={{ color: tier.featured ? 'var(--accent)' : 'var(--success)' }}>+</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={tier.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 text-center font-bold uppercase tracking-wider text-sm transition-all hover:translate-y-[-1px]"
                  style={{
                    backgroundColor: tier.featured ? 'var(--accent)' : 'var(--border)',
                    color: tier.featured ? 'white' : 'var(--text-primary)'
                  }}
                >
                  Enroll Now
                </a>
              </div>

              {/* Card Footer */}
              <div className="border-t px-6 py-3" style={{ borderColor: 'var(--border)' }}>
                <div className="barcode w-full" style={{ color: 'var(--accent)' }}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 text-[10px] uppercase tracking-widest border px-6 py-3" style={{ color: 'var(--text-muted)', borderColor: 'var(--border)' }}>
            <span>Questions?</span>
            <a
              href="https://linkedin.com/in/b2bvic"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold transition-opacity hover:opacity-80"
              style={{ color: 'var(--accent)' }}
            >
              DM @b2bvic
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Pricing;
