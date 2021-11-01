import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SimulationSection from '../components/SimulationSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SimulationSection />
      <ProjectsSection />
      <ContactBanner />
      <Footer />
    </div>
  );
}
