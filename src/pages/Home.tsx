import { CheckCircle2, AlertTriangle, FileText, Shield, BarChart3, Clock, ExternalLink, Download } from 'lucide-react';
import ProblemSection from '../components/ProblemSection';
import WorkflowDiagram from '../components/WorkflowDiagram';
import TeamMemberCard from '../components/TeamMemberCard';

export default function Home() {
  return (
    <div>
      <section id="hero" className="min-h-[75vh] md:min-h-[80vh] flex items-center bg-[#f8f9fa] pt-6 sm:pt-10 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="max-w-2xl text-left">
            <div className="text-xs sm:text-sm font-medium text-gray-500 mb-4 sm:mb-6 flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span>LMPC 2011</span>
              <span>&middot;</span>
              <span>Compliance Software</span>
              <span>&middot;</span>
              <span>Smart Automation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 leading-[1.15] mb-6 sm:mb-8">
              Automated compliance <br/> in one scan.
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed">
              For Packaged Commodities, manual label checking is slow and prone to error. Our software system scans products, images, and labels to instantly verify compliance against the Legal Metrology (Packaged Commodities) Rules, 2011.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#how-it-works" className="bg-[#e8e4d9] text-[#1B4332] px-6 py-3.5 rounded-lg font-medium hover:bg-[#d5cfbd] transition-colors text-center text-sm sm:text-base">
                How it works
              </a>
              <a href="/documents" className="bg-white border border-gray-200 text-gray-900 px-6 py-3.5 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center text-sm sm:text-base">
                Read the rules
              </a>
            </div>
          </div>
          
          {/* Clean Professional Animated Card */}
          <div className="relative hero-card-wrapper">
            {/* Soft floating background shapes */}
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-gray-200/60 rounded-full animate-[floatA_6s_ease-in-out_infinite] blur-sm"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gray-300/40 rounded-full animate-[floatB_8s_ease-in-out_infinite] blur-sm"></div>
            <div className="absolute top-1/2 -right-3 w-14 h-14 bg-gray-200/50 rounded-full animate-[floatC_7s_ease-in-out_infinite] blur-sm"></div>

            <div className="relative bg-white rounded-2xl shadow-[0_4px_40px_rgba(0,0,0,0.06)] border border-gray-100 p-6 max-h-[520px] aspect-square flex flex-col transition-shadow duration-500 hover:shadow-[0_8px_50px_rgba(0,0,0,0.1)] overflow-hidden">
              
              {/* Header */}
              <div className="flex justify-between items-start pb-4 mb-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#1B4332] rounded-lg">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-[15px]">Compliance Report</h3>
                    <p className="text-xs text-gray-400 mt-0.5">Automated verification</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 rounded-full">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-xs font-medium text-emerald-700">Processing</span>
                </div>
              </div>

              {/* Document Preview Area */}
              <div className="flex-1 relative bg-gray-50 rounded-xl border border-gray-100 overflow-hidden flex flex-col">
                
                {/* Document mockup */}
                <div className="p-5 flex-1 flex flex-col">
                  {/* Document icon header */}
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-400 font-medium">product_label.jpg</span>
                    <div className="flex-1"></div>
                    <span className="text-[10px] text-gray-300 font-mono">LMPC-2011</span>
                  </div>
                  
                  {/* Simulated text lines being scanned */}
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-3">
                      <div className="h-2.5 flex-1 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-300 rounded-full animate-[fillLine1_4s_ease-in-out_infinite]"></div>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 animate-[fadeCheck_4s_ease-in-out_infinite]" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2.5 w-4/5 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-300 rounded-full animate-[fillLine2_4s_ease-in-out_infinite]"></div>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 animate-[fadeCheck2_4s_ease-in-out_infinite]" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2.5 w-3/5 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-300 rounded-full animate-[fillLine3_4s_ease-in-out_infinite]"></div>
                      </div>
                      <AlertTriangle className="w-4 h-4 text-amber-500 animate-[fadeCheck3_4s_ease-in-out_infinite]" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2.5 w-11/12 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-300 rounded-full animate-[fillLine4_4s_ease-in-out_infinite]"></div>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 animate-[fadeCheck4_4s_ease-in-out_infinite]" />
                    </div>
                  </div>

                  {/* Progress ring and stats */}
                  <div className="flex items-center gap-5 mt-4 pt-4 border-t border-gray-100">
                    {/* Circular progress */}
                    <div className="relative w-14 h-14 flex-shrink-0">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 56 56">
                        <circle cx="28" cy="28" r="24" fill="none" stroke="#e5e7eb" strokeWidth="4" />
                        <circle cx="28" cy="28" r="24" fill="none" stroke="#1B4332" strokeWidth="4" strokeLinecap="round"
                          strokeDasharray="150.8"
                          className="animate-[progressRing_4s_ease-in-out_infinite]"
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-[#1B4332] animate-[countUp_4s_ease-in-out_infinite]">75%</span>
                    </div>
                    <div className="flex-1 space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Fields verified</span>
                        <span className="font-semibold text-gray-700">6 / 8</span>
                      </div>
                      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#1B4332] rounded-full animate-[progressBar_4s_ease-in-out_infinite]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scanning line - clean, subtle */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-60 animate-[scanClean_3s_ease-in-out_infinite] z-10"></div>
              </div>

              {/* Bottom stats row */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100 animate-[statPop1_4s_ease-in-out_infinite]">
                  <BarChart3 className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                  <span className="text-sm font-bold text-gray-900 block">98.2%</span>
                  <span className="text-[10px] text-gray-400">Accuracy</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100 animate-[statPop2_4s_ease-in-out_infinite]">
                  <Clock className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                  <span className="text-sm font-bold text-gray-900 block">1.2s</span>
                  <span className="text-[10px] text-gray-400">Scan time</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100 animate-[statPop3_4s_ease-in-out_infinite]">
                  <FileText className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                  <span className="text-sm font-bold text-gray-900 block">8</span>
                  <span className="text-[10px] text-gray-400">Fields</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProblemSection />

      <section id="how-it-works" className="py-16 md:py-24 bg-[#e8e4d9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-8 md:mb-16">
            One scan, complete compliance
          </h2>

          {/* Animated Interactive Flowchart */}
          <WorkflowDiagram />

          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8">
              <span className="text-blue-600 font-medium">Blue</span> is the formatting branch. <span className="text-[#C84B31] font-medium">Coral</span> is the mandatory declarations branch.
            </p>
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-4 sm:mb-6">
              Formatting checks and mandatory declarations are not two problems that require separate manual reviews. They are two results of one scan. If you verify them manually, the result is always slower and prone to human error.
            </p>
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              A single automated scan extracts the data instantly. The rules engine then processes this data against all LMPC 2011 parameters simultaneously. This is the system that turns "read the label carefully" into a deterministic, split-second calculation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8 sm:mb-12">
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              Our compliance system is a continuous intelligence loop. It doesn't just read text; it understands the context of the LMPC 2011 guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            <div className="bg-[#f8f9fa] p-6 sm:p-8 rounded-xl border border-gray-200 shadow-xs">
              <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Measure.</h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                Extract raw text, layout coordinates, and font sizes from the product image using high-precision Optical Character Recognition (OCR).
              </p>
            </div>
            
            <div className="bg-[#f8f9fa] p-6 sm:p-8 rounded-xl border border-gray-200 shadow-xs">
              <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Predict.</h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                Parse the raw data into structured, meaningful fields (e.g., MRP, Net Quantity, Customer Care) using NLP and fuzzy matching algorithms.
              </p>
            </div>

            <div className="bg-[#f8f9fa] p-6 sm:p-8 rounded-xl border border-gray-200 shadow-xs">
              <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Recommend.</h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                Run the structured data through the deterministic rules engine. Instantly generate a Pass/Fail compliance report with highlighted violations.
              </p>
            </div>

            <div className="bg-[#f8f9fa] p-6 sm:p-8 rounded-xl border border-gray-200 shadow-xs">
              <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Learn.</h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                Continuously improve accuracy by feeding manual inspector corrections and new packaging styles back into the core machine learning models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section id="documents" className="py-16 md:py-24 bg-white dark:bg-[#0a0d14] border-t border-gray-100 dark:border-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">Documents</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-10 sm:mb-16 max-w-2xl leading-relaxed transition-colors">
            Every document is a static PDF. Open it in the browser, or download it. The rules document needs no software engineering background.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                pill: "Background & Rules",
                title: "Legal Metrology (Packaged Commodities) Rules, 2011",
                description: "Complete statutory reference and research documentation for Packaged Commodities Rules, 2011. Details mandatory declarations, amendments, and compliance standards.",
                fileInfo: "PDF · 8.6 MB",
                updated: "Updated September 2026",
                fileUrl: "/documents/Legal-Metrology-Packaged-Commodities-Rules-2011.pdf",
                fileName: "Legal-Metrology-Packaged-Commodities-Rules-2011.pdf"
              },
              {
                pill: "Technical reference",
                title: "Drithya Software Architecture",
                description: "Technical reference detailing the OCR pipeline, rules engine logic, and deterministic verification process.",
                fileInfo: "Image · 781 KB",
                updated: "Updated September 2026",
                fileUrl: "/documents/Drithya-Software-Architecture.png",
                fileName: "Drithya-Software-Architecture.png"
              },
              {
                pill: "Integration",
                title: "Scanner API Integration Guide",
                description: "Documentation for integrating the compliance scanning API into existing factory line or warehouse management systems.",
                fileInfo: "PDF · 878 KB",
                updated: "Updated September 2026",
                fileUrl: "/documents/Scanner-API-Integration-Guide.pdf",
                fileName: "Scanner-API-Integration-Guide.pdf"
              },
              {
                pill: "Presentation",
                title: "Project presentation",
                description: "High-level overview of the compliance software, its benefits, and the impact of automation on supply chain efficiency.",
                fileInfo: "PDF · 119 KB",
                updated: "Updated September 2026",
                fileUrl: "/documents/DrishtiTathya-Project-Presentation.pdf",
                fileName: "DrishtiTathya-Project-Presentation.pdf"
              }
            ].map((doc, index) => (
              <div key={index} className="p-6 sm:p-8 bg-[#f8f9fa] dark:bg-[#111726] border border-gray-200 dark:border-gray-800 rounded-xl flex flex-col h-full shadow-xs hover:shadow-md transition-all">
                <div className="flex justify-between items-center mb-6 sm:mb-8">
                  <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1 rounded-full border border-gray-200/60 dark:border-gray-700/60">
                    {doc.pill}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                    {doc.fileInfo}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">{doc.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6 flex-grow transition-colors">{doc.description}</p>
                <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 mb-6 sm:mb-8">{doc.updated}</p>
                <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 mt-auto">
                  <a
                    href={doc.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#e8e4d9] text-[#1B4332] dark:bg-white dark:text-[#1B4332] dark:hover:bg-gray-100 text-sm font-medium rounded-lg hover:bg-[#d5cfbd] transition-colors shadow-xs cursor-pointer text-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View
                  </a>
                  <a
                    href={doc.fileUrl}
                    download={doc.fileName}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-transparent border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-200 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer text-center"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 md:py-24 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-4 sm:mb-6">Team</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-10 sm:mb-16 max-w-2xl leading-relaxed">
            We are a cross-functional team of software engineers and legal domain experts dedicated to automating compliance and reducing regulatory friction.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {[
              {
                name: "Aditya Ubale",
                role: "Team Leader & Legal Domain Strategist",
                bio: "Led the team from ideation to execution by researching the Legal Metrology domain and understanding the requirements of the Legal Metrology (Packaged Commodities) Rules, 2011. Defined the core features, project requirements, and overall solution approach while coordinating team responsibilities and guiding the development process to address real-world packaged commodity compliance challenges.",
                image: "images/file_0000000010d48210962ae482b960a639.png",
                linkedin: "https://www.linkedin.com/in/aditya-ubale-3347142b3/"
              },
              {
                name: "Aryan Date",
                role: "Web Developer & Legal Domain Specialist",
                bio: "Designed and developed the Packaged Commodities Compliance System, implementing responsive frontend interfaces, backend services, API integration, and database connectivity. Developed modules for product data management, OCR-based information extraction, compliance validation, violation detection, evidence management, and compliance report generation. Integrated frontend and backend components to deliver a scalable, user-friendly, and efficient system for automated packaged commodity compliance checking.",
                image: "/images/IMG_3455.PNG",
                linkedin: "https://www.linkedin.com/in/aryan-date-1457062b3/"
              },
              {
                name: "Shubham Torkad",
                role: "Full-Stack Developer",
                bio: "Developed the core application across frontend and backend, building the end-to-end workflow for product scanning and compliance analysis. Integrated OCR and computer vision capabilities for processing product images, extracting relevant information from labels, and preparing structured data for automated validation. Also handled API integration, system integration, and deployment to deliver a complete and functional solution.",
                image: "/images/shubham.png",
                linkedin: "https://www.linkedin.com/in/shubham-torkad-b821bb289/"
              },
              {
                name: "Somiya Singh",
                role: "Documentation & Presentation Lead",
                bio: "Gathered and organized key project information, contributed to comprehensive project documentation, and designed the project presentation (PPT). Ensured that the solution’s objectives, features, workflow, and technical aspects were clearly structured and effectively communicated for presentations and evaluations.",
                image: "/images/somee.jpeg",
                linkedin: "https://www.linkedin.com/in/somiya-singh-3803872b4"
              },
              {
                name: "Tanmayee Borchate",
                role: "Project Support & Research Associate",
                bio: "Supported the team throughout the project by assisting with information gathering, research, and project discussions. Contributed ideas and feedback during the development process and helped the team refine and present the overall solution effectively.",
                image: "/images/tanmayee.png",
                linkedin: "https://www.linkedin.com/in/tanmayee-borchate28"
              },
              {
                name: "Sharayu Nagulkar",
                role: "Research & Feature Planning Coordinator",
                bio: "Contributed to the project through information and data gathering, documentation support, and feature planning. Provided valuable insights on potential features and improvements, evaluated ideas from a practical user perspective, and helped the team refine the solution to make it more effective, relevant, and user-focused.",
                image: "/images/IMG_3457.PNG",
                linkedin: "https://www.linkedin.com/in/sharayu-nagulkar-064045317"
              }
            ].map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>
      
      <style>{`
        /* Floating background shapes */
        @keyframes floatA {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-12px) scale(1.05); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(10px) scale(0.95); }
        }
        @keyframes floatC {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-8px) translateY(-6px); }
        }

        /* Line fill animations — staggered */
        @keyframes fillLine1 {
          0%, 10% { width: 0%; }
          25%, 100% { width: 100%; }
        }
        @keyframes fillLine2 {
          0%, 20% { width: 0%; }
          40%, 100% { width: 100%; }
        }
        @keyframes fillLine3 {
          0%, 35% { width: 0%; }
          55%, 100% { width: 100%; }
        }
        @keyframes fillLine4 {
          0%, 50% { width: 0%; }
          70%, 100% { width: 100%; }
        }

        /* Check icon fade-ins — staggered */
        @keyframes fadeCheck {
          0%, 22% { opacity: 0; transform: scale(0.5); }
          30%, 100% { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeCheck2 {
          0%, 37% { opacity: 0; transform: scale(0.5); }
          45%, 100% { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeCheck3 {
          0%, 52% { opacity: 0; transform: scale(0.5); }
          60%, 100% { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeCheck4 {
          0%, 67% { opacity: 0; transform: scale(0.5); }
          75%, 100% { opacity: 1; transform: scale(1); }
        }

        /* Progress ring — SVG stroke dashoffset */
        @keyframes progressRing {
          0% { stroke-dashoffset: 150.8; }
          70%, 100% { stroke-dashoffset: 37.7; }
        }

        /* Progress bar width */
        @keyframes progressBar {
          0% { width: 0%; }
          70%, 100% { width: 75%; }
        }

        /* Count up text opacity (simple pulse feel) */
        @keyframes countUp {
          0%, 65% { opacity: 0.3; }
          75%, 100% { opacity: 1; }
        }

        /* Clean scan line */
        @keyframes scanClean {
          0% { top: 0; opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { top: 100%; opacity: 0; }
        }

        /* Stat card pop-ins — staggered */
        @keyframes statPop1 {
          0%, 72% { opacity: 0; transform: translateY(8px); }
          82%, 100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes statPop2 {
          0%, 78% { opacity: 0; transform: translateY(8px); }
          88%, 100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes statPop3 {
          0%, 84% { opacity: 0; transform: translateY(8px); }
          94%, 100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
