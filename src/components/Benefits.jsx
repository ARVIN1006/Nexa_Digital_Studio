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
  const { benefits: sanityBenefits } = useSiteData();

  const activeBenefits = sanityBenefits.map((b) => ({
    icon: b.icon,
    title: b.title,
    desc: b.description,
    color: "text-primary",
    bg: "bg-primary/10",
  }));

  return (
    <section
      className="py-20 bg-bg-surface dark:bg-slate-900 transition-colors duration-300"
      id="benefits"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:items-start md:text-left items-center text-center max-w-4xl md:mx-0 mx-auto mb-20 relative">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Komitmen Kami
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 leading-tight">
            Bukan Sekadar <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative inline-block">
              Estetika Visual.
              <span className="absolute bottom-1 left-0 w-full h-1/3 bg-primary/20 -z-10 -skew-x-12"></span>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-300 max-w-2xl leading-relaxed">
            Kami membangun{" "}
            <strong className="text-gray-900 dark:text-white">
              mesin pertumbuhan bisnis
            </strong>
            . Setiap pixel dan baris kode dirancang untuk satu tujuan: Profit
            Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeBenefits.map((item, index) => {
            const IconComponent = ICON_MAP[item.icon] || ICON_MAP.Cube;
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-gray-100 dark:border-slate-700 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}
                >
                  <IconComponent size={32} weight="fill" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-[0.95rem]">
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
