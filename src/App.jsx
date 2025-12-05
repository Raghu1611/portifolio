import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './components/NotFound';
import ScrollToTopHandler from './components/ScrollToTopHandler';

function App() {
  return (
    <Router>
      <ScrollToTopHandler />
      <div className="bg-black min-h-screen text-white selection:bg-primary/30 relative cursor-none">
        <CustomCursor />
        <ScrollToTop />
        <div className="fixed inset-0 bg-grid-white pointer-events-none opacity-20" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
