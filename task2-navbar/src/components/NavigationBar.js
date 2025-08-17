import React, { useState, useEffect } from 'react';
import './NavigationBar.css';

const NavigationBar = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation
  const handleNavigation = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false); // Close mobile menu when navigating
  };

  // Handle mobile menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className={`nav-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        {/* Logo/Brand */}
        <div className="nav-brand">
          <div className="brand-logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">Brand</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links desktop-nav">
          <button
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => handleNavigation('home')}
          >
            Home
          </button>
          <button
            className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
            onClick={() => handleNavigation('about')}
          >
            About
          </button>
          <button
            className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavigation('contact')}
          >
            Contact
          </button>
          <button
            className={`nav-link ${currentPage === 'users' ? 'active' : ''}`}
            onClick={() => handleNavigation('users')}
          >
            Users
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-links">
            <button
              className={`mobile-nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => handleNavigation('home')}
            >
              <span className="nav-icon">🏠</span>
              Home
            </button>
            <button
              className={`mobile-nav-link ${currentPage === 'about' ? 'active' : ''}`}
              onClick={() => handleNavigation('about')}
            >
              <span className="nav-icon">ℹ️</span>
              About
            </button>
            <button
              className={`mobile-nav-link ${currentPage === 'contact' ? 'active' : ''}`}
              onClick={() => handleNavigation('contact')}
            >
              <span className="nav-icon">📞</span>
              Contact
            </button>
            <button
              className={`mobile-nav-link ${currentPage === 'users' ? 'active' : ''}`}
              onClick={() => handleNavigation('users')}
            >
              <span className="nav-icon">👥</span>
              Users
            </button>
          </div>
        </div>
      </div>

      {/* Animated background gradient */}
      <div className="nav-background">
        <div className="gradient-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;

