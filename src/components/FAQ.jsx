import { useState } from "react";
import { CaretDown } from "phosphor-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Berapa lama proses pengerjaan website?",
      answer:
        "Tergantung paket. Untuk Link Bio/Landing Page sederhana bisa selesai dalam 24 jam. Website Company Profile biasanya 3-7 hari, dan Custom System butuh 2-4 minggu. Kami selalu update progress di setiap tahap.",
    },
    {
      question: "Apa saja yang perlu saya siapkan?",
      answer:
        "Cukup siapkan materi dasar (logo, foto produk, teks profil). Jika belum ada, kami bisa bantu buatkan konten dasar atau gunakan placeholder sementara. Tim kami akan memandu Anda step-by-step.",
    },
    {
      question: "Apakah ada biaya bulanan/tahunan?",
      answer:
        "Website butuh Domain (alamat .com) & Hosting (penyimpanan) yang diperpanjang tahunan. Untuk tahun pertama biasanya sudah GRATIS dari kami (sesuai paket). Tahun berikutnya Anda cukup bayar perpanjangan saja (mulai 300rb/tahun).",
    },
    {
      question: "Bisakah saya update konten sendiri nanti?",
      answer:
        "Tentu! Kami berikan akses dashboard admin (CMS) yang mudah digunakan. Anda bisa ganti foto, teks, atau harga produk semudah update status WhatsApp. Ada panduan videonya juga.",
    },
    {
      question: "Apakah website sudah termasuk SEO?",
      answer:
        "Semua website kami dibangun dengan struktur 'SEO Friendly' (cepat, rapi, mobile-friendly). Ini fondasi agar mudah ditemukan Google. Untuk optimasi keyword lanjutan, bisa ambil paket maintenance tambahan.",
    },
    {
      question: "Bagaimana jika ada error/masalah setelah jadi?",
      answer:
        "Tenang, kami berikan GARANSI teknis. Jika ada bug atau error dari sistem kami, perbaikan GRATIS selamanya. Kami juga ada support via WhatsApp untuk tanya-tanya.",
    },
    {
      question: "Apakah bisa request fitur khusus (Custom)?",
      answer:
        "Sangat bisa. Kami bukan cuma pakai template. Tim developer kami bisa bangun fitur khusus seperti sistem member, booking online, kalkulator, atau integrasi API pihak ketiga.",
    },
    {
      question: "Pembayarannya bagaimana?",
      answer:
        "Sistem DP (Down Payment) 50% di awal untuk mulai pengerjaan. Sisanya 50% dibayarkan setelah website jadi dan Anda puas dengan hasilnya.",
    },
    {
      question: "Apakah dapat email bisnis (nama@perusahaan)?",
      answer:
        "Ya, untuk paket Corporate/Company Profile sudah termasuk setup Email Bisnis profesional. Bikin bisnis Anda terlihat lebih bonafide di mata klien.",
    },
    {
      question: "Saya gaptek, apakah akan diajari?",
      answer:
        "Pasti. Salah satu nilai plus Nexa Studio adalah kami 'Manusiawi'. Kami akan jelaskan dengan bahasa awam, bukan bahasa teknis yang membingungkan. Ada training admin via Zoom/Meet jika perlu.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-24 bg-bg-surface dark:bg-slate-900 transition-colors duration-300"
      id="faq"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
          {/* Header (Sticky on Desktop) */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Common Questions
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              Sering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Ditanyakan
              </span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-8">
              Jawaban cepat untuk pertanyaan yang sering muncul. Masih bingung?{" "}
              <a
                href="#contact"
                className="text-primary font-semibold underline decoration-wavy"
              >
                Chat WhatsApp aja.
              </a>
            </p>
          </div>

          {/* Accordion List */}
          <div className="lg:w-2/3 space-y-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-100 dark:border-slate-800 last:border-0"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start justify-between py-6 text-left focus:outline-none group"
                >
                  <span
                    className={`font-bold text-lg md:text-xl pr-8 transition-colors ${
                      openIndex === index
                        ? "text-primary"
                        : "text-gray-900 dark:text-white group-hover:text-primary"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`mt-1 transition-transform duration-300 ${
                      openIndex === index
                        ? "rotate-180 text-primary"
                        : "text-gray-400"
                    }`}
                  >
                    <CaretDown size={24} weight="bold" />
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-8 text-gray-500 dark:text-gray-400 leading-relaxed text-base md:text-lg">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
