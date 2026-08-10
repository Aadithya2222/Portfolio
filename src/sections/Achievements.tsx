import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Compass } from 'lucide-react';
import { achievementsData, certificationsData } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Achievements Sub-Section */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-2xs font-extrabold uppercase tracking-widest text-slate-400">
                RECOGNITIONS
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Achievements
              </h2>
            </div>

            <div className="space-y-6">
              {achievementsData.map((ach, idx) => (
                <motion.div
                  key={ach.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-6 p-6 border border-slate-100 rounded-2xl bg-slate-50 hover:border-sky-100 hover:shadow-xs transition-all duration-300"
                >
                  <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-slate-150 flex items-center justify-center text-sky-600 shadow-sm">
                    <Award size={20} />
                  </span>
                  
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-slate-900 text-base">
                        {ach.title}
                      </h3>
                      {ach.roleOrTeam && (
                        <span className="text-2xs px-2.5 py-0.5 rounded-full bg-sky-50 border border-sky-100 text-sky-600 font-bold uppercase tracking-wider">
                          {ach.roleOrTeam}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-xs font-semibold text-slate-400">
                      {ach.organization} &middot; {ach.year}
                    </p>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Sub-Section */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-2xs font-extrabold uppercase tracking-widest text-slate-400">
                VERIFICATIONS
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Certifications
              </h2>
            </div>

            <div className="space-y-4">
              {certificationsData.map((cert, idx) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-center justify-between p-6 border border-slate-100 rounded-2xl bg-white shadow-2xs hover:shadow-xs hover:border-sky-100 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <span className={`w-10 h-10 rounded-full flex items-center justify-center shadow-xs border ${
                      cert.status === 'Completed'
                        ? 'bg-sky-50 border-sky-100 text-sky-600'
                        : 'bg-slate-50 border-slate-200 text-slate-400'
                    }`}>
                      {cert.status === 'Completed' ? <ShieldCheck size={18} /> : <Compass size={18} />}
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">
                        {cert.name}
                      </h3>
                      <p className="text-4xs uppercase tracking-widest text-slate-400 font-extrabold mt-1">
                        Amazon Web Services
                      </p>
                    </div>
                  </div>

                  <span className={`text-3xs font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                    cert.status === 'Completed'
                      ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                      : 'bg-amber-50 text-amber-600 border border-amber-100'
                  }`}>
                    {cert.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
