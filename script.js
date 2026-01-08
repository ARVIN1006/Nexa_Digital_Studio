document.addEventListener("DOMContentLoaded", () => {
  
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        // Optional: Compact view or shadow increase
        navbar.classList.add("shadow-indigo-500/10");
      } else {
        navbar.classList.remove("shadow-indigo-500/10");
      }
    });
  }

  // --- Scroll Reveal Animation ---
  const revealElements = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // --- Scroll To Top ---
  const scrollTopBtn = document.getElementById("scrollTop");
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.remove("translate-y-20", "opacity-0");
      } else {
        scrollTopBtn.classList.add("translate-y-20", "opacity-0");
      }
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // --- WhatsApp Form ---
  const form = document.getElementById("leadForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.elements["name"].value;
      const phone = form.elements["phone"].value;
      const service = form.elements["service"].value;

      const message = `Halo WebCrave, saya ${name}.%0A%0ASaya tertarik dengan: *${service}*.%0AMohon penjelasannya.`;
      const waUrl = `https://wa.me/6281234567890?text=${message}`;
      window.open(waUrl, "_blank");
    });
  }
});
