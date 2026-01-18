import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0c1220] border-t border-[#1e3a5f]">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-12 gap-8">

          {/* Brand Column */}
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl" style={{ color: '#2563eb' }}>🌐</span>
              <div>
                <div className="text-xl font-black uppercase tracking-tight text-[#e2e8f0]">
                  Scale With Search
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#64748b]">
                  AI Operating System
                </div>
              </div>
            </div>

            <p className="text-sm text-[#64748b] mb-6 max-w-sm">
              5 courses. 77 modules. Browser setup to production AI deployment.
              Built from 150+ client engagements.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com/b2bvic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#1e3a5f] flex items-center justify-center text-[#64748b] hover:border-[#2563eb] hover:text-[#2563eb] transition-colors"
              >
                <span className="text-xs font-bold">X</span>
              </a>
              <a
                href="https://linkedin.com/in/b2bvic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#1e3a5f] flex items-center justify-center text-[#64748b] hover:border-[#2563eb] hover:text-[#2563eb] transition-colors"
              >
                <span className="text-xs font-bold">in</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="col-span-6 lg:col-span-2">
            <div className="text-[10px] uppercase tracking-widest text-[#2563eb] font-bold mb-4">
              Navigate
            </div>
            <ul className="space-y-2 text-sm text-[#64748b]">
              <li><a href="#courses" className="hover:text-[#e2e8f0] transition-colors">Courses</a></li>
              <li><a href="#pricing" className="hover:text-[#e2e8f0] transition-colors">Pricing</a></li>
              <li><a href="#proof" className="hover:text-[#e2e8f0] transition-colors">Proof</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div className="col-span-6 lg:col-span-2">
            <div className="text-[10px] uppercase tracking-widest text-[#2563eb] font-bold mb-4">
              Courses
            </div>
            <ul className="space-y-2 text-sm text-[#64748b]">
              <li>Browser OS</li>
              <li>Applied Information</li>
              <li>Codified Genius</li>
              <li>Hybrid Intelligence</li>
              <li>LLM Ops</li>
            </ul>
          </div>

          {/* System Info */}
          <div className="col-span-12 lg:col-span-3">
            <div className="bg-[#080c14] border border-[#1e3a5f] p-4">
              <div className="text-[10px] uppercase tracking-widest text-[#64748b] mb-4">
                System Info
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Created by</span>
                  <span className="text-[#e2e8f0]">@b2bvic</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Version</span>
                  <span className="text-[#2563eb]">2.0.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Status</span>
                  <span className="text-[#22c55e]">ONLINE</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-[#1e3a5f]">
                <div className="barcode w-full text-[#2563eb]"></div>
                <div className="text-[8px] uppercase tracking-widest text-[#64748b] mt-2 text-center">
                  SWS-OS-{currentYear}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[10px] uppercase tracking-widest text-[#64748b]">
            &copy; {currentYear} Scale With Search. All rights reserved.
          </div>
          <div className="text-[10px] uppercase tracking-widest text-[#2563eb]">
            Structure Information. Scale Intelligence.
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
