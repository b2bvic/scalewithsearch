import React from 'react';
import { motion } from 'framer-motion';

const scopes = [
  {
    id: 'SCOPE-01',
    name: 'Light Setup',
    price: '$1,000',
    includes: [
      'Obsidian vault architecture',
      'CLAUDE.md master context',
      'Domain routing hooks',
      'Basic skill set',
      'Session logging'
    ]
  },
  {
    id: 'SCOPE-02',
    name: 'Full Build',
    price: '$3,000 – $6,000',
    featured: true,
    includes: [
      'Everything in Light Setup',
      'Custom domain skills',
      'Voice calibration',
      'VPS deployment',
      'Telegram bot integration',
      'Semantic memory (QMD)'
    ]
  },
  {
    id: 'SCOPE-03',
    name: 'Retainer',
    price: '$500 – $1,500/mo',
    includes: [
      'Ongoing system evolution',
      'New skill development',
      'Context file maintenance',
      'Architecture iteration',
      'Priority support'
    ]
  }
];

const Offer: React.FC = () => {
  return (
    <section id="offer" className="py-20 md:py-32 border-b" style={{ borderColor: 'var(--border)' }}>
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
              <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--accent)' }}>05</span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }}></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight" style={{ color: 'var(--text-primary)' }}>
              I Build This For You
            </h2>
            <p className="mt-2 text-sm uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
              One offer • Customized to your workflow • Scope-dependent pricing
            </p>
          </div>
        </motion.div>

        {/* Offer Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="border p-8 mb-12 bracket-tl bracket-br"
          style={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--border)' }}
        >
          <div className="text-[10px] uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>
            The Offer
          </div>
          <p className="text-xl md:text-2xl font-bold leading-relaxed" style={{ color: 'var(--text-primary)' }}>
            I build AI memory systems for people who run businesses.
          </p>
          <p className="text-base md:text-lg leading-relaxed mt-3" style={{ color: 'var(--text-secondary)' }}>
            Claude Code + Obsidian vault architecture, customized to your domains, your workflow,
            your voice. Persistent memory across conversations. Domain routing that loads context
            automatically. Skills that extend Claude's capabilities without re-explaining them.
          </p>
          <p className="text-base md:text-lg leading-relaxed mt-3" style={{ color: 'var(--text-secondary)' }}>
            The open-source repo is the architecture. The service is making it yours.
          </p>
        </motion.div>

        {/* Scope Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {scopes.map((scope, i) => (
            <motion.div
              key={scope.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative border transition-all hover:translate-y-[-2px] ${
                scope.featured ? 'lg:scale-105 z-10' : ''
              }`}
              style={{
                backgroundColor: 'var(--bg-panel)',
                borderColor: scope.featured ? 'var(--accent)' : 'var(--border)'
              }}
            >
              {scope.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-white text-[10px] uppercase tracking-widest font-bold px-4 py-1" style={{ backgroundColor: 'var(--accent)' }}>
                    Most Common
                  </span>
                </div>
              )}

              {/* Card Header */}
              <div className="border-b px-6 py-4 flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
                <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>
                  {scope.id}
                </span>
                <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                  Scope
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2" style={{ color: 'var(--text-primary)' }}>
                  {scope.name}
                </h3>

                <div className="mb-6">
                  <span className="text-3xl font-black" style={{ color: scope.featured ? 'var(--accent)' : 'var(--text-primary)' }}>
                    {scope.price}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {scope.includes.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <span style={{ color: scope.featured ? 'var(--accent)' : 'var(--success)' }}>+</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://linkedin.com/in/b2bvic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 text-center font-bold uppercase tracking-wider text-sm transition-all hover:translate-y-[-1px]"
                  style={{
                    backgroundColor: scope.featured ? 'var(--accent)' : 'var(--border)',
                    color: scope.featured ? 'white' : 'var(--text-primary)'
                  }}
                >
                  Book A Call
                </a>
              </div>

              {/* Card Footer */}
              <div className="border-t px-6 py-3" style={{ borderColor: 'var(--border)' }}>
                <div className="barcode w-full" style={{ color: 'var(--accent)' }}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 text-[10px] uppercase tracking-widest border px-6 py-3" style={{ color: 'var(--text-muted)', borderColor: 'var(--border)' }}>
            <span>Or explore the architecture yourself</span>
            <a
              href="https://github.com/b2bvic/scale-with-search"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold transition-opacity hover:opacity-80"
              style={{ color: 'var(--accent)' }}
            >
              Open-Source Repo →
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Offer;
