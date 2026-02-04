import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { handleHashNavigation } from '../utils/smoothScroll';

import Tanvox from '../assets/TANVOX_IMG-BG.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Handle hash navigation on route change
    handleHashNavigation();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]); // Re-run when location changes

  const navLinks = [
    { href: '/', text: 'Home' },
    { href: '/about#hero', text: 'About Us' },
    { href: '/services#hero', text: 'Services' },
    { href: '/careers#hero', text: 'Careers' },
    { href: '/contact#hero', text: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" >
              <img style={{ width: '120px',height: '50px'}} src={Tanvox} alt="Tanvox" className="h-12" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`${
                  location.pathname === link.href 
                    ? 'text-dark-red' 
                    : 'text-gray-text hover:text-navy-blue'
                } transition-colors duration-200`}
              >
                {link.text}
              </Link>
            ))}
            {/* <Button>Get Started</Button> */}
          </div>

          <button
            className="md:hidden text-dark-red"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block py-2 ${
                  location.pathname === link.href 
                    ? 'text-dark-red' 
                    : 'text-gray-text hover:text-navy-blue'
                } transition-colors duration-200`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
            <div className="mt-4">
              {/* <Button className="w-full">Get Started</Button> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
