import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute  lg:h-[15rem] top-0 left-0 right-0 z-50 lg:z-10 bg-blue-500/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">QuickDaak</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a
              href="#home"
              className="text-white hover:text-blue-100 font-medium"
            >
              Home
            </a>
            <div className="relative group">
              <a
                href="#features"
                className="text-white hover:text-blue-100 font-medium flex items-center"
              >
                Features
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>
            <div className="relative group">
              <a
                href="#shipping"
                className="text-white hover:text-blue-100 font-medium flex items-center"
              >
                Shipping Tools
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>
            <a
              href="#blogs"
              className="text-white hover:text-blue-100 font-medium"
            >
              Blogs
            </a>
            <div className="relative group">
              <a
                href="#order"
                className="text-white hover:text-blue-100 font-medium flex items-center"
              >
                Track Order
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Login
            </button>
            <button className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-colors">
              Signup
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-100 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-white font-medium hover:bg-blue-600 rounded-md"
              >
                Home
              </a>
              <a
                href="#features"
                className="block px-3 py-2 text-white font-medium hover:bg-blue-600 rounded-md"
              >
                Features
              </a>
              <a
                href="#shipping"
                className="block px-3 py-2 text-white font-medium hover:bg-blue-600 rounded-md"
              >
                Shipping Tools
              </a>
              <a
                href="#blogs"
                className="block px-3 py-2 text-white font-medium hover:bg-blue-600 rounded-md"
              >
                Blogs
              </a>
              <a
                href="#order"
                className="block px-3 py-2 text-white font-medium hover:bg-blue-600 rounded-md"
              >
                Track Order
              </a>
            </div>
            <div className="px-2 py-3 border-t border-blue-400">
              <button className="w-full bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors mb-2">
                Login
              </button>
              <button className="w-full bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-colors">
                Signup
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
