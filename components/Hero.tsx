import React from "react";
import { ArrowRight, Trophy, CircleDot } from "lucide-react";
import { SectionId } from "../types";

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document
      .getElementById(SectionId.CONTACT)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id={SectionId.HOME}
      className="relative min-h-screen flex items-center bg-teal-950 overflow-hidden pt-24 pb-12"
    >
      {/* --- Background: Soccer Stadium --- */}
      <div className="absolute inset-0 z-0">
        {/* Stadium Image - Static high quality */}
        <div className="absolute inset-0">
          <img
            src="/images/field.webp"
            alt="Stadium Background"
            className="w-full h-full object-cover scale-105" // Slight scale for premium feel
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-teal-950/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/50 to-transparent opacity-90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Typography */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          {/* Tagline - Added mt-24 for mobile to push it well below fixed navbar */}
          <div className="mt-24 lg:mt-0 hidden md:inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-xs uppercase tracking-[0.2em] mb-8">
            <Trophy className="w-3 h-3 fill-current" />
            Est. 2011 • Belgrade
          </div>

          {/* Main Title */}
          <h1 className="pt-8 md:pt-0 mb-8 font-heading font-black text-5xl sm:text-6xl lg:text-7xl uppercase italic tracking-tighter leading-[0.9] select-none text-white">
            <div>Big Moments</div>
            <div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 pr-4 pb-2 inline-block">
                For Your Career
              </span>
            </div>
          </h1>

          {/* Description */}
          <div className="flex flex-col gap-4 mb-10 border-l-4 border-emerald-500 pl-6 text-left">
            <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-lg leading-relaxed">
              Your lifelong partner. We prioritize your potential and
              well-being.
            </p>
            <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-lg leading-relaxed flex items-center gap-2 flex-wrap">
              Not a database entry but part of a
              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-0.5 rounded-full font-bold uppercase tracking-wider text-sm">
                Family.
              </span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-black uppercase tracking-wider text-sm transition-all skew-x-[-12deg] hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none w-full sm:w-auto text-center"
            >
              <span className="block skew-x-[12deg] flex items-center justify-center gap-2">
                Start Your Journey <ArrowRight className="w-4 h-4" />
              </span>
            </button>

            <button
              onClick={() =>
                document
                  .getElementById(SectionId.PLAYERS)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 border-2 border-slate-600 text-white font-black uppercase tracking-wider text-sm hover:bg-white/10 transition-all skew-x-[-12deg] w-full sm:w-auto"
            >
              <span className="block skew-x-[12deg] text-center">
                View Squad
              </span>
            </button>
          </div>
        </div>

        {/* Right Column: Video Player */}
        <div className="relative h-auto min-h-[400px] w-full flex items-center justify-center lg:justify-end">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 lg:left-[60%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[80px]"></div>

          {/* Video Container */}
          <div className="relative z-10 w-full max-w-xl bg-teal-950/80 rounded-2xl border border-teal-800 shadow-2xl overflow-hidden group hover:border-emerald-500/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
            {/* YouTube Embed */}
            <div className="relative aspect-video w-full bg-teal-900 overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/MmPyn4z9rHw"
                title="Agency Showreel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="p-5 bg-teal-950/50 backdrop-blur-sm border-t border-teal-800/50">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-[10px] font-bold text-teal-300 uppercase tracking-widest">
                      Agency Showreel
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-tight">
                    Our Players, Our Passion
                  </h3>
                </div>
                <div className="hidden sm:flex h-8 w-8 rounded-full border border-teal-700 items-center justify-center text-teal-500">
                  <CircleDot className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 border border-teal-800/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
