import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen relative overflow-hidden border-b" style={{ borderColor: 'var(--border)' }}>

      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-12 gap-4 md:gap-6">

          {/* Left Sidebar - Rotated Label */}
          <div className="hidden lg:flex col-span-1 items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="sidebar-text text-[10px] uppercase tracking-[0.3em] font-bold"
              style={{ color: 'var(--text-muted)' }}
            >
              Memory Infrastructure
            </motion.div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-8">

            {/* Top Metadata Row */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-between mb-8 pb-4 border-b"
              style={{ borderColor: 'var(--border)' }}
            >
              <div className="flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>INDEX</span>
                <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--accent)' }}>v3.0</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>STATUS</span>
                <span className="flex items-center gap-1 text-[10px] uppercase tracking-widest" style={{ color: 'var(--success)' }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: 'var(--success)' }}></span>
                  OPEN SOURCE
                </span>
              </div>
            </motion.div>

            {/* Logo Mark */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="text-5xl md:text-6xl" style={{ color: 'var(--accent)' }}>🌐</div>
              <div>
                <div className="text-2xl md:text-3xl font-black uppercase tracking-tight" style={{ color: 'var(--text-primary)' }}>
                  Scale With Search
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] mt-1" style={{ color: 'var(--text-muted)' }}>
                  By Victor Valentine Romo
                </div>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative mb-12"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1" style={{ backgroundColor: 'var(--accent)' }}></div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-[0.9]" style={{ color: 'var(--text-primary)' }}>
                Your AI Forgets<br />
                Everything
              </h1>
              <div className="mt-4 text-xl md:text-2xl font-bold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
                I Build The System That Fixes That
              </div>
            </motion.div>

            {/* Description Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative border p-6 mb-8 bracket-tl bracket-br"
              style={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--border)' }}
            >
              <div className="text-[10px] uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
                The Problem
              </div>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Every conversation starts from scratch. You re-explain your business to AI weekly.
                Notes scattered across twelve apps. Context lost between sessions.
              </p>
              <p className="text-base md:text-lg leading-relaxed mt-3" style={{ color: 'var(--text-primary)' }}>
                Claude Code + Obsidian vault architecture with persistent memory across conversations.
                Domain routing loads context automatically. Semantic search surfaces past sessions.
                Open-source core. Custom builds for operators who want it done right.
              </p>
            </motion.div>

            {/* CTA Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#offer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all hover:translate-y-[-2px]"
                style={{ backgroundColor: 'var(--accent)', color: 'white' }}
              >
                I Build This For You
                <span style={{ opacity: 0.7 }}>→</span>
              </a>
              <a
                href="https://github.com/b2bvic/scale-with-search"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border font-bold uppercase tracking-wider text-sm transition-all"
                style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
              >
                Inspect The Source
              </a>
            </motion.div>

          </div>

          {/* Right Sidebar - Specs Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="col-span-12 lg:col-span-3 mt-8 lg:mt-0"
          >
            <div className="border h-full" style={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--border)' }}>

              {/* Panel Header */}
              <div className="border-b px-4 py-3 flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
                <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Production Stats</span>
                <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--accent)' }}>LIVE</span>
              </div>

              {/* Specs List */}
              <div className="p-4 space-y-6">

                <div>
                  <div className="text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>Vault Files</div>
                  <div className="text-4xl font-black" style={{ color: 'var(--text-primary)' }}>3,130+</div>
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>Sessions Logged</div>
                  <div className="text-4xl font-black" style={{ color: 'var(--text-primary)' }}>73+</div>
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>Skills</div>
                  <div className="text-2xl font-black" style={{ color: 'var(--text-primary)' }}>17</div>
                </div>

                <div className="pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <div className="text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>Domains Managed</div>
                  <div className="text-2xl font-black" style={{ color: 'var(--accent)' }}>5</div>
                  <div className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Two Jobs + Clients</div>
                </div>

                {/* Barcode */}
                <div className="pt-4">
                  <div className="barcode w-full" style={{ color: 'var(--accent)' }}></div>
                  <div className="text-[8px] uppercase tracking-widest mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
                    SWS-MEMORY-2026
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Data Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute bottom-0 left-0 right-0 border-t backdrop-blur-sm"
        style={{ borderColor: 'var(--border)', backgroundColor: 'var(--header-bg)' }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex flex-wrap items-center justify-between gap-4 text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
          <div className="flex items-center gap-6">
            <span>Domain Routing</span>
            <span style={{ color: 'var(--border)' }}>|</span>
            <span>Semantic Memory</span>
            <span style={{ color: 'var(--border)' }}>|</span>
            <span>Skill System</span>
            <span style={{ color: 'var(--border)' }}>|</span>
            <span className="hidden sm:inline">Self-Repair</span>
            <span className="hidden sm:inline" style={{ color: 'var(--border)' }}>|</span>
            <span className="hidden sm:inline">Open Source</span>
          </div>
          <div style={{ color: 'var(--accent)' }}>
            Claude Code • Obsidian • Persistent Memory
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
