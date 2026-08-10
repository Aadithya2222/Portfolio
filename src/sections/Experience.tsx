import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-left space-y-4 mb-16">
          <span className="text-2xs font-extrabold uppercase tracking-widest text-slate-400">
            EXPERIENCE
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Industry exposure.
          </h2>
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-sky-100 ml-4 md:ml-6 pl-8 md:pl-10 space-y-12">
          {experienceData.map((exp) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="relative text-left"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[45px] md:-left-[53px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-white border border-sky-200 text-sky-600 shadow-sm">
                <Briefcase size={14} />
              </span>

              {/* Card Container */}
              <div className="p-8 border border-slate-100 rounded-2xl bg-slate-50 shadow-2xs hover:shadow-sm transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-sky-600">
                      {exp.company}
                    </p>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-500 self-start md:self-center">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-slate-500 text-xs leading-relaxed">
                      <span className="text-sky-500 font-bold select-none mt-0.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
