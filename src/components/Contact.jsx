import {
  WhatsappLogo,
  Envelope,
  MapPin,
  InstagramLogo,
  LinkedinLogo,
  ArrowRight,
} from "phosphor-react";
import { useSiteData } from "../context/SiteContext";

export default function Contact() {
  const { settings } = useSiteData();

  const waNumber = settings?.whatsappNumber || "6282127666523";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    "Halo Nexa Digital Studio, saya ingin konsultasi mengenai layanan pembuatan website. Bisa dibantu?"
  )}`;
  const emailLink = `mailto:${
    settings?.contactEmail || "arvin.dev.business@gmail.com"
  }`;
  const igLink = settings?.instagramHandle
    ? `https://instagram.com/${settings.instagramHandle.replace("@", "")}`
    : "https://instagram.com/_nexadigitalstudio.id";

  return (
    <section
      className="py-24 bg-gray-50 dark:bg-slate-800 transition-colors duration-300 relative overflow-hidden"
      id="contact"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-72 h-72 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Persuasion & Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Buka untuk Kolaborasi Baru
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              Siap Meroketkan <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Bisnis Anda?
              </span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-8 leading-relaxed max-w-lg">
              Jangan biarkan kompetitor menyalip. Kami siap membantu Anda
              membangun digital presence yang profesional, aman, dan profitable.
            </p>

            <div className="space-y-6 mb-10">
              {[
                "Gratis Konsultasi Teknis & Bisnis",
                "Garansi Perbaikan Bug 30 Hari",
                "Prioritas Support (Direct WhatsApp)",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 flex-shrink-0">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700 dark:text-gray-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Social Icons removed as requested */}
          </div>

          {/* Right: Action Card */}
          <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-white/5 relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <WhatsappLogo size={120} weight="fill" className="text-primary" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Mulai Konsultasi
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Diskusikan ide Anda langsung dengan tim kami. Tanpa komitmen,
              tanpa ribet.
            </p>

            <div className="flex flex-col gap-4">
              {/* WhatsApp Option */}
              <a
                href={waLink}
                className="group block w-full bg-gradient-to-r from-[#25D366] to-[#20bd5a] hover:from-[#20bd5a] hover:to-[#1da851] text-white p-0.5 md:p-1 rounded-full transition-all shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between px-4 py-2.5 md:px-6 md:py-4">
                  <div className="flex items-center gap-3 md:gap-4">
                    <WhatsappLogo
                      size={24}
                      weight="fill"
                      className="md:w-[32px] md:h-[32px] w-[20px] h-[20px]"
                    />
                    <div className="text-left">
                      <p className="hidden md:block text-[10px] font-bold uppercase tracking-wider opacity-90">
                        Fast Response
                      </p>
                      <p className="text-sm md:text-lg font-bold leading-none">
                        Chat via WhatsApp
                      </p>
                    </div>
                  </div>
                  <div className="w-6 h-6 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <svg
                      className="w-3 h-3 md:w-5 md:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>

              {/* Email Option */}
              <a
                href={emailLink}
                className="group block w-full bg-white dark:bg-slate-800 border-2 border-gray-100 dark:border-slate-700 text-gray-700 dark:text-gray-200 hover:border-primary/50 hover:bg-gray-50 dark:hover:bg-slate-800/80 p-0.5 md:p-1 rounded-full transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between px-4 py-2.5 md:px-6 md:py-4">
                  <div className="flex items-center gap-3 md:gap-4">
                    <Envelope
                      size={24}
                      weight="fill"
                      className="text-gray-400 group-hover:text-primary transition-colors md:w-[32px] md:h-[32px] w-[20px] h-[20px]"
                    />
                    <div className="text-left">
                      <p className="hidden md:block text-[10px] font-bold uppercase tracking-wider opacity-60">
                        Formal Discussion
                      </p>
                      <p className="text-sm md:text-lg font-bold leading-none group-hover:text-primary transition-colors">
                        Kirim Email
                      </p>
                    </div>
                  </div>
                  <div className="w-6 h-6 md:w-10 md:h-10 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <ArrowRight
                      size={20}
                      weight="bold"
                      className="w-3 h-3 md:w-5 md:h-5"
                    />
                  </div>
                </div>
              </a>

              {/* Instagram Option */}
              <a
                href={igLink}
                target="_blank"
                rel="noreferrer"
                className="group block w-full bg-white dark:bg-slate-800 border-2 border-gray-100 dark:border-slate-700 text-gray-700 dark:text-gray-200 hover:border-pink-500/50 hover:bg-pink-50 dark:hover:bg-slate-800/80 p-0.5 md:p-1 rounded-full transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between px-4 py-2.5 md:px-6 md:py-4">
                  <div className="flex items-center gap-3 md:gap-4">
                    <InstagramLogo
                      size={24}
                      weight="fill"
                      className="text-gray-400 group-hover:text-pink-500 transition-colors md:w-[32px] md:h-[32px] w-[20px] h-[20px]"
                    />
                    <div className="text-left">
                      <p className="hidden md:block text-[10px] font-bold uppercase tracking-wider opacity-60">
                        Explore Portfolio
                      </p>
                      <p className="text-sm md:text-lg font-bold leading-none group-hover:text-pink-500 transition-colors">
                        DM Instagram
                      </p>
                    </div>
                  </div>
                  <div className="w-6 h-6 md:w-10 md:h-10 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center group-hover:bg-pink-100 dark:group-hover:bg-slate-700 group-hover:text-pink-500 transition-colors">
                    <ArrowRight
                      size={20}
                      weight="bold"
                      className="w-3 h-3 md:w-5 md:h-5"
                    />
                  </div>
                </div>
              </a>
            </div>

            <p className="text-center text-sm text-gray-400 dark:text-gray-500 mt-6 italic">
              “Diskusi personal, bukan jawaban bot.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
