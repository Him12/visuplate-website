import { ArrowRight, Mail, Phone } from 'lucide-react';
import { Link } from "react-router-dom";


export default function CTA() {
  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-16 space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span>Join 500+ Restaurants</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Ready to Transform Your Restaurant?
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed">
                Start delighting your customers with interactive menus, AR experiences, and eco-friendly digital solutions.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Free demo and consultation</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Setup within 3 Weeks</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">No server-side maintainance required from restaurant</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">

                {/* Get Started Today → Contact Page */}
                <Link to="/contact" className="w-full sm:w-auto">
                  <button className="group px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-200 shadow-xl shadow-emerald-600/30 hover:shadow-2xl hover:shadow-emerald-600/40 flex items-center justify-center space-x-2 w-full">
                    <span>Get Started Today</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>

                {/* View Demo → Demo Menu Page */}
                <Link to="/demo-menu" className="w-full sm:w-auto">
                  <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold border-2 border-gray-200 hover:border-emerald-600 hover:text-emerald-600 transition-all duration-200 w-full">
                    View Demo
                  </button>
                </Link>

              </div>

            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-12 lg:p-16 flex flex-col justify-center space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Our Team
                </h3>
                <p className="text-emerald-50 mb-8">
                  Have questions? Our team is here to help you get started with The Visuplate.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-emerald-100">Email us</div>
                    <div className="font-semibold">hello@thevisuplate.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-emerald-100">Call us</div>
                    <div className="font-semibold">+91-8851796110</div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/20">
                <div className="text-emerald-50 text-sm mb-4">Trusted by leading restaurants</div>
                <div className="flex items-center space-x-6 text-white/80">
                  <div className="text-sm font-medium">★★★★★</div>
                  <div className="text-sm">4.9/5 Rating</div>
                  <div className="text-sm">•</div>
                  <div className="text-sm">50+ Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
