import React, { useState } from 'react';
import { motion } from 'framer-motion';

/* ─── SVG ICONS (one per system, 20×20 — these scale fine) ─── */
const SystemIcon: React.FC<{ id: string }> = ({ id }) => {
  const s = { stroke: 'var(--accent)', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const icons: Record<string, React.ReactNode> = {
    '01': <svg viewBox="0 0 24 24" width="20" height="20"><rect x="3" y="12" width="4" height="9" {...s} /><rect x="10" y="7" width="4" height="14" {...s} /><rect x="17" y="3" width="4" height="18" {...s} /></svg>,
    '02': <svg viewBox="0 0 24 24" width="20" height="20"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" {...s} /><polyline points="14 2 14 8 20 8" {...s} /><line x1="8" y1="13" x2="16" y2="13" {...s} /><line x1="8" y1="17" x2="13" y2="17" {...s} /></svg>,
    '03': <svg viewBox="0 0 24 24" width="20" height="20"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" {...s} /></svg>,
    '04': <svg viewBox="0 0 24 24" width="20" height="20"><circle cx="12" cy="12" r="10" {...s} /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" {...s} /></svg>,
    '05': <svg viewBox="0 0 24 24" width="20" height="20"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" {...s} /></svg>,
    '06': <svg viewBox="0 0 24 24" width="20" height="20"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" {...s} /><line x1="16" y1="2" x2="16" y2="6" {...s} /><line x1="8" y1="2" x2="8" y2="6" {...s} /><line x1="3" y1="10" x2="21" y2="10" {...s} /></svg>,
    '07': <svg viewBox="0 0 24 24" width="20" height="20"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" {...s} /><circle cx="9" cy="7" r="4" {...s} /><path d="M23 21v-2a4 4 0 00-3-3.87" {...s} /><path d="M16 3.13a4 4 0 010 7.75" {...s} /></svg>,
    '08': <svg viewBox="0 0 24 24" width="20" height="20"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" {...s} /><path d="M13.73 21a2 2 0 01-3.46 0" {...s} /></svg>,
    '09': <svg viewBox="0 0 24 24" width="20" height="20"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" {...s} /></svg>,
    '10': <svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 2a10 10 0 00-6.88 17.23" {...s} /><path d="M12 2a10 10 0 016.88 17.23" {...s} /><line x1="12" y1="12" x2="12" y2="8" {...s} /><circle cx="12" cy="12" r="1" fill="var(--accent)" /></svg>,
    '11': <svg viewBox="0 0 24 24" width="20" height="20"><rect x="4" y="4" width="16" height="16" rx="2" ry="2" {...s} /><rect x="9" y="9" width="6" height="6" {...s} /><line x1="9" y1="1" x2="9" y2="4" {...s} /><line x1="15" y1="1" x2="15" y2="4" {...s} /><line x1="9" y1="20" x2="9" y2="23" {...s} /><line x1="15" y1="20" x2="15" y2="23" {...s} /><line x1="20" y1="9" x2="23" y2="9" {...s} /><line x1="20" y1="14" x2="23" y2="14" {...s} /><line x1="1" y1="9" x2="4" y2="9" {...s} /><line x1="1" y1="14" x2="4" y2="14" {...s} /></svg>,
  };
  return <span className="flex-shrink-0">{icons[id]}</span>;
};

/* ─── GLOW WRAPPER ─── */
const GlowCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`relative ${className}`}>
    <div
      className="absolute -inset-4 rounded-2xl opacity-[0.12] blur-2xl pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at center, var(--accent), transparent 70%)' }}
    />
    <div className="relative">{children}</div>
  </div>
);

