import React from 'react';

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
    <section id="pricing" className="py-20 md:py-32 border-b border-[#1e3a5f]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="grid grid-cols-12 gap-4 mb-12">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] uppercase tracking-widest text-[#64748b]">Section</span>
              <span className="text-[10px] uppercase tracking-widest text-[#2563eb]">03</span>
              <div className="flex-1 h-px bg-[#1e3a5f]"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#e2e8f0]">
              Select Tier
            </h2>
            <p className="text-[#64748b] mt-2 text-sm uppercase tracking-wider">
              One payment • Lifetime access • No subscriptions
            </p>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-[#0c1220] border transition-colors ${
                tier.featured
                  ? 'border-[#2563eb] lg:scale-105 z-10'
                  : 'border-[#1e3a5f] hover:border-[#2563eb]/50'
              }`}
            >
              {/* Featured Badge */}
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#2563eb] text-white text-[10px] uppercase tracking-widest font-bold px-4 py-1">
                    Recommended
                  </span>
                </div>
              )}

              {/* Card Header */}
              <div className="border-b border-[#1e3a5f] px-6 py-4 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-[#2563eb] font-bold">
                  {tier.id}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#64748b]">
                  License
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-2xl font-black uppercase tracking-tight text-[#e2e8f0] mb-2">
                  {tier.name}
                </h3>

                <div className="mb-6">
                  <span className={`text-4xl font-black ${tier.featured ? 'text-[#2563eb]' : 'text-[#e2e8f0]'}`}>
                    {tier.price}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#64748b] ml-2">
                    One-Time
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#94a3b8]">
                      <span className={tier.featured ? 'text-[#2563eb]' : 'text-[#22c55e]'}>+</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={tier.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 text-center font-bold uppercase tracking-wider text-sm transition-colors ${
                    tier.featured
                      ? 'bg-[#2563eb] text-white hover:bg-[#1e40af]'
                      : 'bg-[#1e3a5f] text-[#e2e8f0] hover:bg-[#2563eb]'
                  }`}
                >
                  Enroll Now
                </a>
              </div>

              {/* Card Footer */}
              <div className="border-t border-[#1e3a5f] px-6 py-3">
                <div className="barcode w-full text-[#2563eb]"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 text-[10px] uppercase tracking-widest text-[#64748b] border border-[#1e3a5f] px-6 py-3">
            <span>Questions?</span>
            <a
              href="https://linkedin.com/in/b2bvic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563eb] hover:text-[#3b82f6] font-bold"
            >
              DM @b2bvic
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
