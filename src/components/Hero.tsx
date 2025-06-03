
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ArrowDown, Sparkles } from 'lucide-react';

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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-neon-cyan to-transparent rounded-full blur-xl"></div>
        <div className="floating-element absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-neon-purple to-transparent rounded-full blur-xl"></div>
        <div className="floating-element absolute bottom-32 left-1/3 w-24 h-24 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full blur-lg"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-white/5"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-32 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <h1 className="hero-title text-5xl md:text-7xl lg:text-9xl font-bold font-space font-montserrat  mb-6 leading-tight">
            <span className="block">HIMITCO</span>
         
          </h1>
          {/* Badge */}
          <div className="hero-subtitle inline-flex items-center gap-2 bg-dark-card border border-neon-cyan/30 px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm font-medium text-neon-cyan">Next-Gen Technology Solutions</span>
          </div>

          {/* Main Heading */}
         
          <h1 className="hero-title text-5xl md:text-3xl lg:text-5xl font-bold font-space mb-6 leading-tight">
            <span className="block">BUILDING YOUR</span>
            <span className="block text-gradient glow-effect">DIGITAL FUTURE</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-description text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We specialize in cutting-edge web development, mobile applications, 
            and AI-powered platforms that transform businesses and elevate user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-neon-cyan to-neon-purple px-8 py-4 rounded-lg font-semibold text-dark-bg hover:scale-105 transition-transform duration-300 glow-effect"
            >
              Start Your Project
            </button>
            <button 
              onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-neon-cyan px-8 py-4 rounded-lg font-semibold text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg transition-all duration-300"
            >
              View Our Work
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="hero-scroll">
            <button 
              onClick={handleScrollToServices}
              className="flex flex-col items-center text-gray-400 hover:text-neon-cyan transition-colors duration-300 animate-bounce"
              aria-label="Scroll to services"
            >
              <span className="text-sm mb-2">Discover More</span>
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
