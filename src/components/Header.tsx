import React from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-800 bg-clip-text text-transparent">
            RideCompare
          </h1>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="/" className="font-medium text-gray-800 hover:text-blue-600 transition-colors">
            Home
          </a>
          <a href="/compare" className="font-medium text-gray-800 hover:text-blue-600 transition-colors">
            Compare
          </a>
          <a href="/brands" className="font-medium text-gray-800 hover:text-blue-600 transition-colors">
            Brands
          </a>
          <a href="/about" className="font-medium text-gray-800 hover:text-blue-600 transition-colors">
            About
          </a>
        </nav>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <nav className="flex flex-col bg-white px-4 py-2 border-t border-gray-100">
            <a 
              href="/" 
              className="py-3 px-2 font-medium text-gray-800 hover:text-blue-600 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="/compare" 
              className="py-3 px-2 font-medium text-gray-800 hover:text-blue-600 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Compare
            </a>
            <a 
              href="/brands" 
              className="py-3 px-2 font-medium text-gray-800 hover:text-blue-600 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Brands
            </a>
            <a 
              href="/about" 
              className="py-3 px-2 font-medium text-gray-800 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;