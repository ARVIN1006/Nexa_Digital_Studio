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
import { PricingSkeleton } from "./Skeletons";

export default function Pricing() {
  const { settings, pricing: sanityPricing, loading } = useSiteData();
  const [activeTab, setActiveTab] = useState("umkm");

  // Format data from Sanity for the component
  const pricingData = (sanityPricing || []).reduce((acc, plan) => {
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
    { icon: <PenNib size={20} />, text: "Content Management System (CMS)" },
    { icon: <Layout size={20} />, text: "Bisa Edit Konten Sendiri" },
    {
      icon: <CheckCircle size={20} />,
      text: "Revisi Minor 2x",
    },
    {
      icon: <DeviceMobile size={20} />,
      text: "Tampilan Rapi di HP (Mobile Friendly)",
    },
  ];

  const categories = [
    {
      id: "personal",
      label: "PERSONAL",
      icon: <User weight="bold" />,
    },
    {
      id: "umkm",
      label: "UMKM",
      icon: <Storefront weight="bold" />,
    },
    {
      id: "pendidikan",
      label: "PENDIDIKAN",
      icon: <GraduationCap weight="bold" />,
    },
    {
      id: "company",
      label: "COMPANY",
      icon: <Buildings weight="bold" />,
    },
  ];

  const currentPricing = pricingData[activeTab] || [];

  const getWaLink = (title, price) => {
    const waNumber = settings?.whatsappNumber || "6285199198055";
    const text = encodeURIComponent(
      `Halo Nexa Studio, saya tertarik dengan paket *${title}* (${price}). Bisa dibantu dijelaskan detailnya?`,
    );
    return `https://wa.me/${waNumber}?text=${text}`;
  };

  if (loading) return <PricingSkeleton />;

  return (
    <section
      className="py-12 md:py-16 bg-bg-surface dark:bg-slate-900 transition-colors duration-500 relative overflow-hidden scroll-mt-20"
      id="pricing"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-accent/5 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary dark:text-primary-light text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-8 border border-primary/10">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Investasi Strategis
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-[1.1] tracking-tighter">
            Investasi Cerdas <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x bg-[length:200%_auto]">
              Untuk Masa Depan Bisnis
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-lg max-w-xl mx-auto font-medium leading-relaxed">
            Pilih paket yang paling sesuai dengan skala dan kebutuhan Anda saat
            ini. Transparan, tanpa biaya tersembunyi.
          </p>
        </div>

        {/* Tab Navigation - Responsive Premium Switcher */}
        <div className="flex justify-center mb-16 md:mb-20 relative z-10 px-4">
          <div className="w-full md:w-auto bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-[1.5rem] md:rounded-[2.5rem] p-1.5 border border-gray-100 dark:border-white/5 shadow-2xl shadow-black/[0.03] dark:shadow-none">
            <div className="grid grid-cols-2 md:flex md:items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex flex-col md:flex-row items-center justify-center gap-1.5 md:gap-3 px-3 py-4 md:px-8 md:py-4 rounded-[1.2rem] md:rounded-[2.2rem] text-[10px] md:text-sm font-black transition-all duration-500 uppercase tracking-wider md:w-48 ${
                    activeTab === cat.id
                      ? "bg-primary text-white shadow-xl shadow-primary/30"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <span
                    className={`text-lg md:text-2xl ${activeTab === cat.id ? "opacity-100 scale-110" : "opacity-60"} transition-transform`}
                  >
                    {cat.icon}
                  </span>
                  <span className="font-bold leading-none">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto relative z-10">
          {currentPricing.map((item, index) => (
            <div
              key={index}
              className={`group relative flex flex-col p-8 md:p-12 rounded-[2.5rem] bg-white dark:bg-slate-800/50 transition-all duration-500 h-full border-2 ${
                item.popular
                  ? "border-primary shadow-[0_30px_60px_-15px_rgba(var(--primary-rgb),0.15)] lg:scale-[1.05] z-20"
                  : "border-gray-50 dark:border-white/5 shadow-xl shadow-black/[0.02] hover:shadow-2xl hover:-translate-y-2"
              }`}
            >
              {item.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white text-[10px] font-black px-6 py-2.5 rounded-full uppercase tracking-widest shadow-lg shadow-primary/30 z-30">
                  Best Value
                </div>
              )}

              <div className="mb-10 text-center md:text-left">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] mb-4 text-primary opacity-80">
                  {item.title}
                </p>
                <div className="flex items-baseline justify-center md:justify-start gap-1">
                  <span className="text-base font-bold text-gray-400">Rp</span>
                  <span className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900 dark:text-white">
                    {item.price.split(" ")[0]}
                  </span>
                  <span className="text-xl font-bold text-gray-400/80">
                    {item.price.split(" ").slice(1).join(" ")}
                  </span>
                </div>
              </div>

              {/* Specs Feature Bar */}
              <div className="flex items-center justify-center md:justify-start gap-6 py-4 px-5 rounded-2xl mb-10 text-[11px] font-black bg-gray-50/80 dark:bg-slate-900/40 border border-gray-100 dark:border-white/5 text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-2.5">
                  <Timer
                    size={20}
                    weight="duotone"
                    className="text-orange-500"
                  />
                  {item.duration}
                </div>
                <div className="w-px h-4 bg-gray-200 dark:bg-gray-700"></div>
                <div className="flex items-center gap-2.5">
                  <Globe size={20} weight="duotone" className="text-blue-500" />
                  {item.domain}
                </div>
              </div>

              <div className="flex-1 mb-10">
                <div className="mb-10">
                  <p className="text-[10px] font-black uppercase tracking-widest mb-6 text-primary/60">
                    Spesifikasi & Fitur
                  </p>
                  <ul className="space-y-5">
                    {item.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="mt-1 flex-shrink-0">
                          <CheckCircle
                            size={22}
                            weight="fill"
                            className="text-green-500 shadow-sm"
                          />
                        </div>
                        <span className="text-sm md:text-base font-bold leading-relaxed text-gray-800 dark:text-gray-200">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Smart Filtering Logic for Standard Features */}
                {commonFeatures.filter(
                  (feat) =>
                    !item.features.some((itemFeat) =>
                      itemFeat
                        .toLowerCase()
                        .includes(feat.text.split(" (")[0].toLowerCase()),
                    ),
                ).length > 0 && (
                  <div className="pt-8 border-t border-gray-100 dark:border-white/5">
                    <p className="text-[10px] font-black uppercase tracking-widest mb-6 text-gray-400">
                      Sudah Termasuk Fitur Standar:
                    </p>
                    <ul className="space-y-4">
                      {commonFeatures
                        .filter(
                          (feat) =>
                            !item.features.some((itemFeat) =>
                              itemFeat
                                .toLowerCase()
                                .includes(
                                  feat.text.split(" (")[0].toLowerCase(),
                                ),
                            ),
                        )
                        .map((feat, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3.5 opacity-50 hover:opacity-100 transition-opacity"
                          >
                            <div className="mt-1 flex-shrink-0">
                              <CheckCircle
                                size={18}
                                weight="bold"
                                className="text-gray-400"
                              />
                            </div>
                            <span className="text-xs font-bold leading-tight text-gray-500 dark:text-gray-400">
                              {feat.text.split(" (")[0]}
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </div>

              <a
                href={getWaLink(item.title, item.price)}
                target="_blank"
                rel="noreferrer"
                className={`relative overflow-hidden group/btn w-full py-5 rounded-2xl font-black text-xs md:text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 shadow-xl ${
                  item.popular
                    ? "bg-primary text-white hover:bg-primary-dark shadow-primary/30"
                    : "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-primary hover:text-white"
                } hover:-translate-y-1`}
              >
                <WhatsappLogo size={24} weight="fill" />
                Pesan Sekarang
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-[-20deg]"></div>
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-[10px] text-gray-400 mt-12 max-w-3xl mx-auto uppercase tracking-[0.2em] font-bold leading-loose">
          *Harga dapat berubah menyesuaikan tingkat kompleksitas fitur yang
          diminta.
        </p>

        {/* Custom Budget Section - Compact & Elegant */}
        <div className="mt-24 max-w-4xl mx-auto px-4">
          <div className="relative p-px rounded-[2rem] bg-gradient-to-br from-primary/30 via-transparent to-accent/30 shadow-xl overflow-hidden group">
            <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-[1.95rem]"></div>

            <div className="relative px-8 py-10 md:px-16 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] rotate-12 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                <WhatsappLogo
                  size={240}
                  weight="fill"
                  className="text-primary"
                />
              </div>

              <div className="text-center md:text-left relative z-10 flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400 text-[9px] font-black uppercase tracking-widest mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  Butuh Lebih?
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-4 leading-tight tracking-tighter">
                  Belum Memukan yang Pas? <br />
                  <span className="text-primary text-xl md:text-2xl opacity-80">
                    Yuk, Diskusi Sesuai Budget!
                  </span>
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm font-medium leading-relaxed max-w-lg">
                  Punya request fitur khusus atau budget tertentu? Jangan ragu
                  untuk konsultasi. Kami akan carikan solusi terbaik (Win-Win
                  Solution).
                </p>
              </div>

              <div className="relative z-10 flex-shrink-0 w-full md:w-auto">
                <a
                  href={`https://wa.me/${settings?.whatsappNumber || "6285199198055"}?text=${encodeURIComponent("Halo Nexa Studio, saya mau diskusi sesuai budget saya.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-primary/20 w-full md:w-auto"
                >
                  <WhatsappLogo size={20} weight="fill" />
                  Konsultasi Custom
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
