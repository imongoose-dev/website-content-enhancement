import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
              <Icon name="Mountain" size={24} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-montserrat font-bold text-lg text-gray-900">
                Симфония
              </span>
              <span className="font-montserrat text-sm text-amber-600">
                Камня
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Главная
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Услуги
            </a>
            <a
              href="/gallery"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Галерея
            </a>
            <a
              href="/catalog"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Каталог
            </a>
            <a
              href="/contacts"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Контакты
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <Icon name="MapPin" size={16} className="text-amber-600" />
              <span className="text-gray-700">г. Омск</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={16} className="text-amber-600" />
              <a
                href="tel:+79001232343"
                className="text-gray-900 font-medium hover:text-amber-600 transition-colors"
              >
                +7 (900) 123-23-43
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Icon
              name={isMenuOpen ? "X" : "Menu"}
              size={24}
              className="text-gray-700"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t bg-white">
            <nav className="flex flex-col space-y-3">
              <a
                href="/"
                className="px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Главная
              </a>
              <a
                href="#services"
                className="px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Услуги
              </a>
              <a
                href="/gallery"
                className="px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Галерея
              </a>
              <a
                href="/catalog"
                className="px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Каталог
              </a>
              <a
                href="/contacts"
                className="px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Контакты
              </a>
            </nav>
            <div className="mt-4 pt-4 border-t">
              <div className="flex items-center space-x-2 px-4 text-sm text-gray-700">
                <Icon name="Phone" size={16} className="text-amber-600" />
                <a href="tel:+79001232343" className="font-medium">
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
