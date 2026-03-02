import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import Hero from './components/Hero';
import Methodology from './components/Methodology';
import Courses from './components/Courses';
import Proof from './components/Proof';
import Offer from './components/Offer';
import Footer from './components/Footer';

// Header component
const Header: React.FC = () => (
  <header
    className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-sm"
    style={{ borderColor: 'var(--border)', backgroundColor: 'var(--header-bg)' }}
  >
    <div className="max-w-7xl mx-auto px-4 md:px-8 h-12 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <a href="/" className="flex items-center gap-2">
          <span className="text-xl" style={{ color: 'var(--accent)' }}>🌐</span>
          <span className="font-bold text-sm uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>SWS</span>
        </a>
        <div className="hidden md:flex items-center gap-1 text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
          <span className="w-1.5 h-1.5 rounded-full pulse-accent" style={{ backgroundColor: 'var(--accent)' }}></span>
          <span>OPEN SOURCE</span>
        </div>
      </div>

      <nav className="flex items-center gap-4 md:gap-6">
        <div className="hidden sm:flex items-center gap-4 md:gap-6 text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
          <a href="/#methodology" className="hover:opacity-80 transition-opacity">Architecture</a>
          <a href="/#capabilities" className="hover:opacity-80 transition-opacity">Capabilities</a>
          <a href="/#proof" className="hover:opacity-80 transition-opacity">Proof</a>
          <a href="/#offer" className="hover:opacity-80 transition-opacity">The Offer</a>
        </div>
        <ThemeSwitcher />
        <a
          href="https://github.com/b2bvic/scale-with-search"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 font-bold text-[10px] uppercase tracking-widest transition-opacity hover:opacity-90"
          style={{ backgroundColor: 'var(--accent)', color: 'white' }}
        >
          REPO
        </a>
      </nav>
    </div>
  </header>
);

// Home page — section order follows the narrative:
// Hero (problem) → Methodology (how) → Capabilities (what) → Proof (evidence) → Offer (action)
const HomePage: React.FC = () => (
  <>
    <main className="pt-12">
      <Hero />
      <Methodology />
      <Courses />
      <Proof />
      <Offer />
    </main>
    <Footer />
  </>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="min-h-screen font-mono" style={{ backgroundColor: 'var(--bg-base)', color: 'var(--text-primary)' }}>
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>

          {/* Global grid pattern overlay */}
          <div className="fixed inset-0 pointer-events-none z-0 grid-pattern"></div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
