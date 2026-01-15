import {
  Strategy,
  Scroll,
  ShieldCheck,
  PaintBrushBroad,
  Code,
  Rocket,
} from "phosphor-react";

export default function Consultation() {
  return (
    <section
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
      id="services"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8 relative">
          {/* Abstract Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl -z-10 opacity-50 pointer-events-none"></div>

          <div className="max-w-2xl relative">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-dark dark:text-primary-light text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Our Process
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight">
              Dari Ide Liar,
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-200 dark:to-gray-500">
                  Jadi Produk Besar.
                </span>
                {/* Unique Scratch Underline */}
                <svg
                  className="absolute w-[110%] h-4 -bottom-2 -left-[5%] text-primary z-0 opacity-80"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </span>
            </h2>
          </div>

          <div className="max-w-md text-lg text-gray-600 dark:text-gray-400 leading-relaxed md:text-left flex flex-col items-start">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Diskusi Dulu.{" "}
              <span className="text-primary underline decoration-wavy decoration-primary/50">
                Gratis.
              </span>
            </h3>
            <p className="opacity-80">
              Jangan tebak-tebakan. Kami bantu validasi konsep Anda sebelum
              keluar uang sepeser pun.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          {/* Vertical Line */}
          <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 block"></div>

          <div className="space-y-12">
            {[
              {
                icon: <Strategy size={32} weight="fill" />,
                title: "Deep Discovery",
                desc: "Kami bedah bisnis Anda. Bukan cuma tanya 'maunya apa', tapi 'butuhnya apa' untuk cuan.",
                color: "text-blue-500",
                bg: "bg-blue-500/10",
              },
              {
                icon: <Scroll size={32} weight="fill" />,
                title: "Blueprint Technic",
                desc: "Rancangan arsitektur sistem. Database, server, teknologi yang dipakai—semua transparan.",
                color: "text-purple-500",
                bg: "bg-purple-500/10",
              },
              {
                icon: <ShieldCheck size={32} weight="fill" />,
                title: "Secure Contract",
                desc: "Legalitas jelas. Garansi uang kembali jika hasil tidak sesuai spek. Aman.",
                color: "text-teal-500",
                bg: "bg-teal-500/10",
              },
              {
                icon: <PaintBrushBroad size={32} weight="fill" />,
                title: "High-Fidelity UI/UX",
                desc: "Desain yang bisa diklik-klik (Prototype). Revisi visual sepuasnya di fase ini.",
                color: "text-pink-500",
                bg: "bg-pink-500/10",
              },
              {
                icon: <Code size={32} weight="fill" />,
                title: "Agile Dev",
                desc: "Coding dimulai. Anda bisa pantau progress mingguan. Tidak ada 'hilang kabar'.",
                color: "text-orange-500",
                bg: "bg-orange-500/10",
              },
              {
                icon: <Rocket size={32} weight="fill" />,
                title: "Launch & Handover",
                desc: "Server setup, domain connect, training admin. Kami pastikan siap tempur.",
                color: "text-green-500",
                bg: "bg-green-500/10",
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`flex flex-row md:items-center gap-6 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div
                  className={`flex-1 w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}
                >
                  <div
                    className={`p-6 rounded-3xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 hover:border-primary/30 transition-all shadow-sm hover:shadow-md group ${
                      index % 2 === 0 ? "mr-0 md:mr-12" : "ml-0 md:ml-12"
                    }`}
                  >
                    <div
                      className={`inline-flex items-center gap-3 mb-3 ${
                        index % 2 === 0
                          ? ""
                          : "md:flex-row-reverse md:justify-end"
                      }`}
                    >
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                        Step 0{index + 1}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="relative z-10 flex-shrink-0 order-first md:order-none">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center bg-white dark:bg-slate-900 border-4 border-gray-50 dark:border-slate-800 shadow-xl ${step.color}`}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Spacer Side (Empty to balance flex on Desktop) */}
                <div className="hidden md:block flex-1 w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
