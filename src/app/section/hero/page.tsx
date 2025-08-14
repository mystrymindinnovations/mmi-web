'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(87vh-4rem)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-brand-blue-dark to-brand-blue animated-gradient">

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-brand-orange/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-blue-light/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main heading */}
          <h1 className="mt-8 text-2xl md:text-4xl font-bold text-primary-foreground mb-4 whitespace-nowrap overflow-hidden text-ellipsis">
            Welcome to <span className="bg-gradient-to-r from-brand-orange to-brand-orange-light bg-clip-text text-transparent">MystryMind</span>
          </h1>

          {/* Subheading */}
          <div className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-semibold">
            Tech-Powered Solutions | Innovation-Driven Services
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            🚀 Turning Ideas into Scalable Digital Realities
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-primary-foreground/70 mb-12 max-w-4xl mx-auto leading-relaxed">
            At MystryMind, we don't just build software — we craft intelligent solutions tailored for the modern world. 
            Whether you're a startup looking to disrupt your industry or an enterprise aiming to scale, 
            our expert team transforms your vision into intuitive, scalable, and high-performance digital products.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="group bg-brand-orange hover:bg-brand-orange-light text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 px-8"
              asChild
            >
              <Link href="/section/contact">
                Get Free Consultant
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 text-primary-foreground border-white/30 hover:bg-white/20 hover:border-white/50 backdrop-blur-sm px-6"
              asChild
            >
              <Link href="/section/getEstimate">
                Get Estimates
              </Link>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full p-1 mx-auto">
                <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mx-auto animate-pulse"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
