import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Mail, ChevronDown } from 'lucide-react';
import profile from '../assets/profile.png'

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full-Stack Developer';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 p-1 overflow-hidden">
            <img 
              src={profile} 
              alt="profile.png" 
              className="w-full h-full rounded-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-5xl font-bold">BM</div>';
              }}
            />
          </div>
        </div>
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
          Beleng Bokang Malebo
        </h1>
        <p className="text-3xl mb-6 text-gray-300">
          {typedText}<span className="animate-pulse">|</span>
        </p>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Crafting innovative digital solutions with modern technologies. 
          Passionate about building scalable applications and solving complex problems.
        </p>
        <div className="flex gap-4 justify-center mb-12">
          <a href="https://github.com/bokang-thiago05" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-cyan-500 transition-all hover:scale-110">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/bokang-malebo-321085374/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-cyan-500 transition-all hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="https://www.instagram.com/bokang_thiago05/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-cyan-500 transition-all hover:scale-110">
            <Instagram size={24} />
          </a>
          <a href="mailto:belengbokangmalebo@gmail.com" className="p-3 bg-gray-800 rounded-full hover:bg-cyan-500 transition-all hover:scale-110">
            <Mail size={24} />
          </a>
        </div>
        <button onClick={() => scrollToSection('about')} className="animate-bounce">
          <ChevronDown size={32} className="text-cyan-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;