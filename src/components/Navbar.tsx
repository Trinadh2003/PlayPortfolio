import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full pt-2 bg-transparent flex justify-end sm:justify-center items-center z-20">
      <div className="hidden sm:block bg-secondary-dark  border-1 border-secondary-dark p-2 rounded-lg">
        <div className="hidden sm:flex space-x-8 text-white text-lg font-semibold">
          <a href="#home" className="pl-2 hover:text-accent-green focus:text-accent-green  transition-colors duration-300" onClick={closeMenu}>Home</a>
          <a href="#about" className="hover:text-accent-green focus:text-accent-green transition-colors duration-300" onClick={closeMenu}>About</a>
          <a href="#work-experience" className="hover:text-accent-green focus:text-accent-green transition-colors duration-300" onClick={closeMenu}>Work Experience</a>
          <a href="#projects" className="hover:text-accent-green focus:text-accent-green transition-colors duration-300" onClick={closeMenu}>Projects</a>
          <a href="#contact" className="pr-2 hover:text-accent-green focus:text-accent-green transition-colors duration-300" onClick={closeMenu}>Contact</a>
        </div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-primary-dark rounded-lg px-1 text-white text-2xl focus:outline-none"
        >
          &#9776;
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col space-y-4 text-center text-lg bg-white p-4 absolute top-full right-0 w-full z-30">
          <button onClick={closeMenu} className="absolute top-4 right-4 text-3xl text-white focus:outline-none">
            &times;
          </button>
          <a href="#home" className="hover:text-accent-green focus:text-accent-green transition-colors duration-300" onClick={closeMenu}>Home</a>
          <a href="#about" className="hover:text-accent-green focus:text-accent-green transition-colors duration-300" onClick={closeMenu}>About</a>
          <a href="#work-experience" className="hover:text-accent-green focus:text-accent-green transition-colors duration-300" onClick={closeMenu}>Work Experience</a>
          <a href="#projects" className="hover:text-accent-green focus:text-accent-green transition-colors duration-300" onClick={closeMenu}>Projects</a>
          <a href="#contact" className="hover:text-accent-green focus:text-accent-green transition-colors duration-300" onClick={closeMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
}
