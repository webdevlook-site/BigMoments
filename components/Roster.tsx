import React, { useEffect, useRef, useState } from "react";
import { SectionId, Player } from "../types";
import {
  Shield,
  Target,
  User,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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
    imageUrl: "public/images/ogbu-1.webp",
    images: [
      "public/images/ogbu-2.webp",
      "public/images/ogbu-1.webp",
      "public/images/ogbu-3.webp",
    ],
    dob: "2004",
    jerseyNumber: 4,
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
    setActiveCard(activeCard === id ? null : id);
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {players.map((player, index) => {
            const PositionIcon = getPositionIcon(player.position);
            const delayClass =
              index === 0 ? "" : index === 1 ? "delay-200" : "delay-300";

            const isActive = activeCard === player.id;
            return (
              <div
                key={player.id}
                onClick={() => handleCardClick(player.id)}
                className={`group relative bg-teal-900 rounded-[2rem] p-1.5 transition-all duration-500 ease-in-out reveal-on-scroll cursor-pointer ${delayClass} ${
                  isVisible ? "is-visible" : ""
                } ${
                  isActive
                    ? "-translate-y-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    : "hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                }`}
              >
                {/* Card Border Gradient */}
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none"></div>

                <div
                  className={`relative h-full bg-teal-950 rounded-[1.7rem] overflow-hidden border transition-colors duration-500 ease-in-out ${
                    isActive
                      ? "border-emerald-500/30"
                      : "border-white/5 group-hover:border-emerald-500/30"
                  }`}
                >
                  {/* Background Jersey Number */}
                  <div className="absolute top-0 right-4 text-[180px] font-black text-white/5 leading-none z-0 font-mono italic select-none">
                    {player.jerseyNumber}
                  </div>

                  {/* Player Image Container */}
                  <div className="relative h-[450px] z-10">
                    <img
                      src={player.images[currentImageIndex[player.id] || 0]}
                      alt={player.name}
                      className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
                        isActive
                          ? "grayscale-0"
                          : "grayscale group-hover:grayscale-0"
                      }`}
                    />
                    {/* Gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/40 to-transparent"></div>

                    {/* Image Navigation - Only show if multiple images */}
                    {player.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) =>
                            handlePrevImage(e, player.id, player.images.length)
                          }
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-teal-900/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-emerald-600 transition-colors z-20 opacity-0 group-hover:opacity-100"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) =>
                            handleNextImage(e, player.id, player.images.length)
                          }
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-teal-900/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-emerald-600 transition-colors z-20 opacity-0 group-hover:opacity-100"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>

                        {/* Image Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                          {player.images.map((_, imgIndex) => (
                            <div
                              key={imgIndex}
                              className={`w-1.5 h-1.5 rounded-full transition-all ${
                                imgIndex === (currentImageIndex[player.id] || 0)
                                  ? "bg-emerald-500 w-4"
                                  : "bg-white/40"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Player Info Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-teal-950 shadow-lg shadow-emerald-500/20">
                        <PositionIcon className="w-3 h-3" />
                      </div>
                      <div>
                        <div className="text-white font-bold uppercase tracking-widest text-[10px] leading-tight opacity-70">
                          {player.position}
                        </div>
                        <div className="text-white font-bold text-sm leading-tight flex items-center gap-1.5">
                          <MapPin className="w-3 h-3 text-emerald-400" />
                          {player.club}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tight leading-[0.85] mb-2">
                      {player.name}
                    </h3>

                    <div className="w-full h-[1px] bg-gradient-to-r from-emerald-500/50 to-transparent mt-4 mb-2"></div>

                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        {player.age} Years Old
                      </span>
                      <span className="font-mono text-emerald-400 font-bold text-lg">
                        #{player.jerseyNumber}
                      </span>
                    </div>
                  </div>
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
