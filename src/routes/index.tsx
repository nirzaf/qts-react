import React from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import Home from '@/pages/Home';

export const Routes: React.FC = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      {/* Add other routes as needed */}
    </RouterRoutes>
  );
};