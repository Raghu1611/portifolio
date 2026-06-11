import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Certifications from './Certifications';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Certifications />
                <Projects />
                <Contact />
            </main>
        </>
    );
};

export default Home;
