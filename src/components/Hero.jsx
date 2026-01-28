import {
  WhatsappLogo,
  ArrowRight,
  Star,
  Lightning,
  ShieldCheck,
  PaintBrush,
  Code,
  Tag,
} from "phosphor-react";

import { useSiteData } from "../context/SiteContext";
import { urlFor } from "../lib/sanity";
import { HeroSkeleton } from "./Skeletons";

export default function Hero() {
  const { settings, loading } = useSiteData();

  const waNumber = settings?.whatsappNumber || "6285199198055";
  const waWelcome =
    settings?.whatsappWelcomeMessage ||
    "Halo Nexa Digital Studio, saya ingin konsultasi mengenai layanan pembuatan website. Bisa dibantu?";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waWelcome)}`;

  if (loading) return <HeroSkeleton />;

  return (
    <header
      id="hero"
      className="relative min-h-screen pt-28 pb-0 md:pb-20 flex flex-col justify-center overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      {/* Background Decoration */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-left pt-0 pb-12 md:pb-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-indigo-900 dark:text-indigo-100 text-xs font-bold tracking-widest uppercase mb-4 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            {settings?.heroBadge || "Agensi Digital"}
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white leading-[1.2] mb-4 tracking-tight">
            Bangun Digital Presence Bisnis Anda.
          </h2>

          <p className="text-xs md:text-lg text-gray-700 dark:text-gray-200 mb-6 max-w-lg md:mx-0 leading-relaxed font-medium">
            Jasa pembuatan website profesional, cepat, dan terjangkau untuk UMKM
            dan bisnis modern.
          </p>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 w-full md:w-auto">
            <a
              href={waLink}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-full font-semibold text-xs md:text-sm transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1"
            >
              <WhatsappLogo size={20} weight="fill" />
              Chat WhatsApp
            </a>
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white dark:bg-transparent border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary hover:border-primary/30 rounded-full font-semibold text-xs md:text-sm transition-all cursor-pointer"
            >
              Lihat Harga
              <ArrowRight size={16} weight="bold" />
            </a>
          </div>

          {/* Mobile Only Note */}
          <p className="mt-6 text-xs text-gray-800 dark:text-gray-200 italic md:hidden text-left font-medium">
            *Konsultasi gratis & respon cepat via WhatsApp.
          </p>

          <div className="hidden md:flex items-center gap-8 mt-2 pt-2 border-t border-gray-100 dark:border-white/10">
            <div className="flex -space-x-3">
              {[
                {
                  icon: <Lightning size={18} weight="fill" />,
                  bg: "bg-amber-100 text-amber-600",
                },
                {
                  icon: <ShieldCheck size={18} weight="fill" />,
                  bg: "bg-blue-100 text-blue-600",
                },
                {
                  icon: <PaintBrush size={18} weight="fill" />,
                  bg: "bg-pink-100 text-pink-600",
                },
                {
                  icon: <Code size={18} weight="fill" />,
                  bg: "bg-indigo-100 text-indigo-600",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full ${
                    item.bg
                  } border-2 border-white dark:border-slate-900 flex items-center justify-center shadow-sm relative z-[${
                    4 - i
                  }]`}
                >
                  {item.icon}
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold border-2 border-white dark:border-slate-900 relative z-10 shadow-lg">
                <Star size={16} weight="fill" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex text-yellow-400 text-sm mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} weight="fill" />
                ))}
              </div>
              <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                Terpercaya & Profesional
              </span>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative h-full flex flex-col justify-end items-center md:items-end">
          {/* Main Image */}
          <div className="relative z-10 w-full max-w-md mx-auto md:mr-0">
            <img
              src={
                settings?.heroImage
                  ? urlFor(settings.heroImage).width(450).quality(90).url()
                  : ""
              }
              srcSet={
                settings?.heroImage
                  ? `
                ${urlFor(settings.heroImage).width(350).quality(85).url()} 350w,
                ${urlFor(settings.heroImage).width(450).quality(90).url()} 450w,
                ${urlFor(settings.heroImage).width(500).quality(90).url()} 500w
              `
                  : ""
              }
              alt="Developer Profesional"
              width="450"
              height="450"
              sizes="(max-width: 768px) 90vw, 450px"
              fetchpriority="high"
              loading="eager"
              className="w-full h-auto object-contain mask-image-bottom drop-shadow-2xl"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
