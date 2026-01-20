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
        if (entry.target.id === "hero") {
          setIsVisible((prev) => (entry.isIntersecting ? false : prev));
        }
        if (entry.target.id === "contact") {
          setIsVisible((prev) => (entry.isIntersecting ? false : true));
        }

        // Comprehensive check: If Hero OR Contact is intersecting, hide.
        // We rely on the fact that if neither is intersecting, we should show (unless we are just transitioning)
        // Actually, let's use the safer State Object pattern but inside the ref callback to avoid stale closures if any
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        let isHeroVisible = false;
        let isContactVisible = false;

        entries.forEach((entry) => {
          if (entry.target.id === "hero") isHeroVisible = entry.isIntersecting;
          if (entry.target.id === "contact")
            isContactVisible = entry.isIntersecting;
        });

        // Use a functional update to check 'real-time' status from the DOM if needed,
        // or just trust the observer. simpler is better.
        // Problem: Observer only reports CHANGES.
        // Solution: We need to know the state of BOTH at any time.
        // We can't know the state of the "other" one from 'entries'.

        // LET'S USE SCROLL LISTENER INSTEAD. It's much more reliable for "Top and Bottom" logic.
      },
      { threshold: 0 },
    );

    // SWITCHING TO SCROLL LISTENER IMPLEMENTATION BELOW
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      const contact = document.getElementById("contact");
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Logic: Hide if at very top (Hero) OR very bottom (Contact area)
      const isAtTop = scrollY < 500; // Hero is usually 800px+
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 500; // Near bottom

      // Better Logic using Element positions
      let hide = false;

      if (hero) {
        const rect = hero.getBoundingClientRect();
        if (rect.bottom > 100) hide = true; // Hero is still substantially on screen
      }

      if (contact) {
        const rect = contact.getBoundingClientRect();
        if (rect.top < windowHeight - 100) hide = true; // Contact is clearly visible
      }

      setIsVisible(!hide);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
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
          settings?.whatsappNumber || "6285199198055"
        }?text=${encodeURIComponent(
          "Halo Nexa Digital Studio, saya ingin konsultasi mengenai layanan pembuatan website. Bisa dibantu?",
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
            Butuh Website?
          </p>
          <p className="text-sm font-bold">Chat WhatsApp</p>
        </div>
      </a>
    </div>
  );
}
