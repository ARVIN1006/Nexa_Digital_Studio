import {
  Lightning,
  MagnifyingGlassPlus,
  DeviceMobileCamera,
  Cursor,
  ShieldCheck,
  Code,
  Cube,
  Rocket,
  PaintBrush,
  Lightbulb,
  Users,
  ChartLine,
  Globe,
  Strategy,
  TrendUp,
} from "phosphor-react";
import { useSiteData } from "../context/SiteContext";
import { BenefitsSkeleton } from "./Skeletons";

// Icon Mapping to avoid large bundle size
const ICON_MAP = {
  Lightning,
  MagnifyingGlassPlus,
  DeviceMobileCamera,
  Cursor,
  ShieldCheck,
  Code,
  Cube,
  Rocket,
  PaintBrush,
  Lightbulb,
  Users,
  ChartLine,
  Globe,
  Strategy,
  TrendUp,
};

export default function Benefits() {
  const { benefits: sanityBenefits, loading } = useSiteData();

  const activeBenefits = sanityBenefits.map((b) => ({
    icon: b.icon,
    title: b.title, // Note: This remains from Sanity (likely ID only)
    desc: b.description,
    color: "text-primary",
    bg: "bg-primary/10",
  }));

  if (loading) return <BenefitsSkeleton />;

  return (
    <section
      className="py-12 md:py-16 bg-bg-surface dark:bg-slate-900 transition-colors duration-300 scroll-mt-20"
      id="benefits"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:items-start md:text-left items-center text-center max-w-4xl md:mx-0 mx-auto mb-20 relative">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-indigo-900 dark:text-indigo-100 text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Keunggulan Kami
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Kami memberikan solusi terbaik untuk kebutuhan digital Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeBenefits.map((item, index) => {
            const IconComponent = ICON_MAP[item.icon] || ICON_MAP.Cube;
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-slate-700 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}
                >
                  <IconComponent size={32} weight="fill" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-xs md:text-[0.95rem]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
