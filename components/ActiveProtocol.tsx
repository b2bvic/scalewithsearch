

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Crosshair, Activity, Lock, Search, Binary } from 'lucide-react';

// Highly obfuscated system codes that imply activity without describing "what"
const SYSTEM_LOGS = [
  "Processing Batch: JAG_DB_NODE_01...",
  "> LEAD_ROUTING_LOGIC: OPTIMIZED",
  "> DATA_INTEGRITY_CHECK: [PASSED]",
  "> RE_ENGAGEMENT_ENGINE: [RUNNING]",
  "SQL_INJECTION: [BLOCKED]...",
  "ENTITY_RES: ID_MATCH_FOUND [CONFIDENTIAL]",
  "CTX_SCORE: HIGH_PROBABILITY",
  "Processing Batch: SALES_BRIDGE_ALPHA...",
  "> MARKETING_UPLINK: SYNCED",
  "VECTOR_LOOKUP: [MASKED_PARAM] + [REDACTED]...",
  "ENTITY_RES: INSIDE_SALES_VERIFIED",
  "WRITE_OP: BATCH_14 [COMPLETE]",
  "> CLASSIFIED_OP: ACCESS_GRANTED",
  "> DATA_SHIELD: ACTIVE [JAG_NODE]",
  "UPLINK_SECURE: [REDACTED]... CONNECTION ESTABLISHED"
];

