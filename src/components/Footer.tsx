import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t bg-background">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-[url('https://ik.imagekit.io/quadrate/assets/img/footer-bg.png?updatedAt=1718024113822')] bg-cover bg-center opacity-5"
        aria-hidden="true"
      />

      <div className="container relative">
        <div className="grid gap-8 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <motion.img
              src="https://ik.imagekit.io/quadrate/assets/QTS%20PNG.png?updatedAt=1732465331710"
              alt="Quadrate Tech Solutions"
              className="h-12 w-auto logo-emboss"
              whileHover={{ 
                scale: 1.05,
                filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))",
              }}
              animate={{
                filter: [
                  "drop-shadow(2px 2px 2px rgba(255,255,255,0.5)) drop-shadow(-2px -2px 2px rgba(0,0,0,0.2))",
                  "drop-shadow(2px 2px 3px rgba(255,255,255,0.6)) drop-shadow(-2px -2px 3px rgba(0,0,0,0.3))",
                  "drop-shadow(2px 2px 2px rgba(255,255,255,0.5)) drop-shadow(-2px -2px 2px rgba(0,0,0,0.2))"
                ]
              }}
              transition={{
                filter: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                scale: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15
                }
              }}
              style={{
                filter: "drop-shadow(2px 2px 2px rgba(255,255,255,0.5)) drop-shadow(-2px -2px 2px rgba(0,0,0,0.2))"
              }}
            />
            <p className="text-sm text-muted-foreground">
              Empowering businesses with innovative digital solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary">
                  Mobile App Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                19/2/9, Market Complex,<br />
                Matale Road, Akurana,<br />
                Kandy: 20850
              </li>
              <li>
                <a href="tel:+94814242615" className="text-muted-foreground hover:text-primary">
                  +94 81 424 2615
                </a>
              </li>
              <li>
                <a href="mailto:info@quadrate.lk" className="text-muted-foreground hover:text-primary">
                  info@quadrate.lk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} Quadrate Tech Solutions. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-primary">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
