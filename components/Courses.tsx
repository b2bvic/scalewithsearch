import React from 'react';

const courses = [
  {
    id: 'SWS-01',
    name: 'Browser OS',
    modules: 6,
    price: '$497',
    desc: '5-Space Architecture. Kill tab hell. Reclaim 500+ hours/year.',
    link: 'https://buy.stripe.com/6oU8wO5Ywd7e6ri2Nk5EY0c'
  },
  {
    id: 'SWS-02',
    name: 'Applied Information',
    modules: 12,
    price: '$997',
    desc: 'Enterprise AI economics. Beyond the API trap. Cost optimization.',
    link: 'https://buy.stripe.com/cNi6oGbiQ2sA4ja0Fc5EY0d'
  },
  {
    id: 'SWS-03',
    name: 'Codified Genius',
    modules: 7,
    price: '$1,997',
    desc: 'Extract expertise. 5 SOP types. Escape the founder bottleneck.',
    link: 'https://buy.stripe.com/6oU00i0Ec3wEaHy1Jg5EY0e'
  },
  {
    id: 'SWS-04',
    name: 'Hybrid Intelligence',
    modules: 41,
    price: '$2,497',
    desc: 'Local LLMs. Browser automation. Enterprise RAG. Multi-agent orchestration.',
    link: 'https://buy.stripe.com/dRmaEWaeM2sA9DugEa5EY0f'
  },
  {
    id: 'SWS-05',
    name: 'LLM Ops',
    modules: 8,
    price: '$997',
    desc: 'Zero Trust AI. Governance. Cost optimization. Production MLOps.',
    link: 'https://buy.stripe.com/9B64gy4Us7MU16YbjQ5EY0g'
  },
  {
    id: 'SWS-00',
    name: 'Claude 101',
    modules: 3,
    price: 'BONUS',
    desc: 'Prompt engineering mastery. Included with Tier 1+.',
    link: null
  }
];

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-20 md:py-32 border-b border-[#1e3a5f]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="grid grid-cols-12 gap-4 mb-12">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] uppercase tracking-widest text-[#64748b]">Section</span>
              <span className="text-[10px] uppercase tracking-widest text-[#2563eb]">02</span>
              <div className="flex-1 h-px bg-[#1e3a5f]"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#e2e8f0]">
              The Stack
            </h2>
            <p className="text-[#64748b] mt-2 text-sm uppercase tracking-wider">
              77 modules • 6 production capstones • Browser → Autonomous Agents
            </p>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-[#0c1220] border border-[#1e3a5f] hover:border-[#2563eb]/50 transition-colors group"
            >
              {/* Card Header */}
              <div className="border-b border-[#1e3a5f] px-4 py-3 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-[#2563eb] font-bold">
                  {course.id}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#64748b]">
                  {course.modules} Modules
                </span>
              </div>

              {/* Card Body */}
              <div className="p-4">
                <h3 className="text-xl font-black uppercase tracking-tight text-[#e2e8f0] mb-2 group-hover:text-[#2563eb] transition-colors">
                  {course.name}
                </h3>
                <p className="text-sm text-[#64748b] mb-4 min-h-[40px]">
                  {course.desc}
                </p>

                {/* Price & Action */}
                <div className="flex items-center justify-between pt-4 border-t border-[#1e3a5f]">
                  <span className={`text-2xl font-black ${course.price === 'BONUS' ? 'text-[#64748b]' : 'text-[#e2e8f0]'}`}>
                    {course.price}
                  </span>
                  {course.link && (
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] uppercase tracking-widest text-[#2563eb] hover:text-[#3b82f6] transition-colors font-bold"
                    >
                      Enroll →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 pt-8 border-t border-[#1e3a5f] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-8 text-[10px] uppercase tracking-widest text-[#64748b]">
            <span>Total: <span className="text-[#e2e8f0] font-bold">77 Modules</span></span>
            <span>Capstones: <span className="text-[#e2e8f0] font-bold">6</span></span>
            <span>Runtime: <span className="text-[#e2e8f0] font-bold">~120hrs</span></span>
          </div>
          <div className="barcode w-32 text-[#2563eb]"></div>
        </div>

      </div>
    </section>
  );
};

export default Courses;
