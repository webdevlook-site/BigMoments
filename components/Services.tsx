import React, { useEffect, useRef, useState } from "react";
import { SectionId, ServiceItem } from "../types";
import {
  Scale,
  HeartPulse,
  TrendingUp,
  Mic2,
  Briefcase,
  GraduationCap,
  ArrowUpRight,
  CheckCircle2,
  Quote,
  Layout,
  X,
  CheckCircle,
  Target,
} from "lucide-react";
import { servicesData, ServiceDetail } from "../data/servicesData";

const IconMap: Record<string, React.ElementType> = {
  Briefcase,
  Scale,
  HeartPulse,
  TrendingUp,
  Mic2,
  GraduationCap,
};

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(
    null
  );
  const [isClosing, setIsClosing] = useState(false);
  const [isModalMounted, setIsModalMounted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedService]);

  const handleCardClick = (id: number) => {
    const service = servicesData.find((s) => s.id === id);
    if (service) {
      setSelectedService(service);
      setIsClosing(false);
      // Trigger opening animation after modal mounts
      setTimeout(() => {
        setIsModalMounted(true);
      }, 10);
    }
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setIsModalMounted(false);
    setTimeout(() => {
      setSelectedService(null);
      setIsClosing(false);
    }, 300); // Match animation duration
  };

  const scrollToContact = () => {
    document
      .getElementById(SectionId.CONTACT)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        ref={sectionRef}
        id={SectionId.ABOUT}
        className="py-24 bg-slate-50 relative overflow-hidden"
      >
        {/* Background Decorations: Tactical Grid (Dark lines on light bg) */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/60 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-100/60 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header / Philosophy Split */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
            {/* Text Content */}
            <div
              className={`reveal-on-scroll ${isVisible ? "is-visible" : ""}`}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-slate-200 text-teal-700 font-bold text-xs uppercase tracking-[0.2em] mb-6 shadow-sm">
                <Layout className="w-3 h-3" />
                Our Philosophy
              </div>
              <h2 className="font-heading text-4xl sm:text-5xl font-black text-slate-900 leading-[0.9] mb-8 uppercase italic tracking-tight">
                More Than Just <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  An Agency.
                </span>
              </h2>

              <p className="text-slate-600 font-medium text-lg mb-8 leading-relaxed">
                Founded in 2011 in Belgrade, our team members bring an
                impeccable reputation and a very strong football background.
                From the beginning, our priority has been providing the best
                possible service for our clients and partners.
              </p>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4 group">
                  <div className="mt-1 p-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                  </div>
                  <p className="text-slate-600 font-medium text-lg">
                    Strong long-term partnerships with clubs in all top European
                    football countries.
                  </p>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="mt-1 p-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                  </div>
                  <p className="text-slate-600 font-medium text-lg">
                    Specialized in transition and adaptation for young players
                    from Africa, Americas, and Asia.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center mt-10">
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-transparent rounded-full"></div>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
                  Est. 2011 • Belgrade
                </p>
              </div>
            </div>

            {/* Quote Card */}
            <div
              className={`relative reveal-on-scroll delay-200 ${
                isVisible ? "is-visible" : ""
              }`}
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-emerald-500/30 rounded-tr-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-emerald-500/30 rounded-bl-3xl"></div>

              <div className="bg-teal-950 p-8 md:p-10 rounded-2xl border border-teal-800 relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-500 shadow-2xl">
                <Quote className="absolute top-6 right-6 w-20 h-20 text-white/5 rotate-180 group-hover:scale-110 transition-transform duration-700" />

                <div className="relative z-10 space-y-6">
                  <p className="text-white text-xl md:text-2xl font-light italic leading-relaxed">
                    "You are not just another player in the database, you are{" "}
                    <span className="text-emerald-400 font-bold not-italic">
                      part of the family.
                    </span>{" "}
                    We put your well being first, and there are no compromises
                    there."
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <div className="w-15 h-15 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center overflow-hidden">
                      <img
                        src="/images/milos-manojlovic-g.png"
                        alt="CEO"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <div className="text-white font-bold uppercase text-md tracking-wider">
                        Miloš Manojlović
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid Title */}
          <div
            className={`flex items-end justify-between mb-12 border-b border-slate-200 pb-6 reveal-on-scroll ${
              isVisible ? "is-visible" : ""
            }`}
          >
            <div>
              <h3 className="text-3xl font-black text-slate-900 uppercase italic tracking-tight">
                The Game Plan
              </h3>
            </div>
            <div className="hidden sm:block text-right">
              <div className="text-xs font-bold text-teal-700 uppercase tracking-widest">
                Tactical Overview
              </div>
            </div>
          </div>

          {/* Tactical Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, index) => {
              const Icon = IconMap[service.iconName];
              const delayClass =
                index === 0
                  ? ""
                  : index === 1
                  ? "delay-100"
                  : index === 2
                  ? "delay-200"
                  : "delay-300";
              const isActive = activeCard === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => handleCardClick(service.id)}
                  className={`group relative bg-white rounded-xl p-8 border border-slate-200 transition-all duration-300 ease-in-out overflow-hidden shadow-sm reveal-on-scroll cursor-pointer ${delayClass} ${
                    isVisible ? "is-visible" : ""
                  } ${
                    isActive
                      ? "border-emerald-500/50 -translate-y-1 shadow-xl"
                      : "hover:border-emerald-500/50 hover:-translate-y-1 hover:shadow-xl"
                  }`}
                >
                  <div
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500 transform transition-transform duration-300 ease-in-out origin-left ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></div>

                  <div
                    className={`absolute -bottom-6 -right-6 text-[120px] font-black leading-none select-none transition-colors duration-500 ease-in-out font-mono italic ${
                      isActive
                        ? "text-emerald-50/80"
                        : "text-slate-100 group-hover:text-emerald-50/80"
                    }`}
                  >
                    0{index + 1}
                  </div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div
                        className={`w-12 h-12 rounded-lg bg-slate-50 border flex items-center justify-center transition-all duration-300 ease-in-out ${
                          isActive
                            ? "border-emerald-500/50 bg-emerald-50"
                            : "border-slate-100 group-hover:border-emerald-500/50 group-hover:bg-emerald-50"
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 transition-colors duration-300 ease-in-out ${
                            isActive
                              ? "text-emerald-600"
                              : "text-slate-400 group-hover:text-emerald-600"
                          }`}
                        />
                      </div>
                      <ArrowUpRight
                        className={`w-5 h-5 transition-colors duration-300 ease-in-out ${
                          isActive
                            ? "text-emerald-500"
                            : "text-slate-300 group-hover:text-emerald-500"
                        }`}
                      />
                    </div>

                    <h3
                      className={`text-xl font-bold mb-3 transition-colors duration-300 ease-in-out uppercase tracking-wide italic ${
                        isActive
                          ? "text-emerald-700"
                          : "text-slate-900 group-hover:text-emerald-700"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-slate-600 text-sm leading-relaxed border-l-2 pl-3 transition-colors duration-300 ease-in-out ${
                        isActive
                          ? "border-emerald-500/30"
                          : "border-slate-100 group-hover:border-emerald-500/30"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA Banner */}
          <div
            className={`mt-20 reveal-on-scroll delay-300 ${
              isVisible ? "is-visible" : ""
            }`}
          >
            <div
              className="relative bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 rounded-2xl p-1 overflow-hidden group cursor-pointer"
              onClick={scrollToContact}
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-transparent to-teal-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Diagonal stripes pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.1)_20px,rgba(255,255,255,0.1)_40px)]"></div>
              </div>

              <div className="bg-gradient-to-br from-teal-950 via-teal-900 to-teal-950 backdrop-blur-md rounded-xl p-8 md:p-12 relative overflow-hidden">
                {/* Multiple animated shine effects */}
                <div className="absolute top-0 bottom-0 w-32 bg-white/5 skew-x-[-20deg] blur-xl -left-40 group-hover:left-[120%] transition-all duration-1000 ease-in-out"></div>
                <div className="absolute top-0 bottom-0 w-24 bg-emerald-400/10 skew-x-[-20deg] blur-2xl -left-32 group-hover:left-[120%] transition-all duration-1200 ease-in-out delay-100"></div>

                {/* Glowing orbs */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl group-hover:bg-emerald-400/30 transition-all duration-700"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl group-hover:bg-teal-400/30 transition-all duration-700"></div>

                {/* Noise texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 mix-blend-overlay"></div>

                {/* Radial gradient overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]"></div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tight mb-2 drop-shadow-lg">
                      Ready to turn Pro?
                    </h3>
                    <p className="text-emerald-200/90 font-medium">
                      Let's go together through all big moments!
                    </p>
                  </div>

                  <button className="px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-black uppercase tracking-wider text-sm skew-x-[-10deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-300 ease-in-out">
                    <div className="skew-x-[10deg] flex items-center gap-2">
                      Get Represented <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <>
          <div
            className={`fixed inset-0 z-200 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm md:p-4 transition-opacity duration-300 ${
              isModalMounted && !isClosing ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleCloseModal}
          >
            <div
              className={`bg-white rounded-t-3xl md:rounded-2xl max-w-4xl w-full max-h-[92vh] md:max-h-[90vh] overflow-y-auto relative shadow-2xl transition-all duration-300 ease-out ${
                isModalMounted && !isClosing
                  ? "translate-y-0 md:scale-100 md:opacity-100"
                  : "translate-y-full md:translate-y-0 md:scale-95 md:opacity-0"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div className="sticky top-0 right-0 z-20 flex justify-end p-4 md:p-6 bg-white/95 backdrop-blur-sm border-b border-slate-100">
                <button
                  onClick={handleCloseModal}
                  className="p-2.5 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors duration-300 ease-in-out"
                  aria-label="Close service details"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>
              </div>

              <div className="p-6 md:p-12 pt-4 md:pt-8">
                {/* Service Icon and Title */}
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 md:mb-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-emerald-50 border-2 border-emerald-500/50 flex items-center justify-center shrink-0">
                    {React.createElement(IconMap[selectedService.iconName], {
                      className: "w-7 h-7 sm:w-8 sm:h-8 text-emerald-600",
                    })}
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 uppercase italic tracking-tight leading-tight mb-2">
                      {selectedService.title}
                    </h2>
                    <p className="text-teal-600 font-medium text-base sm:text-lg">
                      {selectedService.description}
                    </p>
                  </div>
                </div>

                {/* Detailed Description */}
                <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                  {selectedService.detailedDescription.map(
                    (paragraph, index) => (
                      <p
                        key={index}
                        className="text-slate-600 text-sm sm:text-base leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    )
                  )}
                </div>

                {/* Key Points Section */}
                <div className="bg-slate-50 rounded-xl p-5 sm:p-6 md:p-8 mb-6 sm:mb-8 border border-slate-200">
                  <div className="flex items-center gap-2 mb-5 sm:mb-6">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 uppercase tracking-wide italic">
                      What We Provide
                    </h3>
                  </div>
                  <ul className="space-y-3 sm:space-y-4">
                    {selectedService.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-0.5 sm:mt-1 p-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <span className="text-slate-700 font-medium text-sm sm:text-base">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Our Approach Section */}
                <div className="bg-teal-950 rounded-xl p-5 sm:p-6 md:p-8 relative overflow-hidden mb-6 sm:mb-8">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <Target className="w-5 h-5 text-emerald-400 shrink-0" />
                      <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide italic">
                        Our Approach
                      </h3>
                    </div>
                    <p className="text-slate-200 leading-relaxed text-sm sm:text-base">
                      {selectedService.approach}
                    </p>
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="pt-6 sm:pt-8 border-t border-slate-200">
                  <button
                    onClick={() => {
                      handleCloseModal();
                      setTimeout(() => {
                        scrollToContact();
                      }, 300);
                    }}
                    className="w-full px-6 sm:px-8 py-3.5 sm:py-4 bg-linear-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
                  >
                    Get Started
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Scrollbar Styles for Modal */}
          <style>{`
          .fixed div::-webkit-scrollbar {
            width: 8px;
          }
          .fixed div::-webkit-scrollbar-track {
            background: #f1f5f9;
            border-radius: 10px;
          }
          .fixed div::-webkit-scrollbar-thumb {
            background: #10b981;
            border-radius: 10px;
          }
          .fixed div::-webkit-scrollbar-thumb:hover {
            background: #059669;
          }
        `}</style>
        </>
      )}
    </>
  );
};

export default Services;