/* ─── WINDOW FRAME (macOS chrome) ─── */
const WindowFrame: React.FC<{ title: string; children: React.ReactNode; accent?: boolean }> = ({ title, children, accent }) => (
  <div
    className="rounded-lg overflow-hidden border"
    style={{ borderColor: accent ? 'var(--accent)' : 'var(--border)', backgroundColor: 'var(--bg-panel)' }}
  >
    <div className="flex items-center gap-2 px-4 py-2.5 border-b" style={{ borderColor: 'var(--border)' }}>
      <div className="flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#ff5f57' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#febc2e' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#28c840' }} />
      </div>
      <div
        className="flex-1 mx-3 px-3 py-1 rounded-md text-[9px] uppercase tracking-widest text-center truncate"
        style={{ backgroundColor: 'var(--bg-base)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}
      >
        {title}
      </div>
    </div>
    <div className="p-4 md:p-5">{children}</div>
  </div>
);

/* ─── FLOW DIAGRAM (CSS-only, replaces SVG architecture) ─── */
const FlowConnector: React.FC = () => (
  <div className="flex justify-center py-3">
    <div className="flex flex-col items-center gap-1">
      {[0, 0.3, 0.6].map((d) => (
        <motion.div
          key={d}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: d }}
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: 'var(--accent)' }}
        />
      ))}
    </div>
  </div>
);

const FlowDiagram: React.FC = () => (
  <div className="py-4">
    {/* Tier 1 — Input */}
    <div className="flex justify-center">
      <div className="border-2 rounded-md px-6 sm:px-8 py-3 sm:py-4 text-center" style={{ borderColor: 'var(--accent)', backgroundColor: 'var(--bg-panel)' }}>
        <div className="text-xs uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>Your Business</div>
        <div className="text-[8px] uppercase tracking-widest mt-1" style={{ color: 'var(--text-muted)' }}>Data &bull; Tools &bull; Workflows</div>
      </div>
    </div>

    <FlowConnector />

    {/* Tier 2 — Processing */}
    <div className="flex justify-center gap-2 sm:gap-3 flex-wrap px-2">
      {[
        { label: 'Obsidian Vault', sub: 'Knowledge Base', primary: false },
        { label: 'Claude Code', sub: 'AI Engine', primary: true },
        { label: 'Dedicated VPS', sub: '24/7 Runtime', primary: false },
      ].map((node) => (
        <div
          key={node.label}
          className="border rounded-md px-3 sm:px-5 py-2.5 sm:py-3 text-center flex-1 min-w-[100px] max-w-[180px]"
          style={{ borderColor: node.primary ? 'var(--accent)' : 'var(--border)', backgroundColor: 'var(--bg-panel)' }}
        >
          <div className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold" style={{ color: node.primary ? 'var(--accent)' : 'var(--text-primary)' }}>
            {node.label}
          </div>
          <div className="text-[7px] sm:text-[8px] uppercase tracking-widest mt-0.5" style={{ color: 'var(--text-muted)' }}>
            {node.sub}
          </div>
        </div>
      ))}
    </div>

    <FlowConnector />

    {/* Tier 3 — Outputs */}
    <div className="flex justify-center gap-1.5 sm:gap-2 flex-wrap px-2">
      {['Telegram Bot', 'Slack', 'AI Ops', 'Dashboards', 'Reports'].map((label) => (
        <div key={label} className="border rounded-md px-3 sm:px-4 py-2 text-center" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-panel)' }}>
          <div className="text-[8px] sm:text-[9px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{label}</div>
        </div>
      ))}
    </div>
  </div>
);


