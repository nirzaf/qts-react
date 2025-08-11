import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <a 
        href="https://www.facebook.com/quadrate.lk/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors duration-200"
        aria-label="Follow us on Facebook"
      >
        <Facebook className="h-5 w-5" />
      </a>
      <a 
        href="https://x.com/quadrate_lk?mx=2"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors duration-200"
        aria-label="Follow us on Twitter"
      >
        <Twitter className="h-5 w-5" />
      </a>
      <a 
        href="https://www.instagram.com/quadrate.lk/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors duration-200"
        aria-label="Follow us on Instagram"
      >
        <Instagram className="h-5 w-5" />
      </a>
      <a 
        href="https://lk.linkedin.com/company/quadrate-tech"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition-colors duration-200"
        aria-label="Follow us on LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
      </a>
    </div>
  );
};