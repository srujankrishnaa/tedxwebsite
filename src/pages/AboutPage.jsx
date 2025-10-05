import React from 'react';
import Navbar from '../components/Navbar';
import AboutHero from '../components/AboutHero';
import AboutContent from '../components/AboutContent';
import TeamSection from '../components/TeamSection';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <AboutHero />
      <AboutContent />
      <TeamSection />
      <Footer />
    </div>
  );
}

