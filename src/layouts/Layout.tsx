// src/layouts/Layout.tsx
import React, { type ReactNode } from 'react';
import Navbar from '../components/Navbar'; // Import Navbar
import Footer from '../components/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> 
      <main className="flex-grow">
        {children} 
      </main>
      <Footer />

    </div>
  );
};

export default Layout;