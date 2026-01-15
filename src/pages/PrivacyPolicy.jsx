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
              Selamat datang di Nexa Digital Studio. Kami menghargai privasi
              Anda dan berkomitmen untuk melindungi informasi pribadi yang Anda
              bagikan kepada kami. Kebijakan Privasi ini menjelaskan bagaimana
              kami mengumpulkan, menggunakan, dan melindungi data Anda saat
              menggunakan layanan kami.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              2. Informasi yang Kami Kumpulkan
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Kami hanya mengumpulkan informasi yang diperlukan untuk memberikan
              layanan terbaik kepada Anda, meliputi:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Nama lengkap</li>
              <li>Alamat email</li>
              <li>Nomor telepon (WhatsApp)</li>
              <li>Detail kebutuhan project yang Anda berikan</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Penggunaan Informasi</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Data yang Anda berikan hanya digunakan untuk keperluan komunikasi
              bisnis, seperti:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 mt-4">
              <li>Menghubungi Anda untuk konsultasi project.</li>
              <li>Mengirimkan penawaran harga (quotation).</li>
              <li>Proses administrasi dan penagihan (invoice).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Perlindungan Data</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Kami menjamin bahwa data Anda tidak akan dijual, disewakan, atau
              disebarluaskan kepada pihak ketiga tanpa izin Anda, kecuali jika
              diwajibkan oleh hukum yang berlaku di Indonesia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Hubungi Kami</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini,
              silakan hubungi kami melalui WhatsApp atau Email yang tertera di
              website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
