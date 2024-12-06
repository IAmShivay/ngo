import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/events', label: 'Events' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-lg md:text-xl font-bold hover:text-yellow-300 transition-colors flex items-center space-x-2"
          >
            <span>All India SC/ST/OBC Minority Joint Platform</span>
          </Link>
          
          <button 
            className="lg:hidden p-2 rounded-md hover:bg-blue-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="hidden lg:flex space-x-6">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`${
                  isActive(path)
                    ? 'text-yellow-300 font-semibold'
                    : 'text-white/80 hover:text-yellow-300'
                } transition-colors relative group`}
              >
                {label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform ${isActive(path) ? 'scale-x-100' : ''}`}></span>
              </Link>
            ))}
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 space-y-3 bg-blue-900 rounded-lg p-4 shadow-xl">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block py-2 px-3 rounded-md ${
                  isActive(path)
                    ? 'bg-yellow-300 text-blue-900 font-semibold'
                    : 'hover:bg-blue-800 hover:text-yellow-300'
                } transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}