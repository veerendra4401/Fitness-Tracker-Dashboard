import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChartBarIcon, UserCircleIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinkClass = (path: string) => `
    px-4 py-2 rounded-lg transition-all duration-300 ease-in-out flex items-center space-x-1
    ${isActive(path) 
      ? 'bg-white/10 text-white transform scale-105' 
      : 'text-white/80 hover:text-white hover:bg-white/10 hover:scale-105'}
  `;

  const mobileNavLinkClass = (path: string) => `
    w-full px-4 py-3 rounded-lg transition-all duration-300 ease-in-out flex items-center space-x-2
    ${isActive(path)
      ? 'bg-white/10 text-white'
      : 'text-white/80 hover:text-white hover:bg-white/10'}
  `;

  return (
    <nav className="bg-primary text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300"
          >
            <ChartBarIcon className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Fitness Tracker</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            <Link to="/" className={navLinkClass('/')}>
              Dashboard
            </Link>
            <Link to="/workouts" className={navLinkClass('/workouts')}>
              Workouts
            </Link>
            <Link to="/stats" className={navLinkClass('/stats')}>
              Stats
            </Link>
            <Link to="/profile" className={navLinkClass('/profile')}>
              <UserCircleIcon className="h-5 w-5" />
              <span>Profile</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 animate-fadeIn">
            <Link 
              to="/" 
              className={mobileNavLinkClass('/')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/workouts" 
              className={mobileNavLinkClass('/workouts')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Workouts
            </Link>
            <Link 
              to="/stats" 
              className={mobileNavLinkClass('/stats')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Stats
            </Link>
            <Link 
              to="/profile" 
              className={mobileNavLinkClass('/profile')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <UserCircleIcon className="h-5 w-5" />
              <span>Profile</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 