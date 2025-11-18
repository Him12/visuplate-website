import { Home, Info, Mail, BookOpen } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function BottomNav() {
  const location = useLocation();

  const tabs = [
    { path: "/", label: "Home", icon: Home },
    { path: "/demo-menu", label: "Menu", icon: BookOpen },
    { path: "/about", label: "About", icon: Info },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg py-2 px-4 flex justify-between lg:hidden z-50">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const active = location.pathname === tab.path;

        return (
          <Link
            key={tab.path}
            to={tab.path}
            className="flex flex-col items-center w-full"
          >
            <Icon
              className={`w-6 h-6 ${
                active ? "text-emerald-600" : "text-gray-500"
              }`}
            />
            <span
              className={`text-xs mt-1 ${
                active ? "text-emerald-600 font-semibold" : "text-gray-500"
              }`}
            >
              {tab.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
