import { useState, useRef, useEffect } from "react";
import { ArrowRight, Tag, Target, Storefront } from "phosphor-react";
import { client, urlFor } from "../lib/sanity";

export default function Showcase() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "project" || _type == "post"] | order(_createdAt desc) {
          _id,
          title,
          "categoryString": category,
          "categoriesRef": categories[]->{title},
          mainImage,
          accent,
          previewUrl,
          link,
          url,
          website,
          businessType,
          businessGoal,
          businessFunction
        }`;
        const data = await client.fetch(query);
        console.log("SANITY DATA DEBUG:", data);

        // Helper to adapt raw data into Business Context based on Category AND URL (Pricing Aligned)
        const getContext = (categoryTitle, projectUrl) => {
          const cat = (categoryTitle || "").toLowerCase();
          const url = (projectUrl || "").toLowerCase();

          // 1. PENDIDIKAN (Education)
          if (
            cat.includes("edu") ||
            cat.includes("sekolah") ||
            cat.includes("kursus") ||
            cat.includes("kampus") ||
            url.includes(".sch.id") ||
            url.includes(".ac.id")
          ) {
            return {
              type: "Instansi Pendidikan",
              goal: "Membangun Kepercayaan Publik",
              function: "Profil Sekolah & Info PPDB",
            };
          }

          // 2. COMPANY PROFILE (Corporate/Professional)
          if (
            cat.includes("company") ||
            cat.includes("korporat") ||
            cat.includes("pt") ||
            cat.includes("cv") ||
            cat.includes("agency") ||
            cat.includes("properti")
          ) {
            return {
              type: "Company Profile",
              goal: "Branding & Profesionalitas",
              function: "Showcase Layanan & Klien",
            };
          }

          // 3. PERSONAL (Portfolio/Blog)
          if (
            cat.includes("personal") ||
            cat.includes("blog") ||
            cat.includes("porto") ||
            cat.includes("resume")
          ) {
            return {
              type: "Personal Branding",
              goal: "Meningkatkan Nilai Jual Diri",
              function: "Portofolio & Kontak Sewa",
            };
          }

          // 4. UMKM & STORE (Specifics)
          if (
            cat.includes("kuliner") ||
            cat.includes("makan") ||
            cat.includes("resto") ||
            cat.includes("cafe")
          ) {
            return {
              type: "Usaha Kuliner",
              goal: "Meningkatkan Pesanan Online",
              function: "Menu Digital & Tombol WA",
            };
          }
          if (
            cat.includes("fashion") ||
            cat.includes("baju") ||
            cat.includes("store") ||
            cat.includes("toko") ||
            url.includes("store") ||
            url.includes("shop")
          ) {
            return {
              type: "Online Shop / Retail",
              goal: "Katalog 24 Jam Nonstop",
              function: "Galeri Produk & Checkout",
            };
          }
          if (
            cat.includes("jasa") ||
            cat.includes("service") ||
            cat.includes("laundry") ||
            cat.includes("bengkel") ||
            cat.includes("travel")
          ) {
            return {
              type: "Usaha Jasa",
              goal: "Memudahkan Booking Pelanggan",
              function: "Daftar Harga & Lokasi",
            };
          }

          // 5. GENERIC UMKM (Default)
          return {
            type: categoryTitle || "UMKM & Usaha Lokal",
            goal: "Meningkatkan Penjualan",
            function: "Profil Usaha & Identitas",
          };
        };

        const mappedProjects = data.map((p) => {
          // Smart URL detection
          const getProjectUrl = (item) => {
            const candidates = [
              item.previewUrl, // Primary from project schema
              item.link,
              item.url,
              item.website,
            ];
            for (const c of candidates) {
              if (typeof c === "string" && c.length > 1) return c; // Simple string
              if (typeof c === "object" && c?.href) return c.href; // Object with href
            }
            return "#";
          };

          const finalUrl = getProjectUrl(p);

          // Prioritize simple string 'category' from project schema, fallback to 'categories' ref from post schema
          const catTitle =
            p.categoryString || p.categoriesRef?.[0]?.title || "UMKM";
          const autoContext = getContext(catTitle, finalUrl);

          // Use explicit Sanity fields if available, otherwise use auto-generated context
          const finalContext = {
            type: p.businessType || autoContext.type,
            goal: p.businessGoal || autoContext.goal,
            function: p.businessFunction || autoContext.function,
          };

          return {
            id: p._id,
            title: p.title,
            category: catTitle,
            context: finalContext,
            img: p.mainImage
              ? urlFor(p.mainImage).width(600).height(800).url()
              : "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
            accent: p.accent || "border-primary/20",
            previewUrl: finalUrl,
          };
        });

        setProjects(mappedProjects);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

  // Hardcoded Demo Projects relevant to User's Real Portfolio (Fallback)
  const demoProjects = [
    {
      id: 1,
      title: "UMKM Kit - Web Builder",
      category: "UMKM", // Matches Pricing "UMKM"
      context: {
        type: "Platform Digital UMKM",
        goal: "Membantu UMKM Go Digital",
        function: "Katalog & Pembuatan Web Instan",
      },
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      accent: "border-indigo-200 shadow-indigo-500/10",
      previewUrl: "https://umkmkit.netlify.app/",
    },
    {
      id: 2,
      title: "Arvin Ramdhan Portfolio",
      category: "Personal", // Matches Pricing "Personal"
      context: {
        type: "Personal Branding",
        goal: "Menampilkan Portofolio Pro",
        function: "Showcase Skill & Kontak",
      },
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
      accent: "border-slate-200 shadow-slate-500/10",
      previewUrl: "http://arvindev.netlify.app/",
    },
    {
      id: 3,
      title: "Smart WMS System",
      category: "Company", // Matches Pricing "Company"
      context: {
        type: "Sistem Manajemen Perusahaan",
        goal: "Efisiensi Operasional (B2B)",
        function: "Tracking Stok & Laporan",
      },
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
      accent: "border-blue-200 shadow-blue-500/10",
      previewUrl: "https://wms-project-4dtd.vercel.app/",
    },
  ];

  const displayProjects = projects.length > 0 ? projects : demoProjects;

  // Duplicate for infinite scroll sensation only if we have projects
  const DUPLICATION_COUNT = 8;
  const infiniteProjects =
    displayProjects.length > 0
      ? Array(DUPLICATION_COUNT).fill(displayProjects).flat()
      : [];

  // Handle Infinite Looping Logic via onScroll
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container || displayProjects.length === 0) return;

    const totalWidth = container.scrollWidth;
    const oneSetWidth = totalWidth / DUPLICATION_COUNT;
    const rightThreshold = oneSetWidth * (DUPLICATION_COUNT - 2);
    const leftThreshold = oneSetWidth;

    if (container.scrollLeft >= rightThreshold) {
      container.scrollLeft -= oneSetWidth * 4;
    } else if (container.scrollLeft <= leftThreshold) {
      container.scrollLeft += oneSetWidth * 4;
    }
  };

  // Initial Centering
  useEffect(() => {
    const container = scrollRef.current;
    if (container && displayProjects.length > 0) {
      const totalWidth = container.scrollWidth;
      container.scrollLeft = totalWidth / 2 - container.clientWidth / 2;
    }
  }, [displayProjects]);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseUp = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
    setIsPaused(true);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (!isPaused && !isDragging && displayProjects.length > 0) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll - 10) {
          container.scrollLeft = 0;
        } else {
          container.scrollBy({ left: 1, behavior: "auto" });
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isPaused, isDragging, displayProjects]);

  return (
    <section
      className="py-24 bg-bg-surface dark:bg-slate-900 transition-colors duration-300 overflow-hidden"
      id="showcase"
    >
      <div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-dark dark:text-primary-light text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Contoh Hasil Kerja
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight mb-6">
            Contoh Website <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Untuk Usaha Kamu.
            </span>
          </h2>
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <p className="text-gray-800 dark:text-gray-200 max-w-sm text-lg text-left leading-relaxed font-medium">
            Didesain khusus untuk kebutuhan UMKM. Simpel, informatif, dan
            langsung ke tujuan bisnis.
          </p>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 pb-12 px-6 scrollbar-hide cursor-grab active:cursor-grabbing -mx-6 md:mx-auto md:px-0 container"
        onScroll={handleScroll}
        onMouseEnter={() => setIsPaused(true)}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {infiniteProjects.map((project, index) => (
          <div
            key={`${project.id}-${index}`}
            className="w-[85vw] md:w-[380px] lg:w-[450px] flex-shrink-0 select-none group"
          >
            <div
              className={`relative h-[550px] md:h-[500px] lg:h-[550px] rounded-[2rem] overflow-hidden bg-white dark:bg-slate-800 border-[3px] border-gray-100 dark:border-slate-700 shadow-xl transition-all duration-500 flex flex-col`}
            >
              {/* Image Top */}
              <div className="h-[250px] md:h-[220px] lg:h-[250px] overflow-hidden relative">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur text-gray-900 text-xs font-bold rounded-full shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Business Context Content */}
              <div className="p-6 md:p-6 lg:p-8 flex-1 flex flex-col relative bg-white dark:bg-slate-800">
                <h3 className="text-2xl md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
                  {project.title}
                </h3>

                <div className="space-y-4 mb-6 flex-1">
                  <div className="flex items-start gap-3">
                    <Storefront
                      size={20}
                      className="text-primary mt-1 flex-shrink-0"
                      weight="fill"
                    />
                    <div>
                      <p className="text-xs uppercase text-gray-700 dark:text-gray-300 font-bold tracking-wider mb-0.5">
                        Jenis Usaha
                      </p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">
                        {project.context.type}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target
                      size={20}
                      className="text-accent mt-1 flex-shrink-0"
                      weight="fill"
                    />
                    <div>
                      <p className="text-xs uppercase text-gray-700 dark:text-gray-300 font-bold tracking-wider mb-0.5">
                        Tujuan Website
                      </p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">
                        {project.context.goal}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Tag
                      size={20}
                      className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                      weight="fill"
                    />
                    <div>
                      <p className="text-xs uppercase text-gray-700 dark:text-gray-300 font-bold tracking-wider mb-0.5">
                        Fungsi Utama
                      </p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">
                        {project.context.function}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 dark:border-slate-700 flex flex-col gap-3">
                  <a
                    href={
                      project.previewUrl !== "#"
                        ? project.previewUrl
                        : undefined
                    }
                    target={project.previewUrl !== "#" ? "_blank" : undefined}
                    rel="noreferrer"
                    className={`block w-full text-center py-2 rounded-lg font-bold text-sm transition-colors ${
                      project.previewUrl !== "#"
                        ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white shadow-lg shadow-gray-200/50 dark:shadow-none"
                        : "bg-gray-100 dark:bg-slate-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {project.previewUrl !== "#"
                      ? "Kunjungi Website"
                      : "Link Belum Tersedia"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 mt-4 flex justify-center">
        <p className="text-center text-gray-500 text-sm">
          Geser untuk melihat contoh lainnya
        </p>
      </div>
    </section>
  );
}
