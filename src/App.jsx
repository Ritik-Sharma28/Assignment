import React from 'react';
import { LineBackground } from './components/layout/LineBackground';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { SectionTwo } from './components/sections/SectionTwo';
import { SectionThree } from './components/sections/SectionThree';
import { Offerings } from './components/sections/Offerings';
import { Testimonials } from './components/sections/Testimonials';

export default function App() {
  return (
    <div className="relative w-full min-h-screen">
      <LineBackground />
      <Navbar />
      <main className="overflow-hidden relative z-10">
        <Hero />
        <SectionTwo />
        <SectionThree />
        <Offerings />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
