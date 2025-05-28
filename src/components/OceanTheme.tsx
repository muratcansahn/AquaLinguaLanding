import React from 'react';

const OceanTheme: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="ocean-theme min-h-screen">
      {/* Okyanus arka plan elementleri */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-blue-400 to-blue-800 overflow-hidden">
        {/* Dalga efektleri */}
        <div className="absolute top-0 left-0 w-full h-24 bg-[url('/wave-top.svg')] bg-repeat-x opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-[url('/wave-bottom.svg')] bg-repeat-x opacity-20"></div>
        
        {/* Işık efektleri */}
        <div className="absolute top-10 right-10 w-1/3 h-1/3 bg-gradient-to-b from-cyan-400/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-1/2 h-1/2 bg-gradient-to-t from-blue-800/30 to-transparent rounded-full blur-3xl"></div>
        
        {/* Baloncuklar */}
        <div className="absolute animate-float-slow top-1/4 left-1/4 w-6 h-6 rounded-full bg-white/10"></div>
        <div className="absolute animate-float-medium top-1/3 right-1/4 w-4 h-4 rounded-full bg-white/10"></div>
        <div className="absolute animate-float-fast bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-white/10"></div>
        <div className="absolute animate-float-medium top-1/2 right-1/3 w-5 h-5 rounded-full bg-white/10"></div>
        <div className="absolute animate-float-slow bottom-1/4 right-1/4 w-8 h-8 rounded-full bg-white/5"></div>
        
        {/* Baloncuk deseni */}
        <div className="absolute inset-0 bg-[url('/bubble-pattern.svg')] opacity-10"></div>
      </div>
      
      {/* Ana içerik */}
      <div className="relative z-0">
        {children}
      </div>
    </div>
  );
};

export default OceanTheme;
