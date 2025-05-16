
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import ActivitySection from '../components/ActivitySection';
import GamificationSection from '../components/GamificationSection';
import TestimonialSection from '../components/TestimonialSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <ActivitySection />
      <GamificationSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Index;
