'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/photo1.jpeg',
      title: 'Cabinet d\'Imagerie Médicale CIMEF',
      desc: 'Services d\' imagerie médicale de pointe à Tivaouane',
      alt: 'Espace Accueil CIMEF'
    },
    {
      image: '/photo2.jpeg',
      title: 'Cabinet d\'Imagerie Médicale CIMEF',
      desc: 'Équipements de pointe pour des diagnostics précis',
      alt: 'Salle d&apos;Examen CIMEF'
    },
    {
      image: '/photo3.jpeg',
      title: 'Cabinet d\'Imagerie Médicale CIMEF',
      desc: 'Confort et tranquillité pour nos patients',
      alt: 'Salle d\'Attente CIMEF'
    },
    {
      image: '/photo4.jpeg',
      title: 'Cabinet d\'Imagerie Médicale CIMEF',
      desc: 'Technologie de pointe au service de votre santé',
      alt: 'Équipements Médicaux CIMEF'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <>
      {/* Hero Section - Photos en grand plan */}
      <section className="relative min-h-screen bg-gray-50 overflow-hidden">
        <div className="relative h-screen">
          <div 
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 relative">
                <Image 
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center">
                  <div className="text-center pb-16 px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{slide.title}</h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-8">{slide.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Navigation dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
