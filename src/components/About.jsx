import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const paragraphVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT CARD */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              Who I Am
            </h3>

            <motion.p
              className="text-gray-300 leading-relaxed"
              variants={paragraphVariants}
            >
              I'm a passionate full-stack developer with a Diploma in Computer Science
              from Tshwane University of Technology (2022–2025). Driven by curiosity
              and a desire to build meaningful solutions, I specialize in creating
              scalable web and mobile applications using modern technologies such as
              React, React Native, Node.js, Express, Prisma, and MySQL.
            </motion.p>

            <motion.p
              className="text-gray-300 leading-relaxed mt-4"
              variants={paragraphVariants}
            >
              During my internship at the Informatics Community Engagement Programme
              (ICEP) in 2025, I contributed to real-world projects, including the
              development of the e-Library Log — a mobile-first system being rolled
              out across all Tshwane University of Technology libraries.
            </motion.p>

            <motion.p
              className="text-gray-300 leading-relaxed mt-4"
              variants={paragraphVariants}
            >
              I thrive in collaborative environments, bringing strong problem-solving
              skills, attention to detail, and a proactive approach to learning new
              tools and best practices.
            </motion.p>

            <motion.p
              className="text-gray-300 leading-relaxed mt-4"
              variants={paragraphVariants}
            >
              Currently, I’m eager to take on new opportunities where I can continue
              growing as a developer and build impactful digital products.
            </motion.p>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-purple-400">
              What I Bring
            </h3>
            <ul className="space-y-3">
              {[
                'Strong problem-solving abilities',
                'Excellent team collaboration',
                'Eager to learn new technologies',
                'Attention to detail and clean code',
                'Mobile-first and responsive design mindset',
                'Reliable, proactive, and easy to work with',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
