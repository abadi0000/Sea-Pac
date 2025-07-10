"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRightIcon, Ship, Plane, Settings, Phone, FileText } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

// Glow Component
const glowVariants = cva("absolute w-full", {
  variants: {
    variant: {
      top: "top-0",
      above: "-top-[128px]",
      bottom: "bottom-0",
      below: "-bottom-[128px]",
      center: "top-[50%]",
    },
  },
  defaultVariants: {
    variant: "top",
  },
});

const Glow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof glowVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(glowVariants({ variant }), className)}
    {...props}
  >
    <div
      className={cn(
        "absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/.5)_10%,_hsl(var(--primary)/0)_60%)] sm:h-[512px]",
        variant === "center" && "-translate-y-1/2",
      )}
    />
    <div
      className={cn(
        "absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-[2] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/.3)_10%,_hsl(var(--primary)/0)_60%)] sm:h-[256px]",
        variant === "center" && "-translate-y-1/2",
      )}
    />
  </div>
));
Glow.displayName = "Glow";

// Mockup Components
const mockupVariants = cva(
  "flex relative z-10 overflow-hidden shadow-2xl border border-border/5 border-t-border/15",
  {
    variants: {
      type: {
        mobile: "rounded-[48px] max-w-[350px]",
        responsive: "rounded-md",
      },
    },
    defaultVariants: {
      type: "responsive",
    },
  },
);

interface MockupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof mockupVariants> {}

const Mockup = React.forwardRef<HTMLDivElement, MockupProps>(
  ({ className, type, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(mockupVariants({ type, className }))}
      {...props}
    />
  ),
);
Mockup.displayName = "Mockup";

const frameVariants = cva(
  "bg-accent/5 flex relative z-10 overflow-hidden rounded-2xl",
  {
    variants: {
      size: {
        small: "p-2",
        large: "p-4",
      },
    },
    defaultVariants: {
      size: "small",
    },
  },
);

interface MockupFrameProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof frameVariants> {}

const MockupFrame = React.forwardRef<HTMLDivElement, MockupFrameProps>(
  ({ className, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(frameVariants({ size, className }))}
      {...props}
    />
  ),
);
MockupFrame.displayName = "MockupFrame";

// AnimatedGroup Component
const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

interface AnimatedGroupProps {
  children: React.ReactNode;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
}

