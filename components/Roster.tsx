import React from "react";
import { SectionId, Player } from "../types";
import { Calendar, Shield, User } from "lucide-react";

interface EnhancedPlayer extends Player {
  dob: string;
}

const players: EnhancedPlayer[] = [
  {
    id: 1,
    name: "Charles Shedrack",
    position: "Striker",
    age: 22,
    club: "FK IMT",
    imageUrl: "/images/shedrack.jpg",
    dob: "10.07.2003",
    featured: true,
  },
  {
    id: 2,
    name: "Jusuf Faisal",
    position: "Striker",
    age: 21,
    club: "FC Grafičar",
    imageUrl: "/images/faisal.jpg",
    dob: "06.08.2004",
  },
  {
    id: 3,
    name: "Favour Ogbu",
    position: "Central Defender",
    age: 21,
    club: "Red Star Belgrade",
    imageUrl: "/images/ogbu.jpg",
    dob: "26.06.2004",
  },
];

const Roster: React.FC = () => {
  return (
    <section
      id={SectionId.PLAYERS}
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-lime-500/5 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-lime-400 font-bold text-xs uppercase tracking-widest mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse"></span>
              Active Roster
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Elite Talent <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Representation
              </span>
            </h2>
          </div>
          <div className="md:text-right max-w-md">
            <p className="text-slate-400 text-lg leading-relaxed">
              We represent carefully selected professionals with exceptional
              skill and character. Future stars of European football.
            </p>
          </div>
        </div>

        {/* Player Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {players.map((player) => (
            <div
              key={player.id}
              className="group relative h-[500px] rounded-3xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-lime-500/50 transition-all duration-500 shadow-2xl hover:shadow-[0_0_40px_rgba(132,204,22,0.15)]"
            >
              {/* Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={player.imageUrl}
                  alt={player.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
              </div>

              {/* Card Content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-8">
                {/* Top Badge */}
                <div className="absolute top-6 left-6 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>

                {/* Main Info Wrapper - No default translation, relies on max-height of sibling to push up */}
                <div className="transition-transform duration-500">
                  <div className="mb-1">
                    <span className="text-lime-400 font-bold uppercase tracking-widest text-xs flex items-center gap-2 mb-2">
                      <Shield className="w-3 h-3" />
                      {player.position}
                    </span>
                    <h3 className="text-3xl font-black text-white leading-none mb-1">
                      {player.name}
                    </h3>
                    <p className="text-slate-300 font-medium text-lg">
                      {player.club}
                    </p>
                  </div>

                  {/* Collapsible Content Wrapper */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-[300px] group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-out">
                    {/* Detailed Stats */}
                    <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10 pb-2">
                      <div>
                        <p className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-1 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> Date of Birth
                        </p>
                        <p className="text-white font-mono font-bold">
                          {player.dob}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-1 flex items-center gap-1">
                          <User className="w-3 h-3" /> Age
                        </p>
                        <p className="text-white font-mono font-bold">
                          {player.age} Years
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roster;
