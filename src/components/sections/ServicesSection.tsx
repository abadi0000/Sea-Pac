
import { useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const ServiceCard = ({ title, description, features, isHovered, onHover, onLeave }: ServiceCardProps) => {
  return (
    <div 
      className={`relative bg-white rounded-2xl p-8 shadow-2xl transition-all duration-500 transform ${
        isHovered ? 'scale-105 shadow-3xl' : 'scale-100'
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative z-10">
        <h3 className="font-playfair text-2xl font-bold text-sebaaq-midnight mb-4">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-sebaaq-blue rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Hover Effect Background */}
      <div className={`absolute inset-0 bg-gradient-to-br from-sebaaq-blue/5 to-blue-400/5 rounded-2xl transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </div>
  );
};

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: "Integrated Logistics",
      description: "End-to-end shipping solutions from China to Saudi Arabia with seamless customs clearance and advanced warehousing.",
      features: [
        "Door-to-door shipping services",
        "Professional customs clearance",
        "Advanced warehousing solutions",
        "Real-time tracking systems"
      ]
    },
    {
      title: "Intelligent Sourcing",
      description: "Direct factory connections with professional negotiation and comprehensive quality inspection services.",
      features: [
        "Direct factory sourcing",
        "Professional negotiation services",
        "Comprehensive goods inspection",
        "Quality assurance protocols"
      ]
    },
    {
      title: "Alibaba Partnership",
      description: "Trusted Alibaba agent services for verification, consolidation, and efficient shipping solutions.",
      features: [
        "Verified supplier connections",
        "Order consolidation services",
        "Efficient shipping solutions",
        "Partnership management"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-sebaaq-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight mb-4">
            Core Offerings for
            <span className="gradient-text block">Modern Trade</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Comprehensive solutions designed to streamline your supply chain and maximize efficiency
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
              isHovered={hoveredCard === index}
              onHover={() => setHoveredCard(index)}
              onLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
