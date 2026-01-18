import React from 'react';
import { INDUSTRIES_DATA } from '../constants';
import { motion } from 'framer-motion';
import { Database, Globe, Building2, Activity, HardHat, Briefcase, ShoppingBag, Network } from 'lucide-react';

const Industries: React.FC = () => {
  const getIcon = (sectorName: string) => {
    if (sectorName.includes('Industrial')) return <Building2 size={20} />;
    if (sectorName.includes('Technology')) return <Database size={20} />;
    if (sectorName.includes('Healthcare')) return <Activity size={20} />;
    if (sectorName.includes('Construction')) return <HardHat size={20} />;
    if (sectorName.includes('Finance')) return <Briefcase size={20} />;
    if (sectorName.includes('Consumer')) return <ShoppingBag size={20} />;
    return <Globe size={20} />;
  };

  return (
    <section className="py-24 px-4 md:px-12 bg-bg border-b border-ink/10 relative transition-colors duration-300" id="industries">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-ink/10 pb-8">
            <div className="flex flex-col items-start">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold uppercase text-brand-blue tracking-widest">
                    <Network size={16} /> Proof_Of_Ubiquity
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-ink uppercase tracking-tighter leading-none">
                    Sector<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink to-gray-500">Agnostic</span>
                </h2>
            </div>
            <div className="max-w-md text-right md:text-left">
                <p className="font-medium text-sm text-gray-500 leading-relaxed border-l-2 border-brand-blue pl-4">
                    The system doesn't care about the vertical. The principles of information architecture work everywhere.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_DATA.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-surface border border-ink/20 hover:border-brand-blue/50 transition-colors group flex flex-col h-full rounded-sm overflow-hidden"
            >
                {/* Header */}
                <div className="bg-subtle/30 border-b border-ink/10 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="text-ink opacity-70 group-hover:text-brand-blue transition-colors">
                            {getIcon(industry.sector)}
                        </div>
                        <h3 className="font-bold text-sm uppercase text-ink leading-tight tracking-wide">
                            {industry.sector}
                        </h3>
                    </div>
                    <span className="font-mono text-[9px] text-gray-400">{industry.id}</span>
                </div>

                {/* Body */}
                <div className="p-5 flex-1 flex flex-col">
                    <p className="text-xs font-medium text-gray-500 mb-6 leading-relaxed min-h-[40px]">
                        {industry.description}
                    </p>
                    
                    <div className="flex items-center gap-2 mb-2">
                         <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                         <span className="font-mono text-[9px] font-bold uppercase text-gray-400">Deployment_Log</span>
                    </div>

                    {/* Technical List */}
                    <div className="bg-black/90 p-3 rounded-sm flex-1 font-mono text-[10px] text-gray-400 overflow-hidden relative shadow-inner">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div>
                        <div className="overflow-y-auto max-h-[180px] custom-scrollbar pr-1 space-y-1">
                            {industry.clients.map((client, i) => (
                                <div key={i} className="flex items-center gap-2 hover:text-white hover:bg-white/10 px-1 rounded-sm transition-colors cursor-default">
                                    <span className="text-gray-600 w-4">{i < 9 ? `0${i+1}` : i+1}</span>
                                    <span className="truncate">{client}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;