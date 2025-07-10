import React from 'react';

interface BackgroundPathsProps {
  title: string;
  className?: string;
}

export function BackgroundPaths({ title, className = "" }: BackgroundPathsProps) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-sebaaq-midnight to-sebaaq-charcoal ${className}`}>
      {/* Animated SVG Background Paths */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="pathGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--sebaaq-blue))" />
              <stop offset="100%" stopColor="rgb(59, 130, 246)" />
            </linearGradient>
            <linearGradient id="pathGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" />
              <stop offset="100%" stopColor="hsl(var(--sebaaq-blue))" />
            </linearGradient>
          </defs>
          
          {/* Animated Path 1 */}
          <path
            d="M0,200 Q250,100 500,200 T1000,200"
            stroke="url(#pathGradient1)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          >
            <animate
              attributeName="d"
              values="M0,200 Q250,100 500,200 T1000,200;M0,250 Q250,150 500,250 T1000,250;M0,200 Q250,100 500,200 T1000,200"
              dur="6s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Animated Path 2 */}
          <path
            d="M0,400 Q300,300 600,400 T1000,400"
            stroke="url(#pathGradient2)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.7"
          >
            <animate
              attributeName="d"
              values="M0,400 Q300,300 600,400 T1000,400;M0,350 Q300,450 600,350 T1000,350;M0,400 Q300,300 600,400 T1000,400"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Animated Path 3 */}
          <path
            d="M0,600 Q200,500 400,600 T800,600"
            stroke="url(#pathGradient1)"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          >
            <animate
              attributeName="d"
              values="M0,600 Q200,500 400,600 T800,600;M0,650 Q200,550 400,650 T800,650;M0,600 Q200,500 400,600 T800,600"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Animated Path 4 */}
          <path
            d="M200,800 Q500,700 800,800 T1000,800"
            stroke="url(#pathGradient2)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          >
            <animate
              attributeName="d"
              values="M200,800 Q500,700 800,800 T1000,800;M200,750 Q500,850 800,750 T1000,750;M200,800 Q500,700 800,800 T1000,800"
              dur="7s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Moving Dots */}
          <circle r="3" fill="hsl(var(--sebaaq-blue))" opacity="0.8">
            <animateMotion dur="8s" repeatCount="indefinite">
              <path d="M0,200 Q250,100 500,200 T1000,200" />
            </animateMotion>
          </circle>
          
          <circle r="2" fill="rgb(59, 130, 246)" opacity="0.6">
            <animateMotion dur="10s" repeatCount="indefinite">
              <path d="M0,400 Q300,300 600,400 T1000,400" />
            </animateMotion>
          </circle>
          
          <circle r="2.5" fill="hsl(var(--sebaaq-blue))" opacity="0.7">
            <animateMotion dur="12s" repeatCount="indefinite">
              <path d="M0,600 Q200,500 400,600 T800,600" />
            </animateMotion>
          </circle>
        </svg>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="tech-grid"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[400px] px-6">
        <div className="text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-sebaaq-blue to-blue-400 mx-auto"></div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-sebaaq-blue/10 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
    </div>
  );
}