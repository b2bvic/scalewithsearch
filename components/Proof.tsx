import React from 'react';

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
    <section id="proof" className="py-20 md:py-32 border-b border-[#1e3a5f]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="grid grid-cols-12 gap-4 mb-12">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] uppercase tracking-widest text-[#64748b]">Section</span>
              <span className="text-[10px] uppercase tracking-widest text-[#2563eb]">04</span>
              <div className="flex-1 h-px bg-[#1e3a5f]"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#e2e8f0]">
              Proof of Work
            </h2>
            <p className="text-[#64748b] mt-2 text-sm uppercase tracking-wider">
              Built from real engagements • Not theories
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#0c1220] border border-[#1e3a5f] p-6">
              <div className="text-[10px] uppercase tracking-widest text-[#64748b] mb-2">
                {stat.label}
              </div>
              <div className="text-3xl md:text-4xl font-black text-[#e2e8f0] mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-[#2563eb]">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#0c1220] border border-[#1e3a5f] hover:border-[#2563eb]/50 transition-colors">
              {/* Card Header */}
              <div className="border-b border-[#1e3a5f] px-4 py-3 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-[#64748b]">
                  Testimonial
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#2563eb] font-bold">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-[#94a3b8] mb-6 leading-relaxed">
                  "{t.quote}"
                </p>

                <div className="pt-4 border-t border-[#1e3a5f]">
                  <div className="font-bold text-[#e2e8f0] text-sm">{t.name}</div>
                  <div className="text-[10px] uppercase tracking-widest text-[#64748b] mb-3">
                    {t.title}
                  </div>
                  <div className="inline-block px-2 py-1 bg-[#1e3a5f] text-[10px] uppercase tracking-widest text-[#2563eb] font-bold">
                    {t.result}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Data */}
        <div className="mt-12 pt-8 border-t border-[#1e3a5f] flex flex-wrap items-center justify-between gap-4">
          <div className="text-[10px] uppercase tracking-widest text-[#64748b]">
            Data from: <span className="text-[#e2e8f0]">2021-2026</span> • Verified outcomes
          </div>
          <div className="barcode w-32 text-[#2563eb]"></div>
        </div>

      </div>
    </section>
  );
};

export default Proof;
