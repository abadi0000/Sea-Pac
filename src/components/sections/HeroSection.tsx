"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Plane, Ship, Settings, Phone, FileText, ArrowLeft, Loader2 } from 'lucide-react'

interface ServiceItem {
  icon: React.ReactNode
  title: string
  description: string
}

interface HeroSectionProps {
  companyName?: string
  headline?: string
  services?: ServiceItem[]
  primaryButtonText?: string
  secondaryButtonText?: string
  onPrimaryAction?: () => void
  onSecondaryAction?: () => void
}

const HeroSection: React.FC<HeroSectionProps> = ({
  companyName = "سي باك لوجستيك",
  headline = "حلول الشحن الذكية من الصين إلى المملكة",
  services = [
    {
      icon: <Ship className="w-6 h-6" />,
      title: "شحن بحري",
      description: "خدمات شحن بحري موثوقة وآمنة"
    },
    {
      icon: <Plane className="w-6 h-6" />,
      title: "شحن جوي",
      description: "شحن سريع وفعال عبر الطيران"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "توريد وتركيب وصيانة آلات حديثة",
      description: "حلول شاملة للمعدات والآلات"
    }
  ],
  primaryButtonText = "اتصل بنا الآن",
  secondaryButtonText = "احصل على عرض سعر",
  onPrimaryAction,
  onSecondaryAction
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [primaryLoading, setPrimaryLoading] = useState(false)
  const [secondaryLoading, setSecondaryLoading] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handlePrimaryClick = async () => {
    setPrimaryLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      onPrimaryAction?.()
    } finally {
      setPrimaryLoading(false)
    }
  }

  const handleSecondaryClick = async () => {
    setSecondaryLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      if (onSecondaryAction) {
        onSecondaryAction()
      } else {
        const calculatorSection = document.getElementById('shipping-calculator');
        calculatorSection?.scrollIntoView({ behavior: 'smooth' });
      }
    } finally {
      setSecondaryLoading(false)
    }
  }

  return (
    <section 
      className="relative min-h-screen bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden"
      dir="rtl"
      role="banner"
      aria-label="قسم البطل الرئيسي"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 left-16 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-pulse delay-1000" />
      
      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Company Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <Badge 
              variant="secondary" 
              className="text-lg px-6 py-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-300"
              role="img"
              aria-label={`شركة ${companyName}`}
            >
              {companyName}
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {headline}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              نقدم خدمات لوجستية متكاملة تربط بين الصين والمملكة العربية السعودية بأعلى معايير الجودة والكفاءة
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card 
                  className="p-6 h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer group"
                  role="article"
                  aria-label={service.title}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                    }
                  }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:scale-105 focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={handlePrimaryClick}
              disabled={primaryLoading}
              aria-label={primaryButtonText}
              role="button"
            >
              {primaryLoading ? (
                <>
                  <Loader2 className="w-5 h-5 ml-2 animate-spin" />
                  جاري التحميل...
                </>
              ) : (
                <>
                  <Phone className="w-5 h-5 ml-2" />
                  {primaryButtonText}
                </>
              )}
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:scale-105 focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={handleSecondaryClick}
              disabled={secondaryLoading}
              aria-label={secondaryButtonText}
              role="button"
            >
              {secondaryLoading ? (
                <>
                  <Loader2 className="w-5 h-5 ml-2 animate-spin" />
                  جاري التحميل...
                </>
              ) : (
                <>
                  <FileText className="w-5 h-5 ml-2" />
                  {secondaryButtonText}
                </>
              )}
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground mb-6">موثوق به من قبل أكثر من 500 شركة</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {[1, 2, 3, 4].map((item) => (
                <div 
                  key={item}
                  className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center"
                  role="img"
                  aria-label={`شريك تجاري ${item}`}
                >
                  <div className="w-16 h-6 bg-muted-foreground/20 rounded" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-muted-foreground"
            >
              <span className="text-sm mb-2">تمرير للأسفل</span>
              <ArrowLeft className="w-5 h-5 rotate-90" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .bg-grid-pattern {
            background-image: radial-gradient(circle, hsl(var(--foreground) / 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
          }
        `
      }} />
    </section>
  )
}

export default HeroSection