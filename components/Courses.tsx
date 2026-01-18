import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Brain, Users, Cpu, Shield, Sparkles } from 'lucide-react';

const courses = [
  {
    id: '01',
    name: 'Browser OS',
    price: '$497',
    modules: 6,
    icon: Monitor,
    desc: '5-Space Architecture. Kill tab hell. Reclaim 500+ hours/year.',
    color: 'text-green-500',
    link: 'https://buy.stripe.com/6oU8wO5Ywd7e6ri2Nk5EY0c'
  },
  {
    id: '02',
    name: 'Applied Information',
    price: '$997',
    modules: 12,
    icon: Brain,
    desc: 'Enterprise AI economics. Beyond the API trap.',
    color: 'text-blue-500',
    link: 'https://buy.stripe.com/cNi6oGbiQ2sA4ja0Fc5EY0d'
  },
  {
    id: '03',
    name: 'Codified Genius',
    price: '$1,997',
    modules: 7,
    icon: Users,
    desc: 'Extract expertise. 5 SOP types. Escape the founder bottleneck.',
    color: 'text-purple-500',
    link: 'https://buy.stripe.com/6oU00i0Ec3wEaHy1Jg5EY0e'
  },
  {
    id: '04',
    name: 'Hybrid Intelligence',
    price: '$2,497',
    modules: 41,
    icon: Cpu,
    desc: 'Local LLMs. Browser automation. Enterprise RAG. Multi-agent orchestration.',
    color: 'text-accent',
    link: 'https://buy.stripe.com/dRmaEWaeM2sA9DugEa5EY0f'
  },
  {
    id: '05',
    name: 'LLM Ops',
    price: '$997',
    modules: 8,
    icon: Shield,
    desc: 'Zero Trust AI. Governance. Cost optimization. Production MLOps.',
    color: 'text-yellow-500',
    link: 'https://buy.stripe.com/9B64gy4Us7MU16YbjQ5EY0g'
  },
  {
    id: '06',
    name: 'Claude 101',
    price: 'BONUS',
    modules: 3,
    icon: Sparkles,
    desc: 'Prompt engineering mastery. Included with Tier 1+.',
    color: 'text-gray-400',
    link: null
  }
];

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-24 px-4 md:px-12 bg-bg border-b border-ink/10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <div className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4">
            <span className="text-accent">$</span> ls -la /courses
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-ink tracking-tighter">
            The Stack
          </h2>
          <p className="text-lg text-ink/60 mt-4 max-w-2xl font-mono">
            77 modules. 6 production capstones. Browser setup to autonomous agents.
          </p>
        </div>

        {/* Course Grid - Console Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-surface border border-ink/20 hover:border-ink/40 transition-all duration-300"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-ink/10 bg-subtle/50">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/60"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/60"></div>
                </div>
                <span className="font-mono text-[10px] text-gray-500 uppercase">
                  SWS_{course.id}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <course.icon size={24} className={course.color} strokeWidth={1.5} />
                  <span className="font-mono text-xs text-gray-500">
                    {course.modules} modules
                  </span>
                </div>

                <h3 className="text-xl font-black uppercase text-ink mb-2 tracking-tight">
                  {course.name}
                </h3>

                <p className="font-mono text-sm text-ink/60 mb-6 min-h-[48px]">
                  {course.desc}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-ink/10">
                  <span className={`font-mono font-bold ${course.price === 'BONUS' ? 'text-gray-400' : 'text-ink'}`}>
                    {course.price}
                  </span>
                  {course.link && (
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs uppercase text-accent hover:underline"
                    >
                      Enroll →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Command */}
        <div className="mt-12 font-mono text-sm text-gray-500">
          <span className="text-accent">$</span> total: 77 modules | 6 capstones | ~120 hrs runtime
        </div>

      </div>
    </section>
  );
};

export default Courses;
