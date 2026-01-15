import { useState, useEffect } from "react";
import { WhatsappLogo } from "phosphor-react";
import { useSiteData } from "../context/SiteContext";

export default function FloatingCTA() {
  const { settings } = useSiteData();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sectionVisibility = {
      hero: false,
      contact: false,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.target.id === "hero")
          sectionVisibility.hero = entry.isIntersecting;
        if (entry.target.id === "contact")
          sectionVisibility.contact = entry.isIntersecting;
      });

      const shouldHide = sectionVisibility.hero || sectionVisibility.contact;
      setIsVisible(!shouldHide);
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.1,
    });

    const heroSection = document.getElementById("hero");
    const contactSection = document.getElementById("contact");

    if (heroSection) observer.observe(heroSection);
    if (contactSection) observer.observe(contactSection);

    // Initial check in case they aren't intersecting but we aren't at top
    // However, usually hero is at the top, so we start hidden.

    return () => {
      if (heroSection) observer.unobserve(heroSection);
      if (contactSection) observer.unobserve(contactSection);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <a
        href={`https://wa.me/${
          settings?.whatsappNumber || "6282127666523"
        }?text=${encodeURIComponent(
          "Halo Nexa Digital Studio, saya ingin konsultasi mengenai layanan pembuatan website. Bisa dibantu?"
        )}`}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white pl-4 pr-6 py-3.5 rounded-full shadow-lg shadow-green-500/30 transition-all hover:-translate-y-1"
        aria-label="Chat via WhatsApp"
      >
        <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
          <WhatsappLogo size={24} weight="fill" />
        </div>
        <div className="text-left">
          <p className="text-[10px] font-medium text-green-50 opacity-90 uppercase tracking-wider">
            Butuh Bantuan?
          </p>
          <p className="text-sm font-bold">Hubungi Kami</p>
        </div>
      </a>
    </div>
  );
}
