import { useState, useRef, useEffect } from "react";
import { ArrowRight } from "phosphor-react";
import { client, urlFor } from "../lib/sanity";
import project1 from "../assets/project-1.webp";
import project2 from "../assets/project-2.webp";
import project3 from "../assets/project-3.webp";
import project4 from "../assets/project-4.webp";

export default function Showcase() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [sanityProjects, setSanityProjects] = useState([]);

  const staticProjects = [
    {
      id: 1,
      title: "Web Personal Branding",
      category: "Influencer",
      img: project1,
      accent: "border-pink-200 shadow-pink-500/10",
      previewUrl: "#",
    },
    {
      id: 2,
      title: "Website UMKM Kuliner",
      category: "F&B Business",
      img: project2,
      accent: "border-orange-200 shadow-orange-500/10",
      previewUrl: "#",
    },
    {
      id: 3,
      title: "Corporate Company Profile",
      category: "Finance",
      img: project3,
      accent: "border-blue-200 shadow-blue-500/10",
      previewUrl: "#",
    },
    {
      id: 4,
      title: "Aplikasi Reservasi Klinik",
      category: "Healthcare App",
      img: project4,
      accent: "border-teal-200 shadow-teal-500/10",
      previewUrl: "#",
    },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "project"] | order(_createdAt desc)`;
        const data = await client.fetch(query);
        if (data && data.length > 0) {
          const formatted = data.map((proj) => ({
            id: proj._id,
            title: proj.title,
            category: proj.category,
            img: urlFor(proj.mainImage).quality(80).url(),
            accent: proj.accent || "border-gray-200 shadow-gray-500/10",
            previewUrl: proj.previewUrl || "#",
          }));
          setSanityProjects(formatted);
        }
      } catch (error) {
        console.error("Sanity fetch error:", error);
      }
    };

    fetchProjects();
  }, []);

  const activeProjects =
    sanityProjects.length > 0 ? sanityProjects : staticProjects;

  const DUPLICATION_COUNT = 8;
  const infiniteProjects = Array(DUPLICATION_COUNT).fill(activeProjects).flat();

  // Handle Infinite Looping Logic via onScroll
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    // Calculate width of one original set
    // total scroll width / number of duplicates
    const totalWidth = container.scrollWidth;
    const oneSetWidth = totalWidth / DUPLICATION_COUNT;

    // Bounds for resetting
    const rightThreshold = oneSetWidth * (DUPLICATION_COUNT - 2); // Near end
    const leftThreshold = oneSetWidth; // Near start

    // If scrolled too far right -> jump back 4 sets
    if (container.scrollLeft >= rightThreshold) {
      container.scrollLeft -= oneSetWidth * 4;
    }
    // If scrolled too far left -> jump forward 4 sets
    else if (container.scrollLeft <= leftThreshold) {
      container.scrollLeft += oneSetWidth * 4;
    }
  };

  // Initial Centering
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      // Start in the middle
      const totalWidth = container.scrollWidth;
      container.scrollLeft = totalWidth / 2 - container.clientWidth / 2;
    }
  }, []);

  // Auto-scroll Animation Loop
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId;
    const animate = () => {
      if (!isPaused && !isDragging) {
        container.scrollLeft += 1;
        // Note: The handleScroll function logic will catch the "too far" case
        // separately because it fires on scroll event, but for smooth auto-scroll we trigger it manually slightly?
        // Actually, changing scrollLeft triggers the native 'scroll' event, so handleScroll will run.
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused, isDragging]);

  // Drag Handlers
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

  return (
    <section
      className="py-24 bg-bg-surface dark:bg-slate-900 transition-colors duration-300 overflow-hidden"
      id="showcase"
    >
      <div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Eksplorasi Karya
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-gray-900 dark:text-white leading-tight mb-6">
            Karya Yang <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-400 dark:from-white dark:via-gray-400 dark:to-gray-700">
              Bicara Kualitas.
            </span>
          </h2>
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <p className="text-gray-500 dark:text-gray-400 max-w-sm text-lg text-left leading-relaxed">
            Website dan aplikasi yang membantu bisnis tumbuh. Bukan sekadar
            template, tapi solusi custom.
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
            className="w-[85vw] md:w-[450px] flex-shrink-0 select-none"
          >
            <a
              href={project.previewUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => {
                // Prevent navigation if we were dragging
                if (isDragging) e.preventDefault();
              }}
              className={`group block relative h-[400px] md:h-[550px] rounded-[2rem] overflow-hidden bg-white dark:bg-slate-800 border-4 border-transparent dark:border-slate-700/50 hover:border-primary/20 dark:hover:border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 ${project.accent} cursor-pointer`}
            >
              <img
                src={project.img}
                alt={`${project.title} - Jasa Pembuatan Website Bandung`}
                width="400"
                height="550"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent opacity-80 md:opacity-60 md:group-hover:opacity-90 transition-all duration-300 pointer-events-none"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold rounded-full mb-3 shadow-lg">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <div className="h-0 md:group-hover:h-8 transition-all duration-300 overflow-hidden opacity-0 md:group-hover:opacity-100">
                    <span className="text-white/80 text-sm font-medium flex items-center gap-2 mt-2">
                      Lihat Detail Project <ArrowRight weight="bold" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Mobile View All Button Removed until Portfolio page is ready */}
      {/* <div className="container mx-auto px-6 mt-4 md:hidden flex justify-center">
        <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all p-4">
          Lihat Semua Project <ArrowRight weight="bold" />
        </button>
      </div> */}
    </section>
  );
}
