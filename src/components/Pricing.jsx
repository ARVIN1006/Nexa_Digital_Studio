import { useState } from "react";
import { CheckCircle } from "phosphor-react";

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("umkm");

  const tabs = [
    { id: "personal", label: "Personal" },
    { id: "umkm", label: "UMKM" },
    { id: "corporate", label: "Corporate" },
  ];

  const pricingData = {
    personal: [
      {
        title: "Link Bio / Kartu Nama",
        price: "Rp 99rb",
        originalPrice: "Rp 250rb",
        features: [
          "1 Halaman Link Tree",
          "Foto Profil & Bio",
          "Koneksi Sosmed",
          "Selesai 24 Jam",
        ],
        cta: "Ambil Promo",
        popular: false,
      },
      {
        title: "Portfolio Basic",
        price: "Rp 249rb",
        originalPrice: "Rp 500rb",
        features: [
          "Galeri Foto/Karya",
          "Tentang Saya",
          "Kontak Form",
          "Gratis Domain my.id",
        ],
        cta: "Pilih Paket",
        popular: true,
      },
      {
        title: "Personal Branding",
        price: "Rp 499rb",
        originalPrice: "Rp 1.2jt",
        features: [
          "5 Halaman Lengkap",
          "Blog / Artikel",
          "SEO Basic",
          "Free Maintenance 1 Bln",
        ],
        cta: "Pilih Paket",
        popular: false,
      },
    ],
    umkm: [
      {
        title: "Paket Rintisan",
        price: "Rp 349rb",
        originalPrice: "Rp 750rb",
        features: [
          "Landing Page Simple",
          "Profil Usaha",
          "Tombol WhatsApp",
          "Mobile Friendly",
        ],
        cta: "Pilih Hemat",
        popular: false,
      },
      {
        title: "Paket Laris Manis",
        price: "Rp 699rb",
        originalPrice: "Rp 1.5jt",
        features: [
          "Desain Premium",
          "Katalog 12 Produk",
          "Checkout WhatsApp",
          "Integrasi Instagram",
          "Gratis Domain .com",
        ],
        cta: "Ambil Promo",
        popular: true,
      },
      {
        title: "Paket Juragan",
        price: "Rp 1.1jt",
        originalPrice: "Rp 2.5jt",
        features: [
          "Katalog Unlimited",
          "Fitur Ongkir Otomatis",
          "Pembayaran Online",
          "Laporan Penjualan",
          "Training Admin",
        ],
        cta: "Pilih Paket",
        popular: false,
      },
    ],
    corporate: [
      {
        title: "Startup Validation",
        price: "Rp 1.9jt",
        originalPrice: "Rp 4jt",
        features: [
          "Landing Page High-Conv",
          "A/B Testing Setup",
          "Analytics Dashboard",
          "Email Marketing Setup",
        ],
        cta: "Mulai Validasi",
        popular: false,
      },
      {
        title: "Company Profile Pro",
        price: "Rp 2.9jt",
        originalPrice: "Rp 6jt",
        features: [
          "10 Halaman Premium",
          "Multi-Bahasa",
          "Proteksi Keamanan",
          "Email Bisnis (5 Akun)",
          "Priority Support",
        ],
        cta: "Hubungi Sales",
        popular: true,
      },
      {
        title: "Custom System",
        price: "Start 4.5jt",
        originalPrice: "Rp 10jt",
        features: [
          "Web App / SAAS",
          "Database Complex",
          "API Integration",
          "Mobile App (Android)",
          "Garansi 3 Bulan",
        ],
        cta: "Konsultasi",
        popular: false,
      },
    ],
  };

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
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              Pilih paket yang pas. Tidak ada biaya tersembunyi ("Add-on" ini
              itu) di belakang. Fair trade.
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center animate-fade-in-up"
        >
          {pricingData[activeTab].map((item, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-slate-800 rounded-3xl p-8 border ${
                item.popular
                  ? "border-primary/50 shadow-2xl shadow-primary/10 ring-4 ring-primary/5 dark:ring-primary/20"
                  : "border-gray-100 dark:border-slate-700 shadow-lg"
              } hover:-translate-y-2 transition-transform duration-300`}
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
                  <span className="text-sm text-gray-400 line-through mb-1">
                    {item.originalPrice}
                  </span>
                  <div className="text-4xl font-extrabold text-primary">
                    {item.price}
                  </div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {item.features.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm"
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

              <button
                className={`w-full py-3.5 rounded-xl font-bold transition-all ${
                  item.popular
                    ? "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25"
                    : "bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-600 border border-gray-200 dark:border-slate-600"
                }`}
              >
                {item.cta}
              </button>
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
