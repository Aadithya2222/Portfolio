import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Cpu, Lightbulb, Target, Award } from 'lucide-react';
import type { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[85vh] bg-white rounded-3xl border border-slate-100 shadow-2xl overflow-y-auto z-10 custom-scrollbar"
        >
          {/* Header Image/Pattern */}
          <div className="h-32 bg-gradient-to-r from-sky-50 to-sky-100/60 relative overflow-hidden flex items-center px-8 md:px-12 border-b border-slate-100">
            {/* Ocean Ripple Graphic in Background */}
            <div className="absolute right-0 top-0 w-64 h-64 border border-sky-200/30 rounded-full scale-150 pointer-events-none translate-x-24 -translate-y-24" />
            <div className="absolute right-12 bottom-0 w-32 h-32 border border-sky-300/20 rounded-full scale-120 pointer-events-none translate-x-12 translate-y-12" />

            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-2xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-sky-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full border border-slate-200 hover:border-sky-300 text-slate-500 hover:text-sky-600 bg-white shadow-sm transition-all duration-300 cursor-pointer"
              aria-label="Close Case Study"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-8 md:p-12 space-y-8">
            {/* Overview */}
            {project.overview && (
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold flex items-center gap-2">
                  <Target size={14} className="text-sky-500" />
                  Overview
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  {project.overview}
                </p>
              </div>
            )}

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              {project.problem && (
                <div className="space-y-2 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold flex items-center gap-2">
                    <X size={14} className="text-red-400" />
                    The Problem
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="space-y-2 p-6 rounded-2xl bg-sky-50/50 border border-sky-100/50">
                  <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold flex items-center gap-2">
                    <Lightbulb size={14} className="text-sky-500" />
                    The Solution
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>

            {/* Architecture Details */}
            {project.architecture && project.architecture.length > 0 && (
              <div className="space-y-3 pt-2">
                <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold flex items-center gap-2">
                  <Cpu size={14} className="text-sky-500" />
                  System Architecture
                </h3>
                <ul className="space-y-2">
                  {project.architecture.map((item, index) => (
                    <li key={index} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                      <span className="text-sky-500 font-bold select-none">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Key Features */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="space-y-3 pt-2">
                <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold flex items-center gap-2">
                  <Award size={14} className="text-sky-500" />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex gap-2.5 items-start text-slate-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contribution & Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              {project.contribution && (
                <div className="space-y-2">
                  <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                    My Contribution
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {project.contribution}
                  </p>
                </div>
              )}

              {project.results && (
                <div className="space-y-2">
                  <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                    Results & Impact
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {project.results}
                  </p>
                </div>
              )}
            </div>

            {/* Actions / Links */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-100">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs uppercase tracking-wider transition-all duration-300 shadow-sm"
                >
                  <Github size={16} />
                  Code Repository
                </a>
              )}
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-medium text-xs uppercase tracking-wider transition-all duration-300 shadow-sm"
                >
                  <ExternalLink size={16} />
                  Live System Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