/* ─── DASHBOARD MOCKUP ─── */
const DashboardMockup: React.FC = () => (
  <GlowCard>
    <WindowFrame title="ops.yourbusiness.com/dashboard" accent>
      {/* Metric cards */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {[
          { label: 'Revenue', val: '$142K', color: 'var(--success)' },
          { label: 'Pipeline', val: '34', color: 'var(--accent)' },
          { label: 'Close Rate', val: '28%', color: 'var(--text-primary)' },
        ].map((m) => (
          <div key={m.label} className="border rounded-md p-2 sm:p-3 text-center" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-base)' }}>
            <div className="text-[7px] sm:text-[8px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{m.label}</div>
            <div className="text-base sm:text-xl font-black mt-0.5" style={{ color: m.color }}>{m.val}</div>
          </div>
        ))}
      </div>

      {/* Animated bar chart */}
      <div className="border rounded-md p-2 sm:p-3 mt-3" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-base)' }}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[7px] sm:text-[8px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Monthly Revenue</span>
          <span className="text-[7px] sm:text-[8px] uppercase tracking-widest font-bold" style={{ color: 'var(--success)' }}>+18%</span>
        </div>
        <div className="flex items-end gap-[3px] h-12 sm:h-16">
          {[35, 42, 38, 55, 48, 62, 58, 71, 65, 78, 72, 88].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4, ease: 'easeOut' }}
              className="flex-1 rounded-sm"
              style={{ backgroundColor: i >= 10 ? 'var(--accent)' : 'var(--border)', opacity: i < 6 ? 0.4 : i < 10 ? 0.7 : 1 }}
            />
          ))}
        </div>
      </div>

      {/* Status rows */}
      <div className="space-y-1.5 mt-3">
        {[
          { name: 'Sales Pipeline', status: 'ON TRACK', color: 'var(--success)' },
          { name: 'Content Queue', status: 'AHEAD', color: 'var(--accent)' },
          { name: 'Client Onboard', status: 'AT RISK', color: '#febc2e' },
        ].map((r) => (
          <div key={r.name} className="flex items-center justify-between px-2 sm:px-3 py-1.5 sm:py-2 border rounded-md"
            style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-base)' }}>
            <span className="text-[8px] sm:text-[9px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{r.name}</span>
            <span className="flex items-center gap-1.5 text-[8px] sm:text-[9px] uppercase tracking-widest font-bold" style={{ color: r.color }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: r.color }} />
              {r.status}
            </span>
          </div>
        ))}
      </div>
    </WindowFrame>
  </GlowCard>
);


/* ─── TERMINAL MOCKUP ─── */
const TerminalMockup: React.FC = () => (
  <GlowCard>
    <WindowFrame title="Telegram — AI Operator">
      <div className="space-y-4 text-xs sm:text-sm font-mono" style={{ color: 'var(--text-secondary)' }}>
        <div>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>you &rarr;</span>
          <span className="ml-2" style={{ color: 'var(--text-primary)' }}>What's my pipeline looking like this week?</span>
        </div>
        <div className="border-l-2 pl-3" style={{ borderColor: 'var(--accent)' }}>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-widest" style={{ color: 'var(--accent)' }}>operator &rarr;</span>
          <span className="block mt-1 leading-relaxed">
            34 active deals. 8 closing this week ($47K). 3 flagged stale — nudges sent automatically.
            Sarah hasn't responded in 6 days, escalated to your queue.
          </span>
        </div>
        <div>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>you &rarr;</span>
          <span className="ml-2" style={{ color: 'var(--text-primary)' }}>Draft the follow-up for Sarah</span>
        </div>
        <div className="border-l-2 pl-3" style={{ borderColor: 'var(--accent)' }}>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-widest" style={{ color: 'var(--accent)' }}>operator &rarr;</span>
          <span className="block mt-1">Done. Queued in your outbox. Sent when you approve.</span>
        </div>
        <div className="flex items-center gap-2 pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--success)' }} />
          <span className="text-[8px] sm:text-[9px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
            Voice + Text &bull; 24/7 &bull; Persistent Memory
          </span>
        </div>
      </div>
    </WindowFrame>
  </GlowCard>
);


