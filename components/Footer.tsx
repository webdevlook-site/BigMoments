import React, { useEffect, useRef, useState } from "react";
import { Instagram, Facebook, ArrowUp } from "lucide-react";
import { SectionId } from "../types";

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className="bg-teal-950 text-white py-12 relative z-20"
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll ${
          isVisible ? "is-visible" : ""
        }`}
      >
        {/* Top Row: Brand & Scroll to Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12 border-b border-white/5 pb-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 p-[1px]">
              <div className="w-full h-full rounded-full bg-teal-950 flex items-center justify-center">
                <span className="font-black italic text-white text-sm">BM</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black uppercase italic tracking-tight leading-none">
                Big Moments
              </h3>
              <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-[0.2em]">
                Management
              </p>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors focus:outline-none"
          >
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-white">
              Back to Top
            </span>
            <ArrowUp className="w-4 h-4 text-emerald-500 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Row: Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-xs font-medium">
            © {new Date().getFullYear()} Big Moments Management, all rights
            reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-900 border border-solid border-white/5 text-slate-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-[background-color,border-color,transform,color] duration-300 transform hover:scale-110 focus:outline-none focus:ring-0 active:outline-none outline-none no-underline"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-900 border border-solid border-white/5 text-slate-400 hover:text-white hover:bg-teal-600 hover:border-teal-500 transition-[background-color,border-color,transform,color] duration-300 transform hover:scale-110 focus:outline-none focus:ring-0 active:outline-none outline-none no-underline"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
