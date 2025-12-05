import React, { useEffect, useRef, useState } from 'react';
import { Globe, Plane, Handshake, ShieldCheck, MapPin, Radar, ArrowRight } from 'lucide-react';

const GlobalNetwork: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background: Subtle Pitch Markings */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-black"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-black rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left: Content - "The Pitch" */}
          <div className={`order-2 lg:order-1 reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-teal-50 border border-teal-100 text-teal-700 font-bold text-xs uppercase tracking-[0.2em] mb-6">
                <Radar className="w-4 h-4" />
                Transfer Market
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-[0.9] uppercase italic tracking-tighter">
              Your Ticket to the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
                Big Leagues.
              </span>
            </h2>
            
            <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium border-l-4 border-teal-500 pl-6">
              We specialize in the complex logistics of international transfers. From visa processing to cultural adaptation, we ensure you land ready to play.
            </p>

            <div className="grid gap-4">
                {/* Logistics Card */}
                <div className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-teal-500 transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-teal-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                    <div className="flex items-start gap-5 relative z-10">
                        <div className="p-3 rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                            <Plane className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg uppercase tracking-tight">Relocation Logistics</h4>
                            <p className="text-slate-500 text-sm mt-1">Visa support, housing, and travel arrangements managed by experts.</p>
                        </div>
                    </div>
                </div>

                {/* Scouting Card */}
                <div className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-emerald-500 transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                    <div className="flex items-start gap-5 relative z-10">
                        <div className="p-3 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg uppercase tracking-tight">Trusted Network</h4>
                            <p className="text-slate-500 text-sm mt-1">Direct lines to sporting directors in Top 5 European leagues.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="mt-10 flex items-center gap-4 text-sm font-bold text-slate-400 uppercase tracking-widest">
                <div className="h-[1px] w-12 bg-slate-300"></div>
                <span>Global Coverage</span>
            </div>
          </div>

          {/* Right: Visualization - "The Radar" */}
          <div className={`order-1 lg:order-2 relative h-[400px] md:h-[500px] w-full flex items-center justify-center reveal-on-scroll delay-200 ${isVisible ? 'is-visible' : ''}`}>
              
              {/* Radar Circle Container */}
              <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                  {/* Concentric Circles */}
                  <div className="absolute inset-0 rounded-full border border-slate-200"></div>
                  <div className="absolute inset-[15%] rounded-full border border-slate-200"></div>
                  <div className="absolute inset-[30%] rounded-full border border-slate-200 bg-slate-100/50"></div>
                  
                  {/* Crosshairs */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-slate-200"></div>
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-slate-200"></div>

                  {/* Scanning Radar Effect */}
                  <div className="absolute inset-0 rounded-full animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_deg,transparent_270deg,rgba(16,185,129,0.1)_360deg)]"></div>

                  {/* Central Node (Europe) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="relative">
                          <div className="w-24 h-24 bg-teal-950 rounded-full flex items-center justify-center border-4 border-white shadow-2xl relative z-10">
                              <span className="text-white font-black text-2xl">EU</span>
                          </div>
                          {/* Ping Effect */}
                          <div className="absolute inset-0 rounded-full bg-teal-900 animate-ping opacity-20"></div>
                      </div>
                  </div>

                  {/* Orbiting Nodes (Talent Regions) */}
                  {/* Node 1: Americas */}
                  <div className="absolute top-[20%] left-[20%] animate-pulse">
                      <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-lg border border-slate-100">
                          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                          <span className="text-[10px] font-bold text-slate-600 uppercase">Americas</span>
                      </div>
                  </div>

                  {/* Node 2: Africa */}
                  <div className="absolute bottom-[25%] left-[25%] animate-pulse delay-700">
                      <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-lg border border-slate-100">
                          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                          <span className="text-[10px] font-bold text-slate-600 uppercase">Africa</span>
                      </div>
                  </div>

                  {/* Node 3: Asia */}
                  <div className="absolute top-[50%] right-[10%] animate-pulse delay-300">
                      <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-lg border border-slate-100">
                          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                          <span className="text-[10px] font-bold text-slate-600 uppercase">Asia</span>
                      </div>
                  </div>
              </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;