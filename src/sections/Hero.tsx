import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 35;
    const y = (e.clientY - rect.top - rect.height / 2) / 35;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen flex items-center justify-center bg-white pt-24 pb-12 overflow-hidden relative bg-dot-grid"
    >
      {/* Soft gradient masks to keep dot grid subtle */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-8 text-left"
        >
          <div className="space-y-4">
            <span className="inline-block text-2xs font-extrabold uppercase tracking-widest text-sky-600 bg-sky-50/50 px-3.5 py-1 rounded-full border border-sky-100/50">
              AI / ML Engineer &middot; Software &middot; Cloud
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] max-w-xl">
              Building intelligent systems for the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">
                real world.
              </span>
            </h1>
          </div>

          <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-lg font-normal">
            I'm <span className="text-slate-800 font-semibold">{personalInfo.name}</span>. I build practical, intelligent systems that combine state-of-the-art models with reliable, scalable software and cloud-powered infrastructures.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-sm"
            >
              Explore my work
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 hover:border-sky-300 text-xs font-semibold uppercase tracking-widest text-slate-700 hover:text-sky-600 transition-all duration-300 bg-white"
            >
              <FileText size={14} />
              View Resume
            </a>
          </div>

          {/* Social Quicklinks */}
          <div className="flex items-center space-x-6 pt-4 text-slate-400">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-sky-600 transition-colors duration-300"
            >
              <Github size={15} />
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-sky-600 transition-colors duration-300"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Right Visual Column (Aadithya's Photo Card) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-5 flex justify-center items-center select-none"
          style={{
            transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          {/* Picture frame container */}
          <div className="relative w-72 h-96 md:w-80 md:h-[420px] flex items-center justify-center animate-float-slow">
            
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-sky-200/20 rounded-3xl blur-2xl" />

            {/* Back drop shadows & alignment frame */}
            <div className="absolute inset-0 rounded-3xl border border-slate-100 bg-slate-50/20 backdrop-blur-3xl shadow-sm" />

            {/* Actual photo card container */}
            <div className="absolute inset-4 rounded-2xl overflow-hidden border border-slate-150 shadow-md bg-white">
              <img
                src="/aadithya_photo.jpg"
                alt={personalInfo.name}
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                draggable="false"
              />
            </div>
            
            {/* Top border decoration */}
            <div className="absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
