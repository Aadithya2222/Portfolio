import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ResumeCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Wave shape accent */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full text-sky-600" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 C30,60 70,40 100,50 L100,100 L0,100 Z" fill="currentColor" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6"
      >
        <span className="text-2xs font-extrabold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
          DETAILED OVERVIEW
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Want the full story?
        </h2>
        <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
          Download the comprehensive technical resume highlighting all software engineering, cloud certifications, and machine learning projects.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          {/* Download button */}
          <a
            href={personalInfo.resumeUrl}
            download
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-sm"
          >
            <FileDown size={14} />
            Download Resume
          </a>

          {/* View link */}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 hover:border-sky-300 rounded-full text-xs font-semibold uppercase tracking-widest text-slate-700 hover:text-sky-600 transition-all duration-300 bg-white"
          >
            <FileText size={14} />
            View Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};
