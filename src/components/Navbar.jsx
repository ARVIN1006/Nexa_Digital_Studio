import { useState, useEffect } from "react";
import { List, X, Sun, Moon } from "phosphor-react";
import { useTheme } from "../hooks/useTheme";
import logoLight from "../assets/logo-light.avif";
import logoDark from "../assets/logo-dark.avif";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Handle scroll effect for navbar background
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scroll Function
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = 0;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false); // Close mobile menu if open
    }
  };

  const navLinks = [
    { name: "Portfolio", id: "showcase" },
    { name: "Layanan", id: "benefits" },
    { name: "Proses", id: "services" },
    { name: "Harga", id: "pricing" },
    { name: "FAQ", id: "faq" },
    { name: "Kontak", id: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm h-16"
          : "bg-transparent h-20"
      } border-b border-gray-100/50 dark:border-white/5`}
    >
      <div className="container mx-auto px-6 h-full flex justify-between items-center">
        {/* Brand */}
        <a
          href="#"
          onClick={(e) => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <img
            src={theme === "dark" ? logoLight : logoDark}
            alt="Nexa Digital Studio"
            className={`transition-all duration-500 w-auto ${
              scrolled ? "h-8 md:h-9" : "h-10 md:h-11"
            }`}
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? (
              <Sun size={20} weight="bold" />
            ) : (
              <Moon size={20} weight="bold" />
            )}
          </button>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="px-5 py-2.5 rounded-full text-sm font-medium bg-primary text-white hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 cursor-pointer"
          >
            Mulai Projek
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-600 dark:text-gray-300 transition-colors"
            aria-label="Switch Theme"
          >
            {theme === "dark" ? (
              <Sun size={24} weight="bold" />
            ) : (
              <Moon size={24} weight="bold" />
            )}
          </button>

          <button
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X size={24} weight="bold" />
            ) : (
              <List size={24} weight="bold" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-white/10 shadow-lg md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 text-center">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={`#${item.id}`}
                className="block py-2 text-gray-600 dark:text-gray-300 font-medium hover:text-primary"
                onClick={(e) => scrollToSection(e, item.id)}
              >
                {item.name}
              </a>
            </li>
          ))}
          <li className="pt-4 border-t border-gray-100 dark:border-white/10 w-full flex flex-col gap-3">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="w-full inline-block px-5 py-3 rounded-full text-sm font-bold bg-primary text-white shadow-lg shadow-primary/25"
            >
              Mulai Projek
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
