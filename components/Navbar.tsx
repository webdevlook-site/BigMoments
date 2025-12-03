import React, { useState, useLayoutEffect } from 'react';
import { Menu, X, ArrowRight, Instagram, Facebook } from 'lucide-react';
import { SectionId } from '../types';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // useLayoutEffect ensures state is correct before paint
  useLayoutEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useLayoutEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    setIsMobileMenuOpen(false);
    
    // Instant scroll - removed timeout/delay
    // Set offset to 0 so the section background goes behind the glass navbar
    const yOffset = 0; 
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    
    window.scrollTo({top: y, behavior: 'smooth'});
  };

  const navLinks = [
    { label: 'Home', id: SectionId.HOME },
    { label: 'About & Services', id: SectionId.ABOUT },
    { label: 'Our Players', id: SectionId.PLAYERS },
  ];

  // Logic:
  // 1. We show the white background ONLY if we are scrolled AND the menu is closed.
  const showWhiteBg = isScrolled && !isMobileMenuOpen;
  
  // 2. Padding depends only on scroll (prevents layout jump)
  const navPaddingClass = isScrolled ? 'py-3' : 'py-5';

  // 3. Text color depends on the background state
  const isDarkText = showWhiteBg;

  // 4. Background Transition Duration
  const bgTransitionDuration = isMobileMenuOpen ? 'duration-0' : 'duration-300';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-[padding] ease-in-out duration-300 ${navPaddingClass}`}>
      
      {/* 
        Independent Background Layer 
      */}
      <div className={`absolute inset-0 bg-white/95 backdrop-blur-md shadow-sm transition-opacity ease-in-out -z-10 ${
          showWhiteBg ? 'opacity-100' : 'opacity-0'
        } ${bgTransitionDuration}`} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer z-50 relative"
            onClick={() => scrollToSection(SectionId.HOME)}
          >
            <div className="flex flex-col">
              <div className={`text-xl tracking-tight leading-none transition-colors duration-300 ${
                isDarkText ? 'text-slate-900' : 'text-white'
              }`}>
                <span className="font-extrabold">BIG</span>
                <span className="font-normal">MOMENTS</span>
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${
                isDarkText ? 'text-blue-600' : 'text-lime-400'
              }`}>
                Sport Management Agency
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 relative z-50">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 hover:-translate-y-0.5 ${
                  isDarkText 
                    ? 'text-slate-600 hover:text-blue-600' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            <div className="ml-6">
                <button
                    onClick={() => scrollToSection(SectionId.CONTACT)}
                    className={`group relative px-6 py-2.5 rounded-full font-bold uppercase text-xs tracking-widest transition-all duration-300 ${
                        isDarkText
                        ? 'bg-slate-900 text-white hover:bg-blue-700 hover:shadow-lg'
                        : 'bg-lime-400 text-slate-900 hover:bg-lime-300 shadow-[0_0_20px_rgba(163,230,53,0.3)]'
                    }`}
                >
                    <span className="flex items-center gap-2">
                        Contact
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                </button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 p-2 relative outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`transition-colors duration-300 ${isDarkText ? 'text-slate-900' : 'text-white'}`}>
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div className={`fixed inset-0 bg-slate-900 z-40 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center ${
        isMobileMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
      }`}>
          {/* Menu Items */}
          <div className="flex flex-col items-center gap-8 w-full px-8 text-center">
              {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="relative text-3xl font-black text-white hover:text-lime-400 transition-colors duration-300"
                  >
                      {link.label}
                  </button>
              ))}
              
              <button
                onClick={() => scrollToSection(SectionId.CONTACT)}
                className="mt-8 px-12 py-4 bg-lime-500 text-slate-900 rounded-2xl font-bold text-lg uppercase tracking-wider shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                Contact
              </button>
          </div>

          {/* Social Icons */}
          <div className="absolute bottom-10 left-0 w-full flex justify-center gap-6">
              <a href="#" className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-lime-500 hover:text-slate-900 transition-all duration-300 hover:scale-110 outline-none focus:outline-none no-underline">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 outline-none focus:outline-none no-underline">
                <Facebook className="w-6 h-6" />
              </a>
          </div>
      </div>
    </header>
  );
};

export default Navbar;