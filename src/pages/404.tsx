import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-8 md:py-12 lg:py-24">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="font-bold text-6xl md:text-8xl">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button onClick={() => navigate('/')}>
          Return Home
        </Button>
      </div>
    </section>
  );
};

export default NotFoundPage;
