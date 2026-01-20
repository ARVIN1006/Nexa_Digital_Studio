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
              Dengan mengakses atau menggunakan layanan dari{" "}
              <strong>Nexa Digital Studio</strong>, Anda dianggap telah membaca,
              memahami, dan menyetujui seluruh Syarat dan Ketentuan yang
              berlaku. Jika Anda tidak menyetujui bagian mana pun dari ketentuan
              ini, Anda disarankan untuk tidak melanjutkan penggunaan layanan
              kami.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              2. Proses Layanan & Pembayaran
            </h2>
            <ul className="list-disc pl-6 space-y-4 text-gray-600 dark:text-gray-300">
              <li>
                <strong>Down Payment (DP):</strong> Pengerjaan project akan
                dimulai setelah klien melakukan pembayaran DP minimal 50% dari
                total nilai project.
              </li>
              <li>
                <strong>Pelunasan:</strong> Sisa pembayaran wajib dilunasi
                setelah fase development selesai dan sebelum penyerahan akses
                penuh (Source Code, Domain, dan Hosting).
              </li>
              <li>
                <strong>Biaya Tambahan:</strong> Penambahan fitur di luar brief
                awal yang telah disepakati akan dikenakan biaya tambahan sesuai
                tingkat kesulitannya.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              3. Hak Kekayaan Intelektual
            </h2>
            <ul className="list-disc pl-6 space-y-4 text-gray-600 dark:text-gray-300">
              <li>
                <strong>Kepemilikan:</strong> Setelah pelunasan, seluruh hak
                milik atas desain dan kode program website diserahkan sepenuhnya
                kepada klien.
              </li>
              <li>
                <strong>Materi Klien:</strong> Klien menjamin bahwa semua materi
                (logo, teks, gambar) yang diberikan tidak melanggar hak cipta
                pihak mana pun. Nexa Digital Studio tidak bertanggung jawab atas
                sengketa hak cipta materi dari klien.
              </li>
              <li>
                <strong>Atribusi:</strong> Nexa Digital Studio berhak
                mencantumkan nama brand dan link website hasil pengerjaan ke
                dalam portofolio kami, kecuali ada perjanjian khusus sebelumnya.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              4. Revisi & Masa Garansi
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Kami berkomitmen untuk memberikan hasil terbaik dengan ketentuan:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-300">
              <li>
                Revisi tidak terbatas (Unlimited) selama masa pengerjaan sesuai
                batasan brief awal.
              </li>
              <li>
                Garansi perbaikan bug/error teknis selama 30 hari setelah
                website online (Live).
              </li>
              <li>
                Garansi tidak berlaku jika terjadi error akibat modifikasi kode
                oleh pihak ketiga atau kelalaian klien dalam mengelola akses
                admin.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Pembatalan Project</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Apabila terjadi pembatalan sepihak oleh klien ketika project sudah
              berjalan, maka uang DP yang telah dibayarkan{" "}
              <strong>tidak dapat dikembalikan</strong>. Jika pembatalan
              dilakukan oleh pihak Nexa Digital Studio karena kendala teknis
              internal, kami akan mengembalikan dana secara proporsional sesuai
              progres pengerjaan.
            </p>
          </section>

          <section className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
            <h2 className="text-2xl font-bold mb-4">6. Pertanyaan & Bantuan</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Jika ada poin yang kurang jelas, Anda dapat berdiskusi langsung
              dengan tim kami melalui saluran komunikasi resmi Nexa Digital
              Studio.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
