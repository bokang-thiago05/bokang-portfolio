import React from 'react';

const Navigation = ({ activeSection }) => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-cyan-500/20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          BM
        </div>
        <div className="flex gap-6">
          {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map(item => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`hover:text-cyan-400 transition-colors ${
                activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-gray-300'
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