import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center px-4 py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Experience & Education
        </h2>
        <div className="space-y-8">
          {/* Work Experience */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500/20 rounded-full flex-shrink-0">
                <Briefcase className="text-cyan-400" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-cyan-400">Software Developer (Intern)</h3>
                <p className="text-purple-400 mb-2">Informatics Community Engagement Programme (ICEP)</p>
                <p className="text-gray-500 mb-4">2025</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Mobile Development with React Native</li>
                  <li>• Web Development with React and Node.js</li>
                  <li>• System Configuration and Analysis</li>
                  <li>• Business Process Analysis</li>
                  <li>• Engineering best practices</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education - Tshwane University */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/20 rounded-full flex-shrink-0">
                <GraduationCap className="text-purple-400" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-purple-400">Diploma in Computer Science</h3>
                <p className="text-cyan-400 mb-2">Tshwane University of Technology</p>
                <p className="text-gray-500 mb-4">2022 - 2025</p>
                <div className="grid md:grid-cols-2 gap-2 text-gray-300">
                  <div>• Internet Programming</div>
                  <div>• Database Programming</div>
                  <div>• Software Engineering</div>
                  <div>• Information Security</div>
                  <div>• Operating Systems</div>
                  <div>• Software Projects</div>
                </div>
              </div>
            </div>
          </div>

          {/* Education - Kheleng Secondary School */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500/20 rounded-full flex-shrink-0">
                <GraduationCap className="text-cyan-400" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-cyan-400">Grade 12 - Matric</h3>
                <p className="text-purple-400 mb-2">Kheleng Secondary School</p>
                <p className="text-gray-500 mb-4">2021</p>
                <div className="grid md:grid-cols-2 gap-2 text-gray-300">
                  <div>• Physical Science</div>
                  <div>• Mathematics</div>
                  <div>• Life Science</div>
                  <div>• Accounting</div>
                  <div>• English FAL</div>
                  <div>• Sesotho</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;