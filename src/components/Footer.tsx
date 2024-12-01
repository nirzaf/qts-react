import React from 'react';
import { FooterLogo } from './footer/FooterLogo';
import { SocialLinks } from './footer/SocialLinks';
import { QuickLinks } from './footer/QuickLinks';
import { ServicesLinks } from './footer/ServicesLinks';
import { ContactInfo } from './footer/ContactInfo';
import { FooterBottom } from './footer/FooterBottom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFFFFF] border-t border-[#000000]/5">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <FooterLogo />
            <p className="text-[#000000]/70 text-sm">
              Empowering businesses with innovative digital solutions and cutting-edge technology.
            </p>
            <SocialLinks />
          </div>
          <QuickLinks />
          <ServicesLinks />
          <ContactInfo />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};
