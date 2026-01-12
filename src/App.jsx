import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { TrustLogos } from './components/sections/TrustLogos';
import { EasierSection } from './components/sections/EasierSection';
import { BentoGrid } from './components/sections/BentoGrid';
import { SmarterSection } from './components/sections/SmarterSection';
import { Benefits } from './components/sections/Benefits';
import { Stats } from './components/sections/Stats';
import { Pricing } from './components/sections/Pricing';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { CTA } from './components/sections/CTA';

function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustLogos />
      <EasierSection />
      <BentoGrid />
      <SmarterSection />
      <Benefits />
      <Stats />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
