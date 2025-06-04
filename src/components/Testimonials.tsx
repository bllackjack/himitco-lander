import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';


gsap.registerPlugin(ScrollTrigger);

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    gsap.fromTo('.testimonials-header', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: '.testimonials-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.testimonial-card', 
      { opacity: 0, scale: 0.9 },
      { 
        opacity: 1, 
        scale: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.testimonials-container',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechFlow Solutions',
      company: 'TechFlow Solutions',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: 'HIMITCO transformed our digital presence completely. Their web development team delivered a stunning, high-performance platform that exceeded our expectations. The attention to detail and technical expertise is outstanding.',
      rating: 5,
      project: 'E-Commerce Platform'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Founder, HealthTech Innovations',
      company: 'HealthTech Innovations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'The mobile app HIMITCO built for us has revolutionized how our patients interact with our services. The UX is intuitive, the performance is flawless, and the AI integration is game-changing.',
      rating: 5,
      project: 'Healthcare Mobile App'
    },
    {
      name: 'Emily Thompson',
      role: 'CTO, DataVision Analytics',
      company: 'DataVision Analytics',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'Working with HIMITCO on our AI analytics platform was incredible. They brought our complex data visualization ideas to life with elegant code and innovative solutions. Truly a world-class team.',
      rating: 5,
      project: 'AI Analytics Dashboard'
    },
    {
      name: 'David Kim',
      role: 'Product Manager, FinanceForward',
      company: 'FinanceForward',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: 'HIMITCO delivered our fintech platform ahead of schedule with exceptional security and performance. Their expertise in financial technology and user experience design is unmatched.',
      rating: 5,
      project: 'FinTech Web App'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="testimonials-section py-24 bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="testimonials-header text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
              Client <span className="text-gradient">Testimonials</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients say about 
              working with HIMITCO and the results we've delivered.
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className="testimonials-container relative">
            <div className="testimonial-card bg-dark-card border border-dark-border rounded-2xl p-8 md:p-12 relative overflow-hidden">
              {/* Background Quote */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-24 h-24 text-neon-cyan" />
              </div>

              <div className="relative z-10">
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {Array.from({ length: currentTestimonial.rating }).map((_, index) => (
                    <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        className="w-15 h-15 rounded-full border-2 border-neon-cyan/30"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{currentTestimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{currentTestimonial.role}</p>
                      <p className="text-neon-cyan text-sm">{currentTestimonial.company}</p>
                    </div>
                  </div>

                  {/* Project Badge */}
                  <div className="hidden sm:block">
                    <span className="bg-gradient-to-r from-neon-cyan to-neon-purple px-3 py-1 rounded-full text-xs font-semibold text-dark-bg">
                      {currentTestimonial.project}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="bg-dark-card border border-dark-border p-3 rounded-full hover:border-neon-cyan/50 hover:bg-neon-cyan/10 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-neon-cyan" />
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-neon-cyan scale-125' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextTestimonial}
                className="bg-dark-card border border-dark-border p-3 rounded-full hover:border-neon-cyan/50 hover:bg-neon-cyan/10 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-neon-cyan" />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: '98%', label: 'Client Satisfaction' },
              { value: '50+', label: 'Projects Delivered' },
              { value: '24/7', label: 'Support Available' },
              { value: '100%', label: 'On-Time Delivery' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
