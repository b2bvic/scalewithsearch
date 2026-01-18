import React from 'react';
import { TIMELINE_DATA } from '../constants';
import { motion } from 'framer-motion';
import { MapPin, Terminal, AlertTriangle, CheckCircle2, FileClock } from 'lucide-react';

const Timeline: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-subtle/30 border-b border-ink/10 relative scroll-mt-24 transition-colors duration-300" id="timeline">
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-16 flex flex-col items-start border-b border-ink/10 pb-8">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold uppercase text-accent">
             <FileClock size={16} /> System_Logs.log
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-ink uppercase tracking-tighter leading-none">
            Operational<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200">History</span>
          </h2>
        </div>

        <div className="relative space-y-0">
          {/* Vertical Guide Line */}
          <div className="absolute left-4 md:left-[120px] top-0 bottom-0 w-[1px] bg-ink/10 z-0"></div>

          {TIMELINE_DATA.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="relative flex flex-col md:flex-row gap-8 py-8 group"
            >
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-[120px] top-9 w-2 h-2 rounded-full bg-surface border border-ink/40 -translate-x-[3px] z-10 group-hover:bg-accent group-hover:border-accent transition-colors"></div>

              {/* Timestamp Column */}
              <div className="pl-12 md:pl-0 md:w-[120px] flex-shrink-0 pt-1">
                 <span className="font-mono text-sm font-bold text-gray-500 group-hover:text-ink transition-colors">
                    [{event.year}]
                 </span>
              </div>

              {/* Content Column */}
              <div className="pl-12 md:pl-0 flex-1">
                 <div className="bg-surface border border-ink/10 p-6 md:p-8 rounded-sm hover:border-ink/30 transition-all hover:shadow-sm">
                    
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-xl md:text-2xl font-black uppercase text-ink leading-none mb-1">
                                {event.title}
                            </h3>
                            <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase text-gray-400">
                                <MapPin size={10} /> {event.location}
                            </div>
                        </div>
                        <div className="opacity-50 group-hover:opacity-100 transition-opacity">
                            {event.category === 'crucible' && <AlertTriangle size={18} className="text-accent" />}
                            {event.category === 'mastery' && <CheckCircle2 size={18} className="text-green-500" />}
                        </div>
                    </div>
                    
                    <p className="font-medium text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        <span className="text-accent font-mono mr-2">{'>'}</span>
                        {event.description}
                    </p>

                    {/* Stats Grid */}
                    {event.stats && (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 border-t border-ink/5 pt-4">
                            {event.stats.map((stat, i) => (
                                <div key={i} className="bg-subtle/50 px-2 py-1 text-[10px] font-mono font-bold text-gray-500 uppercase rounded-sm border border-ink/5 truncate">
                                    {stat}
                                </div>
                            ))}
                        </div>
                    )}
                 </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;