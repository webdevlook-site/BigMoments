import React from "react";
import { SectionId } from "../types";
import {
  Phone,
  Mail,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section
      id={SectionId.CONTACT}
      className="py-24 bg-teal-950 relative overflow-hidden border-b border-white/5"
    >
      {/* Background Texture - Dark "Carbon Fiber" feel */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      {/* Lighting Effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-teal-900/50 border border-teal-800 text-emerald-400 font-bold text-xs uppercase tracking-[0.2em] mb-6">
            <MessageSquare className="w-3 h-3" />
            Direct Line
          </div>
          <h2 className="font-heading text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.9]">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 pr-4 inline-block">
              Sign?
            </span>
          </h2>
        </div>

        {/* The "Agent Card" */}
        <div className="relative">
          {/* Card Border Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-[2.5rem] max-[400px]:rounded-2xl blur opacity-20"></div>

          <div className="relative bg-teal-900/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] max-[400px]:rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Left: Photo / Profile */}
              <div className="md:col-span-2 bg-gradient-to-br from-teal-800 to-teal-950 relative p-8 max-[400px]:p-5 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-white/5">
                <div className="relative w-40 h-40 max-[400px]:w-28 max-[400px]:h-28 mb-6 max-[400px]:mb-4 group">
                  <div className="absolute inset-0 bg-emerald-500 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <img
                    src="images/milos-manojlovic.png"
                    alt="Miloš Manojlović"
                    className="w-full h-full rounded-full object-cover border-4 max-[400px]:border-2 border-teal-700 relative z-10 shadow-xl"
                  />
                  <div className="absolute bottom-2 max-[400px]:bottom-1 right-2 max-[400px]:right-1 z-20 bg-emerald-500 text-white p-1 rounded-full border-2 border-teal-900">
                    <CheckCircle2 className="w-4 h-4 max-[400px]:w-3 max-[400px]:h-3" />
                  </div>
                </div>
                <h3 className="text-2xl max-[400px]:text-lg font-black text-white uppercase italic tracking-tight leading-none mb-1">
                  Miloš Manojlović
                </h3>
                <p className="text-emerald-400 text-xs max-[400px]:text-[10px] font-bold uppercase tracking-widest mb-6 max-[400px]:mb-4">
                  CEO & FOUNDER
                </p>
              </div>

              {/* Right: Contact Actions */}
              <div className="md:col-span-3 p-8 md:p-12 max-[400px]:p-5 flex flex-col justify-center">
                <p className="text-slate-300 text-lg md:text-xl max-[400px]:text-sm font-medium leading-relaxed mb-10 max-[400px]:mb-6">
                  "Success in football is about timing. Don't wait for the
                  opportunity - create it. Contact me directly and let's discuss
                  your future."
                </p>

                <div className="space-y-4 max-[400px]:space-y-3">
                  <a
                    href="mailto:info@bigmoments.com"
                    className="group flex items-center justify-between p-4 max-[400px]:p-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/50 rounded-xl max-[400px]:rounded-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 max-[400px]:gap-2">
                      <div className="w-10 h-10 max-[400px]:w-8 max-[400px]:h-8 rounded-lg max-[400px]:rounded-md bg-teal-950 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                        <Mail className="w-5 h-5 max-[400px]:w-4 max-[400px]:h-4" />
                      </div>
                      <div className="text-left">
                        <div className="text-[10px] max-[400px]:text-[8px] text-slate-400 uppercase tracking-wider font-bold">
                          Email Inquiry
                        </div>
                        <div className="text-white font-bold font-mono max-[400px]:text-xs">
                          info@bigmoments.com
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 max-[400px]:w-4 max-[400px]:h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </a>

                  <a
                    href="tel:+381605007576"
                    className="group flex items-center justify-between p-4 max-[400px]:p-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl max-[400px]:rounded-lg shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 max-[400px]:gap-2">
                      <div className="w-10 h-10 max-[400px]:w-8 max-[400px]:h-8 rounded-lg max-[400px]:rounded-md bg-white/20 flex items-center justify-center text-white">
                        <Phone className="w-5 h-5 max-[400px]:w-4 max-[400px]:h-4" />
                      </div>
                      <div className="text-left">
                        <div className="text-[10px] max-[400px]:text-[8px] text-emerald-100 uppercase tracking-wider font-bold">
                          Call / WhatsApp
                        </div>
                        <div className="text-white font-bold font-mono max-[400px]:text-xs">
                          + 381 60 500 75 76
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 max-[400px]:w-4 max-[400px]:h-4 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
