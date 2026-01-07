import React from 'react';
import { Code } from 'lucide-react';

const Skills = () => {
  const skills = {
    frontend: ['React', 'React Native', 'HTML', 'CSS', 'JavaScript'],
    backend: ['Node.js', 'Express.js', 'RESTful APIs', 'Prisma'],
    database: ['MySQL', 'Database Programming'],
    tools: ['Git & GitHub', 'Docker', 'VS Code', 'Linux (Kali)']
  };

  return (
    <section id="skills" className="min-h-screen flex items-center px-4 py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:scale-105">
              <h3 className="text-xl font-bold mb-4 capitalize text-cyan-400">
                {category.replace('_', ' ')}
              </h3>
              <div className="space-y-2">
                {items.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Code size={16} className="text-purple-400" />
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;