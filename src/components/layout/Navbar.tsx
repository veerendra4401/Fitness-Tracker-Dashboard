import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChartBarIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinkClass = (path: string) => `
    px-4 py-2 rounded-lg transition-all duration-300 ease-in-out flex items-center space-x-1
    ${isActive(path) 
      ? 'bg-white/10 text-white transform scale-105' 
      : 'text-white/80 hover:text-white hover:bg-white/10 hover:scale-105'}
  `;

  return (
    <nav className="bg-primary text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300"
        >
          <ChartBarIcon className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Fitness Tracker</h1>
        </Link>
        <div className="flex space-x-2">
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
      </div>
    </nav>
  );
};

export default Navbar; 