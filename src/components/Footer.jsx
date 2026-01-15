import {
  InstagramLogo,
  LinkedinLogo,
  Envelope,
  WhatsappLogo,
  MapPin,
} from "phosphor-react";
import { useSiteData } from "../context/SiteContext";

export default function Footer() {
  const { settings } = useSiteData();
  const currentYear = new Date().getFullYear();

  const waNumber = settings?.whatsappNumber || "6282127666523";
  const email = settings?.contactEmail || "arvin.dev.business@gmail.com";
  const igHandle = settings?.instagramHandle || "_nexadigitalstudio.id";
  const igLink = `https://instagram.com/${igHandle.replace("@", "")}`;

  return (
    <footer className="bg-gray-950 dark:bg-black text-white pt-20 pb-10 transition-colors duration-300 border-t border-gray-800 dark:border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Socials */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-2">
                Nexa Digital Studio.
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Membantu individu dan UMKM membangun kehadiran digital pertama
                mereka dengan hasil yang profesional dan berkelas.
              </p>
            </div>
          </div>

          {/* Navigasi (Navbar Items) */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Menu</h4>
            <ul className="space-y-4">
              {["Portfolio", "Layanan", "Proses", "Harga", "FAQ", "Kontak"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${
                        item === "Portfolio"
                          ? "showcase"
                          : item === "Layanan"
                          ? "benefits"
                          : item === "Proses"
                          ? "services"
                          : item === "Harga"
                          ? "pricing"
                          : item === "FAQ"
                          ? "faq"
                          : "contact"
                      }`}
                      className="text-gray-400 hover:text-primary transition-colors text-sm font-medium"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info (Moved here for better grid balance) */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-gray-400 text-sm group">
                <WhatsappLogo
                  size={20}
                  className="mt-1 text-green-500 shrink-0 group-hover:scale-110 transition-transform"
                />
                <a
                  href={`https://wa.me/${waNumber}?text=${encodeURIComponent(
                    "Halo Nexa Digital Studio, saya ingin konsultasi mengenai layanan pembuatan website. Bisa dibantu?"
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +{waNumber.startsWith("62") ? waNumber : `62${waNumber}`}{" "}
                  <br />
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest leading-none">
                    WhatsApp Only
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Envelope size={20} className="mt-0.5 text-blue-500 shrink-0" />
                <span>{email}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={20} className="mt-0.5 text-red-500 shrink-0" />
                <span>Bandung, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 dark:text-gray-400 text-xs md:text-sm font-medium">
            &copy; {currentYear} Nexa Digital Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500 font-bold">
            <a
              href="/privacy-policy"
              className="hover:text-white transition-all"
            >
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-all">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
