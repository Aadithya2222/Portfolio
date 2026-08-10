import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Github, ArrowUpRight, GitPullRequest, Star, Layers } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Education Card Column */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-2xs font-extrabold uppercase tracking-widest text-slate-400">
                EDUCATION
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Academic foundation.
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-white border border-slate-100 rounded-3xl shadow-2xs hover:shadow-xs hover:border-sky-200 transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative Background wave */}
              <div className="absolute right-0 top-0 w-32 h-32 border border-sky-100/50 rounded-full scale-150 translate-x-12 -translate-y-12 pointer-events-none" />

              <div className="flex gap-6 relative z-10">
                <span className="flex-shrink-0 w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shadow-xs">
                  <GraduationCap size={26} />
                </span>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {personalInfo.education.degree}
                    </h3>
                    <p className="text-sm font-semibold text-sky-600 mt-1">
                      {personalInfo.education.institution}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {personalInfo.education.location}
                    </p>
                  </div>

                  <div className="flex items-center gap-6 pt-2 border-t border-slate-50">
                    <div>
                      <p className="text-4xs uppercase tracking-widest text-slate-400 font-extrabold">
                        Cumulative CGPA
                      </p>
                      <p className="text-lg font-extrabold text-slate-800 mt-0.5">
                        {personalInfo.education.cgpa}
                      </p>
                    </div>
                    <div>
                      <p className="text-4xs uppercase tracking-widest text-slate-400 font-extrabold">
                        Department
                      </p>
                      <p className="text-xs font-semibold text-slate-600 mt-1">
                        Artificial Intelligence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* GitHub Open Source Column */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-2xs font-extrabold uppercase tracking-widest text-slate-400">
                OPEN SOURCE
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                GitHub activity.
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-white border border-slate-100 rounded-3xl shadow-2xs hover:shadow-xs hover:border-sky-200 transition-all duration-300 relative overflow-hidden"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center text-white">
                      <Github size={20} />
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">
                        Aadithya2222
                      </h3>
                      <p className="text-4xs uppercase tracking-widest text-slate-400 font-extrabold">
                        github.com/Aadithya2222
                      </p>
                    </div>
                  </div>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-sky-600 hover:text-sky-500 transition-colors"
                  >
                    Profile
                    <ArrowUpRight size={14} />
                  </a>
                </div>

                {/* Simulated / Stylized GitHub stats cards to prevent external dependency breaking */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                    <Star size={16} className="text-amber-400 mx-auto mb-1.5" />
                    <p className="text-4xs uppercase tracking-widest text-slate-400 font-extrabold">
                      Repositores
                    </p>
                    <p className="text-base font-extrabold text-slate-800 mt-1">
                      15+
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                    <GitPullRequest size={16} className="text-sky-500 mx-auto mb-1.5" />
                    <p className="text-4xs uppercase tracking-widest text-slate-400 font-extrabold">
                      Contributions
                    </p>
                    <p className="text-base font-extrabold text-slate-800 mt-1">
                      Hundreds
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                    <Layers size={16} className="text-emerald-500 mx-auto mb-1.5" />
                    <p className="text-4xs uppercase tracking-widest text-slate-400 font-extrabold">
                      Languages
                    </p>
                    <p className="text-base font-extrabold text-slate-800 mt-1">
                      Python/JS
                    </p>
                  </div>
                </div>

                {/* Highlight text */}
                <p className="text-slate-500 text-xs leading-relaxed">
                  Active contributor pushing machine learning modules, FastAPI architectures, and customized voice automation scripts.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
