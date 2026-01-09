import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('sending');

  try {
    const res = await fetch('http://bokang-portfolio-backend.up.railway.app/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (!res.ok) throw new Error();

    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
  } catch {
    setStatus('error');
  }
};


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center px-4 py-20 bg-gray-900/50">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-300 mb-12 text-center">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20">
            <Mail className="mx-auto mb-3 text-cyan-400" size={32} />
            <a href="mailto:belengbokangmalebo@gmail.com" className="text-gray-300 hover:text-cyan-400 break-all block text-center">
              belengbokangmalebo@gmail.com
            </a>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20">
            <Phone className="mx-auto mb-3 text-purple-400" size={32} />
            <a href="tel:0671976390" className="text-gray-300 hover:text-purple-400 block text-center">
              067 197 6390
            </a>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20">
            <MapPin className="mx-auto mb-3 text-cyan-400" size={32} />
            <p className="text-gray-300 text-center">Welkom, Free State, South Africa</p>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <a href="https://github.com/bokang-thiago05" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-800 rounded-full hover:bg-cyan-500 transition-all hover:scale-110">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/bokang-malebo-321085374/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-800 rounded-full hover:bg-cyan-500 transition-all hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="https://www.instagram.com/bokang_thiago05/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-800 rounded-full hover:bg-cyan-500 transition-all hover:scale-110">
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;