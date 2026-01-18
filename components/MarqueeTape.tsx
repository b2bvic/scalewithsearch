import React from 'react';
import { Zap, Hash, Terminal } from 'lucide-react';

const ITEMS = [
  "STRUCTURE INFORMATION",
  "SCALE INTELLIGENCE",
  "APPLIED INFORMATION SYSTEMS",
  "HYBRID INTELLIGENCE ARCHITECTURE",
  "PROTOCOL v8.3-S ACTIVE",
  "ZERO TRUST DATA",
  "INFERENCE AT THE EDGE",
  "SYSTEM_1 vs SYSTEM_2",
  "ENTITY RESOLUTION"
];

const MarqueeTape: React.FC = () => {
  return (
    <div className="w-full bg-neutral-900 border-y-4 border-ink overflow-hidden flex select-none relative z-20 group">
      
      {/* Track 1 */}
      <div className="animate-marquee whitespace-nowrap flex items-center shrink-0 group-hover:[animation-play-state:paused]">
        {ITEMS.map((item, i) => (
          <div key={i} className="mx-0 flex items-center">
            <span className="text-highlight font-mono font-bold uppercase text-sm md:text-base tracking-wider px-4">
              {item}
            </span>
            <span className="text-accent px-2 flex items-center gap-1 opacity-50">
               <span className="text-xs">///</span>
            </span>
          </div>
        ))}
      </div>

      {/* Track 2 (Duplicate for seamless loop) */}
      <div className="animate-marquee whitespace-nowrap flex items-center shrink-0 group-hover:[animation-play-state:paused]" aria-hidden="true">
        {ITEMS.map((item, i) => (
          <div key={`dup-${i}`} className="mx-0 flex items-center">
             <span className="text-highlight font-mono font-bold uppercase text-sm md:text-base tracking-wider px-4">
              {item}
            </span>
            <span className="text-accent px-2 flex items-center gap-1 opacity-50">
               <span className="text-xs">///</span>
            </span>
          </div>
        ))}
      </div>
      
      {/* Track 3 (Extra buffer for ultra-wide screens) */}
      <div className="animate-marquee whitespace-nowrap flex items-center shrink-0 group-hover:[animation-play-state:paused]" aria-hidden="true">
        {ITEMS.map((item, i) => (
          <div key={`dup2-${i}`} className="mx-0 flex items-center">
             <span className="text-highlight font-mono font-bold uppercase text-sm md:text-base tracking-wider px-4">
              {item}
            </span>
            <span className="text-accent px-2 flex items-center gap-1 opacity-50">
               <span className="text-xs">///</span>
            </span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default MarqueeTape;