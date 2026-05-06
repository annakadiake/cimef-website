'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Heart, ArrowUp, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-footer {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      <footer className="relative bg-[#1a2008] text-gray-300 overflow-hidden">
        {/* Pattern décoratif */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="footerPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="#c8d96f" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footerPattern)" />
          </svg>
        </div>

        {/* Ligne décorative en haut */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c8d96f] to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 py-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Brand - amélioré */}
            <div className="animate-footer" style={{ animationDelay: '0ms' }}>
              <div className="flex items-center gap-3 mb-4 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#c8d96f]/20 rounded-xl blur-lg group-hover:blur-xl transition-all"></div>
                  <Image 
                    src="/logo.png" 
                    alt="CIMEF Logo" 
                    width={45} 
                    height={45} 
                    className="w-11 h-11 rounded-xl object-contain relative group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <span className="text-xl font-bold text-white group-hover:text-[#c8d96f] transition-colors">
                  CIMEF
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Cabinet d'Imagerie Médicale et d'Explorations Fonctionnelles de Tivaouane
              </p>
              <div className="flex gap-3 mt-4">
                <a href="#" className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#c8d96f] hover:text-[#1a2008] transition-all group">
                  <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#c8d96f] hover:text-[#1a2008] transition-all group">
                  <Twitter className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#c8d96f] hover:text-[#1a2008] transition-all group">
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Contact - amélioré */}
            <div className="animate-footer" style={{ animationDelay: '100ms' }}>
              <h3 className="text-white font-semibold mb-4 relative inline-block">
                Contact
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#c8d96f] rounded-full"></span>
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 group">
                  <div className="w-7 h-7 bg-[#c8d96f]/10 rounded-lg flex items-center justify-center group-hover:bg-[#c8d96f] transition-all">
                    <Phone className="w-3.5 h-3.5 text-[#c8d96f] group-hover:text-[#1a2008] transition-colors" />
                  </div>
                  <a href="tel:+221773002697" className="hover:text-[#c8d96f] transition group-hover:translate-x-1 inline-block">
                    +221 77 300 26 97
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="w-7 h-7 bg-[#c8d96f]/10 rounded-lg flex items-center justify-center group-hover:bg-[#c8d96f] transition-all">
                    <Phone className="w-3.5 h-3.5 text-[#c8d96f] group-hover:text-[#1a2008] transition-colors" />
                  </div>
                  <a href="tel:+221766555556" className="hover:text-[#c8d96f] transition group-hover:translate-x-1 inline-block">
                    +221 76 655 55 56
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="w-7 h-7 bg-[#c8d96f]/10 rounded-lg flex items-center justify-center group-hover:bg-[#c8d96f] transition-all">
                    <Mail className="w-3.5 h-3.5 text-[#c8d96f] group-hover:text-[#1a2008] transition-colors" />
                  </div>
                  <a href="mailto:cimeftivaouane@gmail.com" className="hover:text-[#c8d96f] transition break-all group-hover:translate-x-1 inline-block text-xs">
                    cimeftivaouane@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="w-7 h-7 bg-[#c8d96f]/10 rounded-lg flex items-center justify-center group-hover:bg-[#c8d96f] transition-all">
                    <MapPin className="w-3.5 h-3.5 text-[#c8d96f] group-hover:text-[#1a2008] transition-colors" />
                  </div>
                  <span className="group-hover:translate-x-1 inline-block transition">Tivaouane, Sénégal</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="w-7 h-7 bg-[#c8d96f]/10 rounded-lg flex items-center justify-center group-hover:bg-[#c8d96f] transition-all">
                    <Clock className="w-3.5 h-3.5 text-[#c8d96f] group-hover:text-[#1a2008] transition-colors" />
                  </div>
                  <span className="group-hover:translate-x-1 inline-block transition">Ouvert 24h/24 - 7j/7</span>
                </li>
              </ul>
            </div>

            {/* Navigation rapide */}
            <div className="animate-footer" style={{ animationDelay: '200ms' }}>
              <h3 className="text-white font-semibold mb-4 relative inline-block">
                Navigation
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#c8d96f] rounded-full"></span>
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/" className="hover:text-[#c8d96f] transition flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-[#c8d96f] rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#c8d96f] transition flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-[#c8d96f] rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#c8d96f] transition flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-[#c8d96f] rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Horaires d'ouverture */}
            <div className="animate-footer" style={{ animationDelay: '300ms' }}>
              <h3 className="text-white font-semibold mb-4 relative inline-block">
                Services d'Urgence
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#c8d96f] rounded-full"></span>
              </h3>
              <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-white">Disponible 24h/24</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Service d'urgence pour les examens critiques. Appelez-nous à tout moment.
                </p>
                <div className="mt-3 pt-3 border-t border-white/10">
                  <a 
                    href="tel:+221773002697"
                    className="text-[#c8d96f] text-sm font-semibold hover:underline flex items-center gap-1"
                  >
                    Appeler maintenant →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar améliorée */}
        <div className="border-t border-white/10 py-4 relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p className="text-gray-500">
                &copy; {new Date().getFullYear()} CIMEF Tivaouane - Tous droits réservés
              </p>
              <div className="flex items-center gap-4">
                <Link href="/mentions-legales" className="text-gray-500 hover:text-[#c8d96f] transition text-xs">
                  Mentions légales
                </Link>
                <Link href="/politique-confidentialite" className="text-gray-500 hover:text-[#c8d96f] transition text-xs">
                  Politique de confidentialité
                </Link>
                <div className="flex items-center gap-1 text-gray-500 text-xs">
                  <Heart className="w-3 h-3 text-red-500 animate-pulse" />
                  <span>Soins avec cœur</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 text-xs">Site créé par</span>
                <a 
                  href="https://wa.me/221771628671" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#c8d96f] hover:text-[#a8b35a] transition text-xs font-semibold"
                >
                  A-K
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bouton retour en haut */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-[#c8d96f] text-[#1a2008] p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-50 animate-fade-in-up"
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </footer>
    </>
  );
}