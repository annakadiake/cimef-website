'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock, MapPin, ChevronDown } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/a-propos', label: 'À Propos' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Définir le lien actif basé sur l'URL
    setActiveLink(window.location.pathname);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors du redimensionnement
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-slide-down {
          animation: slideDown 0.3s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out forwards;
        }
        
        .nav-link {
          position: relative;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #636B2F, #3F4A1F);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        
        .mobile-menu-enter {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>

      {/* Top bar - Nouveau */}
      <div className="hidden md:block bg-gradient-to-r from-[#1a2008] to-[#2C3515] text-white/70 text-xs">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3 text-[#c8d96f]" />
                <span>Urgence 24h/24 : +221 77 300 26 97</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-[#c8d96f]" />
                <span>Tivaouane, Sénégal</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="mailto:cimeftivaouane@gmail.com" className="hover:text-[#c8d96f] transition">
                cimeftivaouane@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center h-16 md:h-20">

            {/* Logo avec animation */}
            <Link href="/" className="group relative">
              <div className="absolute inset-0 bg-[#636B2F]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Image
                src="/logo.png"
                alt="CIMEF"
                width={80}
                height={80}
                className="w-14 h-14 md:w-20 md:h-20 object-contain relative transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center gap-8 mr-8 pr-8 border-r border-gray-100">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link text-[13px] font-normal uppercase tracking-widest transition-all duration-300 ${
                      activeLink === link.href 
                        ? 'text-[#3F4A1F] font-medium' 
                        : 'text-gray-500 hover:text-[#3F4A1F]'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-5">
                <Link
                  href="/contact"
                  className="group relative overflow-hidden px-6 py-2.5 rounded-full bg-gradient-to-r from-[#3F4A1F] to-[#636B2F] text-white text-[12px] font-medium uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <span className="relative z-10">Nous contacter</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#636B2F] to-[#3F4A1F] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </Link>
              </div>
            </div>

            {/* Mobile toggle avec animation */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${isOpen ? 'bg-[#3F4A1F]/10' : ''}`}></div>
              {isOpen ? (
                <X className="w-5 h-5 text-[#3F4A1F] relative z-10" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600 relative z-10" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu amélioré */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-6 px-6 space-y-2 shadow-xl animate-slide-down">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 px-4 text-[13px] uppercase tracking-widest transition-all duration-300 rounded-lg ${
                  activeLink === link.href
                    ? 'bg-gradient-to-r from-[#3F4A1F]/10 to-[#636B2F]/10 text-[#3F4A1F] font-medium'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-[#3F4A1F]'
                }`}
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="pt-4 mt-4 border-t border-gray-100 space-y-4">
              {/* Coordonnées */}
              <div className="space-y-3 px-4">
                <p className="flex items-center gap-3 text-sm text-gray-600 group">
                  <div className="w-8 h-8 bg-[#3F4A1F]/10 rounded-lg flex items-center justify-center group-hover:bg-[#3F4A1F] transition-colors">
                    <Phone className="w-3.5 h-3.5 text-[#3F4A1F] group-hover:text-white transition-colors" />
                  </div>
                  <span className="group-hover:text-[#3F4A1F] transition-colors">+221 77 300 26 97</span>
                </p>
                <p className="flex items-center gap-3 text-sm text-gray-600 group">
                  <div className="w-8 h-8 bg-[#3F4A1F]/10 rounded-lg flex items-center justify-center group-hover:bg-[#3F4A1F] transition-colors">
                    <Clock className="w-3.5 h-3.5 text-[#3F4A1F] group-hover:text-white transition-colors" />
                  </div>
                  <span className="group-hover:text-[#3F4A1F] transition-colors">Ouvert 24h/24 - 7j/7</span>
                </p>
                <p className="flex items-center gap-3 text-sm text-gray-600 group">
                  <div className="w-8 h-8 bg-[#3F4A1F]/10 rounded-lg flex items-center justify-center group-hover:bg-[#3F4A1F] transition-colors">
                    <MapPin className="w-3.5 h-3.5 text-[#3F4A1F] group-hover:text-white transition-colors" />
                  </div>
                  <span className="group-hover:text-[#3F4A1F] transition-colors">Tivaouane, Sénégal</span>
                </p>
              </div>
              
              {/* Bouton contact */}
              <Link
                href="/contact"
                className="block text-center text-[12px] uppercase tracking-widest font-semibold text-white bg-gradient-to-r from-[#3F4A1F] to-[#636B2F] hover:shadow-lg transition-all px-5 py-3.5 rounded-xl mt-4"
                onClick={() => setIsOpen(false)}
              >
                Nous contacter
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Overlay pour mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}