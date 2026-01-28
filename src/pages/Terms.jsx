import { ArrowLeft, Scroll } from "phosphor-react";
import { Link } from "react-router-dom";

export default function Terms() {
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
            <Scroll size={48} className="text-accent" weight="duotone" />
            <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase">
              Legal
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
            Syarat & Ketentuan
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-12 font-medium">
            Terakhir Diupdate: 2026
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                1. Ketentuan Umum
              </h2>
              <p className="leading-relaxed">
                Dengan mengakses atau menggunakan layanan dari Nexa Digital
                Studio, Anda dianggap telah membaca, memahami, dan menyetujui
                seluruh Syarat dan Ketentuan yang berlaku.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                2. Proses Layanan & Pembayaran
              </h2>
              <ul className="list-disc pl-6 space-y-3 marker:text-accent">
                <li>
                  <span className="font-bold">Pembayaran:</span> Sistem DP 50%
                  di awal dan pelunasan 50% setelah website selesai (sebelum
                  serah terima akses penuh).
                </li>
                <li>
                  <span className="font-bold">Metode:</span> Pembayaran melalui
                  transfer ke rekening resmi Nexa Digital Studio.
                </li>
                <li>
                  <span className="font-bold">Pembatalan:</span> DP hangus jika
                  pembatalan sepihak dari klien.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                3. Hak Kekayaan Intelektual
              </h2>
              <ul className="list-disc pl-6 space-y-3 marker:text-accent">
                <li>
                  <span className="font-bold">Aset Klien:</span> Materi teks dan
                  gambar dari klien adalah hak milik klien.
                </li>
                <li>
                  <span className="font-bold">Hasil Karya:</span> Desain dan
                  kode program (source code) adalah kekayaan intelektual Nexa
                  Digital Studio, klien mendapatkan lisensi penggunaan.
                </li>
                <li>
                  <span className="font-bold">Larangan:</span> Dilarang menjual
                  ulang (resell) template atau sistem kami tanpa izin tertulis.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                4. Revisi & Masa Garansi
              </h2>
              <p className="mb-4 leading-relaxed">
                Kami berkomitmen untuk memberikan hasil terbaik dengan ketentuan
                revisi tidak terbatas selama masa pengerjaan dan garansi bug 30
                hari.
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-accent">
                <li>
                  Perubahan teks, ganti gambar, atau warna (Unlimited selama
                  pengerjaan).
                </li>
                <li>
                  Perubahan layout atau penambahan fitur diluar kesepakatan awal
                  (Dikenakan biaya tambahan).
                </li>
                <li>
                  Garansi perbaikan error/bug pada sistem selama 30 hari setelah
                  serah terima.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                5. Pembatalan Project
              </h2>
              <p className="leading-relaxed">
                Apabila terjadi pembatalan sepihak oleh klien ketika project
                sudah berjalan, maka uang DP yang telah dibayarkan tidak dapat
                dikembalikan.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                6. Pertanyaan & Bantuan
              </h2>
              <p className="leading-relaxed mb-4">
                Jika ada poin yang kurang jelas, Anda dapat berdiskusi langsung
                dengan tim kami.
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
