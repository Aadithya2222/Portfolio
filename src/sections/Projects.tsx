import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from '../components/ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-left space-y-4 mb-16">
          <span className="text-2xs font-extrabold uppercase tracking-widest text-slate-400">
            SELECTED WORK
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineered systems & products.
          </h2>
        </div>

        {/* Project Card Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group border border-slate-100 bg-slate-50/50 rounded-2xl p-8 flex flex-col justify-between hover:bg-white hover:border-sky-200/80 hover:shadow-lg hover:shadow-sky-100/20 transition-all duration-300 min-h-[300px]"
            >
              <div className="space-y-4 text-left">
                {/* Header Icon & Title */}
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-white border border-slate-150 flex items-center justify-center text-slate-400 group-hover:text-sky-600 group-hover:border-sky-200 transition-all duration-300">
                    <FolderGit2 size={18} />
                  </span>
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-slate-900 transition-colors"
                      aria-label="Source code"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Footer row */}
              <div className="mt-8 pt-4 border-t border-slate-100/60 flex items-center justify-between">
                {/* Technologies List */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="text-4xs font-extrabold uppercase tracking-wider text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Case Study CTA */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-slate-800 hover:text-sky-600 transition-colors cursor-pointer"
                >
                  Details
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
