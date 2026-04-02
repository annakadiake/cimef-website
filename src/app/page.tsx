'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/photo11.jpeg',
      title: 'Cabinet d\'Imagerie Médicale CIMEF',
      desc: 'Services d\' imagerie médicale de pointe à Tivaouane',
      alt: 'Espace Accueil CIMEF'
    },
    {
      image: '/photo12.jpeg',
      title: 'Cabinet d\'Imagerie Médicale CIMEF',
      desc: 'Équipements de pointe pour des diagnostics précis',
      alt: 'Salle d&apos;Examen CIMEF'
    },
    {
      image: '/photo13.jpeg',
      title: 'Cabinet d\'Imagerie Médicale CIMEF',
      desc: 'Confort et tranquillité pour nos patients',
      alt: 'Salle d\'Attente CIMEF'
    },
    {
      image: '/photo14.jpeg',
      title: 'Cabinet d\'Imagerie Médicale CIMEF',
      desc: 'Technologie de pointe au service de votre santé',
      alt: 'Équipements Médicaux CIMEF'
    },
    {
      image: '/photo15.jpeg',
      title: 'Cabinet d\'Imagerie Médicale CIMEF',
      desc: 'Technologie de pointe au service de votre santé',
      alt: 'Équipements Médicaux CIMEF'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % slides.length;
        console.log('Current slide:', nextSlide); // Debug
        return nextSlide;
      });
    }, 2000); // Change slide every 2 seconds pour tester

    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <>
      {/* Hero Section - Vidéo */}
      <section className="relative bg-gray-100 overflow-hidden">
        <div className="relative h-screen w-screen">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/video.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo.
          </video>
          
          {/* Overlay avec informations */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end justify-center">
            <div className="text-center pb-16 px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Cabinet d'Imagerie Médicale CIMEF</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">Excellence en imagerie médicale au service de votre santé</p>
              <div className="flex flex-wrap gap-6 justify-center">
                <a
                  href="/services"
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:shadow-xl transition-all"
                >
                  Nos Services
                </a>
                <a
                  href="/contact"
                  className="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Informations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Bienvenue au CIMEF</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Excellence en imagerie médicale au service de votre santé
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#636B2F]/10 to-[#3F4A1F]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#636B2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expertise</h3>
              <p className="text-gray-600">
                Une équipe de professionnels qualifiés dédiés à votre bien-être
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#636B2F]/10 to-[#3F4A1F]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#636B2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technologie</h3>
              <p className="text-gray-600">
                Équipements de pointe pour des diagnostics précis et fiables
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#636B2F]/10 to-[#3F4A1F]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#636B2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Disponibilité</h3>
              <p className="text-gray-600">
                Ouvert 24h/24 et 7j/7 pour vos urgences et rendez-vous
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#636B2F]/5 to-[#3F4A1F]/5 p-8 rounded-2xl border border-[#636B2F]/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cabinet d'Imagerie Médicale CIMEF</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  CIMEF met à votre disposition une gamme complète d'examens d'imagerie médicale 
                  réalisés par des professionnels expérimentés avec des équipements modernes. 
                  Votre santé est notre priorité.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/services"
                    className="bg-[#636B2F] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#3F4A1F] transition-colors"
                  >
                    Nos Services
                  </a>
                  <a
                    href="/contact"
                    className="border border-[#636B2F] text-[#636B2F] px-6 py-3 rounded-lg font-medium hover:bg-[#636B2F]/10 transition-colors"
                  >
                    Contact
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image 
                      src="/photo12.jpeg"
                      alt="Salle d'examen"
                      width={150}
                      height={150}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-lg">
                    <Image 
                      src="/photo13.jpeg"
                      alt="Salle d'attente"
                      width={150}
                      height={150}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-lg">
                    <Image 
                      src="/photo14.jpeg"
                      alt="Équipements"
                      width={150}
                      height={150}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-lg">
                    <Image 
                      src="/photo15.jpeg"
                      alt="Équipe médicale"
                      width={150}
                      height={150}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full">
                    <svg className="w-5 h-5 text-[#636B2F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
