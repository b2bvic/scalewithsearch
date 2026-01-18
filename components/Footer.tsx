import React from 'react';
import { ArrowUpRight, Twitter, Linkedin, Mail, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  return (
    <footer className="bg-ink text-inverse border-t-8 border-accent relative z-10 transition-colors duration-300 font-mono" id="contact">
      {/* Top Bar Status */}
      <div className="bg-neutral-900 border-b border-gray-800 px-4 py-2 text-[10px] uppercase font-bold text-gray-400 flex justify-between items-center">
         <div className="flex gap-4">
             <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> ENROLLMENT: OPEN</span>
             <span className="hidden md:inline">VERSION: 1.0.0</span>
             <span className="hidden md:inline">MODULES: 77</span>
         </div>
         <div className="flex gap-4">
             <span>COURSES: 5</span>
             <span>RUNTIME: ~120hrs</span>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

            {/* Identity Column */}
            <div className="md:col-span-4 space-y-8">
                <div>
                    <div className="font-black text-3xl mb-2 tracking-tighter flex items-center gap-3">
                        <span className="text-4xl" style={{ filter: 'grayscale(0%)' }}>🌐</span>
                        Scale With Search
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                        The AI Operating System. 5 courses, 77 modules. From browser setup to production AI deployment.
                    </p>
                </div>

                {/* ASCII Art */}
                <pre className="text-[8px] md:text-[10px] leading-[8px] text-gray-600 font-mono hidden md:block select-none opacity-50">
{`
 ___  _    _  ___
/ __|| |  | |/ __|
\\__ \\| |/\\| |\\__ \\
|___/|__/\\__||___/
`}
                </pre>

                <div className="flex items-center gap-4">
                    <a href="https://twitter.com/b2bvic" target="_blank" rel="noreferrer" className="w-10 h-10 border-2 border-gray-600 hover:border-inverse flex items-center justify-center hover:bg-inverse hover:text-ink transition-all">
                        <Twitter size={18} />
                    </a>
                    <a href="https://linkedin.com/in/b2bvic" target="_blank" rel="noreferrer" className="w-10 h-10 border-2 border-gray-600 hover:border-inverse flex items-center justify-center hover:bg-inverse hover:text-ink transition-all">
                        <Linkedin size={18} />
                    </a>
                    <a href="mailto:vic@scalewithsearch.com" className="w-10 h-10 border-2 border-gray-600 hover:border-inverse flex items-center justify-center hover:bg-inverse hover:text-ink transition-all">
                        <Mail size={18} />
                    </a>
                </div>
            </div>

            {/* Sitemap */}
            <div className="md:col-span-2">
                <h4 className="text-accent font-bold uppercase mb-6 text-sm tracking-widest">Directory</h4>
                <ul className="space-y-3 text-xs md:text-sm font-bold text-gray-400">
                    <li><a href="#" onClick={(e) => handleScroll(e, 'top')} className="hover:text-white hover:underline decoration-accent underline-offset-4">Home</a></li>
                    <li><a href="#courses" onClick={(e) => handleScroll(e, 'courses')} className="hover:text-white hover:underline decoration-accent underline-offset-4">Courses</a></li>
                    <li><a href="#pricing" onClick={(e) => handleScroll(e, 'pricing')} className="hover:text-white hover:underline decoration-accent underline-offset-4">Pricing</a></li>
                    <li><a href="#proof" onClick={(e) => handleScroll(e, 'proof')} className="hover:text-white hover:underline decoration-accent underline-offset-4">Proof</a></li>
                </ul>
            </div>

            {/* Courses Quick Links */}
            <div className="md:col-span-2">
                <h4 className="text-accent font-bold uppercase mb-6 text-sm tracking-widest">Courses</h4>
                <ul className="space-y-3 text-xs md:text-sm font-bold text-gray-400">
                    <li><span className="hover:text-white">Browser OS</span></li>
                    <li><span className="hover:text-white">Applied Information</span></li>
                    <li><span className="hover:text-white">Codified Genius</span></li>
                    <li><span className="hover:text-white">Hybrid Intelligence</span></li>
                    <li><span className="hover:text-white">LLM Ops</span></li>
                </ul>
            </div>

            {/* System Info */}
            <div className="md:col-span-4 bg-neutral-900 border border-gray-800 p-6 relative overflow-hidden group hover:border-gray-600 transition-colors">
                <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-40 transition-opacity">
                    <ShieldCheck size={48} />
                </div>
                <h4 className="text-white font-bold uppercase mb-6 text-xs tracking-widest flex items-center gap-2">
                    <ShieldCheck size={12} className="text-accent" /> System_Info
                </h4>

                <div className="space-y-4 text-sm text-gray-400">
                    <div className="border-l-2 border-accent pl-4">
                        <p className="font-bold text-white text-[10px] mb-1 text-accent uppercase tracking-widest">Created By</p>
                        <p className="font-bold text-white leading-tight">Victor Valentine Romo</p>
                        <p className="text-[10px] font-mono opacity-70">@b2bvic</p>
                    </div>

                    <div className="border-l-2 border-gray-700 pl-4">
                        <p className="font-bold text-white text-[10px] mb-1 text-gray-500 uppercase tracking-widest">Built From</p>
                        <p className="font-bold text-gray-300 leading-tight">150+ Client Engagements</p>
                        <p className="text-[10px] font-mono opacity-50">Enterprise to SMB</p>
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-800 flex justify-between text-[10px] text-gray-500 uppercase">
                     <span>Local-First</span>
                     <span>Zero Trust</span>
                </div>
            </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 uppercase">
            <div>
                &copy; {currentYear} SCALE WITH SEARCH. ALL RIGHTS RESERVED.
            </div>
            <div className="flex gap-6">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
                <span className="opacity-30">|</span>
                <span className="hover:text-accent cursor-crosshair">STRUCTURE INFORMATION. SCALE INTELLIGENCE.</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
