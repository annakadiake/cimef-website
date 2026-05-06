'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
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
      <main>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

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

          body {
            background-color: var(--cream);
            font-family: 'DM Sans', sans-serif;
            color: var(--charcoal);
            line-height: 1.6;
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(32px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .section {
            padding: 88px 6vw;
            opacity: 0;
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .section:nth-child(2) { animation-delay: 200ms; }
          .section:nth-child(3) { animation-delay: 400ms; }
          .section:nth-child(4) { animation-delay: 600ms; }
          .section:nth-child(5) { animation-delay: 800ms; }

          /* HERO */
          .hero {
            position: relative;
            height: 85vh;
            min-height: 500px;
            max-height: 700px;
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
            background: linear-gradient(135deg, rgba(28,31,18,0.72) 0%, rgba(78,90,36,0.48) 100%);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            text-align: center;
            padding: 2rem;
          }
          .hero-badge {
            background: rgba(255,255,255,0.12);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255,255,255,0.2);
            padding: 6px 18px;
            border-radius: 50px;
            font-size: 12px;
            font-weight: 500;
            letter-spacing: 0.08em;
            margin-bottom: 28px;
          }
          .hero h1 {
            font-family: 'Playfair Display', serif;
            font-size: clamp(2.4rem, 5vw, 3.8rem);
            font-weight: 700;
            line-height: 1.1;
            margin-bottom: 18px;
            max-width: 700px;
          }
          .hero h1 em {
            font-style: italic;
            color: var(--gold-light);
          }
          .hero p {
            font-size: 1.1rem;
            margin-bottom: 32px;
            max-width: 540px;
            opacity: 0.85;
            font-weight: 300;
            line-height: 1.7;
          }
          .hero-actions {
            display: flex;
            gap: 14px;
            flex-wrap: wrap;
            justify-content: center;
          }
          .btn-primary {
            background: var(--olive-light);
            color: white;
            padding: 13px 28px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 500;
            font-size: 14px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.25s;
            box-shadow: 0 4px 20px rgba(78,90,36,0.35);
          }
          .btn-primary:hover {
            background: var(--olive);
            transform: translateY(-2px);
          }
          .btn-outline {
            background: transparent;
            color: white;
            padding: 12px 28px;
            border: 1.5px solid rgba(255,255,255,0.35);
            border-radius: 50px;
            text-decoration: none;
            font-weight: 400;
            font-size: 14px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.25s;
          }
          .btn-outline:hover {
            background: rgba(255,255,255,0.1);
            border-color: rgba(255,255,255,0.6);
          }

          /* STATS */
          .stats-bar {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 36px 6vw;
            background: var(--olive);
            color: white;
          }
          .stat-item { text-align: center; }
          .stat-value {
            display: block;
            font-family: 'Playfair Display', serif;
            font-size: 2.6rem;
            font-weight: 700;
            color: var(--gold-light);
            line-height: 1;
            margin-bottom: 6px;
          }
          .stat-label {
            font-size: 11px;
            font-weight: 300;
            opacity: 0.65;
            letter-spacing: 0.07em;
            text-transform: uppercase;
          }
          .stats-divider {
            width: 1px;
            height: 44px;
            background: rgba(255,255,255,0.1);
          }

          /* SECTION TAGS */
          .section-tag {
            background: var(--olive-pale);
            color: var(--olive);
            padding: 5px 16px;
            border-radius: 50px;
            font-size: 12px;
            font-weight: 500;
            letter-spacing: 0.06em;
            display: inline-block;
            margin-bottom: 14px;
          }
          .section-title {
            font-family: 'Playfair Display', serif;
            font-size: clamp(2rem, 3.5vw, 2.8rem);
            font-weight: 700;
            margin-bottom: 14px;
            color: var(--charcoal);
            line-height: 1.15;
          }
          .section-desc {
            font-size: 15px;
            color: var(--slate);
            max-width: 560px;
            line-height: 1.75;
            font-weight: 300;
          }

          /* SERVICES */
          .services-section {
            background: var(--charcoal);
            padding: 88px 6vw;
            color: white;
          }
          .services-section .section-tag {
            background: rgba(237,217,138,0.12);
            color: var(--gold-light);
          }
          .services-section .section-title { color: white; }
          .services-section .section-desc { color: rgba(255,255,255,0.5); }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1px;
            background: rgba(255,255,255,0.06);
            margin-top: 52px;
            border: 1px solid rgba(255,255,255,0.06);
          }
          .service-card {
            background: var(--charcoal);
            padding: 40px 32px;
            display: flex;
            flex-direction: column;
            gap: 14px;
            transition: all 0.35s;
            cursor: default;
            position: relative;
            overflow: hidden;
          }
          .service-card::after {
            content: '';
            position: absolute;
            bottom: 0; left: 0; right: 0;
            height: 2px;
            background: var(--gold);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.35s;
          }
          .service-card:hover { background: rgba(255,255,255,0.05); }
          .service-card:hover::after { transform: scaleX(1); }

          .service-icon {
            width: 52px;
            height: 52px;
            background: rgba(237,217,138,0.08);
            border: 1px solid rgba(237,217,138,0.15);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--gold-light);
            transition: all 0.3s;
          }
          .service-card:hover .service-icon {
            background: rgba(237,217,138,0.14);
          }
          .service-label {
            font-size: 15px;
            font-weight: 500;
            color: white;
            letter-spacing: 0.01em;
          }
          .service-card p {
            font-size: 13px;
            color: rgba(255,255,255,0.45);
            line-height: 1.65;
            font-weight: 300;
          }
          .service-arrow {
            margin-top: auto;
            color: var(--gold);
            font-size: 18px;
            transition: transform 0.3s;
            display: inline-block;
          }
          .service-card:hover .service-arrow { transform: translateX(5px); }

          /* CONTACT SECTION */
          .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 24px;
            margin-top: 52px;
            max-width: 840px;
            margin-left: auto;
            margin-right: auto;
          }
          .contact-card {
            background: white;
            border: 1px solid rgba(78,90,36,0.08);
            border-radius: 16px;
            padding: 32px 24px;
            text-align: center;
            transition: all 0.25s;
          }
          .contact-card:hover {
            border-color: rgba(78,90,36,0.2);
            transform: translateY(-3px);
            box-shadow: 0 8px 24px rgba(78,90,36,0.08);
          }
          .contact-icon-wrap {
            width: 56px;
            height: 56px;
            background: var(--olive-pale);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 18px;
            border: 1px solid var(--olive-mid);
          }
          .contact-card h4 {
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 8px;
            color: var(--charcoal);
          }
          .contact-card a {
            color: var(--olive-light);
            text-decoration: none;
            font-size: 13px;
            transition: color 0.2s;
          }
          .contact-card a:hover { color: var(--olive); }
          .contact-card p { color: var(--slate); font-size: 13px; }

          /* BUTTONS */
          .btn-olive {
            background: var(--olive);
            color: white;
            padding: 13px 28px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 500;
            font-size: 14px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.25s;
          }
          .btn-olive:hover {
            background: var(--olive-light);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(78,90,36,0.3);
          }
          .btn-ghost {
            background: transparent;
            color: var(--olive);
            padding: 12px 28px;
            border: 1.5px solid var(--olive);
            border-radius: 50px;
            text-decoration: none;
            font-weight: 400;
            font-size: 14px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.25s;
          }
          .btn-ghost:hover {
            background: var(--olive);
            color: white;
          }

          /* CONTACT STRIP */
          .contact-strip {
            background: var(--charcoal);
            color: white;
            padding: 52px 6vw;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 32px;
          }
          .contact-strip h3 {
            font-family: 'Playfair Display', serif;
            font-size: 1.7rem;
            font-weight: 600;
            margin-bottom: 6px;
          }
          .contact-strip p {
            opacity: 0.55;
            font-weight: 300;
            font-size: 14px;
          }
          .btn-white {
            background: white;
            color: var(--charcoal);
            padding: 13px 28px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 500;
            font-size: 14px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.25s;
            white-space: nowrap;
          }
          .btn-white:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.2);
          }

          @media (max-width: 768px) {
            .hero h1 { font-size: 2.2rem; }
            .stats-bar { flex-direction: column; gap: 2rem; }
            .stats-divider { width: 40px; height: 1px; }
            .services-grid { grid-template-columns: 1fr; }
            .contact-strip { flex-direction: column; text-align: center; }
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
              <Link href="#contact" className="btn-outline">Nous contacter</Link>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services-section" id="services">
          <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
            <span className="section-tag">Ce que nous proposons</span>
            <h2 className="section-title">Nos examens disponibles</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Radiographie et échographie réalisées avec du matériel moderne,
              dans un cadre accueillant et par des professionnels qualifiés.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="service-icon">{s.icon}</div>
                <span className="service-label">{s.label}</span>
                <p>{s.desc}</p>
                <span className="service-arrow">→</span>
              </div>
            ))}
          </div>
        </section>

        {/* PHOTOS */}
        <section className="section" style={{ background: 'white' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
            <span className="section-tag">Notre Cabinet</span>
            <h2 className="section-title">Découvrez nos installations</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Un environnement moderne et professionnel conçu pour votre confort
              et des diagnostics de qualité.
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '24px',
            maxWidth: '1200px',
            margin: '52px auto 0'
          }}>
            <div style={{ 
              position: 'relative', 
              borderRadius: '16px', 
              overflow: 'hidden',
              height: '250px'
            }}>
              <img 
                src="/photo11.jpeg" 
                alt="Espace Accueil CIMEF" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }}
              />
            </div>
            
            <div style={{ 
              position: 'relative', 
              borderRadius: '16px', 
              overflow: 'hidden',
              height: '250px'
            }}>
              <img 
                src="/photo12.jpeg" 
                alt="Salle d'Examen CIMEF" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }}
              />
            </div>
            
            <div style={{ 
              position: 'relative', 
              borderRadius: '16px', 
              overflow: 'hidden',
              height: '250px'
            }}>
              <img 
                src="/photo13.jpeg" 
                alt="Salle d'Attente CIMEF" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }}
              />
            </div>
            
            <div style={{ 
              position: 'relative', 
              borderRadius: '16px', 
              overflow: 'hidden',
              height: '250px'
            }}>
              <img 
                src="/photo14.jpeg" 
                alt="Équipements Médicaux CIMEF" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }}
              />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section" id="contact" style={{ background: 'var(--olive-pale)', textAlign: 'center' }}>
          <span className="section-tag">Contactez-nous</span>
          <h2 className="section-title">Prise de rendez-vous</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Contactez-nous dès aujourd'hui pour prendre rendez-vous ou obtenir
            plus d'informations sur nos services d'imagerie médicale.
          </p>

          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon-wrap">
                <Phone style={{ width: 22, height: 22, color: 'var(--olive)', strokeWidth: 1.5 }} />
              </div>
              <h4>Téléphone</h4>
              <p><a href="tel:+221773002697">+221 77 300 26 97</a></p>
            </div>
            <div className="contact-card">
              <div className="contact-icon-wrap">
                <Mail style={{ width: 22, height: 22, color: 'var(--olive)', strokeWidth: 1.5 }} />
              </div>
              <h4>Email</h4>
              <p><a href="mailto:cimeftivaouane@gmail.com">cimeftivaouane@gmail.com</a></p>
            </div>
            <div className="contact-card">
              <div className="contact-icon-wrap">
                <MapPin style={{ width: 22, height: 22, color: 'var(--olive)', strokeWidth: 1.5 }} />
              </div>
              <h4>Adresse</h4>
              <p>Tivaouane, Sénégal</p>
            </div>
          </div>

          <div style={{ marginTop: '40px' }}>
            <Link href="/contact" className="btn-olive">
              Prendre rendez-vous en ligne
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
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
      </main>
    </>
  );
}