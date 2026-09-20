import { ExternalLink, Download } from 'lucide-react';

export default function Documents() {
  const documents = [
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
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#0a0d14] pt-4 sm:pt-8 md:pt-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">Documents</h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-10 sm:mb-16 max-w-2xl leading-relaxed transition-colors">
          Every document is a static PDF. Open it in the browser, or download it. The rules document needs no software engineering background.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((doc, index) => (
            <div key={index} className="p-6 sm:p-8 bg-[#f8f9fa] dark:bg-[#111726] border border-gray-200 dark:border-gray-800 rounded-xl flex flex-col h-full shadow-xs hover:shadow-md transition-all">
              
              {/* Top row: Pill and File Info */}
              <div className="flex justify-between items-center mb-6 sm:mb-8">
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1 rounded-full border border-gray-200/60 dark:border-gray-700/60">
                  {doc.pill}
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                  {doc.fileInfo}
                </span>
              </div>

              {/* Title and Description */}
              <h3 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors">{doc.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6 flex-grow transition-colors">{doc.description}</p>
              
              {/* Updated text */}
              <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 mb-6 sm:mb-8">{doc.updated}</p>

              {/* Action Buttons: View and Download */}
              <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 mt-auto">
                <a
                  href={doc.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#111827] text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors shadow-xs cursor-pointer text-center"
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
    </div>
  );
}
