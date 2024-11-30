import React from 'react';
import { BrowserRouter as Router, Routes as RouterRoutes, Route } from 'react-router-dom';
import Home from '@/pages/Home';

export const Routes: React.FC = () => {
  return (
    <Router>
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        {/* Add other routes as needed */}
      </RouterRoutes>
    </Router>
  );
}; 