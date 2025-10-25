import { Link } from 'react-router-dom'; // WICHTIGER IMPORT
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-6">
        <nav className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 text-gray-900 hover:text-blue-600 transition-colors" aria-label="Startseite">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">◎</span>
              </div>
              <span className="font-bold text-xl tracking-tight">Derma Light</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
            
            {/* Frauen Dropdown */}
            <div className="dropdown-container-hybrid">
              <button className="dropdown-trigger-hybrid" aria-expanded="false">
                <span>Frauen</span>
                <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 16 16">
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </button>
              <div className="dropdown-menu-hybrid">
                <Link to="/frauen">Übersicht Frauen</Link>
                <Link to="/frauen/intimbereich">Intimbereich</Link>
                <Link to="/bikinizone">Bikinizone</Link>
                <Link to="/achseln">Achseln</Link>
                <Link to="/arme">Arme</Link>
                <Link to="/bauch">Bauch</Link>
                <Link to="/beine">Beine</Link>
                <Link to="/brust">Brust</Link>
                <Link to="/gesicht">Gesicht</Link>
              </div>
            </div>

            {/* Männer Dropdown */}
            <div className="dropdown-container-hybrid">
              <button className="dropdown-trigger-hybrid" aria-expanded="false">
                <span>Männer</span>
                <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 16 16">
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </button>
              <div className="dropdown-menu-hybrid">
                <Link to="/maenner">Übersicht Männer</Link>
                <Link to="/maenner/intimbereich">Intimbereich</Link>
                <Link to="/maenner/brust-bauch">Brust & Bauch</Link>
                <Link to="/maenner/ruecken">Rücken</Link>
              </div>
            </div>

            <Link to="/preise-haarentfernung" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Preise</Link>
            <Link to="/beratung" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Beratung</Link>
            <Link to="/termine" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Termine</Link>
            
            <Link to="/termine" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Termin buchen
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menü öffnen"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="space-y-2">
              <Link to="/" className="block py-2 text-gray-700 font-medium">Home</Link>
              <div className="py-2">
                <span className="text-gray-900 font-medium">Frauen</span>
                <div className="mt-2 ml-4 space-y-1">
                  <Link to="/frauen" className="block py-1 text-sm text-gray-600">Übersicht Frauen</Link>
                  <Link to="/frauen/intimbereich" className="block py-1 text-sm text-gray-600">Intimbereich</Link>
                  <Link to="/bikinizone" className="block py-1 text-sm text-gray-600">Bikinizone</Link>
                  <Link to="/achseln" className="block py-1 text-sm text-gray-600">Achseln</Link>
                  <Link to="/arme" className="block py-1 text-sm text-gray-600">Arme</Link>
                  <Link to="/bauch" className="block py-1 text-sm text-gray-600">Bauch</Link>
                  <Link to="/beine" className="block py-1 text-sm text-gray-600">Beine</Link>
                  <Link to="/brust" className="block py-1 text-sm text-gray-600">Brust</Link>
                  <Link to="/gesicht" className="block py-1 text-sm text-gray-600">Gesicht</Link>
                </div>
              </div>
              <div className="py-2">
                <span className="text-gray-900 font-medium">Männer</span>
                <div className="mt-2 ml-4 space-y-1">
                  <Link to="/maenner" className="block py-1 text-sm text-gray-600">Übersicht Männer</Link>
                  <Link to="/maenner/intimbereich" className="block py-1 text-sm text-gray-600">Intimbereich</Link>
                  <Link to="/maenner/ruecken" className="block py-1 text-sm text-gray-600">Rücken</Link>
                </div>
              </div>
              <Link to="#preise" className="block py-2 text-gray-700 font-medium">Preise</Link>
              <Link to="/beratung" className="block py-2 text-gray-700 font-medium">Beratung</Link>
              <Link to="/termine" className="block w-full mt-4 bg-blue-600 text-white text-center py-3 rounded-lg font-medium">
                Termin buchen
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;