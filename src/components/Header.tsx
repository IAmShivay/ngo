import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'হোম' },
    { path: '/about', label: 'আমাদের সম্পর্কে' },
    { path: '/gallery', label: 'গ্যালারি' },
    { path: '/events', label: 'অনুষ্ঠান' },
    { path: '/contact', label: 'যোগাযোগ' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold hover:text-yellow-400 transition-colors">
            অখণ্ড ভারত SC/ST/OBC/সংখ্যালঘু যুক্ত মঞ্চ
          </Link>
          
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </button>

          <div className="hidden lg:flex space-x-6">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`${
                  isActive(path)
                    ? 'text-yellow-400'
                    : 'hover:text-yellow-400'
                } transition-colors`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 space-y-3">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block ${
                  isActive(path)
                    ? 'text-yellow-400'
                    : 'hover:text-yellow-400'
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