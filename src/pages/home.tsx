// src/App.js
import React from 'react';
import Header from '@/components/ui/header';
import Hero from '@/components/ui/hero';
import Menu from '@/components/ui/menu';
import Footer from '@/components/ui/footer';

function Home() {
  return (
    <div className="font-sans bg-gray-950">
      <Header />
      <Hero />
      <Menu />
      <Footer />
    </div>
  );
}

export default Home;
