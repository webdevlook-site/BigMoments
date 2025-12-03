import React from 'react';
import { Globe, Plane, Handshake, ShieldCheck, MapPin } from 'lucide-react';

const GlobalNetwork: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-blue-600 font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
                <Globe className="w-3 h-3" />
                Global Operations
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
              Bridging the gap to the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-lime-600">
                European Stage.
              </span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We specialize in the transition and adaptation of young players from developing countries in Europe, Africa, the Americas, and Asia. 
            </p>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Moving continents is challenging. Our job is to handle the logistics, culture, and settlement so you can <span className="font-bold text-slate-900">focus entirely on giving your best on the field.</span>
            </p>

            <div className="space-y-2">
                {/* Feature 1 */}
                <div className="group flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 cursor-default border border-transparent hover:border-slate-100">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <Plane className="w-6 h-6 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-lg group-hover:text-blue-700 transition-colors">Full Transition Support</h4>
                        <p className="text-slate-500 text-sm leading-relaxed mt-1 group-hover:text-slate-600">
                            We manage every aspect of your relocation and cultural adaptation, allowing you to settle quickly and perform at your best.
                        </p>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="group flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 cursor-default border border-transparent hover:border-slate-100">
                    <div className="w-12 h-12 rounded-xl bg-lime-50 flex items-center justify-center shrink-0 text-lime-600 group-hover:bg-lime-500 group-hover:text-slate-900 transition-colors duration-300">
                        <Handshake className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-lg group-hover:text-lime-600 transition-colors">Trusted Network</h4>
                        <p className="text-slate-500 text-sm leading-relaxed mt-1 group-hover:text-slate-600">
                            Strong, long-term partnerships with clubs and colleagues in all top football countries in Europe.
                        </p>
                    </div>
                </div>

                {/* Feature 3 */}
                <div className="group flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 cursor-default border border-transparent hover:border-slate-100">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 text-slate-600 group-hover:bg-slate-800 group-hover:text-white transition-colors duration-300">
                        <ShieldCheck className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-lg group-hover:text-slate-800 transition-colors">Impeccable Reputation</h4>
                        <p className="text-slate-500 text-sm leading-relaxed mt-1 group-hover:text-slate-600">
                            Founded in 2011, our team is built on a strong football background and uncompromised integrity.
                        </p>
                    </div>
                </div>
            </div>
          </div>

          {/* Right: Visualization */}
          <div className="relative">
              {/* Decorative Blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-100 to-lime-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
              
              <div className="relative bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl border border-slate-700 overflow-hidden min-h-[500px] flex flex-col items-center justify-center group">
                  
                  {/* Central Hub (Europe) */}
                  <div className="relative z-10">
                      <div className="w-32 h-32 rounded-full border border-blue-500/30 bg-blue-900/20 backdrop-blur-sm flex items-center justify-center relative">
                          <div className="absolute inset-0 rounded-full border border-blue-400 opacity-20 animate-ping" />
                          <div className="w-24 h-24 rounded-full bg-slate-900 border border-blue-500 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                              <div className="text-center">
                                  <span className="block text-2xl font-black text-white">EU</span>
                                  <span className="text-[10px] text-blue-400 font-bold tracking-widest uppercase">Base</span>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Connecting Nodes */}
                  <div className="absolute top-1/4 left-1/4 animate-pulse">
                      <div className="flex items-center gap-2">
                         <div className="w-3 h-3 bg-lime-500 rounded-full shadow-[0_0_10px_rgba(132,204,22,0.8)]" />
                         <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Americas</span>
                      </div>
                  </div>

                  <div className="absolute bottom-1/3 right-1/4 animate-pulse delay-700">
                      <div className="flex flex-row-reverse items-center gap-2">
                         <div className="w-3 h-3 bg-lime-500 rounded-full shadow-[0_0_10px_rgba(132,204,22,0.8)]" />
                         <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Asia</span>
                      </div>
                  </div>

                  <div className="absolute bottom-1/4 left-1/3 animate-pulse delay-300">
                      <div className="flex items-center gap-2">
                         <div className="w-3 h-3 bg-lime-500 rounded-full shadow-[0_0_10px_rgba(132,204,22,0.8)]" />
                         <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Africa</span>
                      </div>
                  </div>

                  {/* Headquarters Card */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-max max-w-[90%]">
                      <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 p-4 pr-6 rounded-2xl flex items-center gap-4 shadow-2xl shadow-black/50 hover:scale-105 transition-transform duration-300">
                          <div className="relative shrink-0">
                              <div className="relative w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center border border-lime-500/30">
                                  <MapPin className="w-5 h-5 text-lime-400" />
                              </div>
                          </div>
                          <div className="text-left">
                              <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-0.5">Headquarters</p>
                              <p className="text-white font-bold text-base leading-none">Belgrade, Serbia</p>
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

export default GlobalNetwork;