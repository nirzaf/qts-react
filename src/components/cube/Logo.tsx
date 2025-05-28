import React from 'react';
import './styles/logo.css';

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <img 
        src="https://ik.imagekit.io/quadrate/assets/img/QTS%20Primary%20Logo.png?updatedAt=1748456663889"
        alt="Q Logo"
        className="logo"
      />
    </div>
  );
};

export default Logo;
