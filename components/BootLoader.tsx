import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface BootLoaderProps {
  onComplete: () => void;
}

const BootLoader: React.FC<BootLoaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Counter animation - accelerated
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Faster non-linear increment
        const increment = Math.random() * 8 + 2; 
        return Math.min(prev + increment, 100);
      });
    }, 15); // Faster tick

    // Complete trigger - accelerated total time
    const timeout = setTimeout(() => {
      onComplete();
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center pointer-events-none">
      
      {/* Background Layer - Fades out faster to reveal app underneath while logo moves */}
      <motion.div 
        className="absolute inset-0 bg-[#050505]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      </motion.div>

      {/* Central Schematic Animation - Moves to Hero */}
      <motion.div 
        className="relative z-20"
        layoutId="schematic-logo"
        transition={{ 
            type: "spring", 
            stiffness: 70, 
            damping: 15, 
            mass: 1,
            duration: 1.2
        }}
      >
        <div className="scale-125 md:scale-[1.5]">
            <svg width="300" height="300" viewBox="0 0 300 300" className="text-white">
                <defs>
                    <path id="ringOuterLoader" d="M 150, 150 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0" />
                </defs>
                
                {/* Core Glow */}
                <motion.circle 
                    cx="150" cy="150" r="60" 
                    className="fill-accent/10 blur-xl"
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{ duration: 1, repeat: Infinity }}
                />

                {/* Outer Ring - Accelerates */}
                <motion.g 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "150px 150px" }}
                >
                    <circle cx="150" cy="150" r="120" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />
                    <text className="fill-current font-mono text-[10px] font-bold tracking-[0.2em] uppercase opacity-80">
                        <textPath href="#ringOuterLoader" startOffset="0%">
                            /// BROWSER OS /// HYBRID INTELLIGENCE /// LOCAL LLM ///
                        </textPath>
                    </text>
                </motion.g>

                {/* Inner Ring - Counter Rotate */}
                <motion.g 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "150px 150px" }}
                >
                    <circle cx="150" cy="150" r="90" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 30" opacity="0.6" />
                    <circle cx="150" cy="150" r="88" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </motion.g>

                {/* Center Graphic */}
                <g className="opacity-90">
                    <motion.path
                        d="M 150 120 L 176 135 L 176 165 L 150 180 L 124 165 L 124 135 Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8 }}
                    />
                    <circle cx="150" cy="150" r="3" fill="currentColor" />
                    <text x="150" y="145" textAnchor="middle" className="fill-current font-mono text-[8px] font-bold">SCALE</text>
                    <text x="150" y="158" textAnchor="middle" className="fill-current font-mono text-[8px] font-bold">WITH</text>
                    <text x="150" y="171" textAnchor="middle" className="fill-current font-mono text-[8px] font-bold">SEARCH</text>
                </g>
            </svg>
        </div>
      </motion.div>

      {/* Loading Text & Bar - Fades out */}
      <motion.div 
        className="mt-8 w-64 space-y-2 font-mono relative z-10"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-widest">
            <span>Loading Modules</span>
            <span className="text-accent">{Math.floor(count)}%</span>
        </div>
        <div className="h-1 w-full bg-gray-800 overflow-hidden">
            <motion.div
                className="h-full bg-accent"
                style={{ width: `${count}%` }}
            />
        </div>
        <div className="h-4 text-[10px] text-gray-600 truncate uppercase">
            {count < 30 && ">> INIT_BROWSER_OS..."}
            {count >= 30 && count < 60 && ">> LOADING_KNOWLEDGE_GRAPH..."}
            {count >= 60 && count < 90 && ">> DEPLOYING_LOCAL_LLM..."}
            {count >= 90 && ">> SWS_READY..."}
        </div>
      </motion.div>
      
    </div>
  );
};

export default BootLoader;