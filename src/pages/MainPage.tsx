// src/pages/Home.tsx (แนะนำให้สร้างโฟลเดอร์ pages สำหรับเก็บหน้าต่างๆ)
import React from 'react';
import Layout from '../layouts/Layout'; // Import Layout
import Content from '../components/Content';

const Home: React.FC = () => {
  return (
    <Layout> 
      <Content/>
    </Layout>
  );
};

export default Home;