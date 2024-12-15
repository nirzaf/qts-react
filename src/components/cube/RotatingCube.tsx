import React from 'react';
import CubeFace from './CubeFace';
import { CubeFacePosition } from './types';
import './styles/cube.css';

const FACE_POSITIONS: CubeFacePosition[] = ['front', 'back', 'right', 'left', 'top', 'bottom'];

const RotatingCube: React.FC = () => {
  return (
    <div className="cube-container">
      <div className="cube">
        {FACE_POSITIONS.map((position) => (
          <CubeFace key={position} position={position} />
        ))}
      </div>
    </div>
  );
};

export default RotatingCube;
