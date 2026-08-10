import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Cloud, Database } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  // Extract categories for easier targeting
  const findSkills = (catName: string) => {
    return skillsData.find(c => c.category.toLowerCase().includes(catName.toLowerCase()))?.skills || [];
  };

  const programming = findSkills('programming');
  const aiml = findSkills('machine learning');
  const backend = findSkills('backend');
  const frontend = findSkills('frontend');
  const database = findSkills('database');
  const aws = findSkills('aws');

  return (
    <section id="skills" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-left space-y-4 mb-16">
          <span className="text-2xs font-extrabold uppercase tracking-widest text-slate-400">
            TECHNICAL ARSENAL
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Competencies & system architectures.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          
          {/* Card 1: Programming languages (Span 3) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="md:col-span-3 bento-card flex flex-col justify-between"
          >
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3 text-sky-600">
                <Terminal size={20} />
                <h3 className="font-bold text-slate-800 uppercase text-xs tracking-wider">
                  Languages & Scripting
                </h3>
              </div>
              <p className="text-slate-500 text-xs">
                Clean and modular scripting built with strong types and computational efficiency.
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {programming.map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded-xl border border-slate-100 bg-slate-50 text-xs font-semibold text-slate-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Mock Editor Visual */}
            <div className="mt-8 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left font-mono text-[10px] text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 pb-2 border-b border-slate-800 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="text-[8px] text-slate-600 pl-2">inference.py</span>
              </div>
              <p><span className="text-sky-400">import</span> tensorflow <span className="text-sky-400">as</span> tf</p>
              <p><span className="text-sky-400">def</span> <span className="text-cyan-400">predict</span>(features):</p>
              <p className="pl-4">model = tf.keras.models.load_model(<span className="text-amber-400">'stroke_model.h5'</span>)</p>
              <p className="pl-4"><span className="text-sky-400">return</span> model.predict(features)</p>
            </div>
          </motion.div>

          {/* Card 2: AI / ML (Span 3) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="md:col-span-3 bento-card flex flex-col justify-between"
          >
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3 text-sky-600">
                <Cpu size={20} />
                <h3 className="font-bold text-slate-800 uppercase text-xs tracking-wider">
                  Artificial Intelligence
                </h3>
              </div>
              <p className="text-slate-500 text-xs">
                Deep learning models trained on computer vision, sequence processing, and semantic vector indexes.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {aiml.map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded-xl border border-slate-100 bg-slate-50 text-xs font-semibold text-slate-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Neural Net Node Visual */}
            <div className="mt-8 flex items-center justify-center gap-6 h-16 opacity-80">
              <svg width="200" height="60" viewBox="0 0 200 60" className="text-sky-300">
                {/* Node layers connections */}
                <line x1="20" y1="30" x2="80" y2="15" stroke="currentColor" strokeWidth="0.5" />
                <line x1="20" y1="30" x2="80" y2="45" stroke="currentColor" strokeWidth="0.5" />
                <line x1="80" y1="15" x2="160" y2="30" stroke="currentColor" strokeWidth="0.5" />
                <line x1="80" y1="45" x2="160" y2="30" stroke="currentColor" strokeWidth="0.5" />
                
                {/* Input nodes */}
                <circle cx="20" cy="30" r="5" fill="#e2e8f0" stroke="#0ea5e9" strokeWidth="1" />
                {/* Hidden layer nodes */}
                <circle cx="80" cy="15" r="5" fill="#e2e8f0" stroke="#0ea5e9" strokeWidth="1" />
                <circle cx="80" cy="45" r="5" fill="#e2e8f0" stroke="#0ea5e9" strokeWidth="1" />
                {/* Output nodes */}
                <circle cx="160" cy="30" r="5" fill="#0ea5e9" />
              </svg>
            </div>
          </motion.div>

          {/* Card 3: Cloud & AWS (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="md:col-span-4 bento-card flex flex-col justify-between"
          >
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3 text-sky-600">
                <Cloud size={20} />
                <h3 className="font-bold text-slate-800 uppercase text-xs tracking-wider">
                  Cloud Infrastructure & AWS Services
                </h3>
              </div>
              <p className="text-slate-500 text-xs">
                Designing highly reliable networks, automated serverless functions, and ECS container deployments.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {aws.map(skill => (
                  <span key={skill} className="px-2 py-1 rounded-lg border border-slate-100 bg-slate-50 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AWS Architecture Diagram representational vector */}
            <div className="mt-8 p-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-between text-[8px] font-bold text-slate-400">
              <div className="px-2 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700">IGW</div>
              <div className="text-slate-300">→</div>
              <div className="px-2 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700">VPC Router</div>
              <div className="text-slate-300">→</div>
              <div className="px-2 py-1.5 bg-sky-50 border border-sky-200 rounded-lg text-sky-600">EC2 Instance</div>
              <div className="text-slate-300">→</div>
              <div className="px-2 py-1.5 bg-cyan-50 border border-cyan-200 rounded-lg text-cyan-600">DynamoDB</div>
            </div>
          </motion.div>

          {/* Card 4: Backend & Database (Span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="md:col-span-2 bento-card flex flex-col justify-between"
          >
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3 text-sky-600">
                <Database size={20} />
                <h3 className="font-bold text-slate-800 uppercase text-xs tracking-wider">
                  Full Stack & Databases
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {[...backend, ...database, ...frontend].slice(0, 10).map(skill => (
                  <span key={skill} className="px-2.5 py-1 rounded-lg border border-slate-100 bg-slate-50 text-xs font-semibold text-slate-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* SQL Table Representation */}
            <div className="mt-8 border border-slate-150 rounded-xl overflow-hidden text-[9px] font-mono bg-white">
              <div className="bg-slate-50 px-3 py-1.5 border-b border-slate-150 text-left font-bold text-slate-500">
                users_table
              </div>
              <div className="p-3 text-left space-y-1 text-slate-400">
                <p><span className="text-sky-600">id</span> INTEGER PRIMARY KEY</p>
                <p><span className="text-slate-600">email</span> VARCHAR(255)</p>
                <p><span className="text-slate-600">role</span> VARCHAR(50)</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
