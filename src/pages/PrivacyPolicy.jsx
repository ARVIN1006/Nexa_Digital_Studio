import { ArrowLeft } from "phosphor-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:-translate-x-1 transition-transform"
        >
          <ArrowLeft weight="bold" /> Kembali ke Beranda
        </a>

        <h1 className="text-4xl font-black mb-8">Privacy Policy</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Last Updated: 2026
        </p>

        <div className="prose dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Pendahuluan</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Di <strong>Nexa Digital Studio</strong>, kami menghargai privasi
              Anda dan berkomitmen untuk melindungi informasi pribadi yang Anda
              bagikan kepada kami. Kebijakan Privasi ini menjelaskan bagaimana
              kami mengumpulkan, menggunakan, dan melindungi data Anda saat Anda
              berkunjung ke website kami atau menggunakan jasa kami.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              2. Informasi yang Kami Kumpulkan
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Kami mengumpulkan informasi minimal yang diperlukan untuk
              memproses pesanan dan konsultasi Anda, yaitu:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 font-medium">
              <li>Nama & Nama Bisnis</li>
              <li>Alamat Email aktif</li>
              <li>Nomor Telepon (WhatsApp)</li>
              <li>Informasi teknis (seperti domain yang diinginkan)</li>
              <li>Detail brief project yang dikirimkan</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Penggunaan Informasi</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Informasi yang Anda berikan digunakan secara eksklusif untuk
              kepentingan layanan Nexa Digital Studio, antara lain:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 mt-4">
              <li>Berkomunikasi terkait konsultasi dan pengerjaan project.</li>
              <li>
                Proses penagihan (Invoice) dan administrasi kelengkapan domain.
              </li>
              <li>Mengirimkan update penting mengenai status website Anda.</li>
              <li>
                Keperluan riset internal untuk meningkatkan kualitas layanan
                kami.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              4. Keamanan & Perlindungan Data
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Kami menjamin kerahasiaan data Anda. Nexa Digital Studio{" "}
              <strong>tidak akan pernah</strong> menjual, menyewakan, atau
              memberikan data pribadi Anda kepada pihak ketiga untuk kepentingan
              iklan atau pemasaran tanpa izin tertulis dari Anda.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Semua akses kredensial (seperti login hosting atau CMS) akan
              diserahkan sepenuhnya kepada Anda setelah project selesai, dan
              kami tidak menyimpan salinan kredensial tersebut kecuali atas
              permintaan Anda untuk maintenance berkala.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Perubahan Kebijakan</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Kami mungkin memperbarui Kebijakan Privasi ini sesekali untuk
              mencerminkan perubahan praktik layanan kami atau karena alasan
              operasional, hukum, atau peraturan lainnya.
            </p>
          </section>

          <section className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
            <h2 className="text-2xl font-bold mb-4">6. Hubungi Kami</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Jika Anda memiliki pertanyaan mengenai privasi Anda, silakan
              hubungi tim kami melalui WhatsApp resmi di{" "}
              <strong>6285199198055</strong> atau email di{" "}
              <strong>nexadigitalstudio.business@gmail.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
