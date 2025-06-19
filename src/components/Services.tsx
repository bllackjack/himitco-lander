'use client'

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Smartphone, Brain, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  useEffect(() => {
    gsap.fromTo('.services-header', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: '.services-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.service-card', 
      { opacity: 0, y: 100, rotationX: -15 },
      { 
        opacity: 1, 
        y: 0, 
        rotationX: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const services = [
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Intelligent solutions powered by machine learning and AI to automate processes and enhance decision-making.',
      features: ['Machine Learning', 'Data Analytics', 'Automation', 'Smart Insights'],
      color: 'neon-cyan'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites and web applications built with cutting-edge technologies like React, Next.js, and modern frameworks.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Focused', 'Modern Tech Stack'],
      color: 'neon-cyan'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
      features: ['iOS & Android', 'Cross-Platform', 'Native Performance', 'App Store Ready'],
      color: 'neon-purple'
    }
    
  ];

  return (
    <section id="services" className="services-section py-24 bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="services-header text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
              Our <span className="text-gradient">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive digital solutions that transform ideas into 
              powerful, scalable, and user-friendly applications.
            </p>
          </div>

          {/* Services Grid */}
          <div className="services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="service-card group bg-dark-card border border-dark-border rounded-2xl p-8 hover:border-neon-cyan/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-neon-cyan/10"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-${service.color} to-neon-purple rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-dark-bg" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-neon-cyan transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More */}
                <button className="flex items-center text-neon-cyan hover:text-white transition-colors duration-300 group/btn">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-dark-card to-dark-bg border border-dark-border rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let's discuss how we can bring your vision to life with our expertise 
                in modern web development, mobile apps, and AI solutions.
              </p>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-neon-cyan to-neon-purple px-8 py-3 rounded-lg font-semibold text-dark-bg hover:scale-105 transition-transform duration-300"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
