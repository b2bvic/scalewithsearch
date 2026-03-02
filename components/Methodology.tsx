import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { id: '01', title: 'INGESTION', subtitle: 'Active R&D', desc: 'Client work and consulting generate raw operational data. Real problems, real constraints, real solutions.' },
  { id: '02', title: 'PROCESSING', subtitle: 'Pattern Match', desc: 'Repeated solutions become reusable patterns. Patterns that prove out become skills. Skills compound across sessions.' },
  { id: '03', title: 'MODELING', subtitle: 'Codification', desc: 'Skills and patterns crystallize into documented systems — 77 modules of production-tested architecture.' },
  { id: '04', title: 'SCALE', subtitle: 'Deployment', desc: 'Proven systems deploy to new environments. Your vault inherits years of compounded context on day one.' },
];

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-20 md:py-32 border-b relative overflow-hidden" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

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
              <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--accent)' }}>02</span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }}></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight" style={{ color: 'var(--text-primary)' }}>
              The Recursive Engine
            </h2>
            <p className="mt-2 text-sm uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
              Not a funnel — a feedback loop • Outputs become inputs
            </p>
          </div>
        </motion.div>

        {/* Pipeline */}
        <div className="border p-8 md:p-12 relative" style={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--border)' }}>
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: 'var(--accent)' }}></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2" style={{ borderColor: 'var(--border)' }}></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2" style={{ borderColor: 'var(--border)' }}></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: 'var(--accent)' }}></div>

          <div className="absolute -top-3 left-8 px-2 text-[10px] font-bold uppercase tracking-widest" style={{ backgroundColor: 'var(--bg-panel)', color: 'var(--text-muted)' }}>
            DATA_FLOW_PIPELINE
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border p-6 relative transition-colors"
                style={{ backgroundColor: 'var(--bg-base)', borderColor: 'var(--border)' }}
              >
                <div className="absolute -top-3 left-4 px-2 text-[10px] uppercase tracking-widest" style={{ backgroundColor: 'var(--bg-base)', color: 'var(--text-muted)' }}>
                  NODE_{step.id}
                </div>
                <h3 className="font-black text-lg uppercase tracking-tight mb-1" style={{ color: 'var(--text-primary)' }}>
                  {step.title}
                </h3>
                <div className="text-[10px] uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
                  {step.subtitle}
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {step.desc}
                </p>

                {/* Arrow indicator for non-last items */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-lg" style={{ color: 'var(--text-muted)' }}>
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { color: 'var(--accent)', label: 'Input: Client Work & Consulting' },
            { color: 'var(--text-primary)', label: 'Process: Pattern Extraction & Codification' },
            { color: 'var(--success)', label: 'Output: Deployable Memory Systems' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 border p-3" style={{ borderColor: 'var(--border)' }}>
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}></div>
              <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{item.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Methodology;
