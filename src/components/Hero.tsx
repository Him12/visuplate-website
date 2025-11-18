import { ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>



      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span>Digital Innovation for Modern Restaurants</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Menu into an
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mt-2">
                Interactive Experience
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Say goodbye to static menus. Welcome to the future with AR-powered 3D food visualization,
              real-portion videos, and an eco-friendly digital solution that delights your customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              {/* Request Demo → Contact Page */}
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="group px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-200 shadow-xl shadow-emerald-600/30 hover:shadow-2xl hover:shadow-emerald-600/40 flex items-center justify-center space-x-2 w-full">
                  <span>Request Demo</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              {/* See It in Action → Demo Menu Page */}
              <Link to="/demo-menu" className="w-full sm:w-auto">
                <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold border-2 border-gray-200 hover:border-emerald-600 hover:text-emerald-600 transition-all duration-200 w-full">
                  See It in Action
                </button>
              </Link>

            </div>


            <div className="flex items-center space-x-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-600">Restaurants</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900">1K+</div>
                <div className="text-sm text-gray-600">Happy Diners</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900">40%</div>
                <div className="text-sm text-gray-600">Order Increase</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
              <div className="aspect-[3/4] bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl overflow-hidden">
                <div className="w-full h-full">
                  <img
                    src="/visuplate-website/images/Phone scanner.png"
                    alt="QR Preview"
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-72 h-72 bg-emerald-200 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-teal-200 rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
