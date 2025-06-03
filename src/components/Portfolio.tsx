
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Portfolio: React.FC = () => {
  useEffect(() => {
    gsap.fromTo('.portfolio-header', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: '.portfolio-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.portfolio-item', 
      { opacity: 0, y: 80, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.portfolio-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce platform built with Next.js, featuring real-time inventory, AI-powered recommendations, and seamless payment integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'AI/ML'],
      featured: true
    },
    {
      title: 'Healthcare Mobile App',
      category: 'App Development',
      description: 'Cross-platform mobile application for healthcare providers with telemedicine features, appointment scheduling, and patient management.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Node.js', 'WebRTC', 'Firebase']
    },
    {
      title: 'AI Analytics Dashboard',
      category: 'AI Integration',
      description: 'Intelligent analytics platform that processes large datasets and provides actionable insights through machine learning algorithms.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js']
    },
    {
      title: 'FinTech Web App',
      category: 'Web Development',
      description: 'Secure financial technology platform with real-time trading, portfolio management, and advanced security features.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'WebSocket']
    },
    {
      title: 'Smart IoT Platform',
      category: 'AI Integration',
      description: 'IoT management platform with AI-driven automation, real-time monitoring, and predictive maintenance capabilities.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Python', 'MQTT', 'TensorFlow']
    },
    {
      title: 'Social Media App',
      category: 'App Development',
      description: 'Next-generation social platform with AI-powered content curation, real-time messaging, and advanced privacy controls.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
      technologies: ['Flutter', 'Firebase', 'GraphQL', 'AI/ML']
    }
  ];

  return (
    <section id="portfolio" className="portfolio-section py-24 bg-gradient-to-b from-dark-bg to-dark-card">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="portfolio-header text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our latest projects showcasing innovation, creativity, and 
              technical excellence across web development, mobile apps, and AI solutions.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="portfolio-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`portfolio-item group relative bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-neon-cyan/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-neon-cyan/10 ${
                  project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Actions */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-dark-bg/80 border border-neon-cyan/50 p-2 rounded-lg hover:bg-neon-cyan hover:text-dark-bg transition-colors duration-300">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="bg-dark-bg/80 border border-neon-cyan/50 p-2 rounded-lg hover:bg-neon-cyan hover:text-dark-bg transition-colors duration-300">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-neon-cyan to-neon-purple px-3 py-1 rounded-full text-xs font-semibold text-dark-bg">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-dark-bg border border-dark-border px-2 py-1 rounded text-xs text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-300 mb-6">
              Want to see more of our work or discuss your project?
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-neon-cyan to-neon-purple px-8 py-3 rounded-lg font-semibold text-dark-bg hover:scale-105 transition-transform duration-300"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
