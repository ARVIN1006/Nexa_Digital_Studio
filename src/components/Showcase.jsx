import { useState, useRef, useEffect } from "react";
import { ArrowRight, Tag, Target, Storefront } from "phosphor-react";
import { client, urlFor } from "../lib/sanity";
import { ShowcaseSkeleton } from "./Skeletons";

export default function Showcase() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

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

        const mappedProjects = data.map((p) => {
          // Smart URL detection
          const getProjectUrl = (item) => {
            const candidates = [
              item.previewUrl,
              item.link,
              item.url,
              item.website,
            ];
            for (const c of candidates) {
              if (typeof c === "string" && c.length > 1) return c;
              if (typeof c === "object" && c?.href) return c.href;
            }
            return "#";
          };

          const finalUrl = getProjectUrl(p);
          const catTitle =
            p.categoryString || p.categoriesRef?.[0]?.title || "UMKM";

          return {
            id: p._id,
            title: p.title,
            category: catTitle,
            context: {
              type: p.businessType || "Usaha Digital",
              goal: p.businessGoal || "Meningkatkan Branding",
              function: p.businessFunction || "Company Profile",
            },
            img: p.mainImage
              ? urlFor(p.mainImage)
                  .width(600)
                  .height(400)
                  .fit("crop")
                  .crop("top")
                  .url()
              : "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
            accent: p.accent || "border-primary/20",
            previewUrl: finalUrl,
          };
        });

        setProjects(mappedProjects);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const displayProjects = projects;

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

  if (loading) return <ShowcaseSkeleton />;

  return (
    <section
      className="py-12 md:py-16 bg-bg-surface dark:bg-slate-900 transition-colors duration-300 overflow-hidden scroll-mt-20"
      id="showcase"
    >
      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-dark dark:text-primary-light text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Portofolio Pilihan
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            Karya Kami <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Untuk Klien Hebat
            </span>
          </h2>
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <p className="text-gray-800 dark:text-gray-200 max-w-sm text-sm md:text-lg text-left leading-relaxed font-medium">
            Kami membangun website yang tidak hanya bagus secara visual, tapi
            juga berdampak nyata bagi bisnis Anda.
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
              className={`relative h-[500px] md:h-[500px] lg:h-[550px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-white dark:bg-slate-800 border-[3px] border-gray-100 dark:border-slate-700 shadow-xl transition-all duration-500 flex flex-col`}
            >
              {/* Image Top */}
              <div className="h-[200px] md:h-[220px] lg:h-[250px] overflow-hidden relative border-b border-gray-100 dark:border-slate-700">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur text-gray-900 text-xs font-bold rounded-full shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Business Context Content */}
              <div className="p-5 md:p-6 lg:p-8 flex-1 flex flex-col relative bg-white dark:bg-slate-800">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 md:mb-6">
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
                        Goals
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
                        Fungsi
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
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
          *Geser untuk melihat project lainnya
        </p>
      </div>
    </section>
  );
}
