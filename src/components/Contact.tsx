'use client'
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    gsap.fromTo('.contact-header', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.contact-content', 
      { opacity: 0, x: -50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.contact-container',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.contact-form', 
      { opacity: 0, x: 50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8,
        scrollTrigger: {
          trigger: '.contact-container',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
    try {

      // EmailJS configuration - You'll need to set up your EmailJS account
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID; // Replace with your EmailJS service ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID; // Replace with your EmailJS template ID
      const userId = import.meta.env.VITE_EMAILJS_PUBLIC_KEY; // Replace with your EmailJS user ID

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        project_type: formData.project,
        message: formData.message,
        to_email: 'himitco.online@gmail.com' // Replace with your email
      };

      // For demo purposes, we'll simulate a successful submission
    //  await new Promise(resolve => setTimeout(resolve, 2000));
      
   
       await emailjs.send(serviceId, templateId, templateParams, userId);

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        project: '',
        message: ''
      });

      console.log('Form submitted successfully:', templateParams);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@himinfotech.com',
      description: 'Send us an email anytime!'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 9780676707',
      description: 'Mon-Fri from 8am to 5pm'
    },
    {
      icon: MapPin,
      title: 'Office',
      content: ' Chandigarh, India',
      description: 'Come say hello at our HQ'
    }
  ];

  const projectTypes = [
    'Web Development',
    'Mobile App Development',
    'AI Integration',
    'E-Commerce Platform',
    'Custom Software',
    'Consultation',
    'Other'
  ];

  return (
    <section id="contact" className="contact-section py-24 bg-gradient-to-b from-dark-card to-dark-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="contact-header text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your digital presence? Let's discuss your project 
              and discover how can bring your vision to life.
            </p>
          </div>

          <div className="contact-container grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="contact-content space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-neon-cyan">
                  Let's Start a Conversation
                </h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  We're here to help you navigate the digital landscape. Whether you need 
                  a stunning website, a powerful mobile app, or AI integration, our team 
                  is ready to turn your ideas into reality.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-dark-card border border-dark-border rounded-xl hover:border-neon-cyan/50 transition-all duration-300">
                    <div className="bg-gradient-to-br from-neon-cyan to-neon-purple p-3 rounded-lg">
                      <info.icon className="w-6 h-6 text-dark-bg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                      <p className="text-neon-cyan font-medium">{info.content}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-r from-dark-card to-dark-bg border border-dark-border rounded-xl p-6">
                <h4 className="font-semibold text-neon-cyan mb-2">Quick Response Time</h4>
                <p className="text-gray-300 text-sm">
                  We typically respond to all inquiries within 24 hours. For urgent 
                  projects, we offer same-day consultations.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Company & Project Type */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="project" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Type
                    </label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-white focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-neon-cyan to-neon-purple py-4 rounded-lg font-semibold text-dark-bg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-dark-bg border-t-transparent"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center space-x-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4">
                    <AlertCircle className="w-5 h-5" />
                    <span>Error sending message. Please try again or contact us directly.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
