// src/layouts/Layout.tsx
import React from 'react';
import Navbar from '../components/Navbar'; // Import Navbar
import Footer from '../components/Footer';
import Content from '../components/Content';



const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* วาง Navbar ที่นี่ */}
      <Content/>
      <Footer />

    </div>
  );
};

export default Layout;