import React from 'react';
import { Zap, Share2, MessageSquare, GraduationCap, TrendingUp, Award, Hammer, ArrowRight, RefreshCw, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const Methodology: React.FC = () => {
  const steps = [
    { id: "01", title: "INGESTION", subtitle: "Active R&D", icon: <Hammer size={18} />, desc: "Client work & consulting generates raw data.", color: "text-accent" },
    { id: "02", title: "PROCESSING", subtitle: "Pattern Match", icon: <Cpu size={18} />, desc: "Synthesizing workflows into reusable artifacts.", color: "text-ink" },
    { id: "03", title: "MODELING", subtitle: "Codification", icon: <Zap size={18} />, desc: "Artifacts become curriculum (Education).", color: "text-brand-blue" },
    { id: "04", title: "SCALE", subtitle: "Deployment", icon: <TrendingUp size={18} />, desc: "Proven models deployed to Enterprise.", color: "text-green-600" },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-subtle border-b border-ink/10 scroll-mt-24 transition-colors duration-300 relative overflow-hidden" id="methodology">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
           <div>
               <div className="flex items-center gap-2 mb-3">
                 <RefreshCw size={16} className="text-accent animate-spin-slow" />
                 <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-500">System_Architecture // V2.0</span>
               </div>
               <h2 className="text-4xl md:text-6xl font-black text-ink uppercase tracking-tighter leading-none">
                 Recursive<br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-ink">Intelligence Engine</span>
               </h2>
           </div>
           <div className="max-w-md text-left md:text-right">
               <p className="font-mono text-xs md:text-sm text-gray-500 leading-relaxed border-l-2 md:border-l-0 md:border-r-2 border-accent pl-4 md:pl-0 md:pr-4">
                 <span className="font-bold text-ink">NOT A FUNNEL. A FEEDBACK LOOP.</span><br/>
                 We do the work (R&D). We codify the work (Education). We scale the work (Enterprise). The output of one system becomes the input of the next.
               </p>
           </div>
        </div>

        {/* The Pipeline Schematic */}
        <div className="relative bg-surface border border-ink/20 p-8 md:p-12 shadow-sm rounded-sm">
           {/* Corner HUD Elements */}
           <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent"></div>
           <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-ink/20"></div>
           <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-ink/20"></div>
           <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent"></div>

           {/* Label */}
           <div className="absolute -top-3 left-8 bg-surface px-2 font-mono text-[10px] font-bold uppercase tracking-widest text-gray-400 border border-ink/10">
              DATA_FLOW_PIPELINE
           </div>

           {/* Flow Container */}
           <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ink/20 to-transparent -translate-y-1/2 z-0"></div>

              {steps.map((step, index) => (
                 <React.Fragment key={step.id}>
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="relative z-10 w-full lg:w-64 group"
                    >
                        <div className="bg-bg border border-ink/10 p-6 relative hover:border-accent/50 transition-colors duration-300">
                            {/* Step ID */}
                            <div className="absolute -top-3 left-4 bg-bg px-2 font-mono text-[10px] text-gray-400 border border-ink/10 group-hover:text-accent group-hover:border-accent/50 transition-colors">
                                NODE_{step.id}
                            </div>
                            
                            <div className={`mb-4 ${step.color} bg-surface/50 w-10 h-10 flex items-center justify-center border border-ink/10 rounded-full`}>
                                {step.icon}
                            </div>
                            
                            <h3 className="font-bold text-lg uppercase text-ink mb-1 tracking-tight">{step.title}</h3>
                            <div className="font-mono text-[10px] uppercase text-gray-500 mb-3">{step.subtitle}</div>
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                                {step.desc}
                            </p>
                        </div>
                    </motion.div>

                    {/* Arrow (Desktop) */}
                    {index < steps.length - 1 && (
                        <div className="hidden lg:flex relative z-10 text-gray-300">
                            <ArrowRight size={20} strokeWidth={1} />
                        </div>
                    )}
                    
                    {/* Arrow (Mobile) */}
                    {index < steps.length - 1 && (
                        <div className="lg:hidden relative z-10 text-gray-300 rotate-90 my-2">
                            <ArrowRight size={20} strokeWidth={1} />
                        </div>
                    )}
                 </React.Fragment>
              ))}
           </div>
        </div>

        {/* System Legend/Context */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-[10px] uppercase text-gray-500">
            <div className="flex items-center gap-3 border border-ink/10 p-3 bg-surface/50">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Input: High-Fidelity Consulting</span>
            </div>
            <div className="flex items-center gap-3 border border-ink/10 p-3 bg-surface/50">
                <div className="w-2 h-2 bg-ink rounded-full"></div>
                <span>Process: Abstraction & Synthesis</span>
            </div>
            <div className="flex items-center gap-3 border border-ink/10 p-3 bg-surface/50">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span>Output: Scalable IP & Software</span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Methodology;