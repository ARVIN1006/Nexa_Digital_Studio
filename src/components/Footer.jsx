import {
  InstagramLogo,
  LinkedinLogo,
  Envelope,
  WhatsappLogo,
} from "phosphor-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 dark:bg-black text-white pt-20 pb-10 transition-colors duration-300 border-t border-gray-800 dark:border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Socials */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-2">
                Nexa Studio.
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Mitra teknologi visioner untuk bisnis modern. Kami mengubah ide
                kompleks menjadi solusi digital yang profitable.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all"
              >
                <InstagramLogo size={20} weight="fill" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all"
              >
                <Envelope size={20} weight="fill" />
              </a>
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

          {/* Layanan */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Resources</h4>
            <ul className="space-y-4">
              {[
                "Blog",
                "Community",
                "Terms of Service",
                "Privacy Policy",
                "FAQ",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors text-sm font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <WhatsappLogo
                  size={20}
                  className="mt-0.5 text-green-500 shrink-0"
                />
                <span>
                  +62 812 3456 7890 <br /> (WhatsApp Only)
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Envelope size={20} className="mt-0.5 text-blue-500 shrink-0" />
                <span>hello@nexastudio.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-gray-500 text-xs md:text-sm">
            &copy; {currentYear} Nexa Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
