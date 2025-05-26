import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Moon, Sun, Menu, X, User } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  language: 'en' | 'ta';
  setLanguage: (lang: 'en' | 'ta') => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode, language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = {
    en: ['Home', 'Lessons', 'Dashboard', 'Resources', 'Forum'],
    ta: ['முகப்பு', 'பாடங்கள்', 'டாஷ்போர்டு', 'வளங்கள்', 'மன்றம்']
  };

  return (
    <header className="fixed w-full z-50 bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold">LinguaLearn</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems[language].map((item, index) => (
              <Link
                key={index}
                to={index === 0 ? '/' : `/${navItems.en[index].toLowerCase()}`}
                className="hover:text-indigo-600 transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}
              className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 hover:border-indigo-600 transition-colors"
            >
              {language === 'en' ? 'EN | தமிழ்' : 'தமிழ் | EN'}
            </button>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="hidden md:flex space-x-2">
              <Link
                to="/signin"
                className="px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {language === 'en' ? 'Sign In' : 'உள்நுழைக'}
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                {language === 'en' ? 'Sign Up' : 'பதிவு செய்க'}
              </Link>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems[language].map((item, index) => (
                <Link
                  key={index}
                  to={index === 0 ? '/' : `/${navItems.en[index].toLowerCase()}`}
                  className="hover:text-indigo-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t dark:border-gray-700">
                <Link
                  to="/signin"
                  className="px-4 py-2 rounded-md text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === 'en' ? 'Sign In' : 'உள்நுழைக'}
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 rounded-md text-center bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === 'en' ? 'Sign Up' : 'பதிவு செய்க'}
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;