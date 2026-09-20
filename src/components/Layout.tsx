import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToSection = (id: string) => {
    if (isHome) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-gray-900 dark:bg-[#0a0d14] dark:text-gray-100 transition-colors duration-200">
      <Navbar />
      <main className="flex-grow pt-16 md:pt-20">
        <Outlet />
      </main>

      {/* Documentation CTA Section */}
      <section className="bg-[#2D6A4F] dark:bg-[#111827] py-16 sm:py-20 md:py-24 transition-colors duration-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4 sm:mb-6">
            Read the full technical documentation
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-2">
            A field guide, a rules reference, and the architecture diagrams.
          </p>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-8 sm:mb-10">
            Written for a reader who has never worked in legal metrology.
          </p>
          <Link
            to="/documents"
            className="inline-flex items-center justify-center px-6 py-3 border border-white text-white text-sm font-medium rounded-lg hover:bg-white hover:text-[#2D6A4F] dark:hover:text-[#111827] transition-colors duration-200"
          >
            Read the documents
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800/80 bg-white dark:bg-[#0f172a] transition-colors duration-200">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col sm:flex-row justify-between gap-8">
            {/* Left — Project Info */}
            <div className="max-w-sm">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                Drithya
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed transition-colors">
                An automated compliance verification system for Packaged Commodities under LMPC 2011.
              </p>
            </div>

            {/* Right — Nav Links */}
            <div className="flex flex-col items-start sm:items-end gap-2.5">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'How it works', id: 'how-it-works' },
                { label: 'Documents', id: 'documents' },
                { label: 'Team', id: 'team' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800/80 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-1">
              SIH26 &middot; Smart India Hackathon &middot; Software &middot; Smart Automation &middot; Smart India Hackathon 2026
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              An academic project for Smart India Hackathon 2026.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
