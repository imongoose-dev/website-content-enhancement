import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-sm border-b border-dark-700 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-montserrat font-bold text-lg text-white">
                Симфония
              </span>
              <span className="font-montserrat text-sm text-blue-400">
                Камня
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-white hover:text-blue-400 transition-colors"
            >
              Главная
            </a>
            <a
              href="#services"
              className="text-white hover:text-blue-400 transition-colors"
            >
              Услуги
            </a>
            <a
              href="/gallery"
              className="text-white hover:text-blue-400 transition-colors"
            >
              Галерея
            </a>
            <a
              href="/catalog"
              className="text-white hover:text-blue-400 transition-colors"
            >
              Каталог
            </a>
            <a
              href="/contacts"
              className="text-white hover:text-blue-400 transition-colors"
            >
              Контакты
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <Icon name="MapPin" size={16} className="text-blue-400" />
              <span className="text-white">г. Омск</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={16} className="text-blue-400" />
              <a
                href="tel:+79001232343"
                className="text-white font-medium hover:text-blue-400 transition-colors"
              >
                +7 (900) 123-23-43
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-dark-800 transition-colors"
          >
            <Icon
              name={isMenuOpen ? "X" : "Menu"}
              size={24}
              className="text-gray-300"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-dark-700 bg-dark-900">
            <nav className="flex flex-col space-y-3">
              <a
                href="/"
                className="px-4 py-2 text-white hover:text-blue-400 hover:bg-dark-800 rounded-lg transition-colors"
              >
                Главная
              </a>
              <a
                href="#services"
                className="px-4 py-2 text-white hover:text-blue-400 hover:bg-dark-800 rounded-lg transition-colors"
              >
                Услуги
              </a>
              <a
                href="/gallery"
                className="px-4 py-2 text-white hover:text-blue-400 hover:bg-dark-800 rounded-lg transition-colors"
              >
                Галерея
              </a>
              <a
                href="/catalog"
                className="px-4 py-2 text-white hover:text-blue-400 hover:bg-dark-800 rounded-lg transition-colors"
              >
                Каталог
              </a>
              <a
                href="/contacts"
                className="px-4 py-2 text-white hover:text-blue-400 hover:bg-dark-800 rounded-lg transition-colors"
              >
                Контакты
              </a>
            </nav>
            <div className="mt-4 pt-4 border-t border-dark-700">
              <div className="flex items-center space-x-2 px-4 text-sm text-gray-300">
                <Icon name="Phone" size={16} className="text-purple-400" />
                <a href="tel:+79001232343" className="font-medium text-white">
                  +7 (900) 123-23-43
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
