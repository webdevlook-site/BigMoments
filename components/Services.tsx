import React from 'react';
import { SectionId, ServiceItem } from '../types';
import { Scale, HeartPulse, TrendingUp, Mic2, Briefcase, GraduationCap, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const services: ServiceItem[] = [
  { id: 1, title: "Career Management", description: "Strategic planning, contract negotiation, and club selection to maximize your professional value at every stage of your career.", iconName: "Briefcase" },
  { id: 2, title: "Legal Support", description: "Comprehensive legal protection, contract review, and dispute resolution ensuring your rights are always secured.", iconName: "Scale" },
  { id: 3, title: "Medical & Performance", description: "Access to elite medical facilities, nutritionists, and rehabilitation specialists to ensure peak physical condition.", iconName: "HeartPulse" },
  { id: 4, title: "Financial Planning", description: "Expert investment advice, tax planning, and wealth management for a secure future beyond football.", iconName: "TrendingUp" },
  { id: 5, title: "PR & Branding", description: "Building your personal brand, managing social media presence, and securing lucrative sponsorship opportunities.", iconName: "Mic2" },
  { id: 6, title: "Life Transition", description: "Dedicated support for life after professional sport, including education, business development, and adaptation.", iconName: "GraduationCap" },
];

const IconMap: Record<string, React.ElementType> = {
  Briefcase, Scale, HeartPulse, TrendingUp, Mic2, GraduationCap
};

const Services: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.ABOUT} className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl mix-blend-multiply" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-lime-100/50 rounded-full blur-3xl mix-blend-multiply" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header / About Split */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-blue-600 font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-lime-500"></span>
                        Who We Are
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-6">
                        More Than Just <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
                            An Agency.
                        </span>
                    </h2>
                    
                    <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-lime-500 shrink-0 mt-0.5" />
                            <p className="text-slate-600 font-medium">Strong long-term partnerships in top European leagues.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-lime-500 shrink-0 mt-0.5" />
                            <p className="text-slate-600 font-medium">Specialized in transition for young international talents.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-center mt-8">
                         <div className="w-12 h-1 bg-lime-500 rounded-full"></div>
                         <p className="text-slate-500 font-bold uppercase tracking-wide text-xs">Since 2011</p>
                    </div>
                </div>

                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 relative group hover:border-blue-100 transition-colors">
                     {/* Decorative quote mark */}
                    <div className="absolute -top-6 -left-4 text-9xl text-blue-100 leading-none select-none font-serif opacity-50 group-hover:opacity-100 group-hover:text-blue-300 transition-all duration-300">"</div>
                    
                    <div className="relative z-10 space-y-6">
                        <p className="text-slate-600 text-lg leading-relaxed">
                            <span className="font-bold text-slate-900">We don't just manage careers; we build families.</span> From the beginning, our priority has been providing the best possible service. 
                            We ensure you have the best training conditions and make the most of your talent.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            You need a lifelong partner you can rely on. We put your well-being first, and there are no compromises.
                            <br />
                            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider mt-4 block">
                                — The Big Moments Philosophy
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => {
                    const Icon = IconMap[service.iconName];
                    return (
                        <div key={service.id} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 border border-slate-100 hover:border-blue-100 transition-all duration-300 relative overflow-hidden">
                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-slate-50 to-slate-100 rounded-bl-[4rem] -mr-6 -mt-6 transition-transform group-hover:scale-125" />
                            
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-300">
                                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{service.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                <div className="flex items-center text-blue-600 font-bold text-xs uppercase tracking-wider opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    Learn More <ArrowUpRight className="w-3 h-3 ml-1" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Bottom CTA / Banner */}
            <div className="mt-20 bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
                 <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
                 {/* Glow effects */}
                 <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
                 <div className="absolute bottom-0 right-0 w-64 h-64 bg-lime-500/20 rounded-full blur-3xl translate-y-1/3 translate-x-1/3"></div>

                 <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                     <div>
                         <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to elevate your career?</h3>
                         <p className="text-slate-400">Join a team that treats you like family.</p>
                     </div>
                     <button 
                        onClick={scrollToContact}
                        className="px-8 py-4 bg-lime-500 hover:bg-lime-400 text-slate-900 font-bold rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(132,204,22,0.4)] whitespace-nowrap"
                     >
                         Get Represented
                     </button>
                 </div>
            </div>
        </div>
    </section>
  );
};

export default Services;