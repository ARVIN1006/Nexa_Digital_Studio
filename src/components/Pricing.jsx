import { CheckCircle, WhatsappLogo, Timer, Globe } from "phosphor-react";
import { useSiteData } from "../context/SiteContext";
import { PricingSkeleton } from "./Skeletons";

export default function Pricing() {
  const { settings, pricing: sanityPricing, loading } = useSiteData();

  // Function to parse price string to number for sorting
  const parsePrice = (priceString) => {
    if (!priceString) return 0;

    // Remove "Rp" and whitespace, convert to lowercase
    const cleanPrice = priceString.toLowerCase().trim();

    // Extract number and multiplier
    const match = cleanPrice.match(/([\d.,]+)\s*(ribu|juta|miliar)?/);
    if (!match) return 0;

    const number = parseFloat(match[1].replace(/\./g, "").replace(",", "."));
    const multiplier = match[2] || "";

    let multiplierValue = 1;
    if (multiplier === "ribu") multiplierValue = 1000;
    else if (multiplier === "juta") multiplierValue = 1000000;
    else if (multiplier === "miliar") multiplierValue = 1000000000;

    return number * multiplierValue;
  };

  // Format data from Sanity - show all plans without category filtering, sorted by price
  const pricingData = (sanityPricing || [])
    .map((plan) => {
      // Use discounted price if available, otherwise use original price for sorting
      const displayPrice = plan.price || plan.originalPrice || "";
      const priceValue = parsePrice(displayPrice);

      return {
        title: plan.title,
        price: plan.price,
        originalPrice: plan.originalPrice,
        duration: plan.duration,
        domain: plan.domainInfo,
        features: plan.features || [],
        popular: plan.isPopular,
        caption: plan.caption,
        priceValue, // For sorting
      };
    })
    .sort((a, b) => a.priceValue - b.priceValue); // Sort from cheapest to most expensive

  // const commonFeatures = [
  //   { icon: <PenNib size={20} />, text: "Content Management System (CMS)" },
  //   { icon: <Layout size={20} />, text: "Bisa Edit Konten Sendiri" },
  //   {
  //     icon: <CheckCircle size={20} />,
  //     text: "Revisi Minor 2x",
  //   },
  //   {
  //     icon: <DeviceMobile size={20} />,
  //     text: "Tampilan Rapi di HP (Mobile Friendly)",
  //   },
  // ];

  const getWaLink = (title, price, originalPrice) => {
    const waNumber = settings?.whatsappNumber || "6285199198055";
    const priceText = originalPrice
      ? `${price} (dari ${originalPrice})`
      : price;
    const text = encodeURIComponent(
      `Halo Nexa Studio, saya tertarik dengan paket *${title}* (${priceText}). Bisa dibantu dijelaskan detailnya?`
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

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto relative z-10">
          {pricingData.map((item, index) => (
            <div
              key={index}
              className={`group relative flex flex-col rounded-2xl bg-white dark:bg-slate-800/90 backdrop-blur-sm transition-all duration-300 h-full border overflow-hidden ${
                item.popular
                  ? "border-primary/40 shadow-xl shadow-primary/10 lg:scale-[1.02] z-20 ring-1 ring-primary/30"
                  : "border-gray-200 dark:border-slate-700/60 shadow-md hover:shadow-xl hover:border-primary/30 hover:-translate-y-1"
              }`}
            >
              {/* Popular Badge */}
              {item.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
              )}

              {/* Card Content */}
              <div className="flex flex-col h-full">
                {/* Header Section */}
                <div className="px-6 pt-6 pb-5 border-b border-gray-100 dark:border-slate-700/50">
                  {item.popular && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 mb-4 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-[10px] font-bold uppercase tracking-wider">
                      <span className="text-xs">⭐</span>
                      Paling Populer
                    </div>
                  )}
                  <h3
                    className={`text-lg font-bold uppercase tracking-wide mb-2 ${
                      item.popular
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-800 dark:text-gray-200"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Caption */}
                  {item.caption && (
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                      {item.caption}
                    </p>
                  )}

                  {/* Pricing Section */}
                  <div className="space-y-2.5">
                    {item.originalPrice ? (
                      <>
                        {/* Original Price */}
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-medium text-gray-400">
                            Rp
                          </span>
                          <span className="text-base font-semibold text-gray-400 line-through">
                            {item.originalPrice.split(" ")[0]}
                          </span>
                          <span className="text-xs font-medium text-gray-400/70 line-through">
                            {item.originalPrice.split(" ").slice(1).join(" ")}
                          </span>
                        </div>
                        {/* Discounted Price */}
                        <div className="flex items-baseline gap-1">
                          <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                            Rp
                          </span>
                          <span
                            className={`text-4xl md:text-5xl font-black tracking-tight ${
                              item.popular
                                ? "text-primary dark:text-primary-light"
                                : "text-gray-900 dark:text-white"
                            }`}
                          >
                            {item.price.split(" ")[0]}
                          </span>
                          <span className="text-base font-semibold text-gray-500 dark:text-gray-400">
                            {item.price.split(" ").slice(1).join(" ")}
                          </span>
                        </div>
                        {/* Discount Badge */}
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 text-[9px] font-bold">
                          <span className="w-1 h-1 rounded-full bg-red-500"></span>
                          Diskon
                        </div>
                      </>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                          Rp
                        </span>
                        <span
                          className={`text-4xl md:text-5xl font-black tracking-tight ${
                            item.popular
                              ? "text-primary dark:text-primary-light"
                              : "text-gray-900 dark:text-white"
                          }`}
                        >
                          {item.price.split(" ")[0]}
                        </span>
                        <span className="text-base font-semibold text-gray-500 dark:text-gray-400">
                          {item.price.split(" ").slice(1).join(" ")}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Specs Info Bar */}
                <div className="px-6 py-4 bg-gray-50/60 dark:bg-slate-900/40">
                  <div className="flex items-center justify-center gap-6 text-xs font-semibold text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Timer
                        size={16}
                        weight="duotone"
                        className="text-orange-500"
                      />
                      <span>{item.duration}</span>
                    </div>
                    <div className="w-px h-4 bg-gray-300 dark:bg-slate-600"></div>
                    <div className="flex items-center gap-2">
                      <Globe
                        size={16}
                        weight="duotone"
                        className="text-blue-500"
                      />
                      <span>{item.domain}</span>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="flex-1 px-6 py-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-gray-500 dark:text-gray-400">
                    Fitur Utama
                  </h4>
                  <ul className="space-y-3.5">
                    {item.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-0.5 flex-shrink-0">
                          <CheckCircle
                            size={18}
                            weight="fill"
                            className="text-green-500"
                          />
                        </div>
                        <span className="text-sm font-medium leading-relaxed text-gray-700 dark:text-gray-300">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="px-6 pb-6 pt-0">
                  <a
                    href={getWaLink(item.title, item.price, item.originalPrice)}
                    target="_blank"
                    rel="noreferrer"
                    className={`relative overflow-hidden w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2.5 ${
                      item.popular
                        ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35"
                        : "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-primary hover:text-white shadow-md hover:shadow-lg"
                    } hover:-translate-y-0.5 active:translate-y-0`}
                  >
                    <WhatsappLogo size={20} weight="fill" />
                    <span>Pesan Sekarang</span>
                  </a>
                </div>
              </div>
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
                  href={`https://wa.me/${
                    settings?.whatsappNumber || "6285199198055"
                  }?text=${encodeURIComponent(
                    "Halo Nexa Studio, saya mau diskusi sesuai budget saya."
                  )}`}
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
