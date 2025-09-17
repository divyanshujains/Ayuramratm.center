import { Leaf, Menu, X, Search } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <Leaf className="text-teal-500" size={28} />
            <span className="text-slate-800">Ayuramrit</span>
          </Link>

          

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search patients..."
                className="w-94 px-4 py-2 rounded-full border-2 border-teal-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-slate-500 hover:text-teal-600 rounded-full hover:bg-slate-100">
                <Search size={18} />
              </button>
            </form>

            {/* Nav Links */}
            <nav className="flex items-center gap-4">
              <Link to="/home" className="text-slate-600 hover:text-teal-600 transition-colors font-medium">
                Home
              </Link>
  



              <Link to="/" className="bg-teal-500 text-white py-2 px-5 rounded-full hover:bg-teal-600 transition-colors font-semibold text-sm shadow-sm hover:shadow-md">
                Logout
              </Link>
            </nav>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:bg-slate-100 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {/* Search Bar for Mobile */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search patients..."
                className="w-full px-4 py-2 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
              />
               <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-slate-500 hover:text-teal-600 rounded-full hover:bg-slate-100">
                <Search size={18} />
              </button>
            </form>

            {/* Nav Links for Mobile */}
            <nav className="flex flex-col gap-4">
              <Link
                to="/home"
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-600 hover:text-teal-600 transition-colors font-medium p-2 rounded-md hover:bg-slate-100"
              >
                Home
              </Link>
              <Link
                to="/logout"
                onClick={() => setIsMenuOpen(false)}
                className="bg-teal-500 text-white text-center py-2 px-5 rounded-full hover:bg-teal-600 transition-colors font-semibold text-sm shadow-sm"
              >
                Logout
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;