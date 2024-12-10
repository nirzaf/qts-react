import React from 'react';

export const AboutHero: React.FC = () => {
  return (
    <div className="relative h-[300px] bg-[url('https://ik.imagekit.io/quadrate/assets/img/about.jpg?updatedAt=1718024112686')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container h-full flex items-center justify-center">
        {/* Hero content can be added here if needed */}
      </div>
    </div>
  );
};