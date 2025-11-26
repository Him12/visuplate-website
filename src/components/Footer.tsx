import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">

          {/* COLUMN 1 — LOGO + TEXT + SOCIAL ICONS */}
          <div>
            <span className="text-xl font-bold text-white">The Visuplate</span>

            <p className="text-gray-400 leading-relaxed mt-4 mb-6">
              Transforming restaurant menus with AR technology, video previews,
              and eco-friendly digital solutions.
            </p>

            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61583994267915"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-white">
                  <path d="M22.676 0H1.324C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.324 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.714-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.731 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.676 0z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/thevisuplate/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-white">
                  <path d="M12 2.163c3.204 0 3.584.013 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.057 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.057-1.646.07-4.85.07s-3.584-.013-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608-.057-1.266-.07-1.646-.07-4.85s.013-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.263 3.608-1.325 1.266-.057 1.646-.07 4.85-.07zm0 3.675a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>

              {/* X */}
              <a
                href="https://x.com/TheVisuPlate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
                aria-label="X (Twitter)"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/the-visu-plate-1308ab38b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-white">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2 — PRODUCT */}
          <div>
            <h3 className="text-white font-bold mb-6">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/demo-menu" className="hover:text-emerald-400">How It Works</Link></li>
              <li><Link to="/pricing" className="hover:text-emerald-400">Pricing</Link></li>
              <li><Link to="/demo-menu" className="hover:text-emerald-400">Demo</Link></li>
            </ul>
          </div>

          {/* COLUMN 3 — COMPANY */}
          <div>
            <h3 className="text-white font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-emerald-400">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-emerald-400">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400">Contact</Link></li>
            </ul>
          </div>

          {/* COLUMN 4 — BLOGS (NEW) */}
          <div>
            <h3 className="text-white font-bold mb-6">Blogs</h3>
            <ul className="space-y-3">
              <li><Link to="/digital-menu" className="hover:text-emerald-400">Digital Menu</Link></li>
              <li><Link to="/qr-menu" className="hover:text-emerald-400">QR Menu</Link></li>
              <li><Link to="/online-menu" className="hover:text-emerald-400">Online Menu</Link></li>
            </ul>
          </div>

          {/* COLUMN 5 — CONTACT */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact</h3>
            <ul className="space-y-4">

              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 mt-1" />
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <a href="mailto:thevisuplate@gmail.com" className="hover:text-emerald-400">
                    thevisuplate@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 mt-1" />
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <a href="https://wa.me/918851796110" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
                    +91-8851796110
                  </a>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-1" />
                <div>
                  <div className="text-sm text-gray-400">Location</div>
                  <div>Delhi, INDIA</div>
                </div>
              </li>

            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} The Visuplate. All rights reserved.
            </div>

            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="hover:text-emerald-400">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-emerald-400">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-emerald-400">Cookie Policy</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
