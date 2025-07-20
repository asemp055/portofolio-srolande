import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/styles.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark-theme' : 'light-theme'}>
      <Navbar />
      <Hero />
      <About />
      <CaseStudies />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;