import React, { useState } from 'react';

interface BackgroundPathsProps {
  title: string;
  className?: string;
}

export function BackgroundPaths({ title, className = "" }: BackgroundPathsProps) {
  const [hoveredPort, setHoveredPort] = useState<string | null>(null);
  const [hoveredRoute, setHoveredRoute] = useState<string | null>(null);

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-sebaaq-midnight to-sebaaq-charcoal ${className}`}>
      {/* Interactive Cargo Vessel Route Map */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1400 800"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2295d1" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#2295d1" stopOpacity="0.9" />
            </linearGradient>
            
            <radialGradient id="portGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="70%" stopColor="#2295d1" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#003366" stopOpacity="0.8" />
            </radialGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Simplified world map outlines */}
          <g stroke="#ffffff" strokeWidth="1" fill="none" opacity="0.2">
            {/* China coastline simplified */}
            <path d="M250 180 Q280 160 320 170 Q360 180 380 200 Q400 220 380 240 Q350 250 320 240 Q280 230 250 220 Z" />
            
            {/* Arabian Peninsula simplified */}
            <path d="M900 300 Q950 280 1000 300 Q1050 320 1080 360 Q1100 400 1080 440 Q1050 460 1000 450 Q950 440 920 420 Q900 380 900 340 Z" />
            
            {/* Indian Ocean outline */}
            <path d="M400 250 Q600 280 800 300 Q850 320 900 340" stroke="#2295d1" strokeWidth="0.5" opacity="0.3" />
          </g>

          {/* Main shipping routes */}
          <g>
            {/* Primary route: China to Jeddah via Suez Canal */}
            <path
              d="M320 200 Q450 220 600 250 Q750 280 850 320 Q950 350 1020 380"
              stroke="url(#routeGradient)"
              strokeWidth="3"
              fill="none"
              filter="url(#glow)"
              className="cursor-pointer"
              onMouseEnter={() => setHoveredRoute('china-jeddah')}
              onMouseLeave={() => setHoveredRoute(null)}
            />
            
            {/* Secondary route: China to Dammam via Arabian Sea */}
            <path
              d="M340 210 Q480 240 650 270 Q800 300 920 340 Q980 360 1040 390"
              stroke="url(#routeGradient)"
              strokeWidth="2"
              fill="none"
              opacity="0.7"
              filter="url(#glow)"
              className="cursor-pointer"
              onMouseEnter={() => setHoveredRoute('china-dammam')}
              onMouseLeave={() => setHoveredRoute(null)}
            />
          </g>

          {/* Moving vessels along routes */}
          <g filter="url(#glow)">
            {/* Vessel 1 - China to Jeddah */}
            <g>
              <circle r="3" fill="#ffffff" opacity="0.9">
                <animateMotion dur="15s" repeatCount="indefinite">
                  <path d="M320 200 Q450 220 600 250 Q750 280 850 320 Q950 350 1020 380" />
                </animateMotion>
              </circle>
              <circle r="6" fill="none" stroke="#2295d1" strokeWidth="1" opacity="0.5">
                <animateMotion dur="15s" repeatCount="indefinite">
                  <path d="M320 200 Q450 220 600 250 Q750 280 850 320 Q950 350 1020 380" />
                </animateMotion>
              </circle>
            </g>
            
            {/* Vessel 2 - China to Dammam */}
            <g>
              <circle r="2" fill="#ffffff" opacity="0.8">
                <animateMotion dur="18s" repeatCount="indefinite" begin="5s">
                  <path d="M340 210 Q480 240 650 270 Q800 300 920 340 Q980 360 1040 390" />
                </animateMotion>
              </circle>
            </g>
          </g>

          {/* Ports - China */}
          <g>
            {/* Shanghai */}
            <circle 
              cx="350" 
              cy="190" 
              r="8" 
              fill="url(#portGradient)" 
              filter="url(#glow)"
              className="cursor-pointer"
              onMouseEnter={() => setHoveredPort('shanghai')}
              onMouseLeave={() => setHoveredPort(null)}
            />
            
            {/* Shenzhen */}
            <circle 
              cx="320" 
              cy="220" 
              r="7" 
              fill="url(#portGradient)" 
              filter="url(#glow)"
              className="cursor-pointer"
              onMouseEnter={() => setHoveredPort('shenzhen')}
              onMouseLeave={() => setHoveredPort(null)}
            />
            
            {/* Qingdao */}
            <circle 
              cx="340" 
              cy="170" 
              r="6" 
              fill="url(#portGradient)" 
              filter="url(#glow)"
              className="cursor-pointer"
              onMouseEnter={() => setHoveredPort('qingdao')}
              onMouseLeave={() => setHoveredPort(null)}
            />
          </g>

          {/* Ports - Saudi Arabia */}
          <g>
            {/* Jeddah */}
            <circle 
              cx="1020" 
              cy="380" 
              r="8" 
              fill="#22c55e" 
              filter="url(#glow)"
              className="cursor-pointer"
              onMouseEnter={() => setHoveredPort('jeddah')}
              onMouseLeave={() => setHoveredPort(null)}
            />
            
            {/* Dammam */}
            <circle 
              cx="1040" 
              cy="390" 
              r="7" 
              fill="#22c55e" 
              filter="url(#glow)"
              className="cursor-pointer"
              onMouseEnter={() => setHoveredPort('dammam')}
              onMouseLeave={() => setHoveredPort(null)}
            />
          </g>

          {/* Key maritime choke points */}
          <g>
            {/* Strait of Malacca */}
            <polygon 
              points="580,260 590,270 580,280 570,270" 
              fill="#fbbf24" 
              opacity="0.8"
              className="cursor-pointer"
              onMouseEnter={() => setHoveredPort('malacca')}
              onMouseLeave={() => setHoveredPort(null)}
            />
            
            {/* Suez Canal */}
            <polygon 
              points="940,340 950,350 940,360 930,350" 
              fill="#fbbf24" 
              opacity="0.8"
              className="cursor-pointer"
              onMouseEnter={() => setHoveredPort('suez')}
              onMouseLeave={() => setHoveredPort(null)}
            />
          </g>

          {/* Port labels */}
          <g className="text-white font-cairo text-sm fill-white">
            <text x="360" y="185" textAnchor="middle" opacity="0.9">Shanghai</text>
            <text x="330" y="235" textAnchor="middle" opacity="0.9">Shenzhen</text>
            <text x="350" y="165" textAnchor="middle" opacity="0.9">Qingdao</text>
            <text x="1030" y="375" textAnchor="middle" opacity="0.9">Jeddah</text>
            <text x="1050" y="405" textAnchor="middle" opacity="0.9">Dammam</text>
            <text x="590" y="255" textAnchor="middle" opacity="0.7" fontSize="12">Malacca</text>
            <text x="950" y="335" textAnchor="middle" opacity="0.7" fontSize="12">Suez</text>
          </g>
        </svg>
      </div>

      {/* Tooltip for interactive elements */}
      {(hoveredPort || hoveredRoute) && (
        <div className="absolute top-4 right-4 bg-black/80 text-white p-4 rounded-lg backdrop-blur-sm max-w-xs z-20">
          {hoveredPort === 'shanghai' && (
            <div>
              <h3 className="font-bold">Shanghai Port</h3>
              <p className="text-sm">To Jeddah: 15-21 days</p>
              <p className="text-sm">To Dammam: 18-25 days</p>
            </div>
          )}
          {hoveredPort === 'shenzhen' && (
            <div>
              <h3 className="font-bold">Shenzhen Port</h3>
              <p className="text-sm">To Jeddah: 16-22 days</p>
              <p className="text-sm">To Dammam: 19-26 days</p>
            </div>
          )}
          {hoveredPort === 'qingdao' && (
            <div>
              <h3 className="font-bold">Qingdao Port</h3>
              <p className="text-sm">To Jeddah: 17-23 days</p>
              <p className="text-sm">To Dammam: 20-27 days</p>
            </div>
          )}
          {hoveredPort === 'jeddah' && (
            <div>
              <h3 className="font-bold">Jeddah Port</h3>
              <p className="text-sm">Red Sea Gateway</p>
              <p className="text-sm">Main Western Saudi Port</p>
            </div>
          )}
          {hoveredPort === 'dammam' && (
            <div>
              <h3 className="font-bold">Dammam Port</h3>
              <p className="text-sm">Arabian Gulf Gateway</p>
              <p className="text-sm">Eastern Saudi Port</p>
            </div>
          )}
          {hoveredPort === 'malacca' && (
            <div>
              <h3 className="font-bold">Strait of Malacca</h3>
              <p className="text-sm">Critical maritime chokepoint</p>
            </div>
          )}
          {hoveredPort === 'suez' && (
            <div>
              <h3 className="font-bold">Suez Canal</h3>
              <p className="text-sm">Red Sea access route</p>
            </div>
          )}
          {hoveredRoute === 'china-jeddah' && (
            <div>
              <h3 className="font-bold">China to Jeddah Route</h3>
              <p className="text-sm">Via Suez Canal</p>
              <p className="text-sm">Transit: 15-22 days</p>
            </div>
          )}
          {hoveredRoute === 'china-dammam' && (
            <div>
              <h3 className="font-bold">China to Dammam Route</h3>
              <p className="text-sm">Via Arabian Sea</p>
              <p className="text-sm">Transit: 18-26 days</p>
            </div>
          )}
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[400px] px-6">
        <div className="text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-sebaaq-blue to-blue-400 mx-auto mb-4"></div>
          <p className="text-white/80 text-lg">
            خطوط الشحن المباشرة من الصين إلى السعودية
          </p>
        </div>
      </div>
    </div>
  );
}