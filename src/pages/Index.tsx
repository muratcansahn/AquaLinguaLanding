
import React, { lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';

// Lazy loading ile bileşenleri yükleme
const HeroSection = lazy(() => import('../components/HeroSection'));
const FeatureSection = lazy(() => import('../components/FeatureSection'));
const ActivitySection = lazy(() => import('../components/ActivitySection'));
const GamificationSection = lazy(() => import('../components/GamificationSection'));
const FAQSection = lazy(() => import('../components/FAQSection'));
const Footer = lazy(() => import('../components/Footer'));

// Bileşen yüklenirken gösterilecek fallback
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-12 h-12 border-4 border-blue-300 border-t-blue-500 rounded-full animate-spin"></div>
  </div>
);

// aquaLingua Ana Sayfa bileşeni
const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Bileşenleri Suspense ile sarmalayarak lazy loading uygulama */}
      <Suspense fallback={<SectionLoader />}>
        <HeroSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <FeatureSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ActivitySection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <GamificationSection />
      </Suspense>
      
      {/* <TestimonialSection /> */}
      
      <Suspense fallback={<SectionLoader />}>
        <FAQSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
