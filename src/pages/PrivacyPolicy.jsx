import { ArrowLeft, ShieldCheck } from "phosphor-react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-bg-surface dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-6 py-12 md:py-20 max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:underline"
        >
          <ArrowLeft size={20} weight="bold" />
          Kembali ke Beranda
        </Link>

        <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-black/[0.03] dark:shadow-black/20 border border-gray-100 dark:border-white/5">
          <div className="flex items-center gap-4 mb-2">
            <ShieldCheck size={48} className="text-primary" weight="duotone" />
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
              Legal
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
            Kebijakan Privasi
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-12 font-medium">
            Terakhir Diupdate: 2026
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                1. Pendahuluan
              </h2>
              <p className="leading-relaxed">
                Di Nexa Digital Studio, kami menghargai privasi Anda dan
                berkomitmen untuk melindungi informasi pribadi yang Anda bagikan
                kepada kami. Kebijakan Privasi ini menjelaskan bagaimana kami
                mengumpulkan, menggunakan, dan melindungi data Anda saat Anda
                berkunjung ke website kami atau menggunakan jasa kami.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                2. Informasi yang Kami Kumpulkan
              </h2>
              <p className="mb-4 leading-relaxed">
                Kami mengumpulkan informasi minimal yang diperlukan untuk
                memproses pesanan dan konsultasi Anda, yaitu:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                <li>Nama Lengkap</li>
                <li>Alamat Email</li>
                <li>Nomor Telepon / WhatsApp</li>
                <li>Detail keperluan website</li>
                <li>Bukti Pembayaran</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                3. Penggunaan Informasi
              </h2>
              <p className="mb-4 leading-relaxed">
                Informasi yang Anda berikan digunakan secara eksklusif untuk
                kepentingan layanan Nexa Digital Studio, antara lain:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                <li>Memproses pesanan dan pembuatan website Anda.</li>
                <li>Menghubungi Anda terkait update progress pekerjaan.</li>
                <li>Mengirimkan invoice / tagihan.</li>
                <li>Penyimpanan data project untuk keperluan maintenance.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                4. Keamanan & Perlindungan Data
              </h2>
              <p className="leading-relaxed">
                Kami menjamin kerahasiaan data Anda. Nexa Digital Studio tidak
                akan pernah menjual, menyewakan, atau memberikan data pribadi
                Anda kepada pihak ketiga untuk kepentingan iklan atau pemasaran
                tanpa izin tertulis dari Anda.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                5. Perubahan Kebijakan
              </h2>
              <p className="leading-relaxed">
                Kami mungkin memperbarui Kebijakan Privasi ini sesekali untuk
                mencerminkan perubahan praktik layanan kami atau karena alasan
                operasional, hukum, atau peraturan lainnya.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                6. Hubungi Kami
              </h2>
              <p className="leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan mengenai privasi Anda, silakan
                hubungi tim kami.
              </p>
              <div className="bg-gray-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-gray-100 dark:border-white/5">
                <p className="font-bold">WhatsApp: +62 851-9919-8055</p>
                <p className="font-bold">Email: support@nexastudio.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
