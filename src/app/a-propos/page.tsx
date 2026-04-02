import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Target, Eye, Heart, Users, Award,
  GraduationCap, ArrowRight, MapPin,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'À Propos - CIMEF Tivaouane',
  description: "Découvrez le CIMEF, Cabinet d'Imagerie Médicale et d'Explorations Fonctionnelles de Tivaouane. Notre histoire, notre mission et notre équipe.",
};

const values = [
  {
    icon: Heart,
    title: 'Bienveillance',
    desc: 'Nous plaçons le patient au cœur de notre démarche avec empathie et respect.',
  },
  {
    icon: Award,
    title: 'Excellence',
    desc: "Nous visons l'excellence dans chaque examen et chaque interaction.",
  },
  {
    icon: Users,
    title: 'Accessibilité',
    desc: 'Des soins de qualité accessibles à tous, sans distinction.',
  },
  {
    icon: GraduationCap,
    title: 'Innovation',
    desc: 'Nous investissons dans les technologies les plus récentes pour votre santé.',
  },
];

const team = [
  {
    name: 'Dr. Coumba Gueye',
    role: 'Directrice & Radiologue',
    desc: "Spécialiste en radiologie et imagerie médicale.",
    initials: 'CG',
  },
  {
    name: 'Équipe Médicale',
    role: 'Médecins Spécialistes',
    desc: 'Une équipe pluridisciplinaire de médecins qualifiés dans différentes spécialités.',
    initials: 'EM',
  },
  {
    name: 'Équipe Technique',
    role: 'Techniciens & Laborantins',
    desc: "Des professionnels formés aux dernières techniques d'imagerie médicale.",
    initials: 'ET',
  },
  {
    name: 'Équipe Administrative',
    role: 'Accueil & Gestion',
    desc: 'Un personnel administratif dédié pour un accueil chaleureux et un suivi efficace.',
    initials: 'EA',
  },
];

const stats = [
  { value: '10+', label: 'Années d\'expérience' },
  { value: '5 000+', label: 'Patients accompagnés' },
  { value: '15+', label: 'Spécialistes' },
  { value: '98%', label: 'Satisfaction patients' },
];

export default function AProposPage() {
  return (
    <div className="font-sans">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#3F4A1F] py-24 md:py-32">
        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#636B2F]/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-[#636B2F]/20 blur-2xl pointer-events-none" />
        {/* Thin horizontal rule accent */}
        <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-white/50 mb-6 border border-white/15 px-4 py-1.5 rounded-full">
            À Propos
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-semibold text-white mb-6 leading-tight">
            Qui sommes-nous ?
          </h1>
          <p className="text-white/60 max-w-xl mx-auto text-lg leading-relaxed">
            Le CIMEF est un cabinet de référence en imagerie médicale, au service de la
            population de Tivaouane et de toute la région.
          </p>
        </div>
      </section>

      

      {/* ── HISTOIRE ── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#636B2F] mb-4 block">
                Notre Histoire
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-8 leading-snug">
                Un engagement pour<br />la santé au Sénégal
              </h2>
              <div className="space-y-5 text-gray-500 leading-relaxed text-[15px]">
                <p>
                  Le <strong className="text-gray-800 font-medium">Cabinet d&apos;Imagerie Médicale et d&apos;Explorations Fonctionnelles (CIMEF)</strong> a
                  été créé avec la vision de fournir des services d&apos;imagerie médicale de qualité
                  à la population de Tivaouane et ses environs.
                </p>
                <p>
                  Depuis notre création, nous n&apos;avons cessé de nous développer et d&apos;investir dans
                  les équipements les plus modernes pour offrir à nos patients des diagnostics
                  précis et fiables.
                </p>
                <p>
                  Notre cabinet ambitionne de devenir une référence dans la région, en collaborant
                  étroitement avec les établissements de santé locaux et régionaux.
                </p>
              </div>
            </div>

            {/* Logo card */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#636B2F]/5 rounded-3xl translate-x-3 translate-y-3" />
              <div className="relative bg-gradient-to-br from-[#f8f9f0] to-white rounded-3xl border border-[#636B2F]/10 p-12 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="CIMEF"
                  width={280}
                  height={280}
                  className="w-56 h-56 lg:w-64 lg:h-64 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-24 bg-[#f8f9f0]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#636B2F] mb-3 block">
              Nos Engagements
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900">
              Mission & Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                Icon: Target,
                title: 'Notre Mission',
                text: "Offrir des services d'imagerie médicale et d'explorations fonctionnelles de haute qualité, accessibles à tous, dans un environnement accueillant et sécurisé. Nous nous engageons à fournir des résultats précis et rapides pour accompagner les professionnels de santé dans leur diagnostic.",
              },
              {
                Icon: Eye,
                title: 'Notre Vision',
                text: "Devenir le cabinet d'imagerie médicale de référence au Sénégal, reconnu pour l'excellence de ses services, la modernité de ses équipements et la compétence de son équipe. Nous aspirons à contribuer activement à l'amélioration de la santé publique dans notre communauté.",
              },
            ].map(({ Icon, title, text }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 border border-gray-100 group hover:border-[#636B2F]/20 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-11 h-11 bg-[#3F4A1F] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                </div>
                <div className="w-8 h-px bg-[#636B2F]/40 mb-5" />
                <p className="text-gray-500 leading-relaxed text-[15px]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALEURS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#636B2F] mb-3 block">
              Nos Valeurs
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900">
              Ce qui nous guide au quotidien
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="group relative p-7 rounded-2xl border border-gray-100 hover:border-[#636B2F]/25 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Number watermark */}
                <span className="absolute top-4 right-5 text-5xl font-serif font-bold text-gray-100 select-none group-hover:text-[#636B2F]/10 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="w-11 h-11 bg-[#636B2F]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#3F4A1F] transition-colors duration-300">
                  <v.icon className="w-5 h-5 text-[#636B2F] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÉQUIPE ── */}
      <section className="py-24 bg-[#f8f9f0]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#636B2F] mb-3 block">
              Notre Équipe
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4">
              Des professionnels à votre service
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-[15px] leading-relaxed">
              Notre équipe pluridisciplinaire est composée de médecins spécialistes, de
              techniciens qualifiés et d&apos;un personnel administratif dévoué.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#636B2F]/20 hover:shadow-md transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-[#3F4A1F] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-serif font-semibold text-lg">{member.initials}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{member.name}</h3>
                <p className="text-[#636B2F] text-xs font-medium uppercase tracking-wide mb-3">{member.role}</p>
                <div className="w-6 h-px bg-[#636B2F]/30 mx-auto mb-3" />
                <p className="text-gray-400 text-xs leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-[#3F4A1F] py-20">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#636B2F]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-[#636B2F]/15 blur-2xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/40 mb-4 block">
            Prenez rendez-vous
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4">
            Faites confiance à notre expertise
          </h2>
          <p className="text-white/50 mb-10 text-[15px] leading-relaxed">
            Contactez-nous dès maintenant pour vos examens médicaux.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-white text-[#3F4A1F] px-8 py-4 rounded-xl font-semibold text-sm hover:bg-[#f8f9f0] hover:shadow-xl transition-all duration-200"
          >
            Nous Contacter
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}