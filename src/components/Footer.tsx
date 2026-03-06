import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a2008] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="CIMEF Logo" width={40} height={40} className="w-10 h-10 rounded-xl object-contain" />
              <span className="text-xl font-bold text-white">CIMEF</span>
            </div>
            <p className="text-sm text-gray-400">
              Cabinet d&apos;Imagerie Médicale de Tivaouane
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c8d96f]" />
                <a href="tel:+221773002697" className="hover:text-[#c8d96f] transition">
                  +221 77 300 26 97
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#c8d96f]" />
                <a href="mailto:cimeftivaouane@gmail.com" className="hover:text-[#c8d96f] transition">
                  cimeftivaouane@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#c8d96f]" />
                <span>Tivaouane, Sénégal</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-[#c8d96f] transition">Accueil</Link></li>
              <li><Link href="/services" className="hover:text-[#c8d96f] transition">Services</Link></li>
              <li><Link href="/contact" className="hover:text-[#c8d96f] transition">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} CIMEF Tivaouane</p>
        </div>
      </div>
    </footer>
  );
}
