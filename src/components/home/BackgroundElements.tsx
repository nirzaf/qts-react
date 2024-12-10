import React from 'react';

export const BackgroundElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#0607E1]/5 rounded-full blur-xl" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-[#0607E1]/10 rounded-full blur-2xl" />
      </div>
    </div>
  );
};

export default BackgroundElements;
