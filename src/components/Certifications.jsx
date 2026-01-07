import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    { name: 'Responsive Web Design', org: 'FreeCodeCamp', year: '2025', link: 'https://freecodecamp.org/certification/thiago_05/responsive-webdesign' },
    { name: 'Back End Development and API', org: 'FreeCodeCamp', year: '2025', link: 'https://freecodecamp.org/certification/thiago_05/backend-development-and-apis' },
    { name: 'Front End Development Libraries', org: 'FreeCodeCamp', year: '2025', link: 'https://freecodecamp.org/certification/thiago_05/frontend-development-libraries' },
    { name: 'JavaScript Algorithms & Data Structures', org: 'FreeCodeCamp', year: '2025', link: 'https://freecodecamp.org/certification/thiago_05/javascript-algorithms-and-datastructures-v8' },
    { name: 'SQL Basic', org: 'HackerRank', year: '2025', link: 'https://www.hackerrank.com/certificates/47df35c8bf54' },
    { name: 'SQL Intermediate', org: 'HackerRank', year: '2025', link: 'https://www.hackerrank.com/certificates/iframe/28210e36dbca' },
    { name: 'Relational Database V8', org: 'FreeCodeCamp', year: '2025', link: 'https://freecodecamp.org/certification/thiago_05/relationaldatabase-v8' },
    { name: 'IT for Business Success', org: 'HP Life', year: '2025', link: 'https://www.life-global.org/certificate/79d3eaba-786d-47b0-a1c2-e93af25d7e88' }
  ];

  return (
    <section id="certifications" className="min-h-screen flex items-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Certifications
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <a key={idx} href={cert.link} target="_blank" rel="noopener noreferrer" className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:scale-105 group">
              <div className="flex items-start gap-3 mb-3">
                <Award className="text-cyan-400 flex-shrink-0" size={24} />
                <h3 className="font-bold text-lg text-gray-200 group-hover:text-cyan-400 transition-colors">
                  {cert.name}
                </h3>
              </div>
              <p className="text-purple-400 text-sm mb-2">{cert.org}</p>
              <p className="text-gray-500 text-sm">{cert.year}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;