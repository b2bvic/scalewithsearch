import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Users, Building } from 'lucide-react';

const tiers = [
  {
    id: 'tier1',
    name: 'Tier 1',
    subtitle: 'Self-Paced',
    price: '$3,497',
    icon: Zap,
    featured: false,
    link: 'https://buy.stripe.com/eVq00ifz65EM7vmafM5EY0h',
    features: [
      'All 5 courses (77 modules)',
      'All code repositories',
      'All templates & starter files',
      'Capstone projects',
      'Lifetime access'
    ]
  },
  {
    id: 'tier2',
    name: 'Tier 2',
    subtitle: 'Accelerator',
    price: '$7,500',
    icon: Users,
    featured: true,
    link: 'https://buy.stripe.com/6oU3cu86Ec3a9DubjQ5EY0i',
    features: [
      'Everything in Tier 1',
      'Private Skool community',
      'Weekly live Q&A with Vic',
      'Build-in-public sessions',
      '"I\'m obliged to help you" guarantee'
    ]
  },
  {
    id: 'tier3',
    name: 'Enterprise',
    subtitle: 'Done-For-You',
    price: '$40,000+',
    icon: Building,
    featured: false,
    link: 'https://buy.stripe.com/3cIfZgev2d7e8zq87E5EY0j',
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
    <section id="pricing" className="py-24 px-4 md:px-12 bg-subtle/30">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4">
            <span className="text-accent">$</span> cat /pricing/tiers.json
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-ink tracking-tighter mb-4">
            Choose Your Path
          </h2>
          <p className="text-lg text-ink/60 font-mono max-w-xl mx-auto">
            One payment. Lifetime access. No subscriptions.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-surface border-2 transition-all duration-300 ${
                tier.featured
                  ? 'border-accent shadow-brutal-lg scale-105 z-10'
                  : 'border-ink/20 hover:border-ink/40'
              }`}
            >
              {/* Featured Badge */}
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-white font-mono text-xs font-bold uppercase px-4 py-1 border-2 border-ink">
                    Recommended
                  </span>
                </div>
              )}

              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-ink/10 bg-subtle/50">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/60"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/60"></div>
                </div>
                <span className="font-mono text-[10px] text-gray-500 uppercase">
                  {tier.id.toUpperCase()}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <tier.icon size={24} className={tier.featured ? 'text-accent' : 'text-ink'} strokeWidth={1.5} />
                  <div>
                    <h3 className="text-xl font-black uppercase text-ink tracking-tight">
                      {tier.name}
                    </h3>
                    <span className="font-mono text-xs text-gray-500 uppercase">
                      {tier.subtitle}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <span className={`text-4xl font-black ${tier.featured ? 'text-accent' : 'text-ink'}`}>
                    {tier.price}
                  </span>
                  <span className="font-mono text-sm text-gray-500 ml-2">one-time</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 font-mono text-sm text-ink/80">
                      <Check size={16} className={tier.featured ? 'text-accent' : 'text-green-500'} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={tier.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 text-center font-mono font-bold uppercase tracking-wider text-sm transition-all duration-300 ${
                    tier.featured
                      ? 'bg-accent text-white border-2 border-ink hover:bg-accent/90'
                      : 'bg-ink text-inverse border-2 border-ink hover:bg-ink/90'
                  }`}
                >
                  Enroll Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <div className="font-mono text-sm text-gray-500 border border-ink/10 inline-block px-6 py-3 bg-surface">
            <span className="text-accent">?</span> Questions? DM <a href="https://linkedin.com/in/b2bvic" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">@b2bvic</a> on LinkedIn
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
