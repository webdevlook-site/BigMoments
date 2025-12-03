import React from "react";
import { ArrowRight, Star, Shield, Heart, Users } from "lucide-react";
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
      className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden pt-36 pb-12 lg:pt-24"
    >
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-blue-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-lime-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-800/40 border border-blue-700/50 text-lime-400 font-bold text-xs uppercase tracking-widest mb-8 backdrop-blur-sm">
            <Star className="w-3 h-3 fill-current" />
            Est. 2011 Belgrade
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
            BIG MOMENTS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">
              FOR YOUR CAREER
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
            We are your lifelong partner in professional football. With an
            impeccable reputation, we prioritize your well-being and potential
            above all else. You aren't just a player in a database - you are
            family. Let's create big moments together.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 py-4 bg-lime-500 hover:bg-lime-400 text-blue-950 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(132,204,22,0.3)] hover:shadow-[0_0_30px_rgba(132,204,22,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Social Proof / Mini Roster Snippet */}
            <div className="flex items-center gap-4 px-4 py-2 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 overflow-hidden relative"
                  >
                    <img
                      src={`https://placehold.co/100x100/334155/FFFFFF?text=${i}`}
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                  50+
                </div>
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-white font-bold text-sm leading-tight">
                  Elite Clients
                </p>
                <p className="text-slate-400 text-xs">Join the family</p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Content - Dynamic Grid/Image */}
        <div className="relative h-[400px] sm:h-[500px] lg:h-[650px] flex items-center justify-center lg:justify-end">
          {/* Main Image Container */}
          <div className="relative w-full max-w-lg h-full">
            {/* Background Rotated Box */}
            <div className="absolute top-8 right-0 sm:-right-4 w-3/4 h-3/4 bg-slate-800 rounded-[2rem] rotate-6 opacity-60 border border-slate-700/50 backdrop-blur-md z-0" />

            {/* Main Image */}
            <div className="absolute top-0 left-4 sm:left-0 w-4/5 h-4/5 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-slate-800 -rotate-2 hover:rotate-0 transition-all duration-700 z-10 group cursor-pointer">
              <img
                src="https://placehold.co/800x1000/1e293b/FFFFFF?text=Player+Visual"
                alt="Professional Football Training"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                  <span className="text-lime-400 text-xs font-bold tracking-widest uppercase">
                    Active Roster
                  </span>
                </div>
                <p className="font-bold text-xl sm:text-2xl text-white leading-tight">
                  Focus on the game.
                </p>
                <p className="text-slate-300 text-sm">We handle the rest.</p>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute bottom-12 sm:bottom-24 -right-4 sm:-right-8 z-20">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-lime-500 rounded-lg text-blue-900">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Family First</p>
                    <p className="text-lime-300 text-xs">Lifelong Partner</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-12 sm:top-20 -left-4 sm:-left-8 z-20">
              <div className="bg-blue-900/90 backdrop-blur-xl border border-blue-700 p-4 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-700 rounded-lg text-white">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Full Support</p>
                    <p className="text-blue-200 text-xs">
                      Legal • Medical • PR
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
