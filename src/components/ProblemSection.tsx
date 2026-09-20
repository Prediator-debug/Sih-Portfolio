import { ArrowRight } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section id="problem" className="py-16 md:py-24 bg-[#FDFBF7] dark:bg-[#0b1118] font-sans border-y border-gray-100 dark:border-gray-800 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-serif text-[#0F2926] dark:text-white leading-[1.15] mb-6 md:mb-8 max-w-[750px] transition-colors">
            Every Package Has a Story. Compliance Should Be Easy to Verify.
          </h2>
          <p className="text-base sm:text-lg md:text-[20px] text-gray-600 dark:text-gray-300 leading-relaxed max-w-[850px] transition-colors">
            Packaged commodities must carry important declarations such as MRP, net quantity, manufacturer or importer details, consumer care information and other mandatory information. Checking these declarations manually is time-consuming and difficult to scale.
          </p>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-12 md:mb-16">
          {/* Card 1 */}
          <div className="bg-white dark:bg-[#111726] border border-gray-200 dark:border-gray-800 rounded-xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-black/40 flex flex-col h-full">
            <h3 className="text-xl sm:text-2xl font-serif text-[#0F2926] dark:text-white mb-3 sm:mb-4 leading-tight transition-colors">
              Compliance is difficult to check manually.
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed flex-grow transition-colors">
              An officer may need to inspect product name, MRP, net quantity, manufacturer/packer/importer details, address, consumer care information, dates and other mandatory declarations from different parts of a package.
            </p>
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100 dark:border-gray-800">
              <p className="text-[10px] sm:text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                Too much information. Too much manual effort.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-[#111726] border border-gray-200 dark:border-gray-800 rounded-xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-black/40 flex flex-col h-full">
            <h3 className="text-xl sm:text-2xl font-serif text-[#0F2926] dark:text-white mb-3 sm:mb-4 leading-tight transition-colors">
              Important information can be missed.
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed flex-grow transition-colors">
              Small text, poor image quality, reflections, damaged packaging, curved surfaces, multiple languages and stylized fonts can make declarations difficult to identify, read or verify consistently.
            </p>
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100 dark:border-gray-800">
              <p className="text-[10px] sm:text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                Missing or unclear declarations need attention.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-[#111726] border border-gray-200 dark:border-gray-800 rounded-xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-black/40 flex flex-col h-full md:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-serif text-[#0F2926] dark:text-white mb-3 sm:mb-4 leading-tight transition-colors">
              Inspection evidence is hard to manage at scale.
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed flex-grow transition-colors">
              Large-scale inspections require structured evidence, violation records, inspection history and consistent reporting. Manual processes make it difficult to track repeat violations and prioritize high-risk products or manufacturers.
            </p>
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100 dark:border-gray-800">
              <p className="text-[10px] sm:text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                Inspection should create useful intelligence, not just a report.
              </p>
            </div>
          </div>
        </div>

        {/* Quote Box */}
        <div className="w-full bg-white dark:bg-[#111726] border border-gray-200 dark:border-gray-800 rounded-xl p-6 sm:p-10 md:p-14 mb-16 md:mb-24 text-center shadow-xs dark:shadow-none transition-colors">
          <p className="text-lg sm:text-2xl md:text-3xl font-serif text-[#0F2926] dark:text-white leading-snug mb-4 sm:mb-6 max-w-4xl mx-auto transition-colors">
            &ldquo;AI can assist in finding declarations and potential violations &mdash; but the final compliance decision must remain with the authorized officer.&rdquo;
          </p>
          <p className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500 uppercase tracking-[0.15em] font-medium">
            Human-in-the-loop compliance
          </p>
        </div>

        {/* Problem -> Need */}
        <div className="w-full max-w-4xl text-center">
          <h4 className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-4 sm:mb-6 font-semibold">
            The need
          </h4>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed mb-10 md:mb-16 transition-colors">
            We need a system that can scan product images and labels, extract important declarations using OCR and AI, check them against a configurable Legal Metrology rule engine, highlight potential issues, preserve evidence and help officers make faster, better-informed decisions.
          </p>
          
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider bg-white dark:bg-[#151d2a] border border-gray-200/90 dark:border-gray-700/90 py-3 sm:py-4 px-4 sm:px-8 rounded-2xl sm:rounded-full shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all">
            <span>Product</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 dark:text-emerald-400 stroke-[2.5]" />
            <span>Scan</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 dark:text-emerald-400 stroke-[2.5]" />
            <span>Extract</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 dark:text-emerald-400 stroke-[2.5]" />
            <span>Check</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 dark:text-emerald-400 stroke-[2.5]" />
            <span>Verify</span>
          </div>
        </div>

      </div>
    </section>
  );
}
