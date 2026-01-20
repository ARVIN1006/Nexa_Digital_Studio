import { createClient } from "@sanity/client";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID,
  dataset: process.env.VITE_SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  useCdn: false,
  apiVersion: "2024-01-14",
});

async function populate() {
  console.log("🚀 Starting data population to Sanity...");

  // 1. Site Settings
  console.log("📦 Creating Site Settings...");
  const settings = {
    _type: "siteSettings",
    _id: "siteSettings", // Singleton
    siteName: "Nexa Digital Studio",
    heroBadge: "Siap Membantu Bisnis Anda",
    heroTitle: "Jasa Pembuatan Website UMKM Mulai 200 Ribu.",
    heroSubtitle:
      "Website sederhana dan mudah dipakai. Tingkatkan kepercayaan pelanggan dengan profil usaha yang profesional.",
    whatsappNumber: "6282127666523",
    whatsappWelcomeMessage:
      "Halo Nexa Digital Studio, saya ingin konsultasi mengenai layanan pembuatan website. Bisa dibantu?",
    contactEmail: "arvin.dev.business@gmail.com",
    instagramHandle: "_nexadigitalstudio.id",
    linkedinHandle: "nexa-digital-studio",
    footerDescription:
      "Membantu individu dan UMKM membangun kehadiran digital pertama mereka dengan hasil yang profesional dan berkelas.",
    address: "Bandung, Indonesia",
    navLinks: [
      { _key: "nav1", name: "Portfolio", id: "showcase" },
      { _key: "nav2", name: "Layanan", id: "benefits" },
      { _key: "nav3", name: "Proses", id: "services" },
      { _key: "nav4", name: "Harga", id: "pricing" },
      { _key: "nav5", name: "FAQ", id: "faq" },
      { _key: "nav6", name: "Kontak", id: "contact" },
    ],
  };
  await client.createOrReplace(settings);

  // 2. Benefits
  console.log("📦 Creating Benefits...");
  const benefits = [
    {
      _type: "benefit",
      title: "Cepat & Ringan",
      description:
        "Website dioptimasi agar loading super cepat di semua perangkat.",
      icon: "Lightning",
      order: 1,
    },
    {
      _type: "benefit",
      title: "Mudah Dikelola",
      description:
        "Edit teks dan gambar semudah mengupdate status sosial media.",
      icon: "Cursor",
      order: 2,
    },
    {
      _type: "benefit",
      title: "Desain Berkelas",
      description:
        "Tampilan modern dan profesional yang meningkatkan kredibilitas brand.",
      icon: "PaintBrush",
      order: 3,
    },
    {
      _type: "benefit",
      title: "SEO Friendly",
      description:
        "Struktur website yang rapi memudahkan bisnis ditemukan di Google.",
      icon: "MagnifyingGlassPlus",
      order: 4,
    },
    {
      _type: "benefit",
      title: "Support Terjamin",
      description:
        "Pendampingan setelah website aktif untuk memastikan performa stabil.",
      icon: "ShieldCheck",
      order: 5,
    },
    {
      _type: "benefit",
      title: "Mobile Optimized",
      description:
        "Tampilan sempurna saat diakses melalui smartphone atau tablet.",
      icon: "DeviceMobileCamera",
      order: 6,
    },
  ];
  for (const b of benefits) {
    await client.create(b);
  }

  // 3. Pricing
  console.log("📦 Creating Pricing Plans...");
  const plans = [
    // UMKM
    {
      _type: "pricing",
      title: "UMKM Lite",
      price: "500 Ribu",
      duration: "5 Hari",
      domainInfo: ".my.id / .biz.id",
      features: [
        "3 Halaman Website",
        "Beranda & Profil Usaha",
        "Kontak & WhatsApp",
        "CMS Siap Pakai",
      ],
      category: "umkm",
      order: 1,
    },
    {
      _type: "pricing",
      title: "UMKM Growth",
      price: "750 Ribu",
      duration: "7 Hari",
      domainInfo: ".web.id / .co.id*",
      features: [
        "5 Halaman Website",
        "Halaman Layanan / Produk",
        "Galeri Foto",
        "CMS Siap Pakai",
      ],
      category: "umkm",
      isPopular: true,
      order: 2,
    },
    {
      _type: "pricing",
      title: "UMKM Premium",
      price: "1 Juta",
      duration: "10 Hari",
      domainInfo: ".com / .id",
      features: [
        "7 Halaman Website",
        "Katalog Produk",
        "Integrasi WhatsApp",
        "CMS Siap Pakai",
      ],
      category: "umkm",
      order: 3,
    },
    // Personal
    {
      _type: "pricing",
      title: "Personal Lite",
      price: "300 Ribu",
      duration: "3 Hari",
      domainInfo: "Subdomain / .my.id",
      features: ["1 Halaman Landing Page", "Profil Singkat", "Tombol WhatsApp"],
      category: "personal",
      order: 4,
    },
    {
      _type: "pricing",
      title: "Personal Pro",
      price: "450 Ribu",
      duration: "5 Hari",
      domainInfo: ".my.id / .web.id",
      features: [
        "3 Halaman Website",
        "Galeri / Portofolio",
        "Struktur SEO Dasar",
      ],
      category: "personal",
      order: 5,
    },
  ];
  for (const p of plans) {
    await client.create(p);
  }

  // 4. FAQ
  console.log("📦 Creating FAQs...");
  const faqs = [
    {
      _type: "faq",
      question: "Apa saja layanan yang kamu tawarkan?",
      answer:
        "Kami melayani pembuatan website untuk personal, UMKM, profesional, pendidikan, company, dan organisasi.",
      order: 1,
    },
    {
      _type: "faq",
      question: "Apakah semua paket sudah termasuk CMS?",
      answer:
        "Iya. Semua paket sudah termasuk CMS. Klien bisa edit teks, gambar, dan konten sendiri tanpa coding.",
      order: 2,
    },
    {
      _type: "faq",
      question: "Apakah domain dan hosting sudah termasuk?",
      answer:
        "Iya. Semua paket sudah termasuk domain dan hosting selama 1 tahun.",
      order: 3,
    },
  ];
  for (const f of faqs) {
    await client.create(f);
  }

  // 5. Processes
  console.log("📦 Creating Processes...");
  const processes = [
    {
      _type: "process",
      title: "Deep Discovery",
      description:
        "Kami bedah bisnis Anda. Bukan cuma tanya 'maunya apa', tapi 'butuhnya apa' untuk cuan.",
      icon: "Strategy",
      order: 1,
    },
    {
      _type: "process",
      title: "Blueprint Technic",
      description:
        "Rancangan arsitektur sistem. Database, server, teknologi yang dipakai—semua transparan.",
      icon: "Scroll",
      order: 2,
    },
    {
      _type: "process",
      title: "Secure Contract",
      description:
        "Legalitas jelas. Garansi uang kembali jika hasil tidak sesuai spek. Aman.",
      icon: "ShieldCheck",
      order: 3,
    },
    {
      _type: "process",
      title: "High-Fidelity UI/UX",
      description:
        "Desain yang bisa diklik-klik (Prototype). Revisi visual sepuasnya di fase ini.",
      icon: "PaintBrushBroad",
      order: 4,
    },
    {
      _type: "process",
      title: "Agile Dev",
      description:
        "Coding dimulai. Anda bisa pantau progress mingguan. Tidak ada 'hilang kabar'.",
      icon: "Code",
      order: 5,
    },
    {
      _type: "process",
      title: "Launch & Handover",
      description:
        "Server setup, domain connect, training admin. Kami pastikan siap tempur.",
      icon: "Rocket",
      order: 6,
    },
  ];
  for (const proc of processes) {
    await client.create(proc);
  }

  // 6. Projects
  console.log("📦 Creating Sample Projects...");
  const projects = [
    {
      _type: "project",
      title: "UMKM Kit - Web Builder",
      category: "UMKM",
      previewUrl: "https://umkmkit.netlify.app/",
      businessType: "Platform Digital",
      businessGoal: "Membantu UMKM Go Digital",
      businessFunction: "Dashboard & Pembuatan Web Instan",
    },
    {
      _type: "project",
      title: "Arvin Ramdhan Portfolio",
      category: "Personal",
      previewUrl: "http://arvindev.netlify.app/",
      businessType: "Personal Branding",
      businessGoal: "Menampilkan Skill & Kualitas",
      businessFunction: "Portofolio Interaktif & Kontak",
    },
    {
      _type: "project",
      title: "Smart WMS System",
      category: "Company",
      previewUrl: "https://smartwms.netlify.app/",
      businessType: "Sistem Manajemen Gudang",
      businessGoal: "Automasi Stok & Laporan",
      businessFunction: "Monitoring Inventori Real-time",
    },
  ];
  for (const p of projects) {
    await client.create(p);
  }

  console.log("✅ Data population complete!");
  process.exit(0);
}

populate().catch((err) => {
  console.error(err);
  process.exit(1);
});
