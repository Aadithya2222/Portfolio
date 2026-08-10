import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Cloud, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Brain className="text-sky-500" size={24} />,
      title: 'AI / ML',
      description: 'Building and fine-tuning neural networks, computer vision classification, and NLP chains.',
    },
    {
      icon: <Code className="text-sky-500" size={24} />,
      title: 'Software Engineering',
      description: 'Creating robust, scalable backend structures, RESTful APIs, and responsive frontends.',
    },
    {
      icon: <Cloud className="text-sky-500" size={24} />,
      title: 'Cloud Computing',
      description: 'Architecting secure pipelines on AWS using EC2, Lambda, VPCs, and serverless setups.',
    },
    {
      icon: <Terminal className="text-sky-500" size={24} />,
      title: 'Full Stack Development',
      description: 'Integrating machine learning models seamlessly with clean user dashboards and services.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Detail */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <span className="text-2xs font-extrabold uppercase tracking-widest text-slate-400">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              "I enjoy turning complex ideas into useful software."
            </h2>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              {personalInfo.aboutSummary}
            </p>
            <div className="pt-2 text-slate-500 text-sm">
              <span className="font-semibold text-slate-800">Current Location:</span> {personalInfo.location}
            </div>
          </motion.div>

          {/* Right SVG Exploration Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="p-8 rounded-3xl border border-slate-100 bg-slate-50 shadow-sm relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]">
              {/* Ocean schematic SVG */}
              <svg
                width="200"
                height="200"
                viewBox="0 0 100 100"
                className="text-sky-200 opacity-60 absolute pointer-events-none scale-110"
              >
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.75" />
                <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                <path d="M50,5 L50,95 M5,50 L95,50" stroke="currentColor" strokeWidth="0.25" />
              </svg>

              {/* Exploration overlay logo */}
              <div className="relative z-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto shadow-md border border-slate-100 text-sky-600">
                  <Brain size={28} />
                </div>
                <h3 className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                  AIML UNDERGRADUATE
                </h3>
                <p className="text-slate-400 text-xs max-w-[220px] leading-relaxed">
                  Combining artificial intelligence models with production-grade engineering structures.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-16">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 bg-white border border-slate-100 rounded-2xl text-left hover:shadow-lg hover:shadow-sky-50/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
