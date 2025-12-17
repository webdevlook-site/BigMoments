import React, { useEffect, useState } from "react";

interface LoaderProps {
  onFinish: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onFinish }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Total load time
    const loadTimer = setTimeout(() => {
      setIsExiting(true);
      // Wait for slide animation to complete before unmounting
      setTimeout(onFinish, 1000);
    }, 2800);

    return () => clearTimeout(loadTimer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-teal-950 flex flex-col items-center justify-center overflow-hidden transition-transform duration-[1000ms] cubic-bezier(0.76, 0, 0.24, 1) ${
        isExiting ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* --- Background: 2D Tactical Pitch Blueprint --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        {/* Full Pitch SVG */}
        <svg
          viewBox="-5 0 115 68"
          className="w-[140vw] h-[90vw] md:w-[800px] md:h-[500px] stroke-white fill-none stroke-[0.5]"
          style={{ transform: "rotate(0deg)" }}
        >
          <defs>
            <pattern
              id="netPattern"
              x="0"
              y="0"
              width="1"
              height="1"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 1 0 L 0 1"
                stroke="currentColor"
                strokeWidth="0.2"
                opacity="0.5"
              />
              <path
                d="M 0 0 L 1 1"
                stroke="currentColor"
                strokeWidth="0.2"
                opacity="0.5"
              />
            </pattern>
          </defs>

          {/* Outer Boundary & Center Line */}
          <path
            d="M 0 0 L 105 0 L 105 68 L 0 68 Z"
            className="opacity-0 animate-[draw_2s_ease-out_forwards]"
          />
          <line
            x1="52.5"
            y1="0"
            x2="52.5"
            y2="68"
            className="opacity-0 animate-[draw_2s_ease-out_forwards_0.2s]"
          />

          {/* Center Circle */}
          <circle
            cx="52.5"
            cy="34"
            r="9.15"
            className="opacity-0 animate-[draw_2s_ease-out_forwards_0.4s]"
          />
          <circle
            cx="52.5"
            cy="34"
            r="0.6"
            fill="currentColor"
            className="opacity-0 animate-[fade-in_0.5s_ease-out_forwards_0.5s]"
          />

          {/* Left Penalty Area */}
          <path
            d="M 0 13.84 L 16.5 13.84 L 16.5 54.16 L 0 54.16"
            className="opacity-0 animate-[draw_2s_ease-out_forwards_0.6s]"
          />
          {/* Left Goal Area */}
          <path
            d="M 0 24.84 L 5.5 24.84 L 5.5 43.16 L 0 43.16"
            className="opacity-0 animate-[draw_2s_ease-out_forwards_0.7s]"
          />

          {/* Left Penalty Spot & Arc */}
          <circle
            cx="11"
            cy="34"
            r="0.6"
            fill="currentColor"
            className="opacity-0 animate-[fade-in_0.5s_ease-out_forwards_0.8s]"
          />
          <path
            d="M 16.5,26.5 A 9.15,9.15 0 0,1 16.5,41.5"
            className="opacity-0 animate-[draw_2s_ease-out_forwards_0.8s]"
          />

          {/* Left Goal Net */}
          <g className="opacity-0 animate-[fade-in_1s_ease-out_forwards_1s]">
            <rect
              x="-2.44"
              y="30.34"
              width="2.44"
              height="7.32"
              strokeWidth="0.3"
              fill="url(#netPattern)"
            />
          </g>

          {/* Right Penalty Area */}
          <path
            d="M 105 13.84 L 88.5 13.84 L 88.5 54.16 L 105 54.16"
            className="opacity-0 animate-[draw_2s_ease-out_forwards_0.6s]"
          />
          {/* Right Goal Area */}
          <path
            d="M 105 24.84 L 99.5 24.84 L 99.5 43.16 L 105 43.16"
            className="opacity-0 animate-[draw_2s_ease-out_forwards_0.7s]"
          />

          {/* Right Penalty Spot & Arc */}
          <circle
            cx="94"
            cy="34"
            r="0.6"
            fill="currentColor"
            className="opacity-0 animate-[fade-in_0.5s_ease-out_forwards_0.8s]"
          />
          <path
            d="M 88.5,26.5 A 9.15,9.15 0 0,0 88.5,41.5"
            className="opacity-0 animate-[draw_2s_ease-out_forwards_0.8s]"
          />

          {/* Right Goal Net */}
          <g className="opacity-0 animate-[fade-in_1s_ease-out_forwards_1s]">
            <rect
              x="105"
              y="30.34"
              width="2.44"
              height="7.32"
              strokeWidth="0.3"
              fill="url(#netPattern)"
            />
          </g>

          {/* Corner Arcs */}
          <path
            d="M 0,1 A 1,1 0 0,0 1,0"
            className="opacity-0 animate-[draw_2s_ease-out_forwards_1s]"
          />
          <path
            d="M 0,67 A 1,1 0 0,1 1,68"
            className="opacity-0 animate-[draw_2s_ease-out_forwards_1s]"
          />
          <path
            d="M 105,1 A 1,1 0 0,1 104,0"
            className="opacity-0 animate-[draw_2s_ease-out_forwards_1s]"
          />
          <path
            d="M 105,67 A 1,1 0 0,0 104,68"
            className="opacity-0 animate-[draw_2s_ease-out_forwards_1s]"
          />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Brand Text - Simplified */}
        <div className="text-center relative">
          {/* Main Title */}
          <div className="relative mb-8">
            <h1 className="font-heading text-4xl md:text-5xl font-black text-white uppercase italic tracking-tight">
              Big Moments
            </h1>

            {/* Subtitle */}
            <p className="mt-3 text-emerald-200/70 text-xs md:text-sm font-medium tracking-[0.3em] uppercase animate-[fade-in_1s_ease-out_forwards_0.5s] opacity-0">
              Sport Management Agency
            </p>
          </div>

          {/* Loading Dots Only */}
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 bg-emerald-200/70 rounded-full animate-[bounce_1s_ease-in-out_infinite]"></div>
            <div className="w-2 h-2 bg-emerald-200/70 rounded-full animate-[bounce_1s_ease-in-out_infinite_0.2s]" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-emerald-200/70 rounded-full animate-[bounce_1s_ease-in-out_infinite_0.4s]" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes draw {
          from { stroke-dasharray: 500; stroke-dashoffset: 500; opacity: 0; }
          to { stroke-dasharray: 500; stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes loading-bar {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(0%); }
            100% { transform: translateX(100%); }
        }
        @keyframes text-glow {
          0%, 100% {
            filter: drop-shadow(0 0 20px rgba(16, 185, 129, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 40px rgba(16, 185, 129, 0.8));
          }
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
