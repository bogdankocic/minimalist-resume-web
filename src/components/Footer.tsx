
import { NavLink } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-100 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-slate-900">Navigation</h3>
            <div className="flex flex-col space-y-2">
              <NavLink 
                to="/" 
                className="text-slate-700 hover:text-teal-600 transition-colors"
              >
                Home
              </NavLink>
              <NavLink 
                to="/experience" 
                className="text-slate-700 hover:text-teal-600 transition-colors"
              >
                Experience
              </NavLink>
              <NavLink 
                to="/contact" 
                className="text-slate-700 hover:text-teal-600 transition-colors"
              >
                Contact
              </NavLink>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-slate-900">Contact</h3>
            <div className="flex flex-col space-y-2">
              <a 
                href="mailto:bogdan@example.com" 
                className="text-slate-700 hover:text-teal-600 transition-colors flex items-center"
              >
                <Mail size={16} className="mr-2" />
                bogdan@example.com
              </a>
              <a 
                href="tel:+1234567890" 
                className="text-slate-700 hover:text-teal-600 transition-colors flex items-center"
              >
                <Phone size={16} className="mr-2" />
                +123 456 7890
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-slate-900">Connect</h3>
            <div className="flex flex-col space-y-2">
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-700 hover:text-teal-600 transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-700 hover:text-teal-600 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 text-center text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} Bogdan Kocić. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
