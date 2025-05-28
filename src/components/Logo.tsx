import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => {
  return (
    <img 
      src="/game-screen-fish.png" 
      alt="AquaLingua Logo" 
      className={className}
    />
  );
};

export default Logo;