/* ─── DATA ─── */
const systems = [
  { num: '01', name: 'KPI Reporting Dashboard', setup: '$3,000', kills: 'Manual reporting. Live metrics from your platforms — ad spend, revenue, conversion, pipeline. Green/yellow/red thresholds. Auto-updates daily.' },
  { num: '02', name: 'Monthly Business Intelligence Report', setup: '$2,000', kills: 'Report writing. Multi-source narrative pulling from your actual tools. MoM comparison. Auto-generated and delivered — no analyst needed.' },
  { num: '03', name: 'Performance Analytics Engine', setup: '$1,500', kills: 'Guessing what works. Tracks performance across channels, campaigns, team members, time periods. Surfaces winners and losers weekly.' },
  { num: '04', name: 'Market Intelligence Feed', setup: '$2,000', kills: 'Missing what moves. Industry trends, competitor shifts, emerging opportunities in your niche. Delivered weekly to your inbox or chat.' },
  { num: '05', name: 'Client Communication Automation', setup: '$2,500', kills: 'Manual onboarding. Auto-setup channels, collect access, schedule kickoff. Client messages become tasks. Nothing falls through.' },
  { num: '06', name: 'AI Executive Assistant', setup: '$3,000', kills: 'Calendar chaos. Meeting notes become action items. Optimized daily schedule. Client comm drafting. Your second brain with memory.' },
  { num: '07', name: 'Team Performance Tracking', setup: '$1,500', kills: 'Guessing who delivers. Deadlines met, output volume, quality scores, response times. Weekly + monthly scorecards per person.' },
  { num: '08', name: 'Task Accountability System', setup: '$1,500', kills: 'Chasing your own people. Auto-reminders for due dates, follow-ups, stalled tasks. Nudges before things slip — not after.' },
  { num: '09', name: 'Lead Pipeline Engine', setup: '$2,000', kills: 'Manual prospecting. Scrapes and scores leads from your target channels. Filters by qualification criteria. Delivers warm lists weekly.' },
  { num: '10', name: 'Capacity & Resource Tracker', setup: '$2,500', kills: 'Blind spots on bandwidth. Deliverables per team member, capacity by week, bottleneck forecasting, hiring trigger alerts.' },
  { num: '11', name: 'Operations Intelligence Agent', setup: '$3,000', kills: 'No one watching the whole picture. Ingests all system data. Surfaces bottlenecks, underperformers, process gaps. Weekly strategic brief.' },
];

const faqs = [
  { q: 'Is this a SaaS product?', a: 'No. Every system is custom-built for your business. Your data, your vault, your server. Nothing is shared with other clients. You own everything delivered.' },
  { q: 'Do I need technical skills to use this?', a: 'No. You interact through Telegram voice notes, Slack messages, and dashboards. The infrastructure runs silently. You talk to it like a team member.' },
  { q: 'What if I only need 2-3 systems?', a: 'Start with Foundation + whichever system hurts most. Add more when ready. Each system is independently scoped and quoted. No pressure to buy the full stack.' },
  { q: 'How long does each system take to build?', a: 'Foundation + first system: 7-14 days. Each additional system: 5-10 days depending on complexity. You review and approve before anything goes live.' },
  { q: 'What happens if something breaks?', a: 'Your monthly retainer covers monitoring, bug fixes, API updates, and 2 hours of modifications per active system. On-call troubleshooting included. No surprise charges.' },
  { q: 'Can I cancel?', a: '60-day exit clause after Month 3. You keep everything delivered. All systems, data, vault content, and code transfer to you on delivery.' },
  { q: 'What industries does this work for?', a: 'Any business with clients, a team, and operations to manage. Agencies, consultancies, service businesses, e-commerce operators, real estate teams, law firms. The infrastructure adapts to your tools and workflows.' },
  { q: 'How is this different from hiring a developer?', a: 'A developer builds what you spec. This is an AI systems architect who understands business operations, builds the intelligence layer, and manages it ongoing. You get the system AND the operator.' },
];


const SystemPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showAllSystems, setShowAllSystems] = useState(false);

  return (
    <main className="pt-12">

      {/* ═══════════════════════════════════════════════
          SECTION 1: HERO
          ═══════════════════════════════════════════════ */}
      <section className="min-h-screen relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24 lg:py-32 relative z-10">
          <div className="grid grid-cols-12 gap-4 md:gap-6">

            <div className="hidden lg:flex col-span-1 items-center justify-center">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
                className="sidebar-text text-[10px] uppercase tracking-[0.3em] font-bold" style={{ color: 'var(--text-muted)' }}>
                AI Operations
              </motion.div>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-3 border px-4 py-2 mb-10"
                style={{ borderColor: 'var(--accent)', backgroundColor: 'var(--bg-panel)' }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent)' }} />
                <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>
                  Custom-Built AI Infrastructure — Not a SaaS
                </span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="relative mb-8">
                <div className="absolute -left-4 top-0 bottom-0 w-1" style={{ backgroundColor: 'var(--accent)' }} />
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-[0.9]" style={{ color: 'var(--text-primary)' }}>
                  Your Business Runs<br />On Manual Labor.<br />
                  <span style={{ color: 'var(--accent)' }}>Mine Runs On AI.</span>
                </h1>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
                className="relative border p-6 mb-8 bracket-tl bracket-br"
                style={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--border)' }}>
                <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  11 AI systems that replace the manual operations dragging your business down.
                  Dashboards that update themselves. Reports that write themselves. Teams that get nudged before deadlines slip.
                </p>
                <p className="text-base md:text-lg leading-relaxed mt-3 font-bold" style={{ color: 'var(--text-primary)' }}>
                  Built on your data. Running on your server. Owned entirely by you.
                  The more you activate, the less you touch.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4">
                <a href="#systems" className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all hover:translate-y-[-2px]"
                  style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
                  See The Systems <span style={{ opacity: 0.7 }}>&rarr;</span>
                </a>
                <a href="#stack" className="inline-flex items-center justify-center gap-3 px-8 py-4 border font-bold uppercase tracking-wider text-sm transition-all"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
                  How It Works
                </a>
              </motion.div>
            </div>

            {/* Hero right — Dashboard mockup with glow */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
              className="col-span-12 lg:col-span-4 mt-8 lg:mt-0">
              <DashboardMockup />
            </motion.div>

          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════
          SECTION 2: THE STACK
          ═══════════════════════════════════════════════ */}
      <section id="stack" className="py-12 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Section</span>
              <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--accent)' }}>01</span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight" style={{ color: 'var(--text-primary)' }}>The Stack</h2>
            <p className="mt-2 text-sm uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>What lives under every system you activate</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Architecture flow diagram */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="border rounded-lg p-6" style={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--border)' }}>
              <div className="text-[10px] uppercase tracking-widest font-bold mb-2" style={{ color: 'var(--accent)' }}>Architecture</div>
              <FlowDiagram />
            </motion.div>

            {/* Terminal mockup with glow */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <TerminalMockup />
            </motion.div>
          </div>

          {/* Three pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {[
              { id: 'CUSTOM', title: 'Built For You', desc: 'Not a SaaS. Not a template. Every system is architected around your business — your clients, your team, your workflows. Obsidian vault + Claude Code + dedicated VPS. You own everything.' },
              { id: 'STACKING', title: 'Stacking Retainer', desc: 'Start with one system. Add more when ready. Each active system adds $500/mo to your retainer. I manage all of it — hosting, monitoring, updates, troubleshooting. The more you activate, the less you touch.' },
              { id: 'OPERATOR', title: 'You Get An Operator', desc: 'This is not a build-and-bounce engagement. I run the infrastructure. Telegram bot for voice queries. Slack integration for team nudges. Morning briefings. Bug fixes. API updates. A systems architect on retainer.' },
            ].map((pillar, i) => (
              <motion.div key={pillar.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }} className="border rounded-lg p-6"
                style={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--border)' }}>
                <div className="text-[10px] uppercase tracking-widest font-bold mb-4" style={{ color: 'var(--accent)' }}>{pillar.id}</div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-3" style={{ color: 'var(--text-primary)' }}>{pillar.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════
          SECTION 3: THE 11 SYSTEMS
          ═══════════════════════════════════════════════ */}
      <section id="systems" className="py-12 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Section</span>
              <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--accent)' }}>02</span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight" style={{ color: 'var(--text-primary)' }}>The 11 Systems</h2>
            <p className="mt-2 text-sm uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Each one eliminates a manual process. Stack them.</p>
          </motion.div>

          <div className="space-y-2">
            {(showAllSystems ? systems : systems.slice(0, 4)).map((sys, i) => (
              <motion.div key={sys.num} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="border p-4 md:p-6 grid grid-cols-12 gap-2 md:gap-4 items-center hover:translate-x-1 transition-transform"
                style={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--border)' }}>
                <div className="col-span-2 md:col-span-1 flex items-center gap-2">
                  <SystemIcon id={sys.num} />
                </div>
                <div className="col-span-1 hidden md:block">
                  <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>{sys.num}</span>
                </div>
                <div className="col-span-10 md:col-span-4">
                  <h3 className="text-sm md:text-base font-black uppercase tracking-tight" style={{ color: 'var(--text-primary)' }}>{sys.name}</h3>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{sys.kills}</p>
                </div>
                <div className="hidden md:block col-span-2 text-right">
                  <span className="text-sm font-black" style={{ color: 'var(--text-primary)' }}>{sys.setup}</span>
                  <div className="text-[9px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>setup</div>
                </div>
              </motion.div>
            ))}
          </div>

          {!showAllSystems && (
            <button
              onClick={() => setShowAllSystems(true)}
              className="mt-4 w-full border py-4 text-center font-bold uppercase tracking-wider text-sm transition-all hover:translate-y-[-1px]"
              style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', backgroundColor: 'var(--bg-panel)' }}
            >
              View All 11 Systems <span className="ml-1" style={{ color: 'var(--accent)' }}>+7 more</span>
            </button>
          )}

          {showAllSystems && (
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="mt-4 border-t pt-4 flex items-center justify-between" style={{ borderColor: 'var(--accent)' }}>
              <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Full stack buildout</span>
              <div className="text-right">
                <span className="text-2xl font-black" style={{ color: 'var(--accent)' }}>$24,500</span>
                <span className="text-sm ml-2" style={{ color: 'var(--text-muted)' }}>+ $3,000 foundation</span>
              </div>
            </motion.div>
          )}
        </div>
      </section>


      {/* ═══════════════════════════════════════════════
          SECTION 4: WHAT CHANGES
          ═══════════════════════════════════════════════ */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <h2 className="text-[10px] uppercase tracking-widest mb-6 text-center font-bold" style={{ color: 'var(--accent)' }}>What Changes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { metric: '7-14', unit: 'Days', desc: 'Foundation + first system delivered and operational' },
                { metric: '10-15', unit: 'Hrs/Week', desc: 'Manual operations eliminated per active system' },
                { metric: '100%', unit: 'Ownership', desc: 'All code, data, vault content, and infrastructure is yours' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }} className="border rounded-lg p-6 text-center"
                  style={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--border)' }}>
                  <div className="text-3xl font-black" style={{ color: 'var(--accent)' }}>{item.metric}</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold mt-1" style={{ color: 'var(--text-primary)' }}>{item.unit}</div>
                  <p className="text-xs mt-3" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════
          SECTION 5: THE BUILDER
          ═══════════════════════════════════════════════ */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Section</span>
              <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--accent)' }}>03</span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight" style={{ color: 'var(--text-primary)' }}>The Builder</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Credentials card */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="lg:col-span-4 border rounded-lg overflow-hidden" style={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--border)' }}>
              <div className="aspect-square overflow-hidden">
                <img
                  src="/victor-romo.webp"
                  alt="Victor Valentine Romo — AI Systems Architect"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
              <div className="border-b pb-4 mb-4" style={{ borderColor: 'var(--border)' }}>
                <div className="text-2xl font-black uppercase tracking-tight" style={{ color: 'var(--text-primary)' }}>Victor Valentine Romo</div>
                <div className="text-[10px] uppercase tracking-widest mt-1" style={{ color: 'var(--accent)' }}>@b2bvic</div>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Years Building', value: '13' },
                  { label: 'Clients Served', value: '198+' },
                  { label: 'Industries', value: '14' },
                  { label: 'Stack', value: 'Claude Code + Obsidian' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
                    <div className="text-lg font-black" style={{ color: 'var(--text-primary)' }}>{stat.value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--success)' }} />
                  <span className="text-sm font-black" style={{ color: 'var(--success)' }}>LIVE</span>
                </div>
                <div className="text-[10px] uppercase tracking-widest mt-1" style={{ color: 'var(--text-muted)' }}>Running 24/7 on my own work</div>
              </div>
              </div>
            </motion.div>

            {/* Narrative */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="lg:col-span-8">
              <div className="space-y-6 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <p>
                  I didn't start by selling AI systems. I started by needing one.
                  198 clients across SEO, real estate, e-commerce, and SaaS — all managed with notes scattered across apps,
                  context lost between sessions, and every morning starting from scratch.
                </p>
                <p style={{ color: 'var(--text-primary)' }}>
                  So I built what I couldn't buy. An Obsidian vault with persistent AI memory. Claude Code running 24/7 on a dedicated VPS.
                  Telegram bots for voice queries. Dashboards that compile themselves. A system that remembers every client, every conversation,
                  every decision — and surfaces the right context automatically.
                </p>
                <p>
                  It runs my own operations daily. Morning briefings, team nudges, pipeline tracking, content production.
                  I'm not pitching theory. I'm offering to build the exact infrastructure I use — customized for your business.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {['SEO', 'Real Estate', 'E-Commerce', 'SaaS', 'Agencies', 'Consulting', 'Legal', 'Healthcare'].map((tag) => (
                  <span key={tag} className="px-3 py-1 border rounded-md text-[9px] uppercase tracking-widest font-bold"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════
          SECTION 6: PRICING
          ═══════════════════════════════════════════════ */}
      <section id="pricing" className="py-12 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Section</span>
              <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--accent)' }}>04</span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight" style={{ color: 'var(--text-primary)' }}>Start Here</h2>
            <p className="mt-2 text-sm uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Foundation required &bull; Systems stack on top &bull; Monthly grows with you</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Tier 1 — Entry */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="relative border rounded-lg transition-all hover:translate-y-[-2px]"
              style={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--border)' }}>
              <div className="border-b px-6 py-4 flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
                <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>Entry</span>
                <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Foundation + System 1</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2" style={{ color: 'var(--text-primary)' }}>Get Operational</h3>
                <div className="mb-6">
                  <span className="text-4xl font-black" style={{ color: 'var(--text-primary)' }}>$6,000</span>
                  <span className="text-[10px] uppercase tracking-widest ml-2" style={{ color: 'var(--text-muted)' }}>one-time setup</span>
                </div>
                <div className="mb-4 text-sm font-bold" style={{ color: 'var(--accent)' }}>+ $1,500/mo retainer</div>
                <ul className="space-y-3 mb-8">
                  {['Obsidian + Claude Code vault (custom for your business)', 'Dedicated VPS — 24/7 AI operator', 'Telegram bot (voice dumps, briefings, queries)',
                    'Slack bot (team nudges, notifications)', 'Your first system (you pick which one)', 'Full ownership of everything delivered'].map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--success)' }}>+</span>{f}
                    </li>
                  ))}
                </ul>
                <a href="https://linkedin.com/in/b2bvic" target="_blank" rel="noopener noreferrer"
                  className="block w-full py-4 text-center font-bold uppercase tracking-wider text-sm transition-all hover:translate-y-[-1px] rounded-md"
                  style={{ backgroundColor: 'var(--border)', color: 'var(--text-primary)' }}>DM to Start</a>
              </div>
              <div className="border-t px-6 py-3" style={{ borderColor: 'var(--border)' }}>
                <div className="barcode w-full" style={{ color: 'var(--accent)' }} />
              </div>
            </motion.div>

            {/* Tier 2 — Aggressive */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="relative border rounded-lg transition-all hover:translate-y-[-2px] lg:scale-105 z-10"
              style={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--accent)' }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="text-white text-[10px] uppercase tracking-widest font-bold px-4 py-1 rounded-sm" style={{ backgroundColor: 'var(--accent)' }}>Most Choose This</span>
              </div>
              <div className="border-b px-6 py-4 flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
                <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>Aggressive</span>
                <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Foundation + Systems 1-3</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2" style={{ color: 'var(--text-primary)' }}>Full Reporting Stack</h3>
                <div className="mb-6">
                  <span className="text-4xl font-black" style={{ color: 'var(--accent)' }}>$9,500</span>
                  <span className="text-[10px] uppercase tracking-widest ml-2" style={{ color: 'var(--text-muted)' }}>one-time setup</span>
                </div>
                <div className="mb-4 text-sm font-bold" style={{ color: 'var(--accent)' }}>+ $2,500/mo retainer</div>
                <ul className="space-y-3 mb-8">
                  {['Everything in Entry', 'KPI Reporting Dashboard', 'Monthly Business Intelligence Report', 'Performance Analytics Engine',
                    'Three systems managed from day one', '+$500/mo per additional system activated'].map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--accent)' }}>+</span>{f}
                    </li>
                  ))}
                </ul>
                <a href="https://linkedin.com/in/b2bvic" target="_blank" rel="noopener noreferrer"
                  className="block w-full py-4 text-center font-bold uppercase tracking-wider text-sm transition-all hover:translate-y-[-1px] rounded-md"
                  style={{ backgroundColor: 'var(--accent)', color: 'white' }}>DM to Start</a>
              </div>
              <div className="border-t px-6 py-3" style={{ borderColor: 'var(--border)' }}>
                <div className="barcode w-full" style={{ color: 'var(--accent)' }} />
              </div>
            </motion.div>
          </div>

          {/* Retainer math */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="mt-8 border rounded-lg p-6" style={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--border)' }}>
            <div className="text-[10px] uppercase tracking-widest mb-3 font-bold" style={{ color: 'var(--accent)' }}>Retainer Math</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[{ sys: '1 system', mo: '$1,500/mo' }, { sys: '3 systems', mo: '$2,500/mo' }, { sys: '6 systems', mo: '$4,000/mo' }, { sys: '11 systems', mo: '$7,000/mo' }].map((tier) => (
                <div key={tier.sys}>
                  <div className="text-lg font-black" style={{ color: 'var(--text-primary)' }}>{tier.mo}</div>
                  <div className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{tier.sys}</div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs" style={{ color: 'var(--text-muted)' }}>
              Includes: VPS hosting, AI compute, monitoring, bug fixes, API updates, 2 hrs/mo modifications per active system, on-call troubleshooting.
            </p>
          </motion.div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════
          SECTION 7: FAQ
          ═══════════════════════════════════════════════ */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Section</span>
              <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--accent)' }}>05</span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight" style={{ color: 'var(--text-primary)' }}>Questions</h2>
          </motion.div>

          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.05 }} className="border rounded-lg"
                style={{ borderColor: openFaq === i ? 'var(--accent)' : 'var(--border)', backgroundColor: 'var(--bg-panel)' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between">
                  <span className="text-sm font-bold uppercase tracking-tight" style={{ color: 'var(--text-primary)' }}>{i + 1}. {faq.q}</span>
                  <span className="text-lg ml-4 flex-shrink-0" style={{ color: 'var(--accent)' }}>{openFaq === i ? '\u2212' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════
          SECTION 8: FINAL CTA
          ═══════════════════════════════════════════════ */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight mb-6" style={{ color: 'var(--text-primary)' }}>
              Stop Managing.<br /><span style={{ color: 'var(--accent)' }}>Start Operating.</span>
            </h2>
            <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
              DM on LinkedIn or X. Describe your operations. I'll tell you which system to start with.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://linkedin.com/in/b2bvic" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all hover:translate-y-[-2px] rounded-md"
                style={{ backgroundColor: 'var(--accent)', color: 'white' }}>DM on LinkedIn</a>
              <a href="https://x.com/b2bvic" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border rounded-md font-bold uppercase tracking-wider text-sm transition-all"
                style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>DM on X</a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default SystemPage;
