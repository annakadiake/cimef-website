import Link from 'next/link';
import Image from 'next/image';
import {
  Scan, Activity, Waves,
  Heart, Zap, Baby, Clock, Users, Award,
  Shield, ArrowRight, Phone, CheckCircle2,
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
      {/* Hero Section */}
      <section className="relative bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                Cabinet d&apos;Imagerie Médicale CIMEF
              </h1>
              
              
            </div>
            <div className="relative hidden md:block">
              <div className="w-full max-w-sm mx-auto bg-white rounded-lg p-8 shadow-sm">
                <Image src="/logo.png" alt="CIMEF" width={200} height={200} className="w-32 h-32 mx-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Photos Cabinet */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Notre Cabinet</h2>
            <p className="text-gray-600">Découvrez nos installations modernes</p>
          </div>
          <div className="relative overflow-hidden rounded-xl">
            <div className="flex transition-transform duration-500 ease-in-out">
              {/* Photo 1 - Accueil */}
              <div className="w-full flex-shrink-0">
                <div className="relative h-96 bg-gray-100 rounded-xl overflow-hidden">
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
                <div className="relative h-96 bg-gray-100 rounded-xl overflow-hidden">
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
                <div className="relative h-96 bg-gray-100 rounded-xl overflow-hidden">
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

      {/* Why CIMEF */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Pourquoi nous choisir</h2>
            <p className="text-gray-600">Un cabinet médical de confiance</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, label: 'Disponibilité', value: '24h/7j' },
              { icon: Users, label: 'Équipe', value: 'Qualifiée' },
              { icon: Award, label: 'Équipements', value: 'Modernes' },
              { icon: Shield, label: 'Sécurité', value: '100%' },
            ].map((item) => (
              <div key={item.label} className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[#636B2F]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-[#636B2F]" />
                </div>
                <p className="text-xl font-bold text-gray-900">{item.value}</p>
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#3F4A1F] to-[#636B2F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Prenez soin de votre santé
          </h2>
          <p className="text-white/90 mb-8">
            Notre équipe est à votre disposition.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#3F4A1F] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Nous Contacter
            </Link>
            <a
              href="tel:+221773002697"
              className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Appeler
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
