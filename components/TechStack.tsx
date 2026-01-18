

import React from 'react';
import { TECH_STACK } from '../constants';
import { Server, Cloud, Database, Cpu, CircuitBoard } from 'lucide-react';
import { motion } from 'framer-motion';

const TechStack: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-surface border-b-4 border-ink transition-colors duration-300" id="stack">
      <div className="max-w-7xl mx-auto">
        
        <header className="mb-16 flex flex-col md:flex-row items-end justify-between gap-6">
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <CircuitBoard size={16} className="text-ink" />
                    <span className="font-mono text-xs font-bold uppercase text-gray-500 dark:text-gray-400">LAYER_01 // INFRASTRUCTURE</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-ink uppercase tracking-tighter leading-none">
                    Inference<br/>
                    <span className="text-transparent text-outline-ink">Architecture</span>
                </h2>
            </div>
            <div className="max-w-md text-right md:text-left">
                 <p className="font-bold text-lg text-ink opacity-80 border-l-4 border-brand-blue pl-4">
                    Moving beyond "Hybrid Intelligence". We engineer strictly tiered inference topologies: Local for privacy, Cloud for reasoning.
                </p>
            </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECH_STACK.map((stack, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-4 border-ink p-6 bg-subtle hover:bg-surface transition-colors shadow-brutal hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none flex flex-col h-full"
                >
                    <div className="w-12 h-12 bg-ink text-inverse flex items-center justify-center mb-6 border-2 border-transparent">
                        {index === 0 && <Cpu size={24} />}
                        {index === 1 && <Cloud size={24} />}
                        {index === 2 && <Database size={24} />}
                        {index === 3 && <Server size={24} />}
                    </div>
                    
                    <h3 className="font-black text-xl uppercase mb-2 text-ink min-h-[56px] flex items-end">
                        {stack.category}
                    </h3>
                    
                    <div className="w-full h-1 bg-ink mb-4 opacity-50"></div>

                    <ul className="space-y-2 mb-6 min-h-[100px] flex-1">
                        {stack.tools.map((tool, i) => (
                            <li key={i} className="font-mono text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-accent"></span>
                                {tool}
                            </li>
                        ))}
                    </ul>

                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase leading-relaxed border-t-2 border-gray-300 dark:border-gray-700 pt-3 mt-auto">
                        {stack.desc}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;