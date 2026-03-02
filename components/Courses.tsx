import React from 'react';
import { motion } from 'framer-motion';

const capabilities = [
  {
    id: 'SYS-01',
    name: 'Domain Routing',
    status: 'ACTIVE',
    desc: 'Say "client" and your AI loads client context. Say "lead" and it loads CRM state. Keyword matching injects the right _context.md before Claude even starts thinking. No manual loading. No "let me give you background." It already knows.',
    tech: 'UserPromptSubmit hook → route-domain.sh'
  },
  {
    id: 'SYS-02',
    name: 'Semantic Memory',
    status: 'ACTIVE',
    desc: 'Every tool call triggers a BM25 search against your vault. Past sessions, documented patterns, and archived decisions surface mid-conversation without you asking. Claude remembers what you solved three weeks ago because the hook queries it automatically.',
    tech: 'PreToolUse hook → pretool-memory.sh → QMD'
  },
  {
    id: 'SYS-03',
    name: 'Skill System',
    status: 'ACTIVE',
    desc: 'Slash commands that do real work. /morning generates a daily dashboard. /dispatch reads your client queue and produces deliverables. /brief writes research-backed content briefs. Each skill is a markdown file that Claude executes — you write new ones in plain English.',
    tech: '.claude/commands/*.md'
  },
  {
    id: 'SYS-04',
    name: 'Self-Repair',
    status: 'ACTIVE',
    desc: 'Context files carry staleness timestamps. When data drifts past 48 hours, the system warns Claude before it acts on outdated state. Skills detect broken paths and fix them. QMD reindexes hourly. The vault maintains itself or tells you what needs attention.',
    tech: 'last_verified:: timestamps + launchd timers'
  },
  {
    id: 'SYS-05',
    name: 'Voice Calibration',
    status: 'ACTIVE',
    desc: 'Your AI writes like you, not like AI. Observer Protocol strips sycophancy, filler, and neat conclusions. Lexical density rules force precise vocabulary. The voice section in CLAUDE.md trains Claude once — every session inherits it.',
    tech: 'CLAUDE.md voice rules + Observer Protocol'
  },
  {
    id: 'SYS-06',
    name: 'Always-On Infrastructure',
    status: 'ACTIVE',
    desc: 'Telegram bot accepts voice and text 24/7. Systemd timers run scheduled jobs while your laptop sleeps. Syncthing keeps the vault synchronized between machines. The system operates whether you\'re at the keyboard or not.',
    tech: 'VPS + Telegram bot + systemd + Syncthing'
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
              What Gets Built
            </h2>
            <p className="mt-2 text-sm uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
              Six subsystems • Each running in production now • Your build inherits all of them
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
                <span className="flex items-center gap-1 text-[10px] uppercase tracking-widest" style={{ color: 'var(--success)' }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--success)' }}></span>
                  {cap.status}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-4">
                <h3 className="text-xl font-black uppercase tracking-tight mb-3 transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {cap.name}
                </h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {cap.desc}
                </p>

                {/* Tech Footer */}
                <div className="pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
                  <span className="text-[9px] uppercase tracking-widest font-mono" style={{ color: 'var(--text-muted)', opacity: 0.6 }}>
                    {cap.tech}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 pt-8 border-t flex flex-wrap items-center justify-between gap-4"
          style={{ borderColor: 'var(--border)' }}
        >
          <div className="flex items-center gap-8 text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
            <span>Architecture: <span className="font-bold" style={{ color: 'var(--text-primary)' }}>Open Source</span></span>
            <span>Custom Builds: <span className="font-bold" style={{ color: 'var(--accent)' }}>Available</span></span>
          </div>
          <div className="barcode w-32" style={{ color: 'var(--accent)' }}></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Courses;
