import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

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
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M22.676 0H1.325C.593 0 0 .593 0 1.326v21.348C0 
                  23.408.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0
                  -3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918 
                  .001c-1.504 0-1.795.714-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 
                  24 24 23.408 24 22.674V1.326C24 .593 23.407 0 22.676 0z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 
                  10.086 10.086 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482A13.978 
                  13.978 0 011.671 3.149a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 
                  2.188 4.096A4.904 4.904 0 01.964 9.01v.06a4.923 4.923 0 003.946 
                  4.827 4.996 4.996 0 01-2.212.085A4.936 4.936 0 007.548 17.1a9.867 
                  9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067A13.995 13.995 0 
                  007.557 21c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 
                  9.935 0 0024 4.59z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M12 2.163c3.204 0 3.584.013 4.85.07 1.366.062 
                  2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.057 
                  1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.062 
                  1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.057-1.646.07-4.85.07s-3.584-.013-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.176 
                  15.584 2.163 15.204 2.163 12s.013-3.584.07-4.85c.062-1.366.35-2.633 
                  1.325-3.608.975-.975 2.242-1.263 3.608-1.325C8.416 2.176 8.796 
                  2.163 12 2.163zm0 3.675a6.162 6.162 0 100 12.324 6.162 
                  6.162 0 000-12.324zm7.846-.405a1.44 1.44 0 11-2.881 
                  0 1.44 1.44 0 012.881 0z" />
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

          {/* COLUMN 4 — CONTACT */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 mt-1" />
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <a href="mailto:hello@thevisuplate.com" className="hover:text-emerald-400">
                    hello@thevisuplate.com
                  </a>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 mt-1" />
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <a href="https://wa.me/918377861214" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
                    +91-8377861214
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
