
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Ship, MapPin } from "lucide-react";

// DottedMap implementation
class DottedMap {
  private height: number;
  private grid: string;

  constructor({ height, grid }: { height: number; grid: string }) {
    this.height = height;
    this.grid = grid;
  }

  getSVG({
    radius,
    color,
    shape,
    backgroundColor,
  }: {
    radius: number;
    color: string;
    shape: string;
    backgroundColor: string;
  }) {
    const width = this.height * 2;
    const height = this.height;
    const spacing = 4;
    
    let dots = '';
    for (let x = 0; x < width; x += spacing) {
      for (let y = 0; y < height; y += spacing) {
        if (this.grid === 'diagonal' && (x + y) % (spacing * 2) === 0) {
          dots += `<circle cx="${x}" cy="${y}" r="${radius}" fill="${color}" />`;
        }
      }
    }

    return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" style="background-color: ${backgroundColor}">
      ${dots}
    </svg>`;
  }
}

interface RoutePoint {
  lat: number;
  lng: number;
  label: string;
  city: string;
}

interface CargoShipRouteProps {
  startPort?: RoutePoint;
  endPort?: RoutePoint;
  lineColor?: string;
  shipColor?: string;
}

export function CargoShipRoute({
  startPort = {
    lat: 31.2304,
    lng: 121.4737,
    label: "منفذ المنشأ",
    city: "شنغهاي، الصين"
  },
  endPort = {
    lat: 21.4858,
    lng: 39.1925,
    label: "منفذ الوجهة", 
    city: "جدة، المملكة العربية السعودية"
  },
  lineColor = "#ef4444",
  shipColor = "#059669"
}: CargoShipRouteProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [shipPosition, setShipPosition] = useState(0);
  
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#00000040",
    shape: "circle",
    backgroundColor: "white",
  });

  const projectPoint = (lat: number, lng: number) => {
    // Manual positioning based on the actual map image
    // Shanghai is at the far right, Jeddah at the left
    if (lng > 120) { // Shanghai area
      return { x: 720, y: 120 }; // Far right position
    } else { // Jeddah area  
      return { x: 120, y: 180 }; // Left side position
    }
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 80;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  const getPointOnPath = (t: number, start: { x: number; y: number }, end: { x: number; y: number }) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 80;
    
    const x = (1 - t) * (1 - t) * start.x + 2 * (1 - t) * t * midX + t * t * end.x;
    const y = (1 - t) * (1 - t) * start.y + 2 * (1 - t) * t * midY + t * t * end.y;
    
    return { x, y };
  };

  const startPoint = projectPoint(startPort.lat, startPort.lng);
  const endPoint = projectPoint(endPort.lat, endPort.lng);
  const pathData = createCurvedPath(startPoint, endPoint);

  useEffect(() => {
    const interval = setInterval(() => {
      setShipPosition((prev) => (prev + 0.005) % 1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const shipPos = getPointOnPath(shipPosition, startPoint, endPoint);

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-lg border border-gray-200 overflow-hidden shadow-lg">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 bg-gradient-to-br from-sebaaq-blue/5 to-blue-400/5">
        <div className="flex items-center gap-3 mb-4">
          <Ship className="h-6 w-6 text-sebaaq-blue" />
          <h2 className="text-2xl font-bold text-sebaaq-midnight font-noto-sans-arabic">مسار الشحن البحري</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div>
              <p className="font-semibold text-sebaaq-midnight font-noto-sans-arabic">{startPort.city}</p>
              <p className="text-sm text-gray-600 font-noto-sans-arabic">منفذ المنشأ</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div>
              <p className="font-semibold text-sebaaq-midnight font-noto-sans-arabic">{endPort.city}</p>
              <p className="text-sm text-gray-600 font-noto-sans-arabic">منفذ الوجهة</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="relative aspect-[2/1] bg-white">
        <img
          src="/lovable-uploads/7a827e62-065b-447a-85a9-35d7d757eefb.png"
          className="h-full w-full object-cover pointer-events-none select-none"
          alt="خريطة مسارات الشحن"
          draggable={false}
        />
        
        <svg
          ref={svgRef}
          viewBox="0 0 800 400"
          className="w-full h-full absolute inset-0 pointer-events-none select-none"
        >
          <defs>
            <linearGradient id="route-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="ship-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={shipColor} />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
          </defs>

          {/* Route Path */}
          <motion.path
            d={pathData}
            fill="none"
            stroke="url(#route-gradient)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

          {/* Start Port */}
          <g>
            <circle
              cx={startPoint.x}
              cy={startPoint.y}
              r="4"
              fill="#22c55e"
            />
            <circle
              cx={startPoint.x}
              cy={startPoint.y}
              r="4"
              fill="#22c55e"
              opacity="0.5"
            >
              <animate
                attributeName="r"
                from="4"
                to="12"
                dur="2s"
                begin="0s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.5"
                to="0"
                dur="2s"
                begin="0s"
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* End Port */}
          <g>
            <circle
              cx={endPoint.x}
              cy={endPoint.y}
              r="4"
              fill="#ef4444"
            />
            <circle
              cx={endPoint.x}
              cy={endPoint.y}
              r="4"
              fill="#ef4444"
              opacity="0.5"
            >
              <animate
                attributeName="r"
                from="4"
                to="12"
                dur="2s"
                begin="0s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.5"
                to="0"
                dur="2s"
                begin="0s"
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* Moving Ship */}
          <g transform={`translate(${shipPos.x}, ${shipPos.y})`}>
            <circle r="8" fill="url(#ship-gradient)" opacity="0.3" />
            <circle r="4" fill="url(#ship-gradient)" />
            <path
              d="M-6,-2 L6,-2 L4,2 L-4,2 Z M0,-4 L0,4"
              fill="white"
              stroke="none"
            />
          </g>

          {/* Port Labels */}
          <text
            x={startPoint.x}
            y={startPoint.y - 15}
            textAnchor="middle"
            className="fill-sebaaq-midnight text-xs font-medium font-noto-sans-arabic"
          >
            {startPort.city}
          </text>
          <text
            x={endPoint.x}
            y={endPoint.y - 15}
            textAnchor="middle"
            className="fill-sebaaq-midnight text-xs font-medium font-noto-sans-arabic"
          >
            {endPort.city}
          </text>
        </svg>
      </div>

      {/* Route Info */}
      <div className="p-6 bg-gradient-to-br from-sebaaq-blue/5 to-blue-400/5 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-sebaaq-midnight">~8,500</p>
            <p className="text-sm text-gray-600 font-noto-sans-arabic">ميل بحري</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-sebaaq-midnight">18-22</p>
            <p className="text-sm text-gray-600 font-noto-sans-arabic">يوم عبور</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-sebaaq-midnight font-noto-sans-arabic">نشط</p>
            <p className="text-sm text-gray-600 font-noto-sans-arabic">حالة المسار</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const TrackingSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Map Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/lovable-uploads/d4715ba8-3fda-4d93-9d3e-41d8c45c54d2.png" 
          alt="Shipping Routes Map" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-tajawal text-3xl md:text-5xl font-bold text-sebaaq-midnight mb-6">
              تتبع شحنتك
              <span className="gradient-text block">لحظة بلحظة</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-3xl mx-auto font-noto-sans-arabic">
              <strong>ندرك أهمية البقاء على اطلاع دائم بحركة شحناتك، لذلك نقدم لك نظام تتبع شحنات متطور يمنحك رؤية كاملة وراحة بال تامة</strong>
            </p>
          </div>
          
          <CargoShipRoute />
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;
