import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (isHome) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const navItems = [
    { label: 'Problem', id: 'problem' },
    { label: 'How it works', id: 'how-it-works' },
    { label: 'Documents', id: 'documents' },
    { label: 'Team', id: 'team' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f8f9fa]/85 dark:bg-[#0a0d14]/85 backdrop-blur-md border-b border-gray-200/60 dark:border-gray-800/70 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="text-2xl sm:text-3xl font-normal tracking-tight text-gray-900 dark:text-white transition-colors"
            >
              Drithya
            </Link>
          </div>

          {/* Desktop Navigation Links (Centered) */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3 justify-end">
            <ThemeToggle />
            <button
              onClick={() => scrollToSection('documents')}
              className="bg-[#e8e4d9] text-[#1B4332] dark:bg-white dark:text-[#1B4332] dark:hover:bg-gray-100 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#d5cfbd] transition-colors shadow-xs cursor-pointer"
            >
              Read the rules
            </button>
          </div>

          {/* Mobile Hamburger Button with Theme Toggle to its left */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-gray-950 hover:bg-gray-200/60 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800/60 transition-colors cursor-pointer"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {isOpen && (
        <div className="md:hidden bg-[#f8f9fa]/95 dark:bg-[#0f172a]/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 px-4 pt-3 pb-6 shadow-xl space-y-3 transition-all">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-gray-700 hover:text-gray-950 hover:bg-gray-100/80 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-800/80 px-4 py-3 rounded-lg text-base font-medium transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-gray-200/80 dark:border-gray-800">
            <button
              onClick={() => scrollToSection('documents')}
              className="w-full bg-[#e8e4d9] text-[#1B4332] dark:bg-white dark:text-[#1B4332] dark:hover:bg-gray-100 px-5 py-3 rounded-lg text-base font-medium hover:bg-[#d5cfbd] transition-colors shadow-xs text-center cursor-pointer"
            >
              Read the rules
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
