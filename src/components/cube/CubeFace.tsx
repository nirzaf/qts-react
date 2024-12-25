import React from 'react';
import Logo from './Logo';
import { CubeFaceProps } from './types';
import './styles/face.css';

const CubeFace: React.FC<CubeFaceProps> = ({ position }) => {
  return (
    <div className={`face ${position}`}>
      <Logo />
    </div>
  );
};

export default CubeFace;
