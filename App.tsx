import React from 'react';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Pricing from './components/Pricing';
import Proof from './components/Proof';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#080c14] text-[#e2e8f0] font-mono">

      {/* Top Status Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#1e3a5f] bg-[#080c14]/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-12 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xl" style={{ color: '#2563eb' }}>🌐</span>
              <span className="font-bold text-sm uppercase tracking-wider text-[#e2e8f0]">SWS</span>
            </div>
            <div className="hidden md:flex items-center gap-1 text-[10px] uppercase tracking-widest text-[#64748b]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] pulse-blue"></span>
              <span>SYSTEM ONLINE</span>
            </div>
          </div>

          <nav className="flex items-center gap-6 text-[10px] uppercase tracking-widest text-[#64748b]">
            <a href="#courses" className="hover:text-[#2563eb] transition-colors">Modules</a>
            <a href="#pricing" className="hover:text-[#2563eb] transition-colors">Pricing</a>
            <a href="#proof" className="hover:text-[#2563eb] transition-colors">Proof</a>
            <a
              href="#pricing"
              className="px-3 py-1.5 bg-[#2563eb] text-white font-bold hover:bg-[#1e40af] transition-colors"
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
      </main>

      <Footer />

      {/* Global grid pattern overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 grid-pattern"></div>
    </div>
  );
};

export default App;
