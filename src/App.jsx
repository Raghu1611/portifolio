import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-primary/30 relative cursor-none">
      <CustomCursor />
      <ScrollToTop />
      <div className="fixed inset-0 bg-grid-white pointer-events-none opacity-20" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
