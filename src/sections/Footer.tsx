import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-between pb-12 relative z-10 text-center">
        {/* Brand */}
        <h2 className="text-xl font-extrabold tracking-widest text-slate-900 mb-2">
          {personalInfo.name.toUpperCase()}
        </h2>
        <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-6">
          AI / ML ENGINEER &middot; SOFTWARE ENGINEER &middot; CLOUD
        </p>

        {/* Social Quicklinks */}
        <div className="flex space-x-6 mb-8">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-sky-600 transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-sky-600 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-slate-500 hover:text-sky-600 transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-slate-400 font-medium">
          &copy; {new Date().getFullYear()} Aadithya R. All rights reserved.
        </p>
      </div>

      {/* Tiny Animated Wave SVG Background at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-10 w-full overflow-hidden pointer-events-none opacity-40">
        <svg
          className="absolute bottom-0 w-[200%] h-12 fill-sky-200/50"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{
            animation: 'wave-slide 15s linear infinite',
            backgroundImage: 'repeat-x',
          }}
        >
          <path d="M0,60 C150,90 350,30 500,60 C650,90 850,30 1000,60 C1150,90 1350,30 1500,60 L1500,120 L0,120 Z" />
        </svg>
        <svg
          className="absolute bottom-0 w-[200%] h-8 fill-sky-300/30"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{
            animation: 'wave-slide 10s linear infinite reverse',
            backgroundImage: 'repeat-x',
          }}
        >
          <path d="M0,50 C150,80 350,20 500,50 C650,80 850,20 1000,50 C1150,80 1350,20 1500,50 L1500,120 L0,120 Z" />
        </svg>
      </div>
    </footer>
  );
};
