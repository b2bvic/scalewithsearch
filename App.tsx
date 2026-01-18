import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Proof from './components/Proof';
import Courses from './components/Courses';
import FinalAction from './components/FinalAction';
import Footer from './components/Footer';
import MarqueeTape from './components/MarqueeTape';
import BootLoader from './components/BootLoader';
import { Linkedin, Twitter, Moon, Sun } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <BootLoader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-bg text-ink font-sans selection:bg-accent selection:text-white transition-colors duration-300 overflow-x-hidden">
          {/* Navigation */}
          <nav className="sticky top-0 left-0 w-full z-40 bg-surface/80 backdrop-blur-md border-b border-ink/10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">

              {/* Logo */}
              <div className="flex items-center gap-3 group cursor-default">
                <div className="relative">
                  <span className="text-2xl" style={{ color: '#2563eb' }}>🌐</span>
                </div>
                <div className="flex flex-col justify-center h-full">
                  <span className="font-black text-lg tracking-tight leading-none mt-1 text-ink">Scale With Search</span>
                  <span className="font-mono text-[9px] font-bold text-gray-500 uppercase tracking-widest leading-none">AI Operating System</span>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-8 text-xs font-bold font-mono uppercase tracking-wider text-gray-500">
                <a
                  href="#courses"
                  onClick={(e) => handleNavClick(e, 'courses')}
                  className="hover:text-ink transition-colors relative group py-2"
                >
                  Courses
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#pricing"
                  onClick={(e) => handleNavClick(e, 'pricing')}
                  className="hover:text-ink transition-colors relative group py-2"
                >
                  Pricing
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#proof"
                  onClick={(e) => handleNavClick(e, 'proof')}
                  className="hover:text-ink transition-colors relative group py-2"
                >
                  Proof
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={toggleTheme}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-subtle hover:bg-ink hover:text-inverse transition-colors"
                  aria-label="Toggle Dark Mode"
                >
                  {theme === 'light' ? <Moon size={14} strokeWidth={2} /> : <Sun size={14} strokeWidth={2} />}
                </button>
                <div className="h-4 w-[1px] bg-gray-300 dark:bg-gray-700 mx-1"></div>
                <a href="https://twitter.com/b2bvic" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#1DA1F2] transition-colors">
                  <Twitter size={18} strokeWidth={2} />
                </a>
                <a href="https://linkedin.com/in/b2bvic" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#0A66C2] transition-colors">
                  <Linkedin size={18} strokeWidth={2} />
                </a>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="relative z-10 w-full transition-colors duration-300">
            <Hero />
            <MarqueeTape />
            <Courses />
            <div className="w-full h-px bg-gradient-to-r from-transparent via-ink/20 to-transparent"></div>
            <Pricing />
            <Proof />
            <FinalAction />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
