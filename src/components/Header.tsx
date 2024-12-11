import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/gallery", label: "Gallery" },
    { path: "/events", label: "Events" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white text-black sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-lg md:text-xl font-bold hover:text-gray-700 transition-colors flex items-center space-x-2"
          >
            <span>AKHAND BHARAT SC/ST/OBC/ MINORITY JOINT FORUM</span>
          </Link>

          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <Menu className="w-6 h-6 text-black" />
          </button>

          <div className="hidden lg:flex space-x-6">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`${
                  isActive(path)
                    ? "text-black font-semibold"
                    : "text-black/70 hover:text-black"
                } transition-colors relative group`}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform ${
                    isActive(path) ? "scale-x-100" : ""
                  }`}
                ></span>
              </Link>
            ))}
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 space-y-3 bg-gray-100 rounded-lg p-4 shadow-xl">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block py-2 px-3 rounded-md ${
                  isActive(path)
                    ? "bg-black text-white font-semibold"
                    : "hover:bg-gray-200 text-black"
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