import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-none -mt-1 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        
        {/* Logo Section */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2.5 mb-4">
            <div className="flex flex-col items-center md:items-start">
              <div className="text-xl text-white tracking-tight leading-none">
                <span className="font-extrabold">BIG</span>
                <span className="font-normal">MOMENTS</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-lime-400">
                Sport Management Agency
              </span>
            </div>
          </div>
          <p className="text-slate-400 text-xs">
            Copyright © 2011 & beyond by BigMoments. All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a href="#" className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-lime-500 hover:text-slate-900 transition-all duration-300 hover:scale-110 outline-none focus:outline-none no-underline">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 outline-none focus:outline-none no-underline">
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;