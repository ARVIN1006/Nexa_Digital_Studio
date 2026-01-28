# Nexa Digital Studio - Digital Innovation & Strategy 🚀

Nexa Digital Studio adalah layanan pembuatan website dan aplikasi profesional yang dirancang khusus untuk membantu UMKM dan bisnis meningkatkan kehadiran digital mereka dengan desain premium dan performa tinggi.

![Nexa Digital Studio Banner](https://raw.githubusercontent.com/ARVIN1006/Nexa_Digital_Studio/main/public/og-image.png)

## ✨ Fitur Utama

- **Premium & Modern Design**: Tampilan estetis dengan sentuhan profesional.
- **Dynamic Content (CMS)**: Konten dikelola sepenuhnya melalui Sanity.io (Headless CMS), memudahkan update tanpa coding.
- **High Performance**: Optimasi kecepatan load dan SEO best practices.
- **Responsive Layout**: Tampilan sempurna di Desktop, Tablet, dan Mobile.
- **Theme Support**: Mode Gelap & Terang yang elegan.
- **Interactive Elements**: Animasi halus dengan Framer Motion.

## 🛠️ Tech Stack

### Frontend

- **Framework**: [React.js](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Phosphor Icons](https://phosphoricons.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)

### Backend & Data

- **CMS**: [Sanity.io](https://www.sanity.io/)
- **Data Fetching**: Sanity Client

## 📋 Prasyarat

Sebelum memulai, pastikan Anda telah menginstal:

- [Node.js](https://nodejs.org/) (versi 18 atau lebih baru)
- Akun [Sanity.io](https://www.sanity.io/) untuk manajemen konten

## 🚀 Panduan Instalasi & Setup

Ikuti langkah-langkah berikut untuk menjalankan project di lokal:

### 1. Clone Repository

```bash
git clone https://github.com/ARVIN1006/Nexa_Digital_Studio.git
cd Nexa_Digital_Studio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Konfigurasi Environment Variables

Project ini membutuhkan koneksi ke Sanity CMS. Buat file `.env` di root folder:

```bash
cp .env.example .env
```

Lalu isi file `.env` dengan kredensial Sanity Anda:

```env
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
SANITY_TOKEN=your_input_write_token
```

> **Catatan**: `SANITY_TOKEN` diperlukan jika Anda ingin menjalankan script populasi data atau melakukan write operations dari backend scripts. Pastikan token memiliki izin **Editor** atau **Write**.

### 4. Populasi Data Awal (Opsional)

Jika Anda menggunakan project Sanity baru yang kosong, Anda dapat mengisi data awal (Pricing, FAQ, Services, dll) secara otomatis:

```bash
npm run populate
```

> Script ini akan mengupload gambar Hero dan membuat dokumen-dokumen default di CMS Sanity Anda.

### 5. Jalankan Aplikasi

```bash
npm run dev
```

Akses website di `http://localhost:5173`.

## 📜 Tersedia Scripts

- `npm run dev`: Menjalankan server development lokal.
- `npm run build`: Membuild aplikasi untuk produksi.
- `npm run preview`: Melihat preview hasil build.
- `npm run populate`: Mengisi database Sanity dengan data awal (seed).
- `npm run cleanup`: Menghapus semua data di dataset Sanity (Hati-hati!).
- `npm run lint`: Menjalankan ESLint untuk cek kualitas kode.

## 📧 Kontak & Support

Jika ada pertanyaan atau kebutuhan kustomisasi, hubungi kami:

- **WhatsApp**: [+62 851 9919 8055](https://wa.me/6285199198055)
- **Instagram**: [@\_nexadigitalstudio.id](https://instagram.com/_nexadigitalstudio.id)
- **Email**: nexadigitalstudio.business@gmail.com

---

Developed with ❤️ by **Nexa Digital Studio Team**
