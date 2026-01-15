import { ArrowLeft } from "phosphor-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:-translate-x-1 transition-transform"
        >
          <ArrowLeft weight="bold" /> Kembali ke Beranda
        </a>

        <h1 className="text-4xl font-black mb-8">Terms of Service</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Last Updated: 2026
        </p>

        <div className="prose dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Ketentuan Umum</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Dengan menggunakan layanan Nexa Digital Studio, Anda dianggap
              telah membaca, memahami, dan menyetujui seluruh syarat dan
              ketentuan yang berlaku di bawah ini.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Layanan & Pembayaran</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                Pengerjaan project akan dimulai setelah klien melakukan Down
                Payment (DP) minimal 50% dari total nilai project.
              </li>
              <li>
                Pelunasan wajib dilakukan setelah project selesai dan sebelum
                akses penuh (source code/admin) diserahkan.
              </li>
              <li>
                Harga yang tercantum di website dapat berubah sewaktu-waktu
                kecuali untuk kesepakatan yang sudah berjalan.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Revisi & Garansi</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                Klien berhak mendapatkan revisi sesuai dengan paket yang
                dipilih. Revisi di luar kesepakatan akan dikenakan biaya
                tambahan.
              </li>
              <li>
                Kami memberikan garansi perbaikan bug (error) selama 30 hari
                setelah serah terima project.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Kewajiban Klien</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Klien wajib menyediakan materi (teks, gambar, logo) yang
              diperlukan untuk pembuatan website. Nexa Digital Studio tidak
              bertanggung jawab atas pelanggaran hak cipta dari materi yang
              diberikan oleh klien.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Pembatalan</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Jika terjadi pembatalan sepihak oleh klien saat project sudah
              berjalan, maka uang DP yang telah dibayarkan tidak dapat
              dikembalikan (hangus) sebagai kompensasi waktu pengerjaan.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
