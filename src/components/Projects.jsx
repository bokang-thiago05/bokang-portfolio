import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/bokang-thiago05/repos?sort=updated&per_page=10')
      .then(res => res.json())
      .then(data => {
        // Optionally add library-mobile if not on GitHub
        if (!data.some(r => r.name === 'library-mobile')) {
          data.unshift({
            id: 'library-mobile-custom',
            name: 'library-mobile',
            html_url: 'https://github.com/iceptutemalahleni/library-mobile',
            language: 'React Native',
            stargazers_count: 0
          });
        }

        setRepos(data.slice(0, 6));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="min-h-screen flex items-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          GitHub Projects
        </h2>
        {loading ? (
          <div className="text-center text-cyan-400">Loading projects...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map(repo => (
              <div key={repo.id} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:scale-105 group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-cyan-400 group-hover:text-purple-400 transition-colors">
                    {repo.name}
                  </h3>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <div className="flex justify-between items-center text-sm">
                  {repo.language && (
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-cyan-400">
                      {repo.language}
                    </span>
                  )}
                  <span className="text-gray-500">⭐ {repo.stargazers_count}</span>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="text-center mt-8">
          <a href="https://github.com/bokang-thiago05?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
            View All Repositories
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
