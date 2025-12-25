import React, { useEffect, useRef, useState } from "react";
import { SectionId, Player } from "../types";
import { Shield, Target, User, ChevronLeft, ChevronRight } from "lucide-react";

interface EnhancedPlayer extends Player {
  dob: string;
  jerseyNumber: number;
  images: string[]; // Multiple images for each player
}

const players: EnhancedPlayer[] = [
  {
    id: 1,
    name: "Player Name",
    position: "Striker",
    age: 22,
    club: "FK IMT",
    imageUrl: "https://placehold.co/600x800/0f172a/FFFFFF?text=Player+1",
    images: [
      "https://placehold.co/600x800/0f172a/FFFFFF?text=Player+1",
      "https://placehold.co/600x800/0f172a/FFFFFF?text=Player+1-2",
    ],
    dob: "10.07.2003",
    jerseyNumber: 9,
    featured: true,
  },
  {
    id: 2,
    name: "Player Name",
    position: "Striker",
    age: 21,
    club: "FC Grafičar",
    imageUrl: "https://placehold.co/600x800/0f172a/FFFFFF?text=Player+2",
    images: [
      "https://placehold.co/600x800/0f172a/FFFFFF?text=Player+2",
      "https://placehold.co/600x800/0f172a/FFFFFF?text=Player+2-2",
    ],
    dob: "06.08.2004",
    jerseyNumber: 11,
  },
  {
    id: 3,
    name: "Favour Ogbu",
    position: "Centre-back",
    age: 21,
    club: "Al-Wahda",
    imageUrl: "images/ogbu-1.webp",
    images: ["images/ogbu-2.webp", "images/ogbu-4.webp", "images/ogbu-3.webp"],
    dob: "26.06.2004.",
    jerseyNumber: 30,
  },
];

const getPositionIcon = (position: string) => {
  const lowerPos = position.toLowerCase();
  if (
    lowerPos.includes("striker") ||
    lowerPos.includes("forward") ||
    lowerPos.includes("attack")
  )
    return Target;
  if (lowerPos.includes("defender") || lowerPos.includes("back")) return Shield;
  return User;
};

const Roster: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: number]: number;
  }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCardClick = (id: number) => {
    // Only toggle active state on mobile (touch devices)
    if ('ontouchstart' in window) {
      setActiveCard(activeCard === id ? null : id);
    }
  };

  const handlePrevImage = (
    e: React.MouseEvent,
    playerId: number,
    totalImages: number
  ) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => ({
      ...prev,
      [playerId]: ((prev[playerId] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  const handleNextImage = (
    e: React.MouseEvent,
    playerId: number,
    totalImages: number
  ) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => ({
      ...prev,
      [playerId]: ((prev[playerId] || 0) + 1) % totalImages,
    }));
  };

  return (
    <section
      ref={sectionRef}
      id={SectionId.PLAYERS}
      className="py-24 bg-teal-950 relative overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.05)_10px,rgba(255,255,255,0.05)_11px)]"></div>
      </div>

      {/* Ambient Lighting */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8 border-b border-white/10 pb-8 reveal-on-scroll ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <div>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.85]">
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400 pr-4">
                Squad
              </span>
            </h2>
          </div>
          <div className="text-left md:text-right">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Season
            </div>
            <div className="text-2xl font-black text-white font-mono">
              25/26
            </div>
          </div>
        </div>

        {/* Player Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {players.map((player, index) => {
            const PositionIcon = getPositionIcon(player.position);
            const delayClass =
              index === 0 ? "" : index === 1 ? "delay-200" : "delay-300";

            const isActive = activeCard === player.id;
            return (
              <div
                key={player.id}
                onClick={() => handleCardClick(player.id)}
                className={`group relative reveal-on-scroll cursor-pointer transition-transform duration-500 ease-in-out ${delayClass} ${
                  isVisible ? "is-visible" : ""
                } ${
                  isActive
                    ? "-translate-y-3"
                    : "hover:-translate-y-3 active:-translate-y-3"
                }`}
              >
                {/* Main Card Container */}
                <div className="relative h-[580px] rounded-3xl overflow-hidden bg-gradient-to-br from-teal-900/90 to-teal-950">
                  {/* Image Section */}
                  <div className="relative h-[390px] overflow-hidden">
                    {/* Player Image */}
                    <img
                      src={player.images[currentImageIndex[player.id] || 0]}
                      alt={player.name}
                      className={`w-full h-full object-cover object-top transition-all duration-700 ease-in-out ${
                        isActive
                          ? "scale-105 grayscale-0"
                          : "scale-100 grayscale group-hover:scale-105 group-hover:grayscale-0 group-active:scale-105 group-active:grayscale-0"
                      }`}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-teal-950"></div>

                    {/* Position Badge */}
                    <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/95 backdrop-blur-sm shadow-lg">
                      <PositionIcon className="w-4 h-4 text-teal-950" />
                      <span className="text-xs font-bold text-teal-950 uppercase tracking-wide">
                        {player.position}
                      </span>
                    </div>

                    {/* Image Navigation */}
                    {player.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) =>
                            handlePrevImage(e, player.id, player.images.length)
                          }
                          className={`absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 ease-in-out z-20 ${
                            isActive
                              ? "opacity-100"
                              : "opacity-0 group-hover:opacity-100 group-active:opacity-100"
                          } hover:bg-emerald-500 hover:border-emerald-400`}
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={(e) =>
                            handleNextImage(e, player.id, player.images.length)
                          }
                          className={`absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 ease-in-out z-20 ${
                            isActive
                              ? "opacity-100"
                              : "opacity-0 group-hover:opacity-100 group-active:opacity-100"
                          } hover:bg-emerald-500 hover:border-emerald-400`}
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Image Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                          {player.images.map((_, imgIndex) => (
                            <div
                              key={imgIndex}
                              className={`h-1 rounded-full transition-all duration-300 ${
                                imgIndex === (currentImageIndex[player.id] || 0)
                                  ? "bg-emerald-500 w-8"
                                  : "bg-white/50 w-1"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Info Section */}
                  <div className="relative h-[190px] bg-gradient-to-b from-teal-950 to-teal-950 p-5">
                    {/* Decorative Line */}
                    <div className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>

                    {/* Club Info */}
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                        {player.club}
                      </span>
                    </div>

                    {/* Player Name */}
                    <h3 className="font-heading text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter leading-[0.85] mb-4">
                      {player.name}
                    </h3>

                    {/* Stats Row */}
                    <div className="flex items-center justify-between">
                      {/* Age */}
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">
                          Age
                        </span>
                        <span className="text-xl font-black text-white font-mono">
                          {player.age}
                        </span>
                      </div>

                      {/* Vertical Divider */}
                      <div className="h-10 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

                      {/* DOB */}
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">
                          Born
                        </span>
                        <span className="text-base font-bold text-emerald-400">
                          {player.dob}
                        </span>
                      </div>

                      {/* Vertical Divider */}
                      <div className="h-10 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

                      {/* Jersey */}
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">
                          Number
                        </span>
                        <span className="text-xl font-black text-emerald-400 font-mono">
                          #{player.jerseyNumber}
                        </span>
                      </div>
                    </div>

                    {/* Accent Line */}
                    <div
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500 ease-in-out ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full group-active:w-full"
                      }`}
                    ></div>
                  </div>

                  {/* Card Border Glow Effect */}
                  <div
                    className={`absolute inset-0 rounded-3xl border-2 transition-all duration-500 ease-in-out pointer-events-none ${
                      isActive
                        ? "border-emerald-500/60 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                        : "border-white/5 group-hover:border-emerald-500/60 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] group-active:border-emerald-500/60 group-active:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                    }`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roster;
