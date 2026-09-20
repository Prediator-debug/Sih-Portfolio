import { useState, useEffect } from 'react';
import { 
  Camera, 
  ScanText, 
  Binary, 
  Database, 
  CheckCircle2, 
  Scale, 
  Headphones, 
  Building2, 
  ShieldCheck, 
  Play,
  Pause,
  ArrowRight,
  ArrowDown
} from 'lucide-react';

export default function WorkflowDiagram() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Auto-cycle through the steps every 1.8 seconds when playing and not hovering
  useEffect(() => {
    if (!isPlaying || hoveredNode !== null) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6);
    }, 1800);
    return () => clearInterval(interval);
  }, [isPlaying, hoveredNode]);

  // Step indices:
  // 0: capture
  // 1: ocr
  // 2: parse
  // 3: structured
  // 4: branches (blue & coral parallel verification)
  // 5: final report

  const isStepActive = (stepIndex: number, nodeId?: string) => {
    if (hoveredNode) {
      return hoveredNode === nodeId;
    }
    return activeStep === stepIndex;
  };

  const isBranchActive = () => {
    if (hoveredNode) {
      return ['mrp', 'net-qty', 'customer-care', 'manufacturer'].includes(hoveredNode);
    }
    return activeStep === 4;
  };

  return (
    <div className="relative mb-16 text-center select-none">
      {/* Top Interactive Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 max-w-5xl mx-auto mb-8 md:mb-10 px-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-white/80 dark:bg-gray-800/90 text-gray-700 dark:text-gray-200 border border-gray-300/80 dark:border-gray-700 shadow-xs backdrop-blur-sm">
            <span className={`w-2 h-2 rounded-full mr-2 ${isPlaying ? 'bg-emerald-500 animate-pulse' : 'bg-amber-400'}`}></span>
            {isPlaying ? 'Live Pipeline Flow Active' : 'Simulation Paused'}
          </span>
          <span className="hidden sm:inline-text text-xs text-gray-600 dark:text-gray-400 font-normal">
            (Hover or tap any step to inspect &amp; pause)
          </span>
        </div>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-xs transition-all duration-200 cursor-pointer"
          title={isPlaying ? "Pause automatic animation" : "Resume automatic animation"}
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5 text-gray-600" />
              <span>Pause flow</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-emerald-600" />
              <span>Resume flow</span>
            </>
          )}
        </button>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP FLOWCHART (md and above) */}
      {/* ========================================================================= */}
      <div className="hidden md:block max-w-6xl mx-auto">
        
        {/* ROW 1: TOP 4 STEPS */}
        <div className="flex flex-row items-center justify-center gap-4 lg:gap-6 mb-8 relative z-10">
          
          {/* STEP 1: CAPTURE IMAGE */}
          <div
            onMouseEnter={() => setHoveredNode('capture')}
            onMouseLeave={() => setHoveredNode(null)}
            className={`group relative bg-[#f8f9fa] border-2 rounded-xl px-5 py-4 w-52 text-left cursor-pointer transition-all duration-300 ease-out
              ${isStepActive(0, 'capture')
                ? 'border-gray-900 bg-white -translate-y-1.5 shadow-lg shadow-gray-400/20 ring-4 ring-gray-900/5'
                : 'border-gray-400/80 hover:border-gray-900 hover:bg-white hover:-translate-y-1 hover:shadow-md'
              }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] tracking-wider uppercase font-bold text-gray-400 group-hover:text-gray-900 transition-colors">
                Step 01
              </span>
              <div className={`p-1.5 rounded-md transition-colors ${isStepActive(0, 'capture') ? 'bg-gray-900 text-white' : 'bg-gray-200/80 text-gray-700 group-hover:bg-gray-900 group-hover:text-white'}`}>
                <Camera className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-sm font-semibold text-gray-900 leading-tight">
              capture image<br />
              <span className="text-gray-600 font-normal">or scan</span>
            </div>
            <div className="mt-2 pt-2 border-t border-gray-100 text-[11px] text-gray-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              High-res label input
            </div>
          </div>

          {/* CONNECTOR 1 -> 2 */}
          <div className="flex items-center justify-center w-10 lg:w-14 relative">
            <div className="w-full h-0.5 bg-gray-400 relative overflow-hidden">
              <div
                className={`absolute top-0 left-0 h-full bg-gray-900 transition-all duration-500
                  ${activeStep >= 1 || hoveredNode === 'ocr' ? 'w-full' : 'w-0'}`}
              ></div>
              {isPlaying && (
                <div className="absolute top-[-2px] w-2 h-2 rounded-full bg-gray-900 animate-[flowDotH_1.8s_linear_infinite]"></div>
              )}
            </div>
            <ArrowRight className={`w-4 h-4 -ml-1 transition-colors ${activeStep >= 1 ? 'text-gray-900' : 'text-gray-400'}`} />
          </div>

          {/* STEP 2: OCR EXTRACTION */}
          <div
            onMouseEnter={() => setHoveredNode('ocr')}
            onMouseLeave={() => setHoveredNode(null)}
            className={`group relative bg-[#f8f9fa] border-2 rounded-xl px-5 py-4 w-52 text-left cursor-pointer transition-all duration-300 ease-out
              ${isStepActive(1, 'ocr')
                ? 'border-gray-900 bg-white -translate-y-1.5 shadow-lg shadow-gray-400/20 ring-4 ring-gray-900/5'
                : 'border-gray-400/80 hover:border-gray-900 hover:bg-white hover:-translate-y-1 hover:shadow-md'
              }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] tracking-wider uppercase font-bold text-gray-400 group-hover:text-gray-900 transition-colors">
                Step 02
              </span>
              <div className={`p-1.5 rounded-md transition-colors ${isStepActive(1, 'ocr') ? 'bg-gray-900 text-white' : 'bg-gray-200/80 text-gray-700 group-hover:bg-gray-900 group-hover:text-white'}`}>
                <ScanText className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-sm font-semibold text-gray-900 leading-tight">
              OCR extraction
            </div>
            <div className="mt-2 pt-2 border-t border-gray-100 text-[11px] text-gray-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              Optical character engine
            </div>
          </div>

          {/* CONNECTOR 2 -> 3 */}
          <div className="flex items-center justify-center w-10 lg:w-14 relative">
            <div className="w-full h-0.5 bg-gray-400 relative overflow-hidden">
              <div
                className={`absolute top-0 left-0 h-full bg-gray-900 transition-all duration-500
                  ${activeStep >= 2 || hoveredNode === 'parse' ? 'w-full' : 'w-0'}`}
              ></div>
              {isPlaying && (
                <div className="absolute top-[-2px] w-2 h-2 rounded-full bg-gray-900 animate-[flowDotH_1.8s_linear_infinite_0.4s]"></div>
              )}
            </div>
            <ArrowRight className={`w-4 h-4 -ml-1 transition-colors ${activeStep >= 2 ? 'text-gray-900' : 'text-gray-400'}`} />
          </div>

          {/* STEP 3: PARSE TEXT */}
          <div
            onMouseEnter={() => setHoveredNode('parse')}
            onMouseLeave={() => setHoveredNode(null)}
            className={`group relative bg-[#f8f9fa] border-2 rounded-xl px-5 py-4 w-52 text-left cursor-pointer transition-all duration-300 ease-out
              ${isStepActive(2, 'parse')
                ? 'border-gray-900 bg-white -translate-y-1.5 shadow-lg shadow-gray-400/20 ring-4 ring-gray-900/5'
                : 'border-gray-400/80 hover:border-gray-900 hover:bg-white hover:-translate-y-1 hover:shadow-md'
              }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] tracking-wider uppercase font-bold text-gray-400 group-hover:text-gray-900 transition-colors">
                Step 03
              </span>
              <div className={`p-1.5 rounded-md transition-colors ${isStepActive(2, 'parse') ? 'bg-gray-900 text-white' : 'bg-gray-200/80 text-gray-700 group-hover:bg-gray-900 group-hover:text-white'}`}>
                <Binary className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-sm font-semibold text-gray-900 leading-tight">
              parse text
            </div>
            <div className="mt-2 pt-2 border-t border-gray-100 text-[11px] text-gray-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              Regex &amp; NLP models
            </div>
          </div>

          {/* CONNECTOR 3 -> 4 */}
          <div className="flex items-center justify-center w-10 lg:w-14 relative">
            <div className="w-full h-0.5 bg-gray-400 relative overflow-hidden">
              <div
                className={`absolute top-0 left-0 h-full bg-gray-900 transition-all duration-500
                  ${activeStep >= 3 || hoveredNode === 'structured' ? 'w-full' : 'w-0'}`}
              ></div>
              {isPlaying && (
                <div className="absolute top-[-2px] w-2 h-2 rounded-full bg-gray-900 animate-[flowDotH_1.8s_linear_infinite_0.8s]"></div>
              )}
            </div>
            <ArrowRight className={`w-4 h-4 -ml-1 transition-colors ${activeStep >= 3 ? 'text-gray-900' : 'text-gray-400'}`} />
          </div>

          {/* STEP 4: STRUCTURED DATA */}
          <div
            onMouseEnter={() => setHoveredNode('structured')}
            onMouseLeave={() => setHoveredNode(null)}
            className={`group relative bg-[#f8f9fa] border-2 rounded-xl px-5 py-4 w-52 text-left cursor-pointer transition-all duration-300 ease-out
              ${isStepActive(3, 'structured')
                ? 'border-gray-900 bg-white -translate-y-1.5 shadow-lg shadow-gray-400/20 ring-4 ring-gray-900/5'
                : 'border-gray-400/80 hover:border-gray-900 hover:bg-white hover:-translate-y-1 hover:shadow-md'
              }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] tracking-wider uppercase font-bold text-gray-400 group-hover:text-gray-900 transition-colors">
                Step 04
              </span>
              <div className={`p-1.5 rounded-md transition-colors ${isStepActive(3, 'structured') ? 'bg-gray-900 text-white' : 'bg-gray-200/80 text-gray-700 group-hover:bg-gray-900 group-hover:text-white'}`}>
                <Database className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-sm font-semibold text-gray-900 leading-tight">
              structured data
            </div>
            <div className="mt-2 pt-2 border-t border-gray-100 text-[11px] text-gray-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Normalized JSON schema
            </div>
          </div>

        </div>

        {/* CONNECTOR SPLIT: TOP ROW DOWN TO BLUE & CORAL BRANCHES */}
        <div className="relative h-12 mb-4">
          <svg className="w-full h-full overflow-visible pointer-events-none" viewBox="0 0 800 48" fill="none">
            <path
              d="M 230 48 L 230 16 Q 230 8 240 8 L 560 8 Q 570 8 570 16 L 570 48"
              stroke="#9ca3af"
              strokeWidth="2"
              strokeDasharray={isPlaying ? "6 6" : "none"}
              className={isPlaying ? "animate-[dashFlow_20s_linear_infinite]" : ""}
            />
            <path
              d="M 400 0 L 400 8"
              stroke="#9ca3af"
              strokeWidth="2"
            />
            <polygon points="230,48 226,40 234,40" fill="#3b82f6" />
            <polygon points="570,48 566,40 574,40" fill="#C84B31" />
          </svg>

          {isPlaying && (
            <>
              <span className="absolute left-[28.5%] top-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
              <span className="absolute right-[28.5%] top-1/2 translate-x-1/2 w-2 h-2 rounded-full bg-[#C84B31] animate-ping"></span>
            </>
          )}
        </div>

        {/* ROW 2: BRANCHES (BLUE FORMATTING & CORAL DECLARATIONS) + CENTER MOUSE */}
        <div className="flex flex-row items-center justify-center gap-14 lg:gap-20 mb-8 relative z-10">
          
          {/* BLUE BRANCH (FORMATTING) */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-100/70 border border-blue-300/80 rounded-full text-[11px] font-semibold text-blue-900 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              Formatting Branch
            </div>

            <div
              onMouseEnter={() => setHoveredNode('mrp')}
              onMouseLeave={() => setHoveredNode(null)}
              className={`group relative bg-[#f8f9fa] border-2 rounded-xl px-6 py-4 w-72 text-left cursor-pointer transition-all duration-300 ease-out
                ${isBranchActive() || hoveredNode === 'mrp'
                  ? 'border-blue-600 bg-blue-50/60 -translate-y-1.5 shadow-lg shadow-blue-500/15 ring-4 ring-blue-500/10 text-blue-950'
                  : 'border-blue-500 text-blue-900 hover:border-blue-600 hover:bg-blue-50/40 hover:-translate-y-1 hover:shadow-md'
                }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold tracking-wider text-blue-500 uppercase">
                  LMPC Rule 5
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full group-hover:scale-105 transition-transform">
                  <CheckCircle2 className="w-3 h-3" /> valid
                </span>
              </div>
              <div className="text-[15px] font-semibold leading-snug">
                verify MRP format <span className="text-blue-500 font-bold">&rarr;</span> valid
              </div>
              <div className="mt-2 text-xs text-blue-700/80 font-normal">
                Format: ₹ inclusive of all taxes &amp; unit sale price (USP)
              </div>
            </div>

            <div className="flex flex-col items-center justify-center h-7 relative">
              <div className="w-0.5 h-full bg-blue-500 relative">
                {isPlaying && (
                  <div className="absolute left-[-2px] w-1.5 h-1.5 rounded-full bg-blue-600 animate-[flowDotV_1.5s_linear_infinite]"></div>
                )}
              </div>
              <ArrowDown className="w-4 h-4 -mt-1 text-blue-500" />
            </div>

            <div
              onMouseEnter={() => setHoveredNode('net-qty')}
              onMouseLeave={() => setHoveredNode(null)}
              className={`group relative bg-[#f8f9fa] border-2 rounded-xl px-6 py-4 w-72 text-left cursor-pointer transition-all duration-300 ease-out
                ${isBranchActive() || hoveredNode === 'net-qty'
                  ? 'border-blue-600 bg-blue-50/60 -translate-y-1.5 shadow-lg shadow-blue-500/15 ring-4 ring-blue-500/10 text-blue-950'
                  : 'border-blue-500 text-blue-900 hover:border-blue-600 hover:bg-blue-50/40 hover:-translate-y-1 hover:shadow-md'
                }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold tracking-wider text-blue-500 uppercase">
                  LMPC Rule 12
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full group-hover:scale-105 transition-transform">
                  <Scale className="w-3 h-3" /> valid
                </span>
              </div>
              <div className="text-[15px] font-semibold leading-snug">
                check net quantity <span className="text-blue-500 font-bold">&rarr;</span> valid
              </div>
              <div className="mt-2 text-xs text-blue-700/80 font-normal">
                Standard metric unit verification &amp; symbol check (g, kg, ml, l)
              </div>
            </div>

          </div>

          {/* CENTER INTERACTIVE MOUSE */}
          <div className="flex flex-col items-center justify-center px-2">
            <div className="group relative flex flex-col items-center justify-center p-3 rounded-2xl bg-white/40 dark:bg-gray-800/40 hover:bg-white/90 dark:hover:bg-gray-800/90 border border-gray-300/70 dark:border-gray-700 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer">
              <div className="w-7 h-12 border-2 border-gray-900 dark:border-white rounded-full flex justify-center relative bg-white dark:bg-gray-900 shadow-xs transition-colors">
                <div className="w-1.5 h-3 bg-gray-900 dark:bg-white rounded-full mt-2 animate-bounce group-hover:bg-blue-600 transition-colors"></div>
              </div>
              <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-gray-900 dark:border-t-white mt-2"></div>
              <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wider group-hover:text-gray-900 dark:group-hover:text-white">
                Parallel
              </span>
            </div>
          </div>

          {/* CORAL BRANCH (DECLARATIONS) */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-red-100/70 border border-red-300/80 rounded-full text-[11px] font-semibold text-[#C84B31] tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C84B31] animate-pulse"></span>
              Declarations Branch
            </div>

            <div
              onMouseEnter={() => setHoveredNode('customer-care')}
              onMouseLeave={() => setHoveredNode(null)}
              className={`group relative bg-[#f8f9fa] border-2 rounded-xl px-6 py-4 w-72 text-left cursor-pointer transition-all duration-300 ease-out
                ${isBranchActive() || hoveredNode === 'customer-care'
                  ? 'border-[#C84B31] bg-red-50/60 -translate-y-1.5 shadow-lg shadow-red-500/15 ring-4 ring-red-500/10 text-red-950'
                  : 'border-[#C84B31] text-[#C84B31] hover:border-[#b03a22] hover:bg-red-50/40 hover:-translate-y-1 hover:shadow-md'
                }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold tracking-wider text-[#C84B31] uppercase">
                  LMPC Rule 6(1)(e)
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full group-hover:scale-105 transition-transform">
                  <Headphones className="w-3 h-3" /> present
                </span>
              </div>
              <div className="text-[15px] font-semibold leading-snug">
                customer care details
              </div>
              <div className="mt-2 text-xs text-[#C84B31]/80 font-normal">
                Name, telephone, email address &amp; consumer helpline verified
              </div>
            </div>

            <div className="flex flex-col items-center justify-center h-7 relative">
              <div className="w-0.5 h-full bg-[#C84B31] relative">
                {isPlaying && (
                  <div className="absolute left-[-2px] w-1.5 h-1.5 rounded-full bg-[#C84B31] animate-[flowDotV_1.5s_linear_infinite]"></div>
                )}
              </div>
              <ArrowDown className="w-4 h-4 -mt-1 text-[#C84B31]" />
            </div>

            <div
              onMouseEnter={() => setHoveredNode('manufacturer')}
              onMouseLeave={() => setHoveredNode(null)}
              className={`group relative bg-[#f8f9fa] border-2 rounded-xl px-6 py-4 w-72 text-left cursor-pointer transition-all duration-300 ease-out
                ${isBranchActive() || hoveredNode === 'manufacturer'
                  ? 'border-[#C84B31] bg-red-50/60 -translate-y-1.5 shadow-lg shadow-red-500/15 ring-4 ring-red-500/10 text-red-950'
                  : 'border-[#C84B31] text-[#C84B31] hover:border-[#b03a22] hover:bg-red-50/40 hover:-translate-y-1 hover:shadow-md'
                }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold tracking-wider text-[#C84B31] uppercase">
                  LMPC Rule 6(1)(a)
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full group-hover:scale-105 transition-transform">
                  <Building2 className="w-3 h-3" /> complete
                </span>
              </div>
              <div className="text-[15px] font-semibold leading-snug">
                manufacturer address
              </div>
              <div className="mt-2 text-xs text-[#C84B31]/80 font-normal">
                Manufacturer / Packer entity name with complete postal premises
              </div>
            </div>

          </div>

        </div>

        {/* CONNECTOR MERGE: BRANCHES DOWN TO COMPLIANCE REPORT */}
        <div className="relative h-12 mb-3">
          <svg className="w-full h-full overflow-visible pointer-events-none" viewBox="0 0 800 48" fill="none">
            <path
              d="M 230 0 L 230 24 Q 230 32 240 32 L 560 32 Q 570 32 570 24 L 570 0"
              stroke="#9ca3af"
              strokeWidth="2"
              strokeDasharray={isPlaying ? "6 6" : "none"}
              className={isPlaying ? "animate-[dashFlow_20s_linear_infinite]" : ""}
            />
            <path
              d="M 400 32 L 400 48"
              stroke="#111827"
              strokeWidth="2.5"
            />
            <polygon points="400,48 395,38 405,38" fill="#111827" />
          </svg>

          {isPlaying && (
            <span className="absolute left-1/2 bottom-0 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
          )}
        </div>

        {/* FINAL ROW: COMPLIANCE REPORT (PASS/FAIL) */}
        <div className="flex justify-center relative z-10">
          <div
            onMouseEnter={() => setHoveredNode('report')}
            onMouseLeave={() => setHoveredNode(null)}
            className={`group relative bg-[#f8f9fa] border-2 rounded-2xl px-8 py-5 w-80 md:w-96 text-center cursor-pointer transition-all duration-300 ease-out
              ${isStepActive(5, 'report')
                ? 'border-gray-900 bg-white -translate-y-2 shadow-xl shadow-emerald-500/15 ring-4 ring-emerald-500/20'
                : 'border-gray-900 hover:bg-white hover:border-gray-950 hover:-translate-y-1.5 hover:shadow-xl'
              }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-gray-900 text-white uppercase tracking-wider">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                Final Output
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                PASS (100% Compliant)
              </span>
            </div>

            <div className="text-lg font-bold text-gray-900 tracking-tight group-hover:text-black transition-colors">
              compliance report (Pass/Fail)
            </div>

            <p className="text-xs text-gray-600 mt-2 font-normal leading-relaxed">
              Deterministic verification generated in &lt;1.2s with tamper-proof audit trail
            </p>

            <div className="mt-3 pt-3 border-t border-gray-200 flex items-center justify-center gap-4 text-xs font-medium text-gray-700">
              <span className="flex items-center gap-1 text-blue-700">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Format: Valid
              </span>
              <span className="text-gray-300">&bull;</span>
              <span className="flex items-center gap-1 text-[#C84B31]">
                <span className="w-2 h-2 rounded-full bg-[#C84B31]"></span>
                Declarations: Complete
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE FLOWCHART (< md, modeled after baghewala-twin mobile flow) */}
      {/* ========================================================================= */}
      <div className="block md:hidden max-w-sm mx-auto px-2 space-y-2.5">
        
        {/* Step 1: Capture */}
        <div
          onClick={() => setActiveStep(0)}
          className={`group bg-[#f8f9fa] border-2 rounded-xl p-3.5 text-left transition-all duration-300 ${
            isStepActive(0, 'capture')
              ? 'border-gray-900 bg-white shadow-md ring-2 ring-gray-900/10'
              : 'border-gray-300'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] uppercase font-bold text-gray-400">Step 01</span>
            <div className="p-1 rounded-md bg-gray-900 text-white">
              <Camera className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="text-sm font-semibold text-gray-900">capture image or scan</div>
          <div className="text-[11px] text-gray-500 mt-0.5">High-res label capture</div>
        </div>

        {/* Down Arrow */}
        <div className="flex justify-center text-gray-400 leading-none py-0.5">
          <ArrowDown className={`w-4 h-4 transition-colors ${activeStep >= 1 ? 'text-gray-900' : 'text-gray-400'}`} />
        </div>

        {/* Step 2: OCR */}
        <div
          onClick={() => setActiveStep(1)}
          className={`group bg-[#f8f9fa] border-2 rounded-xl p-3.5 text-left transition-all duration-300 ${
            isStepActive(1, 'ocr')
              ? 'border-gray-900 bg-white shadow-md ring-2 ring-gray-900/10'
              : 'border-gray-300'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] uppercase font-bold text-gray-400">Step 02</span>
            <div className="p-1 rounded-md bg-gray-900 text-white">
              <ScanText className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="text-sm font-semibold text-gray-900">OCR extraction</div>
          <div className="text-[11px] text-gray-500 mt-0.5">Optical character recognition</div>
        </div>

        {/* Down Arrow */}
        <div className="flex justify-center text-gray-400 leading-none py-0.5">
          <ArrowDown className={`w-4 h-4 transition-colors ${activeStep >= 2 ? 'text-gray-900' : 'text-gray-400'}`} />
        </div>

        {/* Step 3: Parse text */}
        <div
          onClick={() => setActiveStep(2)}
          className={`group bg-[#f8f9fa] border-2 rounded-xl p-3.5 text-left transition-all duration-300 ${
            isStepActive(2, 'parse')
              ? 'border-gray-900 bg-white shadow-md ring-2 ring-gray-900/10'
              : 'border-gray-300'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] uppercase font-bold text-gray-400">Step 03</span>
            <div className="p-1 rounded-md bg-gray-900 text-white">
              <Binary className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="text-sm font-semibold text-gray-900">parse text</div>
          <div className="text-[11px] text-gray-500 mt-0.5">Regex &amp; NLP entity parsing</div>
        </div>

        {/* Down Arrow */}
        <div className="flex justify-center text-gray-400 leading-none py-0.5">
          <ArrowDown className={`w-4 h-4 transition-colors ${activeStep >= 3 ? 'text-gray-900' : 'text-gray-400'}`} />
        </div>

        {/* Step 4: Structured data */}
        <div
          onClick={() => setActiveStep(3)}
          className={`group bg-[#f8f9fa] border-2 rounded-xl p-3.5 text-left transition-all duration-300 ${
            isStepActive(3, 'structured')
              ? 'border-gray-900 bg-white shadow-md ring-2 ring-gray-900/10'
              : 'border-gray-300'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] uppercase font-bold text-gray-400">Step 04</span>
            <div className="p-1 rounded-md bg-gray-900 text-white">
              <Database className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="text-sm font-semibold text-gray-900">structured data</div>
          <div className="text-[11px] text-gray-500 mt-0.5">Normalized JSON schema</div>
        </div>

        {/* Down Arrow */}
        <div className="flex justify-center text-gray-400 leading-none py-0.5">
          <ArrowDown className={`w-4 h-4 transition-colors ${activeStep >= 4 ? 'text-gray-900' : 'text-gray-400'}`} />
        </div>

        {/* Parallel Branches Container (Clean left border layout like baghewala) */}
        <div className="flex flex-col gap-3 border-l-2 border-gray-300 pl-3.5 text-left my-2">
          
          {/* Blue formatting branch */}
          <div className="border-l-2 border-blue-500 pl-3 space-y-2">
            <p className="text-xs font-semibold text-blue-900 uppercase tracking-wide flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              Formatting branch
            </p>
            
            <div className="bg-[#f8f9fa] border border-blue-400 rounded-lg p-3 text-xs text-blue-900">
              <div className="flex items-center justify-between font-semibold mb-0.5">
                <span>verify MRP format &rarr; valid</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded-sm">Rule 5</span>
              </div>
              <p className="text-gray-500 text-[11px]">₹ format &amp; unit sale price</p>
            </div>

            <div className="flex justify-center text-blue-500">
              <ArrowDown className="w-3 h-3" />
            </div>

            <div className="bg-[#f8f9fa] border border-blue-400 rounded-lg p-3 text-xs text-blue-900">
              <div className="flex items-center justify-between font-semibold mb-0.5">
                <span>check net quantity &rarr; valid</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded-sm">Rule 12</span>
              </div>
              <p className="text-gray-500 text-[11px]">Metric unit verification</p>
            </div>
          </div>

          {/* Coral declarations branch */}
          <div className="border-l-2 border-[#C84B31] pl-3 space-y-2 pt-1">
            <p className="text-xs font-semibold text-[#C84B31] uppercase tracking-wide flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C84B31] animate-pulse"></span>
              Declarations branch
            </p>
            
            <div className="bg-[#f8f9fa] border border-[#C84B31]/70 rounded-lg p-3 text-xs text-[#C84B31]">
              <div className="flex items-center justify-between font-semibold mb-0.5">
                <span>customer care details</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded-sm">Rule 6</span>
              </div>
              <p className="text-gray-500 text-[11px]">Consumer grievance contacts</p>
            </div>

            <div className="flex justify-center text-[#C84B31]">
              <ArrowDown className="w-3 h-3" />
            </div>

            <div className="bg-[#f8f9fa] border border-[#C84B31]/70 rounded-lg p-3 text-xs text-[#C84B31]">
              <div className="flex items-center justify-between font-semibold mb-0.5">
                <span>manufacturer address</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded-sm">Rule 6</span>
              </div>
              <p className="text-gray-500 text-[11px]">Full entity name &amp; premises</p>
            </div>
          </div>

        </div>

        {/* Down Arrow */}
        <div className="flex justify-center text-gray-400 leading-none py-0.5">
          <ArrowDown className={`w-4 h-4 transition-colors ${activeStep >= 5 ? 'text-gray-900' : 'text-gray-400'}`} />
        </div>

        {/* Final Step: Compliance Report */}
        <div
          onClick={() => setActiveStep(5)}
          className={`bg-[#f8f9fa] border-2 rounded-xl p-4 text-center transition-all duration-300 ${
            isStepActive(5, 'report')
              ? 'border-gray-900 bg-white shadow-md ring-2 ring-emerald-500/20'
              : 'border-gray-900'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] uppercase font-bold bg-gray-900 text-white px-2 py-0.5 rounded-full">
              Final Output
            </span>
            <span className="text-xs font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
              PASS (100% Compliant)
            </span>
          </div>
          <div className="text-base font-bold text-gray-900">
            compliance report (Pass/Fail)
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Deterministic verification in &lt;1.2s
          </p>
        </div>

      </div>

      {/* Embedded CSS for animations */}
      <style>{`
        @keyframes flowDotH {
          0% { left: 0%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { left: 95%; opacity: 0; }
        }
        @keyframes flowDotV {
          0% { top: 0%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 90%; opacity: 0; }
        }
        @keyframes dashFlow {
          to { stroke-dashoffset: -1000; }
        }
      `}</style>
    </div>
  );
}
