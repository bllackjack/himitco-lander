import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = "HIMITCO - Building Your Digital Future",
  description = "HIMITCO specializes in cutting-edge web development, mobile apps, and AI platforms. Transform your business with our innovative technology solutions."
}) => {
  return (
    <div className="min-h-screen text-white">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
