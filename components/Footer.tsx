import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t" style={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--border)' }}>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-12 gap-8">

          {/* Brand Column */}
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl" style={{ color: 'var(--accent)' }}>🌐</span>
              <div>
                <div className="text-xl font-black uppercase tracking-tight" style={{ color: 'var(--text-primary)' }}>
                  Scale With Search
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>
                  AI Operating System
                </div>
              </div>
            </div>

            <p className="text-sm mb-6 max-w-sm" style={{ color: 'var(--text-muted)' }}>
              5 courses. 77 modules. Browser setup to production AI deployment.
              Built from 150+ client engagements.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com/b2bvic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border flex items-center justify-center transition-colors"
                style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
              >
                <span className="text-xs font-bold">X</span>
              </a>
              <a
                href="https://linkedin.com/in/b2bvic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border flex items-center justify-center transition-colors"
                style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
              >
                <span className="text-xs font-bold">in</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="col-span-6 lg:col-span-2">
            <div className="text-[10px] uppercase tracking-widest font-bold mb-4" style={{ color: 'var(--accent)' }}>
              Navigate
            </div>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              <li><a href="#courses" className="transition-opacity hover:opacity-80">Courses</a></li>
              <li><a href="#pricing" className="transition-opacity hover:opacity-80">Pricing</a></li>
              <li><a href="#proof" className="transition-opacity hover:opacity-80">Proof</a></li>
              <li><a href="#ai-assistant" className="transition-opacity hover:opacity-80">Try It</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div className="col-span-6 lg:col-span-2">
            <div className="text-[10px] uppercase tracking-widest font-bold mb-4" style={{ color: 'var(--accent)' }}>
              Courses
            </div>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              <li>Browser OS</li>
              <li>Applied Information</li>
              <li>Codified Genius</li>
              <li>Hybrid Intelligence</li>
              <li>LLM Ops</li>
            </ul>
          </div>

          {/* System Info */}
          <div className="col-span-12 lg:col-span-3">
            <div className="border p-4" style={{ backgroundColor: 'var(--bg-base)', borderColor: 'var(--border)' }}>
              <div className="text-[10px] uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>
                System Info
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span style={{ color: 'var(--text-muted)' }}>Created by</span>
                  <span style={{ color: 'var(--text-primary)' }}>@b2bvic</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--text-muted)' }}>Version</span>
                  <span style={{ color: 'var(--accent)' }}>2.0.0</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--text-muted)' }}>Status</span>
                  <span style={{ color: 'var(--success)' }}>ONLINE</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                <div className="barcode w-full" style={{ color: 'var(--accent)' }}></div>
                <div className="text-[8px] uppercase tracking-widest mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
                  SWS-OS-{currentYear}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
            &copy; {currentYear} Scale With Search. All rights reserved.
          </div>
          <div className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
            Structure Information. Scale Intelligence.
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
