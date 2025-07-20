import '../styles/styles.css';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark-violet fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#home">
          <span className="text-gradient">Adriane</span>
        </a>
        <button 
          className="navbar-toggler" 
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#home">Accueil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">À propos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Compétences</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projets</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;