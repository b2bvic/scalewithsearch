import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen relative overflow-hidden border-b border-[#1e3a5f]">

      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-12 gap-4 md:gap-6">

          {/* Left Sidebar - Rotated Label */}
          <div className="hidden lg:flex col-span-1 items-center justify-center">
            <div className="sidebar-text text-[10px] uppercase tracking-[0.3em] text-[#64748b] font-bold">
              AI Operating System
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-8">

            {/* Top Metadata Row */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#1e3a5f]">
              <div className="flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-widest text-[#64748b]">INDEX</span>
                <span className="text-[10px] uppercase tracking-widest text-[#2563eb]">v2.0</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-widest text-[#64748b]">STATUS</span>
                <span className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-[#22c55e]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>
                  ENROLLMENT OPEN
                </span>
              </div>
            </div>

            {/* Logo Mark */}
            <div className="flex items-center gap-4 mb-8">
              <div className="text-5xl md:text-6xl" style={{ color: '#2563eb' }}>🌐</div>
              <div>
                <div className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#e2e8f0]">
                  Scale With Search
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#64748b] mt-1">
                  Industrial Signal Core
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <div className="relative mb-12">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#2563eb]"></div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-[0.9] text-[#e2e8f0]">
                Stop Being<br />
                The Bottleneck
              </h1>
              <div className="mt-4 text-xl md:text-2xl font-bold uppercase tracking-wider text-[#2563eb]">
                Scale Intelligence
              </div>
            </div>

            {/* Description Panel */}
            <div className="relative bg-[#0c1220] border border-[#1e3a5f] p-6 mb-8 bracket-tl bracket-br">
              <div className="text-[10px] uppercase tracking-widest text-[#64748b] mb-3">
                System Description
              </div>
              <p className="text-base md:text-lg text-[#94a3b8] leading-relaxed">
                Your expertise trapped in your head. Every decision flows through you.
                You can't hire fast enough. AI feels like toys, not tools.
              </p>
              <p className="text-base md:text-lg text-[#e2e8f0] leading-relaxed mt-3">
                The SWS Operating System extracts your intelligence into repeatable systems.
                Local LLMs. Browser automation. Production RAG. Multi-agent orchestration.
              </p>
            </div>

            {/* CTA Row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#2563eb] text-white font-bold uppercase tracking-wider text-sm hover:bg-[#1e40af] transition-colors"
              >
                View Pricing
                <span className="text-[#93c5fd]">→</span>
              </a>
              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#1e3a5f] text-[#94a3b8] font-bold uppercase tracking-wider text-sm hover:border-[#2563eb] hover:text-[#e2e8f0] transition-colors"
              >
                Explore Modules
              </a>
            </div>

          </div>

          {/* Right Sidebar - Specs Panel */}
          <div className="col-span-12 lg:col-span-3 mt-8 lg:mt-0">
            <div className="bg-[#0c1220] border border-[#1e3a5f] h-full">

              {/* Panel Header */}
              <div className="border-b border-[#1e3a5f] px-4 py-3 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-[#64748b]">System Specs</span>
                <span className="text-[10px] uppercase tracking-widest text-[#2563eb]">2026</span>
              </div>

              {/* Specs List */}
              <div className="p-4 space-y-6">

                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#64748b] mb-1">Courses</div>
                  <div className="text-4xl font-black text-[#e2e8f0]">5</div>
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#64748b] mb-1">Modules</div>
                  <div className="text-4xl font-black text-[#e2e8f0]">77</div>
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#64748b] mb-1">Runtime</div>
                  <div className="text-2xl font-black text-[#e2e8f0]">~120h</div>
                </div>

                <div className="pt-4 border-t border-[#1e3a5f]">
                  <div className="text-[10px] uppercase tracking-widest text-[#64748b] mb-1">Built From</div>
                  <div className="text-2xl font-black text-[#2563eb]">150+</div>
                  <div className="text-[10px] uppercase tracking-widest text-[#64748b]">Client Engagements</div>
                </div>

                {/* Barcode */}
                <div className="pt-4">
                  <div className="barcode w-full text-[#2563eb]"></div>
                  <div className="text-[8px] uppercase tracking-widest text-[#64748b] mt-2 text-center">
                    SWS-OS-2026-PROD
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Data Strip */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#1e3a5f] bg-[#0c1220]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex flex-wrap items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-[#64748b]">
          <div className="flex items-center gap-6">
            <span>Browser OS</span>
            <span className="text-[#1e3a5f]">|</span>
            <span>Applied Information</span>
            <span className="text-[#1e3a5f]">|</span>
            <span>Codified Genius</span>
            <span className="text-[#1e3a5f]">|</span>
            <span className="hidden sm:inline">Hybrid Intelligence</span>
            <span className="hidden sm:inline text-[#1e3a5f]">|</span>
            <span className="hidden sm:inline">LLM Ops</span>
          </div>
          <div className="text-[#2563eb]">
            Local-First • Zero Trust • Production Grade
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
