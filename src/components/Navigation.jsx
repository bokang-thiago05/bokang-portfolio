import React from 'react';
import logo from '../assets/favicon.png';

const Navigation = ({ activeSection }) => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-cyan-500/20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          <img
            src={logo}
            alt="BBM Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Nav links */}
        <div className="flex gap-6">
          {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map(item => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`hover:text-cyan-400 transition-colors ${
                activeSection === item.toLowerCase()
                  ? 'text-cyan-400'
                  : 'text-gray-300'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

      </div>
    </nav>
  );
};

export default Navigation;
