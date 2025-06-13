
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import MainHero from '@/components/ChatBox';


const Index: React.FC = () => {
  return (
    <Layout
      title="HIMINFOTECH - Building Your Digital Future | Web Development, Apps & AI"
      description="HIMINFOTECH specializes in cutting-edge web development, mobile apps, and AI platforms. Transform your business with our innovative technology solutions. Get started today!"
    >
      <Hero/>
      <MainHero/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
      </Layout>
  );
};

export default Index;
