import { useState } from "react";
import {
  CheckCircle,
  WhatsappLogo,
  Timer,
  Globe,
  DeviceMobile,
  PenNib,
  Layout,
  ShieldCheck,
  User,
  Storefront,
  GraduationCap,
  Buildings,
} from "phosphor-react";
import { useSiteData } from "../context/SiteContext";

export default function Pricing() {
  const { settings, pricing: sanityPricing } = useSiteData();
  const [activeTab, setActiveTab] = useState("umkm");

  // Format data from Sanity for the component
  const pricingData = sanityPricing.reduce((acc, plan) => {
    const cat = plan.category || "umkm";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push({
      title: plan.title,
      price: plan.price,
      duration: plan.duration,
      domain: plan.domainInfo,
      features: plan.features || [],
      popular: plan.isPopular,
    });
    return acc;
  }, {});

  const commonFeatures = [
    { icon: <PenNib size={20} />, text: "Kelola Website Sendiri (CMS)" },
    { icon: <Layout size={20} />, text: "Edit Teks & Gambar Mudah" },
    {
      icon: <CheckCircle size={20} />,
      text: "Revisi Sepuasnya (Selama Pengerjaan)",
    },
    { icon: <Globe size={20} />, text: "Gratis Domain & Hosting 1 Tahun" },
    { icon: <ShieldCheck size={20} />, text: "SSL Security (HTTPS) Aktif" },
    { icon: <DeviceMobile size={20} />, text: "Tampilan Mobile Friendly" },
  ];

  const categories = [
    { id: "personal", label: "Personal", icon: <User weight="bold" /> },
    { id: "umkm", label: "UMKM", icon: <Storefront weight="bold" /> },
    { id: "edu", label: "Pendidikan", icon: <GraduationCap weight="bold" /> },
    { id: "company", label: "Company", icon: <Buildings weight="bold" /> },
  ];

  const currentPricing = pricingData[activeTab] || [];

  const getWaLink = (title, price) => {
    const phone = settings?.whatsappNumber || "6282127666523";
    const text = encodeURIComponent(
      `Halo Nexa Studio, saya tertarik dengan paket *${title}* (${price}). Bisa dibantu dijelaskan detailnya?`,
    );
    return `https://wa.me/${phone}?text=${text}`;
  };

  return (
    <section
      className="py-20 bg-bg-surface dark:bg-slate-900 transition-colors duration-300"
      id="pricing"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-indigo-900 dark:text-indigo-100 text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Daftar Harga Lengkap
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Pilih Paket Sesuai <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Kebutuhan Bisnis Anda.
            </span>
          </h2>

          {/* Common Features Grid */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-white/5 mx-auto mt-8">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-4 border-b border-gray-100 dark:border-white/10 pb-2">
              Semua Paket Sudah Termasuk:
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4 text-left">
              {commonFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-100"
                >
                  <div className="text-primary shrink-0">{feat.icon}</div>
                  <span>{feat.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Navigation - Modern Segmented Control */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 dark:bg-slate-800 p-1.5 rounded-2xl inline-flex flex-wrap md:flex-nowrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm md:text-base font-bold transition-all duration-300 ${
                  activeTab === cat.id
                    ? "bg-white dark:bg-slate-700 text-primary shadow-lg shadow-gray-200/50 dark:shadow-black/30 scale-100 ring-1 ring-black/5 dark:ring-white/10"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-white/5"
                }`}
              >
                <span className="text-lg">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {currentPricing.map((item, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-slate-800 rounded-[2rem] p-8 border-2 flex flex-col ${
                item.popular
                  ? "border-primary shadow-xl shadow-primary/10 scale-100 md:scale-105 z-10"
                  : "border-gray-50 dark:border-slate-700 shadow-lg hover:border-primary/20"
              } transition-all duration-300`}
            >
              {item.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                  Paling Laris
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {item.title}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-gray-500">Rp</span>
                  <span className="text-4xl font-black text-gray-900 dark:text-white">
                    {item.price.split(" ")[0]}
                  </span>
                  <span className="text-lg font-bold text-gray-600 dark:text-gray-400">
                    {item.price.split(" ").slice(1).join(" ")}
                  </span>
                </div>
              </div>

              {/* Specs */}
              <div className="flex items-center gap-4 mb-6 text-sm font-semibold text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-slate-900/50 p-3 rounded-xl border border-gray-100 dark:border-white/5">
                <div className="flex items-center gap-1.5">
                  <Timer size={18} className="text-orange-500" />
                  {item.duration}
                </div>
                <div className="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
                <div className="flex items-center gap-1.5">
                  <Globe size={18} className="text-blue-500" />
                  {item.domain}
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {item.features.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-200 text-sm font-medium leading-tight"
                  >
                    <CheckCircle
                      size={18}
                      weight="fill"
                      className="text-green-500 flex-shrink-0 mt-0.5"
                    />
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href={getWaLink(item.title, item.price)}
                target="_blank"
                rel="noreferrer"
                className={`w-full py-3.5 rounded-xl font-bold transition-all text-center flex items-center justify-center gap-2 ${
                  item.popular
                    ? "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25 hover:-translate-y-1"
                    : "bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-600 hover:-translate-y-1"
                }`}
              >
                <WhatsappLogo size={20} weight="fill" />
                Pesan Sekarang
              </a>
            </div>
          ))}
        </div>

        {/* Custom Budget Option */}
        <div className="mt-16 max-w-4xl mx-auto relative group px-6 md:px-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-[2rem] blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <div className="relative bg-white dark:bg-slate-800 border border-gray-100 dark:border-white/10 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 p-0 md:p-12 opacity-5 translate-x-1/4 -translate-y-1/4 pointer-events-none">
              <WhatsappLogo size={300} weight="fill" className="text-primary" />
            </div>

            <div className="text-center md:text-left relative z-10 max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-bold tracking-widest uppercase mb-4">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                Solusi Fleksibel
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-4">
                Punya Budget Khusus?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Bingung pilih paket? Diskusikan budget Anda dengan kami. Kami
                akan carikan solusi website terbaik yang pas di kantong.
              </p>
            </div>

            <div className="relative z-10 flex-shrink-0 w-full md:w-auto">
              <a
                href={`https://wa.me/${
                  settings?.whatsappNumber || "6282127666523"
                }?text=${encodeURIComponent(
                  "Halo Nexa Studio, saya mau buat website tapi mau diskusi sesuai budget saya. Bisa dibantu?",
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:scale-105 transition-transform shadow-xl w-full md:w-auto"
              >
                <WhatsappLogo size={24} weight="fill" />
                Diskusi Sesuai Budget
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-12 max-w-2xl mx-auto">
          *Syarat domain .co.id, .sch.id, .ac.id mengikuti ketentuan PANDI
          (KTP/SK/Akta). Hosting & Domain gratis untuk tahun pertama.
        </p>
      </div>
    </section>
  );
}