const ActiveProtocol: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([
    "INITIALIZING KERNEL v8.3-S...",
    "MOUNTING DATABASE_BACKUP_001...",
    "OVERRIDE: MODE_ACTIVE [FORCE]",
    "CONNECTING TO ENGINE...",
  ]);
  const logContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < SYSTEM_LOGS.length) {
        setLogs(prev => {
             const nextLog = SYSTEM_LOGS[index];
             if (!nextLog) return prev;
             return [...prev, nextLog];
        });
        index++;
      } else {
        clearInterval(interval);
      }
    }, 600); // Faster log speed

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    // Force dark theme for this section regardless of app mode to maintain Terminal/Protocol aesthetic
    <section className="py-24 px-4 md:px-8 bg-[#050505] text-white relative overflow-hidden border-b-4 border-white/20 scroll-mt-24" id="active-protocol">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b-2 border-gray-800 pb-8">
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                    <span className="font-mono text-xs font-bold uppercase text-red-500">LIVE_OPERATION // INSIDE_SALES_NODE</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white">
                    Protocol <span className="text-accent">v8.3-S</span>
                </h2>
                <p className="font-mono text-gray-400 mt-2 max-w-xl text-sm">
                    Automated Entity Resolution & Database Architecture. <br/>
                    <span className="text-gray-600">[CONFIDENTIAL] Proprietary infrastructure active.</span>
                </p>
            </div>
            <div className="mt-6 md:mt-0 text-right">
                <div className="inline-block border-2 border-gray-700 bg-black/50 p-2 font-mono text-xs text-gray-400">
                    <div className="flex justify-between gap-4"><span>OPERATOR:</span> <span className="text-white">VIC_AI</span></div>
                    <div className="flex justify-between gap-4"><span>STATUS:</span> <span className="text-green-500">ENGAGED</span></div>
                    <div className="flex justify-between gap-4"><span>DIRECTIVE:</span> <span className="text-white">REDACTED</span></div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* LEFT: The Motivation Engine (Logic Hierarchy) - OBFUSCATED */}
            <div className="space-y-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <Activity className="text-accent" />
                        <h3 className="font-bold text-xl uppercase text-white">Logic Gate Hierarchy</h3>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded bg-black">
                         <Lock size={12} className="text-accent" /> RESTRICTED ACCESS
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-neutral-900 border-l-4 border-green-500 p-4 shadow-lg relative overflow-hidden group"
                    >
                        <div className="flex justify-between items-start mb-2 relative z-10">
                            <h4 className="font-black text-lg uppercase text-white flex items-center gap-2">
                                <Binary size={16} className="text-green-500 opacity-50" />
                                1. SELF_CORRECTING_ASSET
                            </h4>
                            <span className="text-[10px] font-mono bg-black px-2 py-1 rounded text-green-500 border border-green-900/50">ALG: DB_CLEAN</span>
                        </div>
                        <div className="font-mono text-xs space-y-1 relative z-10 text-gray-500">
                            <div className="flex justify-between">
                                <span>INPUT_PARAMS:</span>
                                <span className="text-gray-300 blur-[2px] select-none">RAW_LEAD_DATA</span>
                            </div>
                            <div className="flex justify-between">
                                <span>THRESHOLD_CALC:</span>
                                <span className="bg-gray-800 text-gray-600 px-1 rounded select-none">[ENCRYPTED]</span>
                            </div>
                            <div className="flex justify-between pt-1 border-t border-gray-800 mt-1">
                                <span className="text-green-400 font-bold">STATUS:</span>
                                <span className="text-green-400">OPTIMIZATION_DETECTED</span>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5 pointer-events-none"></div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-neutral-900 border-l-4 border-blue-500 p-4 shadow-lg"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="font-black text-lg uppercase text-white flex items-center gap-2">
                                <Search size={16} className="text-blue-500 opacity-50" />
                                2. LEAD_ROUTING_LOGIC
                            </h4>
                            <span className="text-[10px] font-mono bg-black px-2 py-1 rounded text-blue-500 border border-blue-900/50">VAL_KEY_09</span>
                        </div>
                        <div className="font-mono text-xs space-y-1 text-gray-500">
                            <div className="flex justify-between">
                                <span>SIGNAL_STRENGTH:</span>
                                <span className="text-gray-300 blur-[2px] select-none">34.22.11.9</span>
                            </div>
                            <div className="flex justify-between">
                                <span>VELOCITY_INDEX:</span>
                                <span className="bg-gray-800 text-gray-600 px-1 rounded select-none">[HIDDEN]</span>
                            </div>
                            <div className="flex justify-between pt-1 border-t border-gray-800 mt-1">
                                <span className="text-blue-400 font-bold">STATUS:</span>
                                <span className="text-blue-400">CONFIRMED</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-neutral-900 border-l-4 border-yellow-500 p-4 shadow-lg"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="font-black text-lg uppercase text-white flex items-center gap-2">
                                <Activity size={16} className="text-yellow-500 opacity-50" />
                                3. SALES_MARKETING_BRIDGE
                            </h4>
                            <span className="text-[10px] font-mono bg-black px-2 py-1 rounded text-yellow-500 border border-yellow-900/50">ASSET_V3</span>
                        </div>
                        <div className="font-mono text-xs space-y-1 text-gray-500">
                             <div className="flex justify-between">
                                <span>DEP_CURVE:</span>
                                <span className="bg-gray-800 text-gray-600 px-1 rounded select-none">[RESTRICTED]</span>
                            </div>
                            <div className="flex justify-between">
                                <span>LIQUIDITY_EVENT:</span>
                                <span className="text-gray-300 blur-[2px] select-none">TRUE_FALSE_CHECK</span>
                            </div>
                            <div className="flex justify-between pt-1 border-t border-gray-800 mt-1">
                                <span className="text-yellow-400 font-bold">STATUS:</span>
                                <span className="text-yellow-400">CRITICAL_WINDOW</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-neutral-900 border-l-4 border-purple-500 p-4 shadow-lg"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="font-black text-lg uppercase text-white flex items-center gap-2">
                                <Crosshair size={16} className="text-purple-500 opacity-50" />
                                4. AUTOMATED_RE_ENGAGEMENT
                            </h4>
                            <span className="text-[10px] font-mono bg-black px-2 py-1 rounded text-purple-500 border border-purple-900/50">MODEL_B7</span>
                        </div>
                        <div className="font-mono text-xs space-y-1 text-gray-500">
                             <div className="flex justify-between">
                                <span>PRESSURE_IDX:</span>
                                <span className="bg-gray-800 text-gray-600 px-1 rounded select-none">[ENCRYPTED]</span>
                            </div>
                            <div className="flex justify-between">
                                <span>DELTA_T:</span>
                                <span className="text-gray-300 blur-[2px] select-none">5Y_WINDOW</span>
                            </div>
                            <div className="flex justify-between pt-1 border-t border-gray-800 mt-1">
                                <span className="text-purple-400 font-bold">STATUS:</span>
                                <span className="text-purple-400">TRANSITION_LIKELY</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* RIGHT: Live Terminal Simulation */}
            <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                    <Search className="text-accent" />
                    <h3 className="font-bold text-xl uppercase text-white">System Output Stream</h3>
                </div>
                
                <div className="flex-1 bg-black border-4 border-gray-800 p-4 font-mono text-[10px] sm:text-xs md:text-sm relative overflow-hidden shadow-2xl rounded-sm min-h-[300px] md:min-h-[400px]">
                    <div className="absolute top-0 right-0 p-2 text-[10px] font-bold text-gray-600 uppercase">
                        /var/log/sys_kernel.log
                    </div>
                    <div className="scanline absolute inset-0 pointer-events-none opacity-10"></div>
                    
                    <div ref={logContainerRef} className="h-full overflow-y-auto space-y-2 pb-2 custom-scrollbar">
                        {logs.map((log, i) => (
                            <div key={i} className={`
                                ${log.includes('INITIALIZING') ? 'text-green-500 font-bold' : ''}
                                ${log.includes('OVERRIDE') ? 'text-red-500 font-bold' : ''}
                                ${log.includes('>') ? 'text-cyan-400 pl-4' : 'text-gray-300'}
                                ${log.includes('ENTITY_RES') ? 'text-yellow-400 font-bold bg-yellow-900/20' : ''}
                                ${log.includes('UPLINK_SECURE') ? 'text-green-500 font-bold bg-green-900/20' : ''}
                            `}>
                                <span className="opacity-50 mr-2 text-[10px]">[{new Date().toLocaleTimeString()}:{String(i).padStart(3, '0')}]</span>
                                {log}
                            </div>
                        ))}
                        <div className="animate-pulse text-green-500">_</div>
                    </div>
                </div>
                
                <div className="mt-4 flex gap-4 text-xs font-mono text-gray-500">
                    <div className="flex items-center gap-2">
                        <Lock size={12} /> ENCRYPTED_CONNECTION
                    </div>
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={12} /> HIPAA_COMPLIANT
                    </div>
                    <div className="flex items-center gap-2">
                        <Crosshair size={12} /> 99.9% ACCURACY
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ActiveProtocol;