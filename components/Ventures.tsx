

import React from 'react';
import { VENTURES } from '../constants';
import { ExternalLink, Box, ArrowUpRight, Disc, Lock, LayoutTemplate, FileText, Users, Laptop, Grid } from 'lucide-react';

const Ventures: React.FC = () => {
  const getIcon = (id: string) => {
      switch(id) {
          case 'founder-os': return <LayoutTemplate size={24} strokeWidth={1.5} />;
          case 'advisory': return <FileText size={24} strokeWidth={1.5} />;
          case 'collective': return <Users size={24} strokeWidth={1.5} />;
          case 'focus': return <Laptop size={24} strokeWidth={1.5} />;
          default: return <Box size={24} strokeWidth={1.5} />;
      }
  }

  return (
    <section className="py-24 px-4 md:px-8 bg-surface scroll-mt-24 transition-colors duration-300 relative" id="ecosystem">
      <div className="max-w-7xl mx-auto">
         {/* Header */}
         <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-ink/10 pb-6">
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <Grid size={16} className="text-accent" />
                    <span className="font-mono text-xs font-bold uppercase text-gray-400 tracking-widest">SWS_ECOSYSTEM // ACCESS_POINTS</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-ink uppercase tracking-tighter leading-none">
                  The<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink to-gray-400">Ecosystem</span>
                </h2>
            </div>
            <div className="hidden md:flex items-center gap-4">
                <div className="p-2 px-4 border border-brand-blue/30 bg-brand-blue/5 text-brand-blue font-mono text-xs font-bold uppercase rounded-full flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
                    Community Access
                </div>
            </div>
         </header>

         {/* Main Grid - Centered for single item */}
         <div className="grid grid-cols-1 max-w-3xl mx-auto">
            {VENTURES.map((venture) => (
              <article key={venture.id} className="group relative flex flex-col h-full">
                 
                 <div className="relative flex-1 bg-subtle/30 backdrop-blur-sm border border-ink/10 p-6 md:p-8 flex flex-col transition-all duration-300 hover:border-ink/40 hover:bg-subtle/50">
                    
                    {/* Corner Accents (HUD Style) */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-ink/30 group-hover:border-accent transition-colors"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-ink/30 group-hover:border-accent transition-colors"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-ink/30 group-hover:border-accent transition-colors"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-ink/30 group-hover:border-accent transition-colors"></div>

                    {/* Coming Soon Badge */}
                    {venture.isComingSoon && (
                        <div className="absolute top-4 right-4 bg-ink/5 text-ink border border-ink/20 px-2 py-1 font-mono text-[10px] font-bold uppercase rounded-sm flex items-center gap-1">
                            <Lock size={10} /> WAITLIST
                        </div>
                    )}

                    {/* Card Header */}
                    <div className="flex justify-between items-start mb-6">
                        <div>
                             <div className="flex gap-2 mb-3">
                                 <div className={`inline-flex items-center px-2 py-0.5 text-[10px] font-mono font-bold uppercase border rounded-sm ${
                                     venture.color === 'brand-blue' ? 'border-brand-blue/50 text-brand-blue bg-brand-blue/5' : 
                                     venture.color === 'suit' ? 'border-suit/50 text-suit bg-suit/5' : 
                                     venture.color === 'found' ? 'border-found/50 text-found bg-found/5' :
                                     venture.color === 'browser-os' ? 'border-browser-os/50 text-browser-os bg-browser-os/5' :
                                     venture.color === 'accent' ? 'border-accent/50 text-accent bg-accent/5' : 'border-ink/50 text-ink bg-ink/5'
                                 }`}>
                                    {venture.role}
                                 </div>
                                 {venture.level && (
                                    <div className="inline-block px-2 py-0.5 bg-ink/5 text-gray-500 font-mono text-[10px] font-bold uppercase rounded-sm">
                                        {venture.level}
                                    </div>
                                 )}
                             </div>
                             <h3 className="text-3xl md:text-4xl font-black text-ink uppercase leading-none tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-ink group-hover:to-gray-500 transition-all">
                                {venture.name}
                             </h3>
                        </div>
                        <div className="hidden md:block text-gray-300 group-hover:text-ink transition-colors duration-300">
                            {getIcon(venture.id)}
                        </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                        {venture.description}
                    </p>

                    {/* Identity Tags (Implicit Audience) */}
                    <div className="mb-8">
                        <div className="flex flex-wrap gap-2">
                            {venture.audience.map((aud, i) => (
                                <span key={i} className="px-2 py-1 bg-surface border border-ink/10 text-[10px] font-mono font-bold uppercase flex items-center gap-2 text-gray-500 rounded-sm">
                                    <span className={`w-1 h-1 rounded-full ${
                                     venture.color === 'brand-blue' ? 'bg-brand-blue' : 
                                     venture.color === 'suit' ? 'bg-suit' : 
                                     venture.color === 'found' ? 'bg-found' :
                                     venture.color === 'browser-os' ? 'bg-browser-os' :
                                     venture.color === 'accent' ? 'bg-accent' : 'bg-ink'
                                    }`}></span>
                                    {aud}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Features / Content Pillars */}
                    <div className="bg-surface/30 border-t border-ink/10 pt-6 mt-auto">
                        <div className="font-mono text-[10px] font-bold uppercase text-gray-400 mb-3 tracking-wider">
                            System Capabilities
                        </div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                            {venture.features.map((feat, i) => (
                                <li key={i} className="flex items-center gap-2 text-xs font-bold text-ink/80">
                                    <div className={`w-1 h-1 rounded-sm ${
                                        venture.color === 'brand-blue' ? 'bg-brand-blue' : 
                                        venture.color === 'suit' ? 'bg-suit' : 
                                        venture.color === 'found' ? 'bg-found' :
                                        venture.color === 'browser-os' ? 'bg-browser-os' :
                                        venture.color === 'accent' ? 'bg-accent' : 'bg-ink'
                                    }`}></div>
                                    {feat}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* CTA */}
                    <div className="mt-8">
                        <a 
                            href={venture.link} 
                            target={venture.link === '#' ? '_self' : '_blank'}
                            rel="noreferrer"
                            onClick={(e) => venture.link === '#' && e.preventDefault()}
                            className={`w-full py-4 px-6 font-mono text-sm font-bold uppercase flex items-center justify-between transition-all border group-hover:shadow-sm ${
                                venture.isComingSoon 
                                ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed' 
                                : 'bg-ink text-inverse border-ink hover:bg-accent hover:border-accent'
                            }`}
                        >
                            <span>{venture.cta}</span>
                            {venture.isComingSoon ? <Lock size={14} /> : <ArrowUpRight size={16} />}
                        </a>
                    </div>
                 </div>
              </article>
            ))}
         </div>
      </div>
    </section>
  );
};

export default Ventures;
