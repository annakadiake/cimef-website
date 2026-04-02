'use client';

import type { Metadata } from 'next';
import { CheckCircle2, Phone } from 'lucide-react';

// Note: metadata export ne fonctionne pas avec 'use client'
// Si vous avez besoin de metadata, créez un fichier layout.tsx séparé

const services = [
  {
    title: 'Échographie',
    desc: 'Examens échographiques complets pour un diagnostic précis.',
    details: [
      'Échographie abdominale',
      'Échographie pelvienne',
      'Échographie mammaire',
      'Échographie obstétricale',
      'Échographie cardiaque',
    ],
  },
  {
    title: 'Échodoppler',
    desc: 'Exploration vasculaire pour évaluer la circulation sanguine.',
    details: [
      'Échodoppler artériel',
      'Échodoppler veineux',
      'Échodoppler des membres',
      'Échodoppler cervical',
    ],
  },
  {
    title: 'Électrocardiogramme (ECG)',
    desc: "Enregistrement de l'activité électrique du cœur.",
    details: [
      'ECG de repos standard',
    ],
  },
  {
    title: 'Radiographie',
    desc: 'Radiographies numériques pour un diagnostic rapide.',
    details: [
      'Radiographie standard toutes régions',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        .animation-delay-100 {
          animation-delay: 100ms;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .border-l-3 {
          border-left-width: 3px;
        }
      `}</style>

      {/* Header amélioré */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f9f0] via-white to-[#f0f2e6] py-16 md:py-24">
        <div className="absolute inset-0 opacity-30">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#636B2F" fillOpacity="0.1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <div className="inline-block animate-fade-in-up">
            <p className="text-[#636B2F] font-semibold text-sm uppercase tracking-wider mb-3 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#636B2F] rounded-full"></span>
              Nos Services
              <span className="w-1.5 h-1.5 bg-[#636B2F] rounded-full"></span>
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up animation-delay-100">
            Services d'<span className="text-[#636B2F] relative inline-block">
              Imagerie Médicale
              <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 2 L200 2" stroke="#636B2F" strokeWidth="3" strokeDasharray="6 6" fill="none"/>
              </svg>
            </span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg animate-fade-in-up animation-delay-200">
            Le CIMEF met à votre disposition une gamme complète d'examens médicaux
            réalisés par des professionnels qualifiés.
          </p>
        </div>
      </section>

      {/* Services Grid amélioré */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-gradient-to-br from-[#636B2F]/5 via-white to-[#3F4A1F]/5 p-8 rounded-2xl border border-[#636B2F]/20 hover:border-[#636B2F]/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#636B2F]/10 flex items-center justify-center mb-3 group-hover:bg-[#636B2F]/20 transition-all">
                      <div className="w-4 h-4 bg-[#636B2F] rounded-full group-hover:scale-110 transition-transform"></div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#636B2F] transition-colors">
                      {service.title}
                    </h2>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-medium text-[#636B2F]/60 bg-[#636B2F]/5 px-2 py-1 rounded-full">
                      0{index + 1}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed border-l-3 border-[#636B2F]/30 pl-4 italic">
                  {service.desc}
                </p>
                <div className="space-y-3">
                  {service.details.map((detail, idx) => (
                    <div key={detail} className="flex items-center gap-3 text-sm text-gray-700 group/detail">
                      <div className="relative">
                        <CheckCircle2 className="w-4 h-4 text-[#636B2F] shrink-0 transition-transform group-hover/detail:scale-110" />
                        <div className="absolute inset-0 bg-[#636B2F]/20 rounded-full scale-0 group-hover/detail:scale-100 transition-transform"></div>
                      </div>
                      <span className="group-hover/detail:text-[#636B2F] transition-colors">{detail}</span>
                    </div>
                  ))}
                </div>
                
                {/* Ligne décorative au hover */}
                <div className="mt-6 h-0.5 bg-gradient-to-r from-[#636B2F]/0 via-[#636B2F]/30 to-[#636B2F]/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section badges de qualité */}
      <section className="py-12 bg-gradient-to-r from-[#f8f9f0] to-[#f0f2e6]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              '✓ Équipements modernes',
              '✓ Experts qualifiés',
              '✓ Résultats rapides',
              '✓ Suivi personnalisé',
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[#3F4A1F] font-medium animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="w-1.5 h-1.5 bg-[#636B2F] rounded-full"></div>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA amélioré */}
      <section className="relative py-16 bg-[#3F4A1F] overflow-hidden">
        {/* Effet de vagues */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute bottom-0 w-full h-20" preserveAspectRatio="none" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="white"/>
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <div className="animate-pulse-slow">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
              <span className="text-white/90 text-sm">Prise de rendez-vous</span>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in-up">
            Besoin d'un examen ?
          </h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto animate-fade-in-up animation-delay-100">
            Contactez-nous pour obtenir plus d'informations sur nos services et disponibilités.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-200">
            <a
              href="tel:+221773002697"
              className="group bg-white text-[#3F4A1F] px-8 py-3.5 rounded-xl font-semibold hover:shadow-xl transition-all flex items-center gap-2 hover:gap-3 hover:scale-105"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              +221 77 300 26 97
            </a>
            <button className="border-2 border-white/40 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-all hover:border-white/60">
              Nous écrire
            </button>
          </div>
          
          {/* Disponibilité */}
          <p className="text-white/50 text-xs mt-6">
            Disponible 7j/7 - Urgences 24h/24
          </p>
        </div>
      </section>
    </>
  );
}