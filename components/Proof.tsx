import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';

const stats = [
  { label: 'Vault Files', value: '3,130+', sub: 'Indexed & searchable' },
  { label: 'Documented Sessions', value: '73+', sub: 'Compounding context' },
  { label: 'Client Engagements', value: '198+', sub: 'Across 14 industries' },
  { label: 'Production Skills', value: '67', sub: 'Slash commands' }
];

const Proof: React.FC = () => {
  // Use first 3 real testimonials from constants
  const displayTestimonials = TESTIMONIALS.slice(0, 3);

  return (
    <section id="proof" className="py-20 md:py-32 border-b" style={{ borderColor: 'var(--border)' }}>
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
              <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--accent)' }}>04</span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }}></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Proof of Work
            </h2>
            <p className="mt-2 text-sm uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
              Running in production • Not a weekend project
            </p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="border p-6 transition-colors"
              style={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--border)' }}
            >
              <div className="text-[10px] uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
                {stat.label}
              </div>
              <div className="text-3xl md:text-4xl font-black mb-1" style={{ color: 'var(--text-primary)' }}>
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Open Source Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="border p-6 mb-16 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--accent)' }}
        >
          <div>
            <div className="text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--accent)' }}>Open Source</div>
            <div className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
              The full architecture is public. Clone it, run setup.sh, and go.
            </div>
          </div>
          <a
            href="https://github.com/b2bvic/scale-with-search"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 font-bold uppercase tracking-wider text-sm transition-all hover:translate-y-[-1px] whitespace-nowrap"
            style={{ backgroundColor: 'var(--accent)', color: 'white' }}
          >
            View Repo →
          </a>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {displayTestimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="border transition-colors"
              style={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--border)' }}
            >
              {/* Card Header */}
              <div className="border-b px-4 py-3 flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
                <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                  Signal
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="mb-6 leading-relaxed text-sm" style={{ color: 'var(--text-secondary)' }}>
                  "{t.quote}"
                </p>

                <div className="pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <div className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{t.author}</div>
                  <div className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Data */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 pt-8 border-t flex flex-wrap items-center justify-between gap-4"
          style={{ borderColor: 'var(--border)' }}
        >
          <div className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
            Data from: <span style={{ color: 'var(--text-primary)' }}>2013–2026</span> • 14 industries • 198+ engagements
          </div>
          <div className="barcode w-32" style={{ color: 'var(--accent)' }}></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Proof;
