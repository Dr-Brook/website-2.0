export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <a href="#" className="text-xl font-bold text-white">
              Brook<span className="text-primary-400">.</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed">
              Public health data analyst bridging clinical insight and data-driven strategy. MD + MPH from Johns Hopkins.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["About", "Services", "Experience", "Projects", "Skills", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@itsbrook.com"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  info@itsbrook.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/brook-shimelis-md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li className="text-sm">Silver Spring, Maryland</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © {year} Brook Eshete. All rights reserved.
          </p>
          <p className="text-xs">
            Built with ❤️ and data
          </p>
        </div>
      </div>
    </footer>
  );
}