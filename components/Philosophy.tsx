import React, { useState } from 'react';
import { PRINCIPLES, TESTIMONIALS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Radio, Hash, CornerDownRight, Quote, ShieldCheck, ChevronRight } from 'lucide-react';

const Philosophy: React.FC = () => {
  const [activePrinciple, setActivePrinciple] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 md:px-8 bg-bg border-b border-ink/10 relative overflow-hidden transition-colors duration-300 scroll-mt-24" id="philosophy">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ink/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <Cpu size={16} className="text-accent" />
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-500">Core_Operating_System</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-ink uppercase tracking-tighter leading-none">
                   System<br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink to-gray-400">Kernel</span>
                </h2>
            </div>
            <div className="max-w-md text-left md:text-right">
                <p className="font-mono text-xs md:text-sm text-gray-500 leading-relaxed border-l-2 md:border-l-0 md:border-r-2 border-accent pl-4 md:pl-0 md:pr-4">
                  <span className="font-bold text-ink">AXIOMS & SIGNALS.</span><br/>
                  The fundamental ruleset driving decision making (Principles) and the verified output signatures (Reputation).
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* COLUMN 1: DIRECTIVE MATRIX (Principles) */}
            <div className="lg:col-span-7 space-y-8">
                <div className="flex items-center justify-between border-b border-ink/10 pb-4">
                    <h3 className="font-bold text-lg uppercase text-ink flex items-center gap-2">
                        <Hash size={18} className="text-brand-blue" /> Directive Matrix
                    </h3>
                    <div className="font-mono text-[10px] text-gray-400 uppercase">
                        {PRINCIPLES.length} Active Rules
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {PRINCIPLES.map((principle) => (
                        <motion.div 
                            key={principle.id}
                            layoutId={`p-${principle.id}`}
                            onClick={() => setActivePrinciple(activePrinciple === principle.id ? null : principle.id)}
                            className={`
                                group cursor-pointer relative overflow-hidden border transition-all duration-300
                                ${activePrinciple === principle.id 
                                    ? 'bg-ink text-inverse border-ink shadow-lg col-span-1 md:col-span-2' 
                                    : 'bg-surface border-ink/10 hover:border-brand-blue/50 hover:bg-subtle'
                                }
                            `}
                        >
                            <div className="p-5 relative z-10">
                                <div className="flex justify-between items-start mb-2">
                                    <span className={`font-mono text-xs font-bold uppercase ${activePrinciple === principle.id ? 'text-accent' : 'text-gray-400 group-hover:text-brand-blue'}`}>
                                        AXIOM_{String(principle.id).padStart(2, '0')}
                                    </span>
                                    <ChevronRight size={14} className={`transition-transform duration-300 ${activePrinciple === principle.id ? 'rotate-90 text-inverse' : 'text-gray-300'}`} />
                                </div>
                                <h4 className={`font-bold text-sm md:text-base uppercase tracking-tight leading-tight ${activePrinciple === principle.id ? 'text-inverse mb-4 text-xl' : 'text-ink'}`}>
                                    {principle.title}
                                </h4>
                                
                                <AnimatePresence>
                                    {activePrinciple === principle.id && (
                                        <motion.div 
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="font-mono text-sm text-gray-300 leading-relaxed border-t border-white/20 pt-4">
                                                <CornerDownRight size={14} className="inline mr-2 text-accent" />
                                                {principle.description}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Hover Tech Decor */}
                            <div className={`absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}>
                                <div className="w-2 h-2 border-t border-r border-current text-brand-blue"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* COLUMN 2: SIGNAL STREAM (Testimonials) */}
            <div className="lg:col-span-5 sticky top-24">
                <div className="flex items-center justify-between border-b border-ink/10 pb-4 mb-8">
                    <h3 className="font-bold text-lg uppercase text-ink flex items-center gap-2">
                        <Radio size={18} className="text-green-500 animate-pulse" /> Signal Stream
                    </h3>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        <span className="font-mono text-[10px] text-gray-400 uppercase">Live Feed</span>
                    </div>
                </div>

                <div className="relative bg-surface border border-ink/10 h-[450px] overflow-hidden">
                    <div className="absolute inset-0 bg-subtle/50 pointer-events-none z-0"></div>
                    <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-surface to-transparent z-10"></div>
                    <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-surface to-transparent z-10"></div>

                    <div className="overflow-y-auto h-full p-6 space-y-6 custom-scrollbar relative z-0">
                        {TESTIMONIALS.map((t, i) => (
                            <motion.div 
                                key={t.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="relative pl-6 pb-6 border-l border-ink/10 last:border-0 last:pb-0 group"
                            >
                                {/* Timeline Node */}
                                <div className="absolute top-0 left-[-4.5px] w-[9px] h-[9px] rounded-full bg-surface border border-ink/30 group-hover:border-accent group-hover:bg-accent transition-colors z-10"></div>

                                <div className="bg-bg border border-ink/5 p-5 shadow-sm hover:shadow-md hover:border-ink/20 transition-all rounded-sm relative group-hover:translate-x-1">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded bg-ink/5 text-ink flex items-center justify-center font-black text-[10px]">
                                                {t.author.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-bold text-xs uppercase text-ink">{t.author}</div>
                                                <div className="font-mono text-[9px] text-gray-500 uppercase">{t.role}</div>
                                            </div>
                                        </div>
                                        <Quote size={12} className="text-ink/20 group-hover:text-accent/50 transition-colors" />
                                    </div>

                                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium mb-3">
                                        "{t.quote}"
                                    </p>

                                    <div className="flex items-center gap-2 border-t border-ink/5 pt-2">
                                        <ShieldCheck size={10} className="text-green-600" />
                                        <span className="font-mono text-[9px] font-bold text-gray-400 uppercase tracking-wide">
                                            VERIFIED: {t.context}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;