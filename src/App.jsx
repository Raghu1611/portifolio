import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './components/Home';
import Resume from './components/Resume';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './components/NotFound';
import ScrollToTopHandler from './components/ScrollToTopHandler';
import Loader from './components/Loader';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <ScrollToTopHandler />
      
      {/* Welcome Screen Loader */}
      <AnimatePresence mode="wait">
        {isLoading && <Loader finishLoading={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className="bg-white dark:bg-dark min-h-screen text-black dark:text-white selection:bg-primary/30 relative transition-colors duration-300">
        {/* Custom Interactive Cursor */}
        <CustomCursor />

        {/* Global Floating Particles Background */}
        <ParticleBackground />

        {/* Grid backgrounds */}
        <div className="fixed inset-0 bg-grid-black/[0.015] dark:bg-grid-white/[0.015] pointer-events-none z-[1]" />
        
        {/* Smooth Scroll to Top helper button */}
        <ScrollToTop />

        {/* Dynamic Route Handlers */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
