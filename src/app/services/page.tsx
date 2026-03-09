import type { Metadata } from 'next';
import {
  CheckCircle2, Phone,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nos Services - CIMEF Tivaouane',
  description: 'Découvrez les services du CIMEF : échographie, échodoppler, radiographie, ECG, explorations fonctionnelles, MAPA, HSG et UCR.',
};

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
    desc: 'Enregistrement de l\'activité électrique du cœur.',
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
      {/* Header */}
      <section className="bg-gradient-to-br from-[#f8f9f0] via-white to-[#f0f2e6] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#636B2F] font-semibold text-sm uppercase tracking-wider mb-3">Nos Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services d'Imagerie Médicale
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Le CIMEF met à votre disposition une gamme complète d'examens médicaux
            réalisés par des professionnels qualifiés.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-gradient-to-br from-[#636B2F]/5 to-[#3F4A1F]/5 p-8 rounded-2xl border border-[#636B2F]/20 hover:shadow-lg transition-all"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>
                <div className="space-y-2">
                  {service.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#636B2F] shrink-0" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#3F4A1F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Besoin d'un examen ?
          </h2>
          <p className="text-white/70 mb-8">
            Contactez-nous pour obtenir plus d'informations sur nos services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+221773002697"
              className="bg-white text-[#3F4A1F] px-8 py-3.5 rounded-xl font-semibold hover:shadow-xl transition-all flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              +221 77 300 26 97
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
