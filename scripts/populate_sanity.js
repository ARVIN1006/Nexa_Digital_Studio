import { createClient } from "@sanity/client";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

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

  // 0. Upload Hero Image
  console.log("📸 Uploading Hero Image...");
  let heroImageAsset = null;
  try {
    const heroImagePath = path.resolve(
      __dirname,
      "../src/assets/hero-people.avif",
    );
    const heroImageBuffer = fs.readFileSync(heroImagePath);

    heroImageAsset = await client.assets.upload("image", heroImageBuffer, {
      filename: "hero-people.avif",
      contentType: "image/avif",
    });
    console.log("✅ Hero image uploaded successfully!");
  } catch (error) {
    console.warn("⚠️  Could not upload hero image:", error.message);
  }

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
    whatsappNumber: "6285199198055",
    whatsappWelcomeMessage:
      "Halo Nexa Digital Studio, saya ingin konsultasi mengenai layanan pembuatan website. Bisa dibantu?",
    contactEmail: "nexadigitalstudio.business@gmail.com",
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

  // Add hero image if upload was successful
  if (heroImageAsset) {
    settings.heroImage = {
      _type: "image",
      asset: {
        _type: "reference",
        _ref: heroImageAsset._id,
      },
    };
  }

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
    // ===== PERSONAL =====
    {
      _type: "pricing",
      title: "Personal Lite",
      price: "300 Ribu",
      duration: "3 Hari",
      domainInfo: "Subdomain / .my.id",
      features: [
        "1 Halaman Landing Page",
        "Desain Simpel dan Rapi",
        "Mobile Friendly",
        "Profil Singkat",
        "Tombol WhatsApp",
        "Form Kontak",
        "CMS Siap Pakai",
        "Hosting 1 Tahun",
        "SSL Aktif",
        "Setup dan Deploy",
        "Revisi Sepuasnya (3 Hari)",
      ],
      category: "personal",
      order: 1,
    },
    {
      _type: "pricing",
      title: "Personal Pro",
      price: "450 Ribu",
      duration: "5 Hari",
      domainInfo: ".my.id / .web.id",
      features: [
        "3 Halaman Website",
        "Desain Lebih Personal",
        "Mobile Friendly",
        "Profil Lengkap",
        "Galeri atau Portofolio",
        "Tombol WhatsApp",
        "Struktur SEO Dasar",
        "CMS Siap Pakai",
        "Hosting 1 Tahun",
        "SSL Aktif",
        "Setup dan Deploy",
        "Revisi Sepuasnya (5 Hari)",
      ],
      category: "personal",
      order: 2,
    },
    {
      _type: "pricing",
      title: "Personal Premium",
      price: "650 Ribu",
      duration: "7 Hari",
      domainInfo: ".com / .id",
      features: [
        "5 Halaman Website",
        "Desain Custom",
        "Mobile Friendly",
        "Portofolio Lengkap",
        "Integrasi WhatsApp & Email",
        "Struktur SEO Dasar",
        "CMS Siap Pakai",
        "Hosting 1 Tahun",
        "SSL Aktif",
        "Setup dan Deploy",
        "Revisi Sepuasnya (7 Hari)",
      ],
      category: "personal",
      order: 3,
    },

    // ===== UMKM =====
    {
      _type: "pricing",
      title: "UMKM Lite",
      price: "500 Ribu",
      duration: "5 Hari",
      domainInfo: ".my.id / .biz.id",
      features: [
        "3 Halaman Website",
        "Beranda Usaha",
        "Profil Usaha",
        "Kontak dan WhatsApp",
        "Mobile Friendly",
        "Struktur Rapi",
        "CMS Siap Pakai",
        "Hosting 1 Tahun",
        "SSL Aktif",
        "Setup dan Deploy",
        "Revisi Sepuasnya (5 Hari)",
      ],
      category: "umkm",
      order: 4,
    },
    {
      _type: "pricing",
      title: "UMKM Growth",
      price: "750 Ribu",
      duration: "7 Hari",
      domainInfo: ".web.id / .co.id*",
      features: [
        "5 Halaman Website",
        "Layanan atau Produk",
        "Galeri Foto",
        "Tombol WhatsApp di Semua Halaman",
        "Mobile Friendly",
        "Struktur SEO Dasar",
        "CMS Siap Pakai",
        "Hosting 1 Tahun",
        "SSL Aktif",
        "Setup dan Deploy",
        "Revisi Sepuasnya (7 Hari)",
      ],
      category: "umkm",
      isPopular: true,
      order: 5,
    },
    {
      _type: "pricing",
      title: "UMKM Premium",
      price: "1 Juta",
      duration: "10 Hari",
      domainInfo: ".com / .id",
      features: [
        "7 Halaman Website",
        "Desain Lebih Eksklusif",
        "Katalog Produk",
        "Integrasi WhatsApp",
        "Mobile Friendly",
        "Struktur SEO Dasar",
        "CMS Siap Pakai",
        "Hosting 1 Tahun",
        "SSL Aktif",
        "Setup dan Deploy",
        "Revisi Sepuasnya (10 Hari)",
      ],
      category: "umkm",
      order: 6,
    },

    // ===== PENDIDIKAN =====
    {
      _type: "pricing",
      title: "Edu Basic",
      price: "750 Ribu",
      duration: "7 Hari",
      domainInfo: ".sch.id / .my.id",
      features: [
        "5 Halaman Website",
        "Profil Lembaga",
        "Visi dan Misi",
        "Program atau Jurusan",
        "Kontak Admin",
        "Mobile Friendly",
        "CMS Siap Pakai",
        "Hosting 1 Tahun",
        "SSL Aktif",
        "Setup dan Deploy",
        "Revisi Sepuasnya (7 Hari)",
      ],
      category: "pendidikan",
      order: 7,
    },
    {
      _type: "pricing",
      title: "Edu Pro",
      price: "1,1 Juta",
      duration: "10 Hari",
      domainInfo: ".sch.id / .ac.id",
      features: [
        "7 Halaman Website",
        "Informasi Pendaftaran",
        "Galeri Kegiatan",
        "Kontak Terpusat",
        "Mobile Friendly",
        "Struktur SEO Dasar",
        "CMS Siap Pakai",
        "Hosting 1 Tahun",
        "SSL Aktif",
        "Setup dan Deploy",
        "Revisi Sepuasnya (10 Hari)",
      ],
      category: "pendidikan",
      order: 8,
    },
    {
      _type: "pricing",
      title: "Edu Premium",
      price: "1,5 Juta",
      duration: "14 Hari",
      domainInfo: ".com / .id",
      features: [
        "10 Halaman Website",
        "Desain Informatif",
        "Navigasi Jelas",
        "Integrasi WhatsApp",
        "Mobile Friendly",
        "Struktur SEO Dasar",
        "CMS Siap Pakai",
        "Hosting 1 Tahun",
        "SSL Aktif",
        "Setup dan Deploy",
        "Revisi Sepuasnya (14 Hari)",
      ],
      category: "pendidikan",
      order: 9,
    },

    // ===== COMPANY =====
    {
      _type: "pricing",
      title: "Company Lite",
      price: "1 Juta",
      duration: "7 Hari",
      domainInfo: ".biz.id / .web.id",
      features: [
        "5 Halaman Website",
        "Profil Perusahaan",
        "Layanan",
        "Kontak Resmi",
        "Mobile Friendly",
        "CMS Siap Pakai",
        "Hosting 1 Tahun",
        "SSL Aktif",
        "Setup dan Deploy",
        "Revisi Sepuasnya (7 Hari)",
      ],
      category: "company",
      order: 10,
    },
    {
      _type: "pricing",
      title: "Company Pro",
      price: "1,5 Juta",
      duration: "10 Hari",
      domainInfo: ".co.id / .com",
      features: [
        "8 Halaman Website",
        "Company Profile Lengkap",
        "Portofolio Proyek",
        "Kontak Profesional",
        "Mobile Friendly",
        "Struktur SEO Dasar",
        "CMS Siap Pakai",
        "Hosting 1 Tahun",
        "SSL Aktif",
        "Setup dan Deploy",
        "Revisi Sepuasnya (10 Hari)",
      ],
      category: "company",
      order: 11,
    },
    {
      _type: "pricing",
      title: "Company Premium",
      price: "2 Juta",
      duration: "14 Hari",
      domainInfo: ".com / .id",
      features: [
        "12 Halaman Website",
        "Desain Custom",
        "Struktur Profesional",
        "Integrasi WhatsApp & Email",
        "Mobile Friendly",
        "Struktur SEO Dasar",
        "CMS Siap Pakai",
        "Hosting 1 Tahun",
        "SSL Aktif",
        "Setup dan Deploy",
        "Revisi Sepuasnya (14 Hari)",
      ],
      category: "company",
      order: 12,
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
        "Kami melayani pembuatan website untuk personal, UMKM, profesional, pendidikan, company, dan organisasi. Fokus pada website informatif, cepat, dan mudah dikelola.",
      order: 1,
    },
    {
      _type: "faq",
      question: "Apakah semua paket sudah termasuk CMS?",
      answer:
        "Iya. Semua paket sudah termasuk CMS. Klien bisa edit teks, gambar, dan konten sendiri tanpa coding melalui browser.",
      order: 2,
    },
    {
      _type: "faq",
      question: "Apakah domain dan hosting sudah termasuk?",
      answer:
        "Iya. Semua paket sudah termasuk domain dan hosting selama 1 tahun. Jenis domain menyesuaikan paket dan ketersediaan.",
      order: 3,
    },
    {
      _type: "faq",
      question: "Domain apa saja yang bisa didapat?",
      answer:
        "Tergantung paket. Bisa subdomain, .my.id, .web.id, .biz.id, .co.id, .sch.id, .ac.id, atau .com. Domain tertentu mengikuti syarat resmi.",
      order: 4,
    },
    {
      _type: "faq",
      question: "Berapa lama proses pengerjaan website?",
      answer:
        "Waktu pengerjaan tergantung paket. Mulai dari 3 hari sampai 14 hari. Waktu dihitung sejak data dan materi klien lengkap.",
      order: 5,
    },
    {
      _type: "faq",
      question: "Apakah revisi benar-benar sepuasnya?",
      answer:
        "Iya. Revisi tidak dibatasi selama masih dalam masa pengerjaan paket. Revisi dilakukan sampai klien menyatakan selesai.",
      order: 6,
    },
    {
      _type: "faq",
      question: "Apa yang termasuk revisi?",
      answer:
        "Revisi meliputi perubahan teks, gambar, warna, layout ringan, dan penyesuaian konten sesuai brief awal.",
      order: 7,
    },
    {
      _type: "faq",
      question: "Apakah bisa request desain?",
      answer:
        "Bisa. Klien boleh kirim referensi desain. Desain disesuaikan dengan kebutuhan dan paket yang dipilih.",
      order: 8,
    },
    {
      _type: "faq",
      question: "Apakah website bisa dibuka di HP?",
      answer:
        "Iya. Semua website dibuat mobile friendly dan nyaman diakses di HP, tablet, dan desktop.",
      order: 9,
    },
    {
      _type: "faq",
      question: "Apakah website sudah aman?",
      answer:
        "Iya. Semua paket sudah termasuk SSL dan pengamanan dasar untuk penggunaan normal.",
      order: 10,
    },
    {
      _type: "faq",
      question: "Apakah klien dapat akses admin?",
      answer:
        "Iya. Akses admin diberikan setelah website live. Klien bebas mengelola konten sendiri.",
      order: 11,
    },
    {
      _type: "faq",
      question: "Apakah ada biaya tambahan setelah jadi?",
      answer:
        "Tidak ada biaya tersembunyi. Biaya tahunan hanya untuk perpanjangan domain dan hosting setelah 1 tahun.",
      order: 12,
    },
    {
      _type: "faq",
      question: "Apakah bisa upgrade paket di tengah jalan?",
      answer:
        "Bisa. Klien dapat upgrade paket dengan menyesuaikan selisih harga dan scope pekerjaan.",
      order: 13,
    },
    {
      _type: "faq",
      question: "Apakah bisa minta bantuan setelah website aktif?",
      answer:
        "Bisa. Support awal tersedia sesuai paket. Layanan lanjutan bisa didiskusikan.",
      order: 14,
    },
    {
      _type: "faq",
      question: "Bagaimana cara memulai pemesanan?",
      answer:
        "Pilih paket. Kirim brief dan kebutuhan. Proses pengerjaan dimulai setelah konfirmasi.",
      order: 15,
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
