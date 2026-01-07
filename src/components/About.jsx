import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Who I Am</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a dedicated software developer with a Diploma in Computer Science from Tshwane University of Technology. 
              My journey in tech is driven by curiosity and a passion for creating solutions that make a difference.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              With hands-on experience in both mobile and web development, I specialize in building full-stack applications 
              using modern technologies like React, Node.js, and MySQL.
            </p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">What I Bring</h3>
            <ul className="space-y-3">
              {[
                'Strong problem-solving abilities',
                'Excellent team collaboration',
                'Eager to learn new technologies',
                'Positive attitude towards feedback',
                'Time management expertise',
                'Social and easy to work with'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;