
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Github, Linkedin, Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto py-4 px-4">
        <div className="flex justify-between items-center">
          <div>
            <NavLink to="/" className="text-xl md:text-2xl font-bold text-slate-900 hover:text-teal-600 transition-colors">
              Bogdan Kocić
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/experience" 
              className={({ isActive }) => 
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              Experience
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              Contact
            </NavLink>
            <div className="ml-4 flex items-center space-x-3">
              <a 
                href="https://www.linkedin.com/in/bogdan-kocić-4446b6221/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-icon"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/bogdankocic" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-icon"
              >
                <Github size={20} />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-700 hover:text-teal-600 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-2">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/experience" 
                className={({ isActive }) => 
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Experience
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
              <div className="flex items-center space-x-3 pt-2">
                <a 
                  href="https://www.linkedin.com/in/bogdan-kocić-4446b6221/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="social-icon"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/bogdankocic" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="social-icon"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
