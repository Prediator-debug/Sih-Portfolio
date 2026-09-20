import { useState } from 'react';

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin?: string;
  instagram?: string;
  twitter?: string;
}

// 1st: LinkedIn Icon
function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// 2nd: Instagram Icon
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

// 3rd: Twitter Icon
function TwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  );
}

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = member.bio.length > 130;

  return (
    <div className="flex flex-col group">
      {/* Avatar placeholder or Image */}
      <div className="w-full aspect-square bg-gray-100 dark:bg-gray-800 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
        {member.image ? (
          <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
        ) : (
          <span className="text-gray-300 dark:text-gray-600 text-6xl font-medium">{member.name.charAt(0)}</span>
        )}
      </div>

      {/* Name and Social Links */}
      <div className="flex items-center gap-2.5 mb-1 flex-wrap">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white transition-colors">
          {member.name}
        </h3>
        
        {/* Social Icons: 1st LinkedIn, 2nd Instagram, 3rd Twitter */}
        <div className="flex items-center gap-1.5 ml-1">
          {/* 1. LinkedIn */}
          <a
            href={member.linkedin || `https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(member.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            title={`${member.name} on LinkedIn`}
            aria-label={`${member.name} on LinkedIn`}
            className="p-1 rounded-md text-gray-400 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 dark:text-gray-400 dark:hover:text-[#38bdf8] dark:hover:bg-[#0A66C2]/20 transition-all duration-200 cursor-pointer"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          {/* 2. Instagram */}
          <a
            href={member.instagram || "https://instagram.com"}
            target="_blank"
            rel="noopener noreferrer"
            title={`${member.name} on Instagram`}
            aria-label={`${member.name} on Instagram`}
            className="p-1 rounded-md text-gray-400 hover:text-[#E4405F] hover:bg-[#E4405F]/10 dark:text-gray-400 dark:hover:text-[#fb7185] dark:hover:bg-[#E4405F]/20 transition-all duration-200 cursor-pointer"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>

          {/* 3. Twitter */}
          <a
            href={member.twitter || "https://twitter.com"}
            target="_blank"
            rel="noopener noreferrer"
            title={`${member.name} on Twitter`}
            aria-label={`${member.name} on Twitter`}
            className="p-1 rounded-md text-gray-400 hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10 dark:text-gray-400 dark:hover:text-[#60a5fa] dark:hover:bg-[#1DA1F2]/20 transition-all duration-200 cursor-pointer"
          >
            <TwitterIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      <p className="text-sm font-medium text-[#C84B31] dark:text-[#f87171] mb-3 transition-colors">{member.role}</p>
      
      <div className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm transition-colors">
        <p className={!isExpanded && isLong ? "line-clamp-2" : ""}>
          {member.bio}
        </p>

        {isLong && (
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-xs font-semibold text-gray-900 dark:text-gray-100 hover:text-[#C84B31] dark:hover:text-[#f87171] inline-flex items-center gap-1 transition-colors cursor-pointer underline underline-offset-4 decoration-gray-300 dark:decoration-gray-700 hover:decoration-[#C84B31]"
          >
            {isExpanded ? 'Read less ↑' : 'Read more ↓'}
          </button>
        )}
      </div>
    </div>
  );
}
