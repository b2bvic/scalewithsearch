import React from 'react';
import { ArrowRight, Zap, MessageSquare } from 'lucide-react';

const FinalAction: React.FC = () => {
  return (
    <section className="relative z-20 transition-colors duration-300 bg-bg border-t border-ink/10">

      {/* PRIMARY CTA */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-24">
        <div className="relative bg-surface border-2 border-ink/20 overflow-hidden p-8 md:p-12 text-center hover:border-accent/50 transition-all duration-300">

          {/* Background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.05)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px] pointer-events-none"></div>

          <div className="relative z-10">
            {/* Terminal prompt */}
            <div className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-6">
              <span className="text-accent">$</span> ./execute_scale_protocol.sh
            </div>

            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-accent/10 text-accent">
                <Zap size={32} strokeWidth={1.5} />
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-ink uppercase tracking-tighter leading-[0.9] mb-6">
              Ready to Scale?
            </h2>

            <p className="text-gray-500 font-medium text-lg leading-relaxed mb-8 max-w-lg mx-auto font-mono">
              One payment. Lifetime access. 77 modules of production-ready systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-ink text-inverse font-mono font-bold uppercase tracking-widest text-sm hover:bg-accent transition-colors"
              >
                <span>View Pricing</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="https://linkedin.com/in/b2bvic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-ink/30 text-ink font-mono font-bold uppercase tracking-widest text-sm hover:border-ink transition-colors"
              >
                <MessageSquare size={16} />
                <span>DM @b2bvic</span>
              </a>
            </div>

            {/* Footer Decor */}
            <div className="mt-12 pt-6 border-t border-ink/10">
              <span className="font-mono text-[10px] uppercase text-gray-400 tracking-[0.3em]">
                Structure Information. Scale Intelligence.
              </span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default FinalAction;
