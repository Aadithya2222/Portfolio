import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Achievements } from './sections/Achievements';
import { Education } from './sections/Education';
import { ResumeCTA } from './components/ResumeCTA';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-white text-slate-800 antialiased flex flex-col"
    >
      {/* Header / Nav */}
      <Navbar />

      {/* Content sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <ResumeCTA />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
}

export default App;
