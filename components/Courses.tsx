import React from 'react';
import { motion } from 'framer-motion';

const courses = [
  {
    id: 'SWS-01',
    slug: 'browser-os',
    name: 'Browser OS',
    modules: 6,
    price: '$497',
    desc: '5-Space Architecture. Kill tab hell. Reclaim 500+ hours/year.',
    link: 'https://buy.stripe.com/6oU8wO5Ywd7e6ri2Nk5EY0c'
  },
  {
    id: 'SWS-02',
    slug: 'applied-information',
    name: 'Applied Information',
    modules: 12,
    price: '$997',
    desc: 'Enterprise AI economics. Beyond the API trap. Cost optimization.',
    link: 'https://buy.stripe.com/cNi6oGbiQ2sA4ja0Fc5EY0d'
  },
  {
    id: 'SWS-03',
    slug: 'codified-genius',
    name: 'Codified Genius',
    modules: 7,
    price: '$1,997',
    desc: 'Extract expertise. 5 SOP types. Escape the founder bottleneck.',
    link: 'https://buy.stripe.com/6oU00i0Ec3wEaHy1Jg5EY0e'
  },
  {
    id: 'SWS-04',
    slug: 'hybrid-intelligence',
    name: 'Hybrid Intelligence',
    modules: 41,
    price: '$2,497',
    desc: 'Local LLMs. Browser automation. Enterprise RAG. Multi-agent orchestration.',
    link: 'https://buy.stripe.com/dRmaEWaeM2sA9DugEa5EY0f'
  },
  {
    id: 'SWS-05',
    slug: 'llm-ops',
    name: 'LLM Ops',
    modules: 8,
    price: '$997',
    desc: 'Zero Trust AI. Governance. Cost optimization. Production MLOps.',
    link: 'https://buy.stripe.com/9B64gy4Us7MU16YbjQ5EY0g'
  },
  {
    id: 'SWS-00',
    slug: null,
    name: 'Claude 101',
    modules: 3,
    price: 'BONUS',
    desc: 'Prompt engineering mastery. Included with Tier 1+.',
    link: null
  }
];

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-20 md:py-32 border-b" style={{ borderColor: 'var(--border)' }}>
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
              <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--accent)' }}>02</span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }}></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight" style={{ color: 'var(--text-primary)' }}>
              The Stack
            </h2>
            <p className="mt-2 text-sm uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
              77 modules • 6 production capstones • Browser → Autonomous Agents
            </p>
          </div>
        </motion.div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
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
                  {course.id}
                </span>
                <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                  {course.modules} Modules
                </span>
              </div>

              {/* Card Body */}
              <div className="p-4">
                <h3 className="text-xl font-black uppercase tracking-tight mb-2 transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {course.name}
                </h3>
                <p className="text-sm mb-4 min-h-[40px]" style={{ color: 'var(--text-muted)' }}>
                  {course.desc}
                </p>

                {/* Price & Action */}
                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <span className="text-2xl font-black" style={{ color: course.price === 'BONUS' ? 'var(--text-muted)' : 'var(--text-primary)' }}>
                    {course.price}
                  </span>
                  <div className="flex items-center gap-3">
                    {course.slug && (
                      <a
                        href={`/course/${course.slug}`}
                        className="text-[10px] uppercase tracking-widest font-bold transition-opacity hover:opacity-80"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        Details
                      </a>
                    )}
                    {course.link && (
                      <a
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] uppercase tracking-widest font-bold transition-opacity hover:opacity-80"
                        style={{ color: 'var(--accent)' }}
                      >
                        Enroll →
                      </a>
                    )}
                  </div>
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
            <span>Capstones: <span className="font-bold" style={{ color: 'var(--text-primary)' }}>6</span></span>
            <span>Runtime: <span className="font-bold" style={{ color: 'var(--text-primary)' }}>~120hrs</span></span>
          </div>
          <div className="barcode w-32" style={{ color: 'var(--accent)' }}></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Courses;
