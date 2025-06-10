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
      <Navbar /> {/* วาง Navbar ที่นี่ */}
      <main className="flex-grow">
        {children} {/* ส่วนนี้คือเนื้อหาหลักของหน้า */}
      </main>
      <Footer />

    </div>
  );
};

export default Layout;