import { WhatsappLogo, ArrowRight, Star } from "phosphor-react";

export default function Hero() {
  return (
    <header
      id="hero"
      className="relative min-h-screen pt-28 pb-0 md:pb-20 flex flex-col justify-center overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      {/* Background Decoration */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-left pt-6 pb-12 md:pb-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Available for New Projects
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
            Bangun{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative inline-block">
              Website Impian
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-primary/20 -z-10"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </span>{" "}
            <br className="hidden md:block" />
            Tanpa Ribet.
          </h1>

          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-lg md:mx-0 leading-relaxed">
            Layanan pembuatan website & aplikasi profesional yang dirancang
            untuk meningkatkan konversi penjualan. Desain premium, teknis beres,
            bisnis Anda terima jadi.
          </p>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 w-full md:w-auto">
            <a
              href="https://wa.me/6281234567890"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-full font-semibold transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1"
            >
              <WhatsappLogo size={20} weight="fill" />
              Diskusi Gratis
            </a>
            <button className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white dark:bg-transparent border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary hover:border-primary/30 rounded-full font-semibold transition-all">
              Lihat Price List
              <ArrowRight size={16} weight="bold" />
            </button>
          </div>

          {/* Mobile Only Note */}
          <p className="mt-6 text-xs text-gray-400 dark:text-gray-500 italic md:hidden text-left">
            *Konsultasi gratis & tanpa komitmen apapun.
          </p>

          <div className="hidden md:flex items-center gap-8 mt-12 pt-8 border-t border-gray-100 dark:border-white/10">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-slate-900 overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="Client"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-gray-900 dark:bg-white dark:text-slate-900 text-white flex items-center justify-center text-xs font-bold border-2 border-white dark:border-slate-900 relative z-10">
                50+
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex text-yellow-400 text-sm mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} weight="fill" />
                ))}
              </div>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                Trusted by 50+ Happy Clients
              </span>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative h-full flex flex-col justify-end items-center md:items-end">
          {/* Main Image */}
          <div className="relative z-10 w-[85%] md:w-full max-w-md mx-auto md:mr-0">
            <img
              src="/HERO PEOPLE.png"
              alt="Professional Developer"
              fetchPriority="high"
              loading="eager"
              className="w-full h-auto object-contain mask-image-bottom drop-shadow-2xl"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 80%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, black 80%, transparent 100%)",
              }}
            />

            {/* Floating Cards - Visible on Mobile & Desktop */}

            {/* 1. Rating - Top Left */}
            <div className="absolute top-[15%] -left-4 md:top-[20%] md:-left-12 bg-white dark:bg-slate-800 p-3 md:p-4 rounded-2xl shadow-xl shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-slate-700 animate-float-slow z-20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                  <Star
                    weight="fill"
                    size={16}
                    className="md:w-[20px] md:h-[20px]"
                  />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 font-medium">
                    Rating
                  </p>
                  <p className="text-xs md:text-sm font-bold text-gray-900 dark:text-white">
                    4.9/5.0
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Projects Done - Bottom Right */}
            <div className="absolute bottom-[20%] -right-2 md:-right-4 bg-white dark:bg-slate-800 p-3 md:p-4 rounded-2xl shadow-xl shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-slate-700 animate-float-delayed z-20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary dark:text-blue-400">
                  <ArrowRight
                    weight="bold"
                    size={16}
                    className="md:w-[20px] md:h-[20px]"
                  />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 font-medium">
                    Project Done
                  </p>
                  <p className="text-xs md:text-sm font-bold text-gray-900 dark:text-white">
                    120+ Web
                  </p>
                </div>
              </div>
            </div>

            {/* 3. New 'Finger' Bubble - Positioned for Pointing/Holding Effect */}
            <div className="absolute top-[15%] -right-4 md:top-[2%] md:-right-16 bg-white dark:bg-slate-800 p-3 md:p-4 rounded-2xl shadow-xl shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-slate-700 animate-float-reverse z-20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <WhatsappLogo
                    weight="fill"
                    size={16}
                    className="md:w-[20px] md:h-[20px]"
                  />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 font-medium">
                    Support
                  </p>
                  <p className="text-xs md:text-sm font-bold text-gray-900 dark:text-white">
                    Fast Response
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
