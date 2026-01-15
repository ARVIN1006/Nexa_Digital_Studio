import { useState } from "react";
import { CheckCircle } from "phosphor-react";
import { useSiteData } from "../context/SiteContext";

export default function Pricing() {
  const { settings, pricing: sanityPricing } = useSiteData();
  const [activeTab, setActiveTab] = useState("business");

  const tabs = [
    { id: "personal", label: "Identity" },
    { id: "business", label: "UMKM" },
    { id: "corporate", label: "Enterprise" },
  ];

  // Static fallback removed in favor of Sanity data

  const pricingData = sanityPricing.reduce((acc, plan) => {
    const cat = plan.category || "business";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push({
      title: plan.title,
      price: plan.price,
      originalPrice: plan.originalPrice,
      features: plan.features || [],
      cta: "Pilih Paket",
      popular: plan.isPopular,
    });
    return acc;
  }, {});

  const currentPricing = pricingData[activeTab] || [];

  return (
    <section
      className="py-20 bg-bg-surface dark:bg-slate-900 transition-colors duration-300"
      id="pricing"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Transparent Pricing
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white">
              Investasi Tanpa <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-700">
                Misteri & Teka-Teki.
              </span>
            </h2>
          </div>
          <div className="max-w-sm text-left hidden md:block">
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium italic">
              "Excellence is not an act, but a habit." <br />
              Kami menyusun paket yang dirancang untuk mendampingi pertumbuhan
              bisnis Anda di setiap tahap.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 dark:bg-slate-800 p-1.5 rounded-full inline-flex transition-colors">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-white dark:bg-slate-700 text-primary dark:text-white shadow-sm"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div
          key={activeTab}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto animate-fade-in-up"
        >
          {currentPricing.map((item, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-slate-800 rounded-[2.5rem] p-10 md:p-12 border-2 ${
                item.popular
                  ? "border-primary shadow-2xl shadow-primary/20 ring-8 ring-primary/5"
                  : "border-gray-100 dark:border-slate-800 shadow-xl"
              } hover:-translate-y-3 transition-all duration-500 group`}
            >
              {item.popular && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Best Choice
                </span>
              )}

              <div className="text-center mb-8">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-gray-500/70 dark:text-gray-400/70 line-through mb-1 font-medium">
                    {item.originalPrice}
                  </span>
                  <div className="text-5xl font-black text-primary tracking-tight">
                    {item.price}
                  </div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {item.features.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-gray-600 dark:text-gray-300 text-base font-medium"
                  >
                    <CheckCircle
                      size={20}
                      weight="fill"
                      className="text-green-500 flex-shrink-0"
                    />
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${
                  settings?.whatsappNumber || "6282127666523"
                }?text=${encodeURIComponent(
                  `Halo Nexa Studio, saya tertarik dengan paket *${item.title}*. Bisa dibantu?`
                )}`}
                target="_blank"
                rel="noreferrer"
                className={`w-full py-3.5 rounded-xl font-bold transition-all text-center block ${
                  item.popular
                    ? "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25"
                    : "bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-600 border border-gray-200 dark:border-slate-600"
                }`}
              >
                {item.cta || "Ambil Paket"}
              </a>
            </div>
          ))}
        </div>

        {/* Custom Solution Card (Visible on all tabs) */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white/10 dark:to-white/5 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden border border-gray-800 dark:border-white/10 shadow-2xl">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Punya Kebutuhan Khusus?
              </h3>
              <p className="text-gray-400 max-w-lg">
                Jangan paksakan paket jika tidak sesuai. Kami sediakan solusi{" "}
                <span className="text-white font-bold">
                  Custom Budget & Requirement
                </span>{" "}
                spesial untuk Anda.
              </p>
            </div>

            <div className="relative z-10 flex-shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
              >
                Konsultasi Custom
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
