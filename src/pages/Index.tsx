
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Chat from '../components/Chat';
const Index: React.FC = () => {
  return (
    <Layout
      title="HIMITCO - Building Your Digital Future | Web Development, Apps & AI"
      description="HIMITCO specializes in cutting-edge web development, mobile apps, and AI platforms. Transform your business with our innovative technology solutions. Get started today!"
    >
      <Hero />
      <Chat />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default Index;
