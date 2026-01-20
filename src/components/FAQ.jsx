import { useState } from "react";
import { CaretDown } from "phosphor-react";
import { useSiteData } from "../context/SiteContext";

export default function FAQ() {
  const { faqs: sanityFaqs } = useSiteData();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = sanityFaqs || [];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-24 bg-bg-surface dark:bg-slate-900 transition-colors duration-300"
      id="faq"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
          {/* Header (Sticky on Desktop) */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-indigo-900 dark:text-indigo-100 text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Common Questions
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              Sering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Ditanyakan
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              Jawaban cepat untuk pertanyaan yang sering muncul. Masih bingung?{" "}
              <a
                href="#contact"
                className="text-indigo-600 dark:text-indigo-400 font-semibold underline decoration-wavy"
              >
                Chat WhatsApp aja.
              </a>
            </p>
          </div>

          {/* Accordion List */}
          <div className="lg:w-2/3 space-y-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-100 dark:border-slate-800 last:border-0"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start justify-between py-6 text-left focus:outline-none group"
                >
                  <span
                    className={`font-bold text-lg md:text-xl pr-8 transition-colors ${
                      openIndex === index
                        ? "text-primary"
                        : "text-gray-900 dark:text-white group-hover:text-primary"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`mt-1 transition-transform duration-300 ${
                      openIndex === index
                        ? "rotate-180 text-primary"
                        : "text-gray-500"
                    }`}
                  >
                    <CaretDown size={24} weight="bold" />
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-8 text-gray-700 dark:text-gray-200 leading-relaxed text-base md:text-lg">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
