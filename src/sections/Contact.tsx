import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Details */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="space-y-4">
              <span className="text-2xs font-extrabold uppercase tracking-widest text-slate-400">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Let's build something.
              </h2>
            </div>
            
            <p className="text-slate-500 text-base leading-relaxed">
              Have an idea, opportunity, or interesting problem? Let's talk.
            </p>

            <div className="space-y-4 pt-4">
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:border-sky-200 hover:shadow-xs transition-all duration-300 group"
              >
                <span className="w-10 h-10 rounded-xl bg-white border border-slate-150 flex items-center justify-center text-sky-600 shadow-2xs group-hover:bg-sky-50 transition-colors">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="text-4xs uppercase tracking-widest text-slate-400 font-extrabold">
                    Email Address
                  </p>
                  <p className="text-xs font-semibold text-slate-800 mt-0.5">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:border-sky-200 hover:shadow-xs transition-all duration-300 group"
              >
                <span className="w-10 h-10 rounded-xl bg-white border border-slate-150 flex items-center justify-center text-sky-600 shadow-2xs group-hover:bg-sky-50 transition-colors">
                  <Linkedin size={18} />
                </span>
                <div>
                  <p className="text-4xs uppercase tracking-widest text-slate-400 font-extrabold">
                    LinkedIn Profile
                  </p>
                  <p className="text-xs font-semibold text-slate-800 mt-0.5">
                    aadithya2006
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:border-sky-200 hover:shadow-xs transition-all duration-300 group"
              >
                <span className="w-10 h-10 rounded-xl bg-white border border-slate-150 flex items-center justify-center text-slate-800 shadow-2xs group-hover:bg-sky-50 transition-colors">
                  <Github size={18} />
                </span>
                <div>
                  <p className="text-4xs uppercase tracking-widest text-slate-400 font-extrabold">
                    GitHub Handle
                  </p>
                  <p className="text-xs font-semibold text-slate-800 mt-0.5">
                    Aadithya2222
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              className="p-8 md:p-10 border border-slate-100 rounded-3xl bg-slate-50 shadow-xs relative"
            >
              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <span className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 shadow-sm animate-bounce">
                    <CheckCircle2 size={32} />
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    Message received!
                  </h3>
                  <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                    Thank you for reaching out, Aadithya will get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-4xs uppercase tracking-widest text-slate-400 font-extrabold block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-5 py-3 border border-slate-200 focus:border-sky-400 rounded-2xl text-slate-800 placeholder-slate-400 bg-white focus:outline-none transition-colors text-sm"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-4xs uppercase tracking-widest text-slate-400 font-extrabold block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-5 py-3 border border-slate-200 focus:border-sky-400 rounded-2xl text-slate-800 placeholder-slate-400 bg-white focus:outline-none transition-colors text-sm"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-4xs uppercase tracking-widest text-slate-400 font-extrabold block">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, team, or opportunity..."
                      className="w-full px-5 py-3 border border-slate-200 focus:border-sky-400 rounded-2xl text-slate-800 placeholder-slate-400 bg-white focus:outline-none transition-colors text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-sm"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
