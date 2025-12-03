import React from 'react';
import { SectionId } from '../types';
import { Phone, Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-lime-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <h2 className="text-3xl md:text-4xl font-black text-white mb-16 tracking-tight uppercase">
          Get In Touch<span className="text-lime-500">.</span>
        </h2>

        {/* Profile Card */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-blue-500/30 transition-colors duration-500">
            {/* Hover Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity duration-500 opacity-50 group-hover:opacity-100" />
            
            <div className="flex flex-col items-center">
                <div className="relative mb-8">
                    <div className="w-28 h-28 rounded-full p-1 bg-gradient-to-br from-blue-500 to-lime-500 shadow-xl shadow-blue-500/20">
                        <img 
                            src="https://placehold.co/200x200/1e293b/FFFFFF?text=MM" 
                            alt="Miloš Manojlović" 
                            className="w-full h-full rounded-full object-cover border-4 border-slate-800"
                        />
                    </div>
                    <div className="absolute bottom-0 right-0 bg-lime-500 text-slate-900 p-1.5 rounded-full border-4 border-slate-800">
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-2">Miloš Manojlović</h3>
                <p className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-8">CEO of Big-Moments.com</p>

                <p className="max-w-lg mx-auto text-slate-300 text-lg leading-relaxed mb-10">
                    We are building more than just careers; we are building legacies. 
                    Whether you are a player, a partner, or a club representative, I invite you to reach out directly.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                    <a 
                        href="mailto:info@bigmoments.com" 
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl transition-all border border-slate-600 hover:border-slate-500 group/btn"
                    >
                        <Mail className="w-5 h-5 text-lime-400 group-hover/btn:scale-110 transition-transform" />
                        info@bigmoments.com
                    </a>

                    <a 
                        href="tel:+381605007576" 
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-lime-500 hover:bg-lime-400 text-slate-900 font-bold rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(132,204,22,0.3)] hover:shadow-[0_0_30px_rgba(132,204,22,0.5)]"
                    >
                        <Phone className="w-5 h-5" />
                        + 381 60 500 75 76
                    </a>
                </div>
                
                <p className="mt-6 text-xs text-slate-500 font-bold uppercase tracking-wider">
                    Available for Instant Consultation
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;