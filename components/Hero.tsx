import React, { useState, useEffect } from 'react';
import { ChevronRight, Shield, Network, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [bootText, setBootText] = useState<string[]>([]);

  useEffect(() => {
    setTimeout(() => {
      const sequences = [
        "INIT_BROWSER_OS...",
        "LOADING_KNOWLEDGE_GRAPH...",
        "DEPLOYING_LOCAL_LLM...",
        "SYNCING_AGENT_SWARM...",
        "CALIBRATING_RAG_PIPELINE...",
        "SWS_READY."
      ];

      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < sequences.length) {
          const text = sequences[currentIndex];
          if (text) {
            setBootText(prev => [...prev, text]);
          }
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }, 500);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center border-b border-ink/20 bg-bg overflow-hidden transition-colors duration-300">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* Top Bar */}
      <header className="w-full border-b border-ink/10 bg-surface/50 backdrop-blur-sm py-2 px-4 md:px-8 flex justify-between items-center z-20 sticky top-0">
        <div className="flex gap-6 font-mono text-[10px] font-medium uppercase text-gray-500 tracking-wider">
          <span className="hidden md:flex items-center gap-2"><Cpu size={12} className="text-ink"/> 5 COURSES</span>
          <span className="hidden md:flex items-center gap-2"><Network size={12} className="text-secondary"/> 77 MODULES</span>
          <span className="flex items-center gap-2"><Shield size={12} className="text-green-500"/> LOCAL-FIRST</span>
        </div>
        <div className="font-mono text-[10px] font-bold uppercase text-accent animate-pulse flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
          ENROLLMENT_OPEN
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center relative z-10 px-4 md:px-12 py-12">
        <div className="max-w-7xl mx-auto w-full relative">

          {/* HUD Corners */}
          <div className="absolute -top-10 -left-10 w-20 h-20 border-t border-l border-ink/20 opacity-50 hidden md:block"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b border-r border-ink/20 opacity-50 hidden md:block"></div>

          {/* Boot Sequence */}
          <div className="font-mono text-[10px] md:text-xs font-medium text-gray-400 mb-8 h-20 overflow-hidden border-l border-accent/30 pl-4 flex flex-col justify-end">
            {bootText.map((text, i) => (
              <div key={i} className="mb-0.5">
                <span className="text-accent mr-2">{'>'}</span>{text}
              </div>
            ))}
            {bootText.length < 6 && <div className="animate-pulse text-accent">_</div>}
          </div>

          {/* Title */}
          <div className="relative mb-8 z-30">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-4xl sm:text-6xl md:text-8xl font-black uppercase text-ink tracking-tighter leading-[0.9] select-none"
            >
              Stop Being<br/>
              The Bottleneck.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-ink to-transparent md:to-ink opacity-80 md:opacity-100 text-outline-ink md:text-outline-0">Scale Intelligence.</span>
            </motion.h1>
          </div>

          {/* SVG Badge */}
          <motion.div
            layoutId="schematic-logo"
            transition={{ type: "spring", stiffness: 70, damping: 15, mass: 1, duration: 1.2 }}
            className="absolute top-[-50px] right-[-20px] md:top-[-20px] md:right-0 lg:right-20 z-0 md:z-20 pointer-events-none select-none opacity-50 md:opacity-100 scale-75 md:scale-100"
          >
            <svg width="300" height="300" viewBox="0 0 300 300" className="text-ink">
              <defs>
                <path id="ringOuter" d="M 150, 150 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0" />
              </defs>
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "150px 150px" }}
              >
                <circle cx="150" cy="150" r="120" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.3" />
                <text className="fill-current font-mono text-[10px] font-bold tracking-[0.2em] uppercase opacity-60">
                  <textPath href="#ringOuter" startOffset="0%">
                    /// BROWSER OS /// HYBRID INTELLIGENCE /// LOCAL LLM /// RAG ///
                  </textPath>
                </text>
              </motion.g>
              <motion.g
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "150px 150px" }}
              >
                <circle cx="150" cy="150" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 30" opacity="0.4" />
                <circle cx="150" cy="150" r="88" fill="none" stroke="currentColor" strokeWidth="0.2" />
              </motion.g>
              <g className="opacity-80">
                <path d="M 150 120 L 176 135 L 176 165 L 150 180 L 124 165 L 124 135 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="150" cy="150" r="2" fill="currentColor" />
                <text x="150" y="145" textAnchor="middle" className="fill-current font-mono text-[8px] font-bold">SCALE</text>
                <text x="150" y="158" textAnchor="middle" className="fill-current font-mono text-[8px] font-bold">WITH</text>
                <text x="150" y="171" textAnchor="middle" className="fill-current font-mono text-[8px] font-bold">SEARCH</text>
              </g>
            </svg>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 pl-1 relative z-30"
          >
            <div className="flex items-center gap-2 font-mono font-bold text-xs uppercase text-accent tracking-widest border border-accent/20 bg-accent/5 px-3 py-1 rounded-sm">
              <Shield size={12} /> Live Apprenticeship
            </div>
            <p className="text-lg md:text-xl font-medium text-ink/80 max-w-2xl leading-tight">
              5 courses. 77 modules. Browser setup to production AI deployment.<br/>
              <span className="opacity-50 text-base">Built from 150+ client engagements.</span>
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-wrap gap-4 relative z-30"
          >
            <a
              href="#pricing"
              className="group relative px-8 py-4 bg-ink text-inverse font-mono font-bold uppercase tracking-wider text-sm overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
              <span className="relative z-10 flex items-center gap-2">
                View Pricing <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform"/>
              </span>
            </a>
            <a
              href="#courses"
              className="group relative px-8 py-4 bg-transparent text-ink border border-ink/30 font-mono font-bold uppercase tracking-wider text-sm hover:border-ink transition-colors"
            >
              <span className="flex items-center gap-2">
                Explore Courses
              </span>
            </a>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
