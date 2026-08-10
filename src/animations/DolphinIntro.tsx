import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DolphinIntroProps {
  onComplete: () => void;
}

export const DolphinIntro: React.FC<DolphinIntroProps> = ({ onComplete }) => {
  const [step, setStep] = useState<'ripple' | 'ocean' | 'dolphin' | 'splash' | 'fade'>('ripple');
  const [skipped, setSkipped] = useState(false);

  useEffect(() => {
    // Check if user already saw the intro in this session
    const hasSeenIntro = sessionStorage.getItem('aadithya_portfolio_intro_seen');
    if (hasSeenIntro) {
      onComplete();
      return;
    }

    // Sequence timing
    const timers: number[] = [];

    // Step 1: Ripple (0 - 1s)
    // Step 2: Ocean surface appears (1s)
    timers.push(window.setTimeout(() => setStep('ocean'), 1000));
    // Step 3: Dolphin jumps (1.8s)
    timers.push(window.setTimeout(() => setStep('dolphin'), 1800));
    // Step 4: Splash (3.0s)
    timers.push(window.setTimeout(() => setStep('splash'), 3000));
    // Step 5: Fade to white and complete (4.2s)
    timers.push(window.setTimeout(() => {
      sessionStorage.setItem('aadithya_portfolio_intro_seen', 'true');
      onComplete();
    }, 4500));

    return () => {
      timers.forEach(t => clearTimeout(t));
    };
  }, [onComplete]);

  const handleSkip = () => {
    setSkipped(true);
    sessionStorage.setItem('aadithya_portfolio_intro_seen', 'true');
    onComplete();
  };

  if (skipped) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white overflow-hidden select-none">
      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 px-4 py-2 text-xs uppercase tracking-widest text-slate-400 hover:text-sky-600 border border-slate-200 hover:border-sky-300 rounded-full transition-all duration-300 z-50 cursor-pointer bg-white/80 backdrop-blur-sm"
      >
        Skip Intro
      </button>

      {/* Ripple Animation */}
      {step === 'ripple' && (
        <div className="relative w-64 h-64 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.2, opacity: 0.8 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute w-24 h-24 rounded-full border border-sky-400/40 bg-sky-50/20"
          />
          <motion.div
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: 1.8, opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            className="absolute w-24 h-24 rounded-full border border-cyan-400/30"
          />
        </div>
      )}

      {/* Ocean Surface Transition */}
      {(step === 'ocean' || step === 'dolphin' || step === 'splash') && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex flex-col justify-end"
        >
          {/* Stylized Ocean Grid & Waves */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/20 to-sky-100/40 flex items-center justify-center">
            {/* Minimal grid lines simulating depth */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#0284c7_1px,transparent_1px),linear-gradient(to_bottom,#0284c7_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
          </div>

          {/* Ocean Waves at Bottom */}
          <motion.svg
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-full h-48 fill-sky-200/50 relative z-10"
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
          >
            <path d="M0,96 C280,128 480,64 720,96 C960,128 1160,64 1440,96 L1440,200 L0,200 Z" />
          </motion.svg>
        </motion.div>
      )}

      {/* Dolphin Jumping */}
      {step === 'dolphin' && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <motion.div
            initial={{ y: 200, x: -150, rotate: -45, scale: 0.7 }}
            animate={{
              y: [200, -120, -120, 200],
              x: [-150, -50, 50, 150],
              rotate: [-45, -15, 15, 45],
              scale: [0.7, 1, 1, 0.7]
            }}
            transition={{
              duration: 1.5,
              times: [0, 0.4, 0.6, 1],
              ease: "easeInOut"
            }}
            className="relative"
          >
            {/* Elegant Minimalist Stylized Dolphin SVG */}
            <svg
              width="140"
              height="100"
              viewBox="0 0 100 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-lg"
            >
              {/* Sleek, stylized modern dolphin shape */}
              <path
                d="M5,42 C15,35 30,22 55,22 C72,22 88,32 92,36 C80,32 68,28 55,30 C40,32 25,38 18,44 L15,48 L10,48 Z"
                fill="url(#dolphin-grad-1)"
              />
              <path
                d="M55,22 C68,10 82,12 95,20 C90,26 80,28 72,26 C65,24 58,22 55,22 Z"
                fill="url(#dolphin-grad-2)"
              />
              {/* Back fin */}
              <path
                d="M48,22 C43,15 38,10 33,12 C36,18 40,22 45,23 Z"
                fill="#0284c7"
                opacity="0.8"
              />
              {/* Tail fin */}
              <path
                d="M5,42 C3,40 1,35 2,32 C3,35 6,38 7,40 Z"
                fill="#0ea5e9"
              />
              <defs>
                <linearGradient id="dolphin-grad-1" x1="5" y1="22" x2="92" y2="44" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0EA5E9" />
                  <stop offset="50%" stopColor="#0284C7" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
                <linearGradient id="dolphin-grad-2" x1="55" y1="12" x2="95" y2="26" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#CFFAFE" />
                  <stop offset="100%" stopColor="#0EA5E9" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      )}

      {/* Splash Animation */}
      {step === 'splash' && (
        <div className="absolute inset-0 flex items-center justify-center z-30">
          {/* Water Splash Particles */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Splash circle 1 */}
            <motion.div
              initial={{ scale: 0.1, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute w-16 h-16 rounded-full border-2 border-sky-400 bg-sky-100/30"
            />
            {/* Splash circle 2 */}
            <motion.div
              initial={{ scale: 0.1, opacity: 1 }}
              animate={{ scale: 2.8, opacity: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
              className="absolute w-16 h-16 rounded-full border border-cyan-400"
            />
            {/* Droplets */}
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const distance = 80;
              const x = Math.cos(angle) * distance;
              const y = Math.sin(angle) * distance - 20; // Upward bias
              return (
                <motion.div
                  key={i}
                  initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                  animate={{ x, y, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="absolute w-2 h-2 rounded-full bg-gradient-to-tr from-sky-400 to-cyan-300"
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Screen flash transition to portfolio */}
      <AnimatePresence>
        {step === 'splash' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, times: [0, 1] }}
            className="absolute inset-0 bg-white z-40"
          />
        )}
      </AnimatePresence>
    </div>
  );
};