function AnimatedGroup({
  children,
  className,
  variants,
}: AnimatedGroupProps) {
  const containerVariants = variants?.container || defaultContainerVariants;
  const itemVariants = variants?.item || defaultItemVariants;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={cn(className)}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

// Main Hero Component
interface LogisticsHeroProps {
  companyName?: string;
  tagline?: string;
  services?: {
    seaShipping: string;
    airShipping: string;
    machinery: string;
  };
  ctaButtons?: {
    contact: string;
    quote: string;
  };
}

function LogisticsHero({
  companyName = "سي باك لوجستيك",
  tagline = "حلول الشحن الذكية من الصين إلى المملكة",
  services = {
    seaShipping: "شحن بحري",
    airShipping: "شحن جوي",
    machinery: "توريد وتركيب وصيانة آلات حديثة"
  },
  ctaButtons = {
    contact: "اتصل بنا الآن",
    quote: "احصل على عرض سعر"
  }
}: LogisticsHeroProps) {
  const transitionVariants = {
    item: {
      hidden: {
        opacity: 0,
        y: 12,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    },
  };

  return (
    <section
      className={cn(
        "bg-background text-foreground font-cairo",
        "py-8 sm:py-16 md:py-20 px-4",
        "overflow-hidden pb-0 relative"
      )}
      style={{
        background: "linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)) 100%)",
      }}
      dir="rtl"
    >
      {/* Background Effects */}
      <div
        className="absolute right-0 top-0 h-1/2 w-1/2 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, hsl(var(--primary) / 0.15) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute left-0 top-0 h-1/2 w-1/2 -scale-x-100 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, hsl(var(--primary) / 0.15) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto flex max-w-7xl flex-col gap-8 pt-12 sm:gap-16">
        <div className="flex flex-col items-center gap-4 text-center sm:gap-8">
          {/* Badge */}
          <AnimatedGroup variants={transitionVariants}>
            <Badge variant="outline" className="gap-2 text-sm px-4 py-1.5 border-primary/20 bg-primary/5 font-cairo">
              <span className="text-muted-foreground">✨ خدمات لوجستية متطورة</span>
              <ArrowRightIcon className="h-3 w-3" />
            </Badge>
          </AnimatedGroup>

          {/* Company Name & Tagline */}
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.3,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <h1 className="relative z-10 inline-block bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-3xl font-bold leading-tight text-transparent drop-shadow-2xl sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight font-cairo">
              {companyName}
            </h1>
            <p className="text-lg relative z-10 max-w-[700px] font-medium text-primary opacity-90 sm:text-xl font-cairo">
              {tagline}
            </p>
          </AnimatedGroup>

          {/* Services Grid */}
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.6,
                  },
                },
              },
              ...transitionVariants,
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl"
          >
            <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/50 backdrop-blur-sm hover:bg-background/70 transition-all duration-300">
              <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                <Ship className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground font-cairo">{services.seaShipping}</h3>
            </div>
            
            <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/50 backdrop-blur-sm hover:bg-background/70 transition-all duration-300">
              <div className="p-3 rounded-full bg-secondary/10 border border-secondary/20">
                <Plane className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-base font-semibold text-foreground font-cairo">{services.airShipping}</h3>
            </div>
            
            <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/50 backdrop-blur-sm hover:bg-background/70 transition-all duration-300 md:col-span-1">
              <div className="p-3 rounded-full bg-accent/10 border border-accent/20">
                <Settings className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-base font-semibold text-foreground text-center font-cairo">{services.machinery}</h3>
            </div>
          </AnimatedGroup>

          {/* CTA Buttons */}
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.9,
                  },
                },
              },
              ...transitionVariants,
            }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button size="lg" className="text-base px-6 py-3 bg-primary hover:bg-primary/90 font-cairo">
              <Phone className="h-4 w-4 ml-2" />
              {ctaButtons.contact}
            </Button>
            <Button variant="outline" size="lg" className="text-base px-6 py-3 border-primary/20 hover:bg-primary/5 font-cairo">
              <FileText className="h-4 w-4 ml-2" />
              {ctaButtons.quote}
            </Button>
          </AnimatedGroup>

          {/* Hero Image */}
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    delayChildren: 1.2,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <div className="relative pt-8 w-full">
              <MockupFrame
                className="opacity-0 animate-appear delay-700"
                size="small"
              >
                <Mockup type="responsive">
                  <div className="w-full h-[300px] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(var(--foreground) / 0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    <div className="relative z-10 text-center">
                      <div className="flex items-center justify-center gap-6 mb-4">
                        <Ship className="h-12 w-12 text-primary" />
                        <ArrowRightIcon className="h-6 w-6 text-muted-foreground" />
                        <Plane className="h-12 w-12 text-secondary-foreground" />
                        <ArrowRightIcon className="h-6 w-6 text-muted-foreground" />
                        <Settings className="h-12 w-12 text-accent-foreground" />
                      </div>
                      <p className="text-lg font-bold text-foreground font-cairo">خدمات لوجستية شاملة</p>
                      <p className="text-muted-foreground mt-1 text-sm font-cairo">من الصين إلى المملكة العربية السعودية</p>
                    </div>
                  </div>
                </Mockup>
              </MockupFrame>
              <Glow
                variant="top"
                className="opacity-0 animate-appear-zoom delay-1000"
              />
            </div>
          </AnimatedGroup>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes appear {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes appear-zoom {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          .animate-appear {
            animation: appear 0.5s ease-out forwards;
          }
          
          .animate-appear-zoom {
            animation: appear-zoom 0.5s ease-out forwards;
          }
          
          .delay-700 {
            animation-delay: 700ms;
          }
          
          .delay-1000 {
            animation-delay: 1000ms;
          }
        `
      }} />
    </section>
  );
}

export default LogisticsHero;