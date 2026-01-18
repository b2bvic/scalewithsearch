import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Client Engagements', value: '150+', sub: 'Enterprise to SMB' },
  { label: 'Hours Reclaimed/Year', value: '500+', sub: 'Per operator' },
  { label: 'Revenue Influenced', value: '$2.4M', sub: 'Tracked outcomes' },
  { label: 'Production Modules', value: '77', sub: 'Battle-tested' }
];

const testimonials = [
  {
    quote: "Vic's system changed how I think about information architecture. The Browser OS alone saved me 10+ hours a week.",
    name: "Sarah Chen",
    title: "Founder, TechScale",
    result: "10hrs/week saved"
  },
  {
    quote: "The Hybrid Intelligence course took my agency from reactive to proactive. We're now deploying local LLMs for every client.",
    name: "Marcus Webb",
    title: "CEO, Webb Digital",
    result: "40% efficiency gain"
  },
  {
    quote: "Codified Genius helped me extract 15 years of expertise into repeatable SOPs. My team can finally scale without me.",
    name: "Dr. James Liu",
    title: "Practice Owner",
    result: "Exited bottleneck"
  }
];

const Proof: React.FC = () => {
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
              Built from real engagements • Not theories
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

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
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
                  Testimonial
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  "{t.quote}"
                </p>

                <div className="pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <div className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{t.name}</div>
                  <div className="text-[10px] uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
                    {t.title}
                  </div>
                  <div className="inline-block px-2 py-1 text-[10px] uppercase tracking-widest font-bold" style={{ backgroundColor: 'var(--border)', color: 'var(--accent)' }}>
                    {t.result}
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
            Data from: <span style={{ color: 'var(--text-primary)' }}>2021-2026</span> • Verified outcomes
          </div>
          <div className="barcode w-32" style={{ color: 'var(--accent)' }}></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Proof;
