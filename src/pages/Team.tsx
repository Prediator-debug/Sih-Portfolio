import TeamMemberCard from '../components/TeamMemberCard';

export default function Team() {
  const team = [
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
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0d14] pt-4 sm:pt-8 md:pt-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors">Team</h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-10 sm:mb-16 max-w-2xl leading-relaxed transition-colors">
          We are a cross-functional team of software engineers and legal domain experts dedicated to automating compliance and reducing regulatory friction.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {team.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
