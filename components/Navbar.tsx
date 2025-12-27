import React, { useState, useLayoutEffect, useEffect } from "react";
import { Menu, X, ArrowRight, Instagram, Facebook } from "lucide-react";
import { SectionId } from "../types";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(SectionId.HOME);

  useEffect(() => {
    // Add a small delay to prevent initial transition flash
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Track active section with IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = [
      SectionId.HOME,
      SectionId.ABOUT,
      SectionId.PLAYERS,
      SectionId.NEWS,
    ];

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  // useLayoutEffect ensures state is correct before paint
  useLayoutEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useLayoutEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    setIsMobileMenuOpen(false);

    // Instant scroll
    const yOffset = 0;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", id: SectionId.HOME },
    { label: "About", id: SectionId.ABOUT },
    { label: "Roster", id: SectionId.PLAYERS },
    { label: "News", id: SectionId.NEWS },
  ];

  return (
    <>
      {/* Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-6 focus:py-3 focus:bg-emerald-600 focus:text-white focus:rounded-lg focus:font-bold focus:shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
      >
        Skip to main content
      </a>

      {/* Floating Header Container - Fixed positioning, centered */}
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 pointer-events-none ${
          isScrolled ? "pt-2 md:pt-4" : "pt-6 md:pt-8"
        }`}
      >
        {/* The Stadium Pill - The actual navbar content */}
        <div
          className={`pointer-events-auto relative w-[92%] max-w-6xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
            isScrolled
              ? "bg-teal-950/95 py-2.5 px-4 md:px-5 shadow-xl shadow-black/20 border-teal-800/50"
              : "bg-teal-950/80 py-3 px-5 md:px-6 shadow-2xl shadow-black/10 border-white/10"
          } backdrop-blur-xl rounded-full border flex items-center justify-between overflow-hidden group`}
        >
          {/* Glossy Top Highlight */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          {/* Left: Brand Identity (Badge Style) */}
          <div
            className="flex items-center gap-3 cursor-pointer group/logo select-none"
            onClick={() => scrollToSection(SectionId.HOME)}
          >
            <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 p-[1px] shadow-lg shadow-emerald-900/50 group-hover/logo:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-teal-950 flex items-center justify-center border border-white/10">
                <span className="font-black italic text-white text-xs leading-none transform -skew-x-6">
                  BM
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-white uppercase italic tracking-tight leading-none text-base md:text-lg group-hover/logo:text-emerald-400 transition-colors">
                <span className="font-black" style={{ fontWeight: 900 }}>BIG</span>
                <span className="font-normal" style={{ fontWeight: 400 }}>MOMENTS</span>
              </span>
              <span className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] leading-none group-hover/logo:text-white transition-colors">
                Management
              </span>
            </div>
          </div>

          {/* Center: Tactical Navigation (Desktop) - Midfield Layout */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1 bg-black/20 rounded-full p-1 border border-white/5 mx-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  aria-label={`Navigate to ${link.label} section`}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-teal-950 ${
                    isActive
                      ? "text-white bg-emerald-600 shadow-lg shadow-emerald-900/50"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right: Action Area */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection(SectionId.CONTACT)}
              aria-label="Contact us"
              className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] group/btn shadow-lg shadow-emerald-900/20 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-teal-950"
            >
              <span>Contact</span>
              {/* Custom Soccer Ball SVG */}
              <span className="group-hover/btn:rotate-180 transition-transform duration-500">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16l-4-2.5V8.5L12 6l4 2.5v5Z" />
                  <path d="M12 6V2" />
                  <path d="M8 8.5L4.5 6.5" />
                  <path d="M8 13.5L4.5 15.5" />
                  <path d="M12 16v4" />
                  <path d="M16 13.5l3.5 2" />
                  <path d="M16 8.5l3.5 -2" />
                </svg>
              </span>
            </button>

            {/* Mobile Toggle */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/5"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-teal-950 z-[60] flex flex-col justify-center items-center ${
          isMounted ? "transition-all duration-500 ease-in-out" : "duration-0"
        } ${
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-8"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-8 right-8 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={24} />
        </button>

        {/* Menu Items */}
        <div className="flex flex-col items-center gap-8 w-full px-8 text-center">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative font-heading text-4xl font-black uppercase tracking-tight transition-all duration-300 ${
                  isActive
                    ? "text-emerald-400 italic scale-110"
                    : "text-white hover:text-emerald-400 hover:italic hover:scale-105"
                }`}
                style={{ fontWeight: 900 }}
              >
                {link.label}
                {/* Active indicator underline */}
                {isActive && (
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-linear-to-r from-emerald-400 to-teal-400 rounded-full"></span>
                )}
              </button>
            );
          })}

          <div className="w-16 h-1 bg-white/10 rounded-full my-4"></div>

          <button
            onClick={() => scrollToSection(SectionId.CONTACT)}
            className="px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl font-black text-lg uppercase tracking-wider shadow-2xl hover:scale-105 transition-transform duration-300 flex items-center gap-3"
            style={{ fontWeight: 900 }}
          >
            Let's Talk <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Social Icons */}
        <div className="absolute bottom-12 left-0 w-full flex justify-center gap-6">
          <a
            href="#"
            className="p-4 bg-teal-900/50 border border-white/5 rounded-full text-slate-400 hover:text-white hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="p-4 bg-teal-900/50 border border-white/5 rounded-full text-slate-400 hover:text-white hover:bg-teal-600 transition-all duration-300 hover:scale-110"
          >
            <Facebook className="w-6 h-6" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
