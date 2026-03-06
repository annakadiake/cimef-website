import Link from 'next/link';
import Image from 'next/image';
import {
  Scan, Activity, Waves,
  Heart, Zap, Baby, Clock, Users, Award,
  Shield, ArrowRight, Phone, CheckCircle2, Mail, MapPin,
} from 'lucide-react';

const services = [
  {
    icon: Scan,
    title: 'Échographie',
    desc: 'Examens échographiques complets.',
  },
  {
    icon: Waves,
    title: 'Échodoppler',
    desc: 'Exploration vasculaire.',
  },
  {
    icon: Activity,
    title: 'Électrocardiogramme',
    desc: 'Évaluation cardiaque.',
  },
  {
    icon: Scan,
    title: 'Radiographie',
    desc: 'Radiographies numériques.',
  },
];


export default function Home() {
  return (
    <>
      {/* Hero Section - Full Page */}
      <section className="relative min-h-screen bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center min-h-[80vh]">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Cabinet d&apos;Imagerie Médicale CIMEF
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Services d&apos;imagerie médicale de pointe à Tivaouane
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="bg-gradient-to-r from-[#636B2F] to-[#3F4A1F] text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-[#636B2F]/25 transition-all"
                >
                  Nos Services
                </a>
                <a
                  href="#contact"
                  className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="w-full max-w-lg mx-auto bg-white rounded-2xl p-12 shadow-lg">
                <Image src="/logo.png" alt="CIMEF" width={300} height={300} className="w-48 h-48 mx-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photos Cabinet */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Cabinet</h2>
            <p className="text-lg text-gray-600">Découvrez nos installations modernes</p>
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <div className="flex transition-transform duration-500 ease-in-out">
              {/* Photo 1 - Accueil */}
              <div className="w-full flex-shrink-0">
                <div className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#636B2F]/20 to-[#3F4A1F]/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <Image src="/logo.png" alt="CIMEF" width={80} height={80} className="w-16 h-16 object-contain" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Espace Accueil</h3>
                      <p className="text-white/90">Un accueil chaleureux et professionnel</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Photo 2 - Salle d'examen */}
              <div className="w-full flex-shrink-0">
                <div className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#636B2F]/20 to-[#3F4A1F]/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <Scan className="w-12 h-12 text-[#636B2F]" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Salle d'Examen</h3>
                      <p className="text-white/90">Équipements de pointe pour des diagnostics précis</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Photo 3 - Salle d'attente */}
              <div className="w-full flex-shrink-0">
                <div className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#636B2F]/20 to-[#3F4A1F]/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-12 h-12 text-[#636B2F]" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Salle d'Attente</h3>
                      <p className="text-white/90">Confort et tranquillité pour nos patients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Navigation dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Services</h2>
            <p className="text-lg text-gray-600">Imagerie médicale moderne et complète</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-[#636B2F]/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-[#636B2F]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact</h2>
            <p className="text-lg text-gray-600">Prenez rendez-vous ou contactez-nous</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#636B2F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-[#636B2F]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Téléphone</h3>
              <p className="text-gray-600">
                <a href="tel:+221773002697" className="hover:text-[#636B2F] transition">+221 77 300 26 97</a>
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:cimeftivaouane@gmail.com" className="hover:text-[#636B2F] transition">cimeftivaouane@gmail.com</a>
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Adresse</h3>
              <p className="text-gray-600">Tivaouane, Sénégal</p>
            </div>
          </div>
        </div>
      </section>

      {/* À Propos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">À Propos</h2>
            <p className="text-lg text-gray-600">Notre engagement pour votre santé</p>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 leading-relaxed mb-6">
              Le Cabinet d&apos;Imagerie Médicale et d&apos;Explorations Fonctionnelles de Tivaouane (CIMEF) 
              est dédié à fournir des services de diagnostic de qualité supérieure. Notre équipe de 
              professionnels de santé met son expertise au service de votre bien-être avec des 
              équipements modernes et une approche centrée sur le patient.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nous nous engageons à offrir des soins de santé accessibles et de qualité, 
              en combinant technologie de pointe et expertise médicale pour des diagnostics 
              précis et rapides.
            </p>
          </div>
        </div>
      </section>

      {/* Équipe Direction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Direction</h2>
            <p className="text-lg text-gray-600">Notre équipe de direction</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-gray-50 p-8 rounded-lg">
              <div className="w-24 h-24 bg-[#636B2F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-12 h-12 text-[#636B2F]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Directrice</h3>
              <p className="text-gray-600">Dr. Coumba Gueye</p>
              <p className="text-sm text-gray-500 mt-2">Radiologue qualifiée</p>
            </div>
            <div className="text-center bg-gray-50 p-8 rounded-lg">
              <div className="w-24 h-24 bg-[#636B2F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-12 h-12 text-[#636B2F]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Co-Directeur</h3>
              <p className="text-gray-600">Dr. [Nom]</p>
              <p className="text-sm text-gray-500 mt-2">Médecin spécialiste</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
