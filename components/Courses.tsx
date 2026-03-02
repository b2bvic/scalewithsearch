import React from 'react';
import { motion } from 'framer-motion';

const capabilities = [
  {
    id: 'SWS-01',
    name: 'Browser OS',
    modules: 6,
    desc: '5-Space Architecture. Kill tab hell. Reclaim 500+ hours/year.',
  },
  {
    id: 'SWS-02',
    name: 'Applied Information',
    modules: 12,
    desc: 'Enterprise AI economics. Hybrid sovereignty. Cost optimization at scale.',
  },
  {
    id: 'SWS-03',
    name: 'Codified Genius',
    modules: 7,
    desc: 'Expertise extraction. 5 SOP types. Escape the founder bottleneck.',
  },
  {
    id: 'SWS-04',
    name: 'Hybrid Intelligence',
    modules: 41,
    desc: 'Local LLMs. Browser automation. Enterprise RAG. Multi-agent orchestration.',
  },
  {
    id: 'SWS-05',
    name: 'LLM Ops',
    modules: 8,
    desc: 'Governance, compliance, and cost control for production AI systems.',
  },
  {
    id: 'SWS-06',
    name: 'Claude Code + Obsidian',
    modules: 1,
    desc: 'One file builds the system. Persistent memory infrastructure from one conversation.',
  }
];

const Courses: React.FC = () => {
  return (
    <section id="capabilities" className="py-20 md:py-32 border-b" style={{ borderColor: 'var(--border)' }}>
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
              What The System Covers
            </h2>
            <p className="mt-2 text-sm uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
              77 modules of documented depth • 6 knowledge domains • Built from production
            </p>
          </div>
        </motion.div>

        {/* Capability Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="border transition-all hover:translate-y-[-2px] group"
              style={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--border)' }}
            >
              {/* Card Header */}
              <div className="border-b px-4 py-3 flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
                <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>
                  {cap.id}
                </span>
                <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                  {cap.modules} {cap.modules === 1 ? 'Module' : 'Modules'}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-4">
                <h3 className="text-xl font-black uppercase tracking-tight mb-2 transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {cap.name}
                </h3>
                <p className="text-sm mb-4 min-h-[40px]" style={{ color: 'var(--text-muted)' }}>
                  {cap.desc}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--text-muted)' }}>
                    Documented Depth
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>
                    Included In Build
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 pt-8 border-t flex flex-wrap items-center justify-between gap-4"
          style={{ borderColor: 'var(--border)' }}
        >
          <div className="flex items-center gap-8 text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
            <span>Total: <span className="font-bold" style={{ color: 'var(--text-primary)' }}>77 Modules</span></span>
            <span>Domains: <span className="font-bold" style={{ color: 'var(--text-primary)' }}>6</span></span>
            <span>Source: <span className="font-bold" style={{ color: 'var(--text-primary)' }}>Production</span></span>
          </div>
          <div className="barcode w-32" style={{ color: 'var(--accent)' }}></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Courses;
