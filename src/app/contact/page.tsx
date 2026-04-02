'use client';

import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react';

export default function ContactPage() {
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
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animation-delay-100 {
          animation-delay: 100ms;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>

      {/* Header amélioré */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f9f0] via-white to-[#f0f2e6] py-16 md:py-24">
        <div className="absolute inset-0 opacity-30">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#636B2F" fillOpacity="0.1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <div className="inline-block animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-[#636B2F]/10 px-4 py-2 rounded-full mb-3">
              <div className="w-1.5 h-1.5 bg-[#636B2F] rounded-full animate-pulse"></div>
              <p className="text-[#636B2F] font-semibold text-sm uppercase tracking-wider">Contactez-nous</p>
              <div className="w-1.5 h-1.5 bg-[#636B2F] rounded-full animate-pulse"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up animation-delay-100">
            <span className="text-[#636B2F]">Contact</span>ez-nous
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg animate-fade-in-up animation-delay-200">
            Notre équipe est à votre disposition pour vous accompagner et répondre à toutes vos questions.
          </p>
        </div>
      </section>

      {/* Contact Section avec carte en grand format */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Info - amélioré */}
            <div className="animate-slide-in-left">
              <div className="bg-gradient-to-br from-[#f8f9f0] to-[#f0f2e6] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-8 bg-[#636B2F] rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-900">Nos Coordonnées</h2>
                </div>
                
                <div className="space-y-6">
                  {/* Adresse */}
                  <div className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-[#636B2F]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#636B2F] group-hover:scale-110 transition-all duration-300">
                      <MapPin className="w-5 h-5 text-[#636B2F] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                      <p className="text-gray-500 text-sm">Tivaouane, Sénégal</p>
                      <a 
                        href="https://maps.google.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#636B2F] text-xs hover:underline inline-block mt-1"
                      >
                        Voir sur Google Maps →
                      </a>
                    </div>
                  </div>

                  {/* Téléphone */}
                  <div className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-[#636B2F]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#636B2F] group-hover:scale-110 transition-all duration-300">
                      <Phone className="w-5 h-5 text-[#636B2F] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                      <a href="tel:+221773002697" className="text-gray-500 text-sm hover:text-[#636B2F] transition block group-hover:translate-x-1 transition-transform">
                        +221 77 300 26 97
                      </a>
                      <a href="tel:+221766555556" className="text-gray-500 text-sm hover:text-[#636B2F] transition block group-hover:translate-x-1 transition-transform">
                        +221 76 655 55 56
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-[#636B2F]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#636B2F] group-hover:scale-110 transition-all duration-300">
                      <Mail className="w-5 h-5 text-[#636B2F] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a href="mailto:cimeftivaouane@gmail.com" className="text-gray-500 text-sm hover:text-[#636B2F] transition break-all group-hover:translate-x-1 transition-transform block">
                        cimeftivaouane@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Horaires */}
                  <div className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-[#636B2F]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#636B2F] group-hover:scale-110 transition-all duration-300">
                      <Clock className="w-5 h-5 text-[#636B2F] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Horaires</h3>
                      <p className="text-gray-500 text-sm">Ouvert 24h/24 - 7j/7</p>
                      <p className="text-[#636B2F] text-xs mt-1">Service d'urgence disponible</p>
                    </div>
                  </div>
                </div>

                {/* Bouton WhatsApp */}
                <div className="mt-8 pt-6 border-t border-[#636B2F]/10">
                  <a 
                    href="https://wa.me/221773002697" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Nous écrire sur WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Carte Google Maps en grand format */}
            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-[#f8f9f0] to-[#f0f2e6] rounded-2xl p-1 shadow-lg h-full">
                <div className="bg-gray-100 rounded-xl overflow-hidden h-[500px] relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none rounded-xl"></div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3657.123456!2d-16.8151289!3d14.9384049!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1c5e0534ef92b:0x1fef172bef858a85!2sTivaouane!5e0!3m2!1sen!2ssn!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation CIMEF Tivaouane"
                    className="hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 text-center bg-white/50 rounded-b-xl">
                  <p className="text-sm text-gray-600">
                    📍 Centre d'Imagerie Médicale et d'Explorations Fonctionnelles - Tivaouane
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section rapide */}
          <div className="mt-12 text-center animate-fade-in-up animation-delay-300">
            <div className="inline-flex items-center gap-2 bg-[#636B2F]/5 px-6 py-3 rounded-full">
              <Calendar className="w-4 h-4 text-[#636B2F]" />
              <span className="text-sm text-gray-600">
                Prise de rendez-vous rapide par téléphone ou sur place
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}