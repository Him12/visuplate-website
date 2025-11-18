import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/demo-menu", label: "Demo Menu" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src="/visuplate-website/images/our logo.png"
              alt="The VisuPlate Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-emerald-100 text-emerald-700"
                    : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* DESKTOP CTA BUTTON */}
          <div className="hidden lg:flex items-center">
            <Link to="/contact">
              <button className="px-6 py-2.5 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 shadow-lg">
                Request Demo
              </button>
            </Link>
          </div>

          {/* 👇 MOBILE SPACE (EMPTY — NO HAMBURGER) */}
          <div className="lg:hidden"></div>

        </div>

      </div>
    </nav>
  );
}
