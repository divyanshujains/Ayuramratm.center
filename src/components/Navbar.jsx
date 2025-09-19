import { Leaf, Menu, X, Search, User, Bell, Settings } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-gradient-to-r from-white via-white to-teal-50/30 backdrop-blur-xl sticky top-0 z-50 border-b border-slate-200/50 shadow-lg">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full opacity-80"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-slate-800 to-teal-700 bg-clip-text text-transparent">
                Ayuramritam
              </span>
              <span className="text-xs sm:text-sm text-slate-500 font-medium -mt-1">
                Dice code:DICE4043
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {/* Search Bar */}
            <div className="relative group">
              <div className={`relative transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  placeholder="Search patients, reports..."
                  className="w-72 xl:w-80 px-4 py-2.5 pl-10 rounded-full border-2 border-slate-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all duration-300 shadow-sm hover:shadow-md text-sm placeholder:text-slate-400"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-hover:text-teal-500 transition-colors" />
                <button 
                  type="button" 
                  onClick={handleSearch}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-teal-600 rounded-full hover:bg-teal-50 transition-all duration-200"
                >
                  <Search size={16} />
                </button>
              </div>
            </div>

            {/* Nav Links */}
            <nav className="flex items-center gap-2">
              <a 
                href="/home"  
                className="relative text-slate-600 hover:text-teal-600 transition-all duration-200 font-medium px-4 py-2 rounded-xl hover:bg-teal-50 group"
              >
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </a>
              
              <a
                href="/cart"    
                className="relative text-slate-600 hover:text-teal-600 transition-all duration-200 font-medium px-4 py-2 rounded-xl hover:bg-teal-50 group"
              >

                <span className="relative z-10">Status</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </a>

               <a
  
  className="relative flex items-center gap-2 cursor-pointer text-slate-700 hover:text-teal-700 
             font-medium px-5 py-2 rounded-xl transition-all duration-300 
             hover:scale-105 hover:shadow-md hover:bg-white/60 backdrop-blur-sm group"
>
  {/* Icon + Text */}
  <span className="relative z-10 flex items-center gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.6}
      stroke="currentColor"
      className="w-5 h-5 text-teal-600 group-hover:rotate-6 transition-transform"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m6-9v9m5-18H6"
      />
    </svg>
    Newuser
  </span>

  {/* Notification Badge */}
  <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs 
                  font-bold flex items-center justify-center rounded-full shadow-md 
                  border-2 border-white">
    4
  </div>

  {/* Hover Glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 
                  rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  </div>
</a>


             
              {/* Profile/Settings */}
              <Link to={'/profile'} className="relative font-semibold flex p-2 text-slate-600 hover:text-teal-600 rounded-xl hover:bg-teal-100 transition-all duration-200">
                <User className="w-5 h-5" />Profile
              </Link>

              {/* Logout Button */}
              <a 
                href="/" 
                className="relative overflow-hidden bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-2.5 px-6 rounded-full hover:from-teal-600 hover:to-emerald-700 transition-all duration-300 font-semibold text-sm shadow-lg hover:shadow-xl ml-2 group"
              >
                <span className="relative text-[16px] z-10">Logout</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </nav>
          </div>

          {/* Tablet Navigation (md-lg) */}
          <div className="hidden md:flex lg:hidden items-center gap-3">
            {/* Compact Search */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-48 px-3 py-2 pl-9 rounded-full border border-slate-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all text-sm"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-1">
              <a href="/home" className="p-2 text-slate-600 hover:text-teal-600 rounded-lg hover:bg-teal-50 transition-all">
                <span className="text-sm font-medium">Home</span>
              </a>
              <a href="/cart" className="p-2 text-slate-600 hover:text-teal-600 rounded-lg hover:bg-teal-50 transition-all">
                <span className="text-sm font-medium">Cart</span>
              </a>
              <button className="relative p-2 text-slate-600 hover:text-teal-600 rounded-lg hover:bg-teal-50 transition-all">
                <Bell className="w-4 h-4" />
                <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
              </button>
            </div>
          </div>
          <div className="hidden md:flex lg:hidden items-center gap-3">
            {/* Compact Search */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-48 px-3 py-2 pl-9 rounded-full border border-slate-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all text-sm"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            </form>

            {/* Quick Actions */}
            <div className="flex items-center gap-1">
              <Link to="/home" className="p-2 text-slate-600 hover:text-teal-600 rounded-lg hover:bg-teal-50 transition-all">
                <span className="text-sm font-medium">Home</span>
              </Link>
              <Link to="/cart" className="p-2 text-slate-600 hover:text-teal-600 rounded-lg hover:bg-teal-50 transition-all">
                <span className="text-sm font-medium">Cart</span>
              </Link>
              <button className="relative p-2 text-slate-600 hover:text-teal-600 rounded-lg hover:bg-teal-50 transition-all">
                <Bell className="w-4 h-4" />
                <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Quick Search */}
            <button className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-teal-600 transition-all">
              <Search className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-200"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-1.5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`absolute top-4.5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/95 backdrop-blur-xl border-t border-slate-200/50">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Mobile Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search patients, reports..."
                className="w-full px-4 py-3 pl-11 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all shadow-sm text-sm"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <button 
                type="submit" 
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-teal-600 rounded-full hover:bg-teal-50 transition-all"
              >
                <Search size={16} />
              </button>
            </form>

            {/* Mobile Nav Links */}
            <nav className="grid grid-cols-2 gap-3">
              <Link
                to="/home"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 p-4 bg-gradient-to-r from-slate-50 to-teal-50/50 rounded-2xl hover:from-teal-50 hover:to-emerald-50 transition-all duration-200 group"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  🏠
                </div>
                <span className="font-medium text-slate-700 group-hover:text-teal-700">Home</span>
              </Link>
              
              <Link
                to="/cart"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 p-4 bg-gradient-to-r from-slate-50 to-teal-50/50 rounded-2xl hover:from-teal-50 hover:to-emerald-50 transition-all duration-200 group"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  🛒
                </div>
                <span className="font-medium text-slate-700 group-hover:text-teal-700">Cart</span>
              </Link>
            </nav>

            {/* Mobile User Actions */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-teal-50/30 rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                  Dr
                </div>
                <div>
                  <p className="font-medium text-slate-700">Dr. Sarah Johnson</p>
                  <p className="text-xs text-slate-500">Ayurvedic Specialist</p>
                </div>
              </div>
              <button className="relative p-2 text-slate-600 hover:text-teal-600 rounded-lg hover:bg-white/50 transition-all">
                <Bell className="w-5 h-5" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
              </button>
            </div>

            {/* Mobile Logout */}
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full bg-gradient-to-r from-red-500 to-pink-600 text-white text-center py-3 rounded-2xl hover:from-red-600 hover:to-pink-700 transition-all font-semibold shadow-lg hover:shadow-xl"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;