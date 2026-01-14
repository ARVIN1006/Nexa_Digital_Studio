import {
  Lightning,
  MagnifyingGlassPlus,
  DeviceMobileCamera,
  Cursor,
  ShieldCheck,
  Code,
} from "phosphor-react";

export default function Benefits() {
  const benefits = [
    {
      icon: <Lightning size={32} weight="fill" />,
      title: "Lightning Fast",
      desc: "Loading di bawah 2 detik. Kami optimasi setiap baris kode agar pengunjung menyukai performa website Anda.",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      icon: <MagnifyingGlassPlus size={32} weight="fill" />,
      title: "SEO Optimized",
      desc: "Struktur HTML semantik & meta tags rapi sejak hari pertama. Fondasi kuat untuk nangkring di halaman 1.",
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      icon: <DeviceMobileCamera size={32} weight="fill" />,
      title: "Mobile-First",
      desc: "Desain responsif yang adaptif. Tampilan tetap mewah dan fungsional, baik di iPhone terbaru maupun Android lama.",
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
    {
      icon: <Cursor size={32} weight="fill" />,
      title: "Conversion Focused",
      desc: 'Layout psikologis yang mengarahkan mata pengunjung ke tombol "Beli" atau "Hubungi Kami". Jualan lebih mudah.',
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      icon: <ShieldCheck size={32} weight="fill" />,
      title: "Secure & Safe",
      desc: "Proteksi SSL standar perbankan dan anti-DDOS dasar. Data pelanggan aman, bisnis jalan terus tanpa was-was.",
      color: "text-teal-500",
      bg: "bg-teal-500/10",
    },
    {
      icon: <Code size={32} weight="fill" />,
      title: "Clean Code Standard",
      desc: "Codingan rapi & terstruktur standar industri. Mudah dikembangkan lagi oleh developer manapun di masa depan.",
      color: "text-pink-500",
      bg: "bg-pink-500/10",
    },
  ];

  return (
    <section
      className="py-20 bg-bg-surface dark:bg-slate-900 transition-colors duration-300"
      id="benefits"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:items-start md:text-left items-center text-center max-w-4xl md:mx-0 mx-auto mb-20 relative">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            The Nexa Standard
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 leading-tight">
            Bukan Sekadar <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative inline-block px-2">
              Estetika Visual.
              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-primary/20 -z-10 -skew-x-12"></span>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-300 max-w-2xl leading-relaxed">
            Kami membangun{" "}
            <strong className="text-gray-900 dark:text-white">
              mesin pertumbuhan bisnis
            </strong>
            . Setiap pixel dan baris kode dirancang untuk satu tujuan: Profit
            Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-gray-100 dark:border-slate-700 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-[0.95rem]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
