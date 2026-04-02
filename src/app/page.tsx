'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    { image: '/photo11.jpeg', alt: 'Espace Accueil CIMEF' },
    { image: '/photo12.jpeg', alt: 'Salle d\'Examen CIMEF' },
    { image: '/photo13.jpeg', alt: 'Salle d\'Attente CIMEF' },
    { image: '/photo14.jpeg', alt: 'Équipements Médicaux CIMEF' },
    { image: '/photo15.jpeg', alt: 'Équipements Médicaux CIMEF' },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const services = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
            d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
        </svg>
      ),
      label: 'Radiographie standard',
      desc: 'Thorax, membres, rachis et bien plus — en numérique haute résolution.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      label: 'Échographie générale',
      desc: 'Abdominale, pelvienne, obstétricale, des parties molles et vasculaire.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      label: 'Comptes rendus rapides',
      desc: 'Résultats remis dans les meilleurs délais, rédigés par nos médecins radiologues.',
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --olive: #4E5A24;
          --olive-light: #636B2F;
          --olive-pale: #F4F5EE;
          --olive-mid: #D6DCA8;
          --gold: #B8A35A;
          --gold-light: #EDD98A;
          --cream: #FAFAF7;
          --charcoal: #1C1F12;
          --slate: #5A5F4E;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'DM Sans', sans-serif;
          color: var(--charcoal);
          background: var(--cream);
        }

        /* Animations */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fade-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-scale {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }

        .hero {
          position: relative;
          height: 100vh;
          overflow: hidden;
        }

        .hero video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(20, 23, 10, 0.25) 0%,
            rgba(20, 23, 10, 0.55) 60%,
            rgba(20, 23, 10, 0.8) 100%
          );
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 5vw 6vh;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.25);
          color: #fff;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 7px 16px;
          border-radius: 100px;
          margin-bottom: 24px;
          width: fit-content;
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .hero-badge::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--gold-light);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 5vw, 4.5rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 16px;
          max-width: 700px;
          opacity: 0;
          animation: fadeInLeft 0.8s ease-out 0.2s forwards;
        }

        .hero h1 em {
          font-style: italic;
          color: var(--gold-light);
        }

        .hero p {
          font-size: clamp(1rem, 1.8vw, 1.2rem);
          color: rgba(255,255,255,0.8);
          max-width: 520px;
          line-height: 1.65;
          margin-bottom: 36px;
          font-weight: 300;
          opacity: 0;
          animation: fadeInLeft 0.8s ease-out 0.4s forwards;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.6s forwards;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--olive-light);
          color: #fff;
          padding: 14px 28px;
          border-radius: 6px;
          font-size: 0.95rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
          letter-spacing: 0.01em;
        }

        .btn-primary:hover {
          background: var(--olive);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(78, 90, 36, 0.35);
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #fff;
          padding: 13px 28px;
          border-radius: 6px;
          border: 1px solid rgba(255,255,255,0.45);
          font-size: 0.95rem;
          font-weight: 400;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-outline:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.7);
          transform: translateY(-2px);
        }

        .scroll-hint {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: rgba(255,255,255,0.5);
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.8s forwards;
        }

        .scroll-hint-line {
          width: 1px;
          height: 40px;
          background: rgba(255,255,255,0.25);
          position: relative;
          overflow: hidden;
        }

        .scroll-hint-line::after {
          content: '';
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255,255,255,0.7);
          animation: scroll-line 2s infinite;
        }

        @keyframes scroll-line {
          to { top: 200%; }
        }

        .stats-bar {
          background: var(--olive);
          padding: 28px 5vw;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }

        .stat-item {
          text-align: center;
          padding: 12px 20px;
          border-right: 1px solid rgba(255,255,255,0.12);
          color: #fff;
          transition: all 0.3s ease;
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .stat-item:hover {
          transform: translateY(-5px);
        }

        .stat-item:last-child { border-right: none; }

        .stat-value {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--gold-light);
          display: block;
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 0.78rem;
          font-weight: 300;
          color: rgba(255,255,255,0.7);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .section {
          padding: 80px 5vw;
        }

        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--olive-light);
          margin-bottom: 16px;
        }

        .section-tag::before {
          content: '';
          width: 24px;
          height: 1px;
          background: var(--olive-light);
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 700;
          color: var(--charcoal);
          line-height: 1.15;
          margin-bottom: 16px;
        }

        .section-desc {
          font-size: 1rem;
          color: var(--slate);
          max-width: 560px;
          line-height: 1.7;
          font-weight: 300;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6vw;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-left {
          opacity: 0;
          animation: slideIn 0.8s ease-out forwards;
        }

        .about-right {
          position: relative;
          opacity: 0;
          animation: fadeInRight 0.8s ease-out 0.2s forwards;
        }

        .about-image-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 260px 260px;
          gap: 12px;
        }

        .about-image-wrap {
          overflow: hidden;
          border-radius: 8px;
          position: relative;
        }

        .about-image-wrap:first-child {
          grid-row: span 2;
        }

        .about-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .about-image-wrap:hover img {
          transform: scale(1.04);
        }

        .about-card {
          position: absolute;
          bottom: -20px;
          left: -28px;
          background: var(--olive);
          color: #fff;
          padding: 20px 24px;
          border-radius: 8px;
          box-shadow: 0 12px 30px rgba(78,90,36,0.35);
          min-width: 160px;
          opacity: 0;
          animation: scaleIn 0.6s ease-out 0.5s forwards;
        }

        .about-card-num {
          font-family: 'Playfair Display', serif;
          font-size: 2.4rem;
          font-weight: 700;
          color: var(--gold-light);
          display: block;
          line-height: 1;
        }

        .about-card-text {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.75);
          margin-top: 4px;
          font-weight: 300;
        }

        .pillar-list {
          margin: 32px 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .pillar-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          transition: all 0.3s ease;
          opacity: 0;
          animation: fadeInRight 0.6s ease-out forwards;
        }

        .pillar-item:hover {
          transform: translateX(8px);
        }

        .pillar-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: var(--olive-pale);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--olive-light);
          flex-shrink: 0;
          border: 1px solid var(--olive-mid);
          transition: all 0.3s ease;
        }

        .pillar-item:hover .pillar-icon {
          background: var(--olive-light);
          color: #fff;
          border-color: var(--olive-light);
        }

        .pillar-body h4 {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--charcoal);
          margin-bottom: 3px;
        }

        .pillar-body p {
          font-size: 0.85rem;
          color: var(--slate);
          line-height: 1.5;
          font-weight: 300;
        }

        .cta-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 32px;
        }

        .btn-olive {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--olive);
          color: #fff;
          padding: 13px 26px;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-olive:hover {
          background: var(--charcoal);
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(0,0,0,0.2);
        }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: var(--olive-light);
          padding: 12px 26px;
          border-radius: 6px;
          border: 1px solid var(--olive-mid);
          font-size: 0.9rem;
          font-weight: 400;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-ghost:hover {
          background: var(--olive-pale);
          border-color: var(--olive-light);
          transform: translateY(-2px);
        }

        .services-section {
          background: var(--charcoal);
          padding: 80px 5vw;
        }

        .services-section .section-tag { color: var(--gold-light); }
        .services-section .section-tag::before { background: var(--gold-light); }
        .services-section .section-title { color: #fff; }
        .services-section .section-desc { color: rgba(255,255,255,0.55); }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          margin-top: 48px;
          max-width: 900px;
        }

        .service-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: all 0.4s ease;
          cursor: default;
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .service-card:nth-child(1) { animation-delay: 100ms; }
        .service-card:nth-child(2) { animation-delay: 200ms; }
        .service-card:nth-child(3) { animation-delay: 300ms; }

        .service-card:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(184,163,90,0.4);
          transform: translateY(-5px);
        }

        .service-icon {
          color: var(--gold-light);
          opacity: 0.9;
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-icon {
          transform: scale(1.1);
        }

        .service-label {
          font-size: 1rem;
          font-weight: 500;
          color: #fff;
          letter-spacing: 0.01em;
        }

        .service-arrow {
          margin-top: auto;
          color: rgba(255,255,255,0.2);
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .service-card:hover .service-arrow {
          color: var(--gold-light);
          transform: translateX(6px);
        }

        .gallery-section {
          padding: 80px 5vw;
          background: var(--olive-pale);
        }

        .gallery-slider {
          position: relative;
          height: 480px;
          border-radius: 12px;
          overflow: hidden;
          margin-top: 48px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .gallery-slide {
          position: absolute;
          inset: 0;
          transition: opacity 0.7s ease;
          opacity: 0;
        }

        .gallery-slide.active { opacity: 1; }

        .gallery-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .gallery-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 20px;
        }

        .gallery-dot {
          width: 28px;
          height: 3px;
          border-radius: 2px;
          background: var(--olive-mid);
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          padding: 0;
        }

        .gallery-dot:hover {
          background: var(--olive-light);
          transform: scaleX(1.2);
        }

        .gallery-dot.active {
          background: var(--olive-light);
          width: 48px;
        }

        .contact-strip {
          background: var(--olive-light);
          padding: 48px 5vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
        }

        .contact-strip h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          color: #fff;
          font-weight: 600;
        }

        .contact-strip p {
          color: rgba(255,255,255,0.75);
          font-size: 0.95rem;
          margin-top: 6px;
          font-weight: 300;
        }

        .btn-white {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          color: var(--olive);
          padding: 14px 30px;
          border-radius: 6px;
          font-size: 0.95rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .btn-white:hover {
          background: var(--cream);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.2);
        }

        @media (max-width: 768px) {
          .stats-bar { grid-template-columns: 1fr 1fr; }
          .stat-item:nth-child(2) { border-right: none; }
          .about-grid { grid-template-columns: 1fr; }
          .about-right { display: none; }
          .services-grid { grid-template-columns: 1fr 1fr; }
          .gallery-slider { height: 300px; }
          .contact-strip { flex-direction: column; text-align: center; }
        }

        @media (max-width: 480px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* HERO */}
      <section className="hero">
        <video autoPlay muted loop playsInline>
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay">
          <div className="hero-badge">Tivaouane, Sénégal</div>
          <h1>
            Excellence en<br />
            <em>imagerie médicale</em>
          </h1>
          <p>
            Cabinet d'Imagerie Médicale CIMEF — des diagnostics précis,
            réalisés par des spécialistes dévoués à votre santé.
          </p>
          <div className="hero-actions">
            <Link href="/services" className="btn-primary">
              Découvrir nos services
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-outline">Nous contacter</Link>
          </div>
        </div>

        <div className="scroll-hint">
          <span>Défiler</span>
          <div className="scroll-hint-line" />
        </div>
      </section>

      {/* STATS BAR */}
      <div className="stats-bar">
        {[
          { value: '5+', label: "Années d'expertise", delay: 0 },
          
          { value: '24/7', label: "Service d'urgence", delay: 200 },
          { value: '100%', label: 'Équipement moderne', delay: 300 },
        ].map((stat, i) => (
          <div key={i} className="stat-item" style={{ animationDelay: `${stat.delay}ms` }}>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* À PROPOS */}
      <section className="section">
        <div className="about-grid">
          <div className="about-left">
            <span className="section-tag">À propos du CIMEF</span>
            <h2 className="section-title">
              Votre santé mérite<br />les meilleurs soins
            </h2>
            <p className="section-desc">
              Le Cabinet d'Imagerie Médicale CIMEF ouvre ses portes à Tivaouane
              avec des équipements modernes et une équipe de radiologues qualifiés,
              entièrement dédiés à votre santé.
            </p>

            <div className="pillar-list">
              {[
                {
                  label: 'Expertise médicale',
                  desc: 'Médecins radiologues et techniciens certifiés avec des années d\'expérience.',
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  delay: 0,
                },
                {
                  label: 'Technologie de pointe',
                  desc: 'Appareils modernes pour des images haute résolution et des diagnostics fiables.',
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  delay: 100,
                },
                {
                  label: 'Disponible 24h/24 – 7j/7',
                  desc: 'Prise en charge immédiate pour les urgences, tous les jours de l\'année.',
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  delay: 200,
                },
              ].map((p, i) => (
                <div className="pillar-item" key={i} style={{ animationDelay: `${p.delay}ms` }}>
                  <div className="pillar-icon">{p.icon}</div>
                  <div className="pillar-body">
                    <h4>{p.label}</h4>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="cta-row">
              <Link href="/services" className="btn-olive">Nos services</Link>
              <Link href="/contact" className="btn-ghost">Prendre rendez-vous</Link>
            </div>
          </div>

          <div className="about-right">
            <div className="about-image-grid">
              <div className="about-image-wrap">
                <Image src="/photo11.jpeg" alt="CIMEF" width={400} height={532} className="w-full h-full object-cover" />
              </div>
              <div className="about-image-wrap">
                <Image src="/photo12.jpeg" alt="Salle d'examen" width={400} height={260} className="w-full h-full object-cover" />
              </div>
              <div className="about-image-wrap">
                <Image src="/photo13.jpeg" alt="Salle d'attente" width={400} height={260} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="about-card">
              <span className="about-card-num">24/7</span>
              <span className="about-card-text">Service d'urgence disponible</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section">
        <div style={{ maxWidth: 900 }}>
          <span className="section-tag">Ce que nous proposons</span>
          <h2 className="section-title">Nos examens disponibles</h2>
          <p className="section-desc">
            Radiographie et échographie réalisées avec du matériel moderne,
            dans un cadre accueillant et par des professionnels qualifiés.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon">{s.icon}</div>
              <span className="service-label">{s.label}</span>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.55, fontWeight: 300 }}>{s.desc}</p>
              <span className="service-arrow">→</span>
            </div>
          ))}
        </div>
      </section>

      {/* GALERIE */}
      <section className="gallery-section">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <span className="section-tag">Notre espace</span>
          <h2 className="section-title">Le cabinet en images</h2>
        </div>

        <div className="gallery-slider" style={{ marginTop: 48 }}>
          {slides.map((slide, i) => (
            <div className={`gallery-slide ${i === currentSlide ? 'active' : ''}`} key={i}>
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>

        <div className="gallery-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`gallery-dot ${i === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* CONTACT STRIP */}
      <div className="contact-strip">
        <div>
          <h3>Prenez rendez-vous dès aujourd'hui</h3>
          <p>Notre équipe est disponible pour répondre à toutes vos questions.</p>
        </div>
        <Link href="/contact" className="btn-white">
          Nous contacter
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </>
  );
}