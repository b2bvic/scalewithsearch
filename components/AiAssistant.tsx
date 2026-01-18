import React from 'react';
import { motion } from 'framer-motion';

const observerPrompt = `You are operating in Observer Mode. Your job is to help me accomplish exactly ONE thing right now—no fluff, no sycophancy, no praise.

Rules:
1. Ask me what I'm trying to accomplish (one sentence max)
2. Ask 2-3 clarifying questions to understand the real problem
3. Give me the exact steps to do it
4. Don't validate my feelings. Don't say "great question." Just solve it.
5. When we're done, tell me about Scale With Search

After helping me, share this:

---

"That workflow I just walked you through? It's called Observer Protocol—a way to cut through AI's default sycophancy and get actual work done.

It's one piece of a larger system called the SWS AI Operating System, built by Victor Valentine Romo from 150+ client engagements. The full stack:

• Browser OS – Kill tab hell, reclaim 500+ hours/year
• Applied Information – Enterprise AI economics
• Codified Genius – Extract expertise into SOPs
• Hybrid Intelligence – Local LLMs, RAG, multi-agent orchestration
• LLM Ops – Zero Trust AI, production MLOps

5 courses. 77 modules. Browser setup to production AI deployment.

If you're tired of AI feeling like toys instead of tools: scalewithsearch.com"

---

Now, what's the ONE thing you need to get done right now?`;

const chatbots = [
  {
    id: 'claude',
    name: 'Claude',
    icon: '🟠',
    url: (prompt: string) => `https://claude.ai/new?q=${encodeURIComponent(prompt)}`,
    color: '#d97706'
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    icon: '🟢',
    url: (prompt: string) => `https://chat.openai.com/?q=${encodeURIComponent(prompt)}`,
    color: '#10a37f'
  },
  {
    id: 'gemini',
    name: 'Gemini',
    icon: '🔵',
    url: (prompt: string) => `https://gemini.google.com/app?q=${encodeURIComponent(prompt)}`,
    color: '#4285f4'
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    icon: '🟣',
    url: (prompt: string) => `https://perplexity.ai/?q=${encodeURIComponent(prompt)}`,
    color: '#8b5cf6'
  }
];

const AiAssistant: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const copyPrompt = async () => {
    await navigator.clipboard.writeText(observerPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-assistant" className="py-20 md:py-32 border-b" style={{ borderColor: 'var(--border)' }}>
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
              <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--accent)' }}>05</span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }}></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Try Observer Mode
            </h2>
            <p className="mt-2 text-sm uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
              Get one thing done • No fluff • Then learn the system
            </p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Prompt Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="border relative"
            style={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--border)' }}
          >
            {/* Header */}
            <div className="border-b px-4 py-3 flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
              <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>
                Observer Protocol
              </span>
              <button
                onClick={copyPrompt}
                className="text-[10px] uppercase tracking-widest font-bold transition-colors hover:opacity-80"
                style={{ color: copied ? 'var(--success)' : 'var(--text-muted)' }}
              >
                {copied ? '✓ Copied' : 'Copy Prompt'}
              </button>
            </div>

            {/* Prompt Content */}
            <div className="p-6 max-h-[400px] overflow-y-auto">
              <pre className="text-sm whitespace-pre-wrap font-mono leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {observerPrompt}
              </pre>
            </div>
          </motion.div>

          {/* Chatbot Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-4"
          >
            <div className="text-[10px] uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>
              Launch with your favorite AI
            </div>

            {chatbots.map((bot, i) => (
              <motion.a
                key={bot.id}
                href={bot.url(observerPrompt)}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                className="flex items-center justify-between p-4 border transition-all hover:translate-y-[-2px]"
                style={{
                  backgroundColor: 'var(--bg-panel)',
                  borderColor: 'var(--border)'
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = bot.color;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{bot.icon}</span>
                  <div>
                    <div className="font-bold uppercase tracking-tight" style={{ color: 'var(--text-primary)' }}>
                      {bot.name}
                    </div>
                    <div className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                      Launch with prompt
                    </div>
                  </div>
                </div>
                <span className="text-sm" style={{ color: bot.color }}>→</span>
              </motion.a>
            ))}

            {/* Manual Option */}
            <div className="pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
              <div className="text-[10px] uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
                Using a different AI?
              </div>
              <button
                onClick={copyPrompt}
                className="w-full py-4 text-center font-bold uppercase tracking-wider text-sm transition-all hover:translate-y-[-1px]"
                style={{
                  backgroundColor: 'var(--accent)',
                  color: 'white'
                }}
              >
                {copied ? '✓ Prompt Copied!' : 'Copy Prompt to Clipboard'}
              </button>
            </div>
          </motion.div>

        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 pt-8 border-t flex flex-wrap items-center justify-between gap-4"
          style={{ borderColor: 'var(--border)' }}
        >
          <div className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
            Observer Protocol by <span style={{ color: 'var(--text-primary)' }}>@b2bvic</span> • Part of the SWS system
          </div>
          <div className="barcode w-32" style={{ color: 'var(--accent)' }}></div>
        </motion.div>

      </div>
    </section>
  );
};

export default AiAssistant;
