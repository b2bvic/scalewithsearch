import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Pricing from './components/Pricing';
import Proof from './components/Proof';
import AiAssistant from './components/AiAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-mono" style={{ backgroundColor: 'var(--bg-base)', color: 'var(--text-primary)' }}>

        {/* Top Status Bar */}
        <header
          className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-sm"
          style={{ borderColor: 'var(--border)', backgroundColor: 'var(--header-bg)' }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 h-12 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-xl" style={{ color: 'var(--accent)' }}>🌐</span>
                <span className="font-bold text-sm uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>SWS</span>
              </div>
              <div className="hidden md:flex items-center gap-1 text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                <span className="w-1.5 h-1.5 rounded-full pulse-accent" style={{ backgroundColor: 'var(--accent)' }}></span>
                <span>SYSTEM ONLINE</span>
              </div>
            </div>

            <nav className="flex items-center gap-4 md:gap-6">
              <div className="hidden sm:flex items-center gap-4 md:gap-6 text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                <a href="#courses" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--text-muted)' }}>Modules</a>
                <a href="#pricing" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--text-muted)' }}>Pricing</a>
                <a href="#proof" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--text-muted)' }}>Proof</a>
                <a href="#ai-assistant" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--text-muted)' }}>Try It</a>
              </div>
              <ThemeSwitcher />
              <a
                href="#pricing"
                className="px-3 py-1.5 font-bold text-[10px] uppercase tracking-widest transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'var(--accent)', color: 'white' }}
              >
                ENROLL
              </a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-12">
          <Hero />
          <Courses />
          <Pricing />
          <Proof />
          <AiAssistant />
        </main>

        <Footer />

        {/* Global grid pattern overlay */}
        <div className="fixed inset-0 pointer-events-none z-0 grid-pattern"></div>
      </div>
    </ThemeProvider>
  );
};

export default App;
