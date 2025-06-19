'use client'

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ArrowDown, Sparkles } from 'lucide-react';
import VideoBackground from './ui/videobackground';

const Hero: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo('.hero-title', 
      { opacity: 0, y: 100, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
    )
    .fromTo('.hero-subtitle', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.5"
    )
    .fromTo('.hero-description', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.3"
    )
    .fromTo('.hero-cta', 
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }, "-=0.2"
    )
    .fromTo('.hero-scroll', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 }, "-=0.2"
    );

    // Floating animation for background elements
    gsap.to('.floating-element', {
      y: "-=20",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.5
    });
  }, []);

  const handleScrollToServices = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
 <VideoBackground>
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      
      <div className="absolute inset-0 opacity-20">
        <div className="floating-element absolute top-20 left-10 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-r from-neon-cyan to-transparent rounded-full blur-xl"></div>
        <div className="floating-element absolute top-40 right-20 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-r from-neon-purple to-transparent rounded-full blur-xl"></div>
        <div className="floating-element absolute bottom-32 left-1/3 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full blur-lg"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-6 sm:grid-cols-12 grid-rows-6 sm:grid-rows-12 h-full w-full">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="border border-white/5"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-32 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <h1 className="hero-title text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mt-10 sm:mt-20 font-montserrat mb-4 leading-tight">
            <span className="block ">HIMINFOTECH</span>
         
          </h1>
          {/* Badge */}
          <div className="hero-subtitle inline-flex items-center gap-2 bg-dark-card border border-neon-cyan/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-neon-cyan" />
            <span className="text-xs sm:text-sm font-medium text-neon-cyan font-inter">Next-Gen Technology Solutions</span>
          </div>

          {/* Main Heading */}
         
          <h1 className="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-inter mb-4 leading-tight">
            <span className="block">BUILDING YOUR</span>
            <span className="block text-gradient glow-effect">DIGITAL FUTURE</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-description text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-inter px-4 sm:px-0">
            We specialize in cutting-edge web development, mobile applications, 
            and AI-powered platforms that transform businesses and elevate user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 px-4 sm:px-0">
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-gradient-to-r from-neon-cyan to-neon-purple px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-dark-bg hover:scale-105 transition-transform duration-300 glow-effect font-inter text-sm sm:text-base"
            >
              Start Your Project
            </button>
            <button 
              onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto border border-neon-cyan px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg transition-all duration-300 font-inter text-sm sm:text-base"
            >
              View Our Skills
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="hero-scroll">
            <button 
              onClick={handleScrollToServices}
              className="flex flex-col items-center font-semibold text-gray-400 hover:text-neon-cyan transition-colors duration-300 animate-bounce font-inter"
              aria-label="Scroll to services"
            >
              <span className="text-xs sm:text-sm mb-2">Discover More</span>
              <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
      
    </section>
    </VideoBackground>
    
  );
};

export default Hero;
