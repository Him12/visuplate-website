import { ArrowRight, Play, Star, CheckCircle } from 'lucide-react';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Detect mobile device for performance optimizations
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Preload critical image
  useEffect(() => {
    const img = new Image();
    img.src = "/images/New Demo QR.png";
    img.onload = () => setImageLoaded(true);
  }, []);

  const stats = [
    { number: "15+", label: "Restaurants" },
    { number: "1K+", label: "Happy Diners" },
    { number: "40%", label: "Order Increase" },
    { number: "4.9/5", label: "Customer Rating" }
  ];

  const features = [
    "AR Food Previews",
    "Real Portion Videos", 
    "Instant Updates",
    "Eco-Friendly"
  ];

  return (
    <div className="relative bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
      {/* Performance: Reduced background complexity */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] sm:opacity-5"></div>
      
      {/* Loading state for better perceived performance */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-white z-20 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-20 sm:pb-32">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content - Improved hierarchy and spacing */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Badge with better visibility */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-100/80 backdrop-blur-sm rounded-full text-emerald-700 text-sm font-medium border border-emerald-200 shadow-sm">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span>Digital Innovation for Modern Restaurants</span>
            </div>

            {/* Headline with better mobile typography */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Menu into an
                <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mt-1 sm:mt-2">
                  Interactive Experience
                </span>
              </h1>
              
              {/* Feature pills for quick scanning */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
                {features.map((feature, index) => (
                  <div key={index} className="inline-flex items-center gap-1 bg-white/80 px-3 py-1 rounded-full text-xs font-medium text-gray-700 border border-gray-200 shadow-sm">
                    <CheckCircle className="w-3 h-3 text-emerald-500" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Improved paragraph with better readability */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Welcome to the future with <strong>AR-powered 3D food visualization</strong>, 
              real-portion videos, and an <strong>eco-friendly digital solution</strong> that 
              increases orders by 40% and delights your customers.
            </p>

            {/* CTA Buttons with better hierarchy */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">
              {/* Primary CTA */}
              <Link to="/contact" className="w-full sm:w-auto group">
                <button className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 active:scale-95 transition-all duration-200 shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/35 flex items-center justify-center space-x-2">
                  <span>Request Free Demo</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              {/* Secondary CTA with play icon */}
              <Link to="/demo-menu" className="w-full sm:w-auto group">
                <button className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 rounded-xl font-semibold border-2 border-gray-200 hover:border-emerald-500 hover:text-emerald-600 active:scale-95 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  <span>See Live Demo</span>
                </button>
              </Link>
            </div>

            {/* Trust indicators - Improved layout */}
            <div className="pt-4 sm:pt-6">
              {/* Stats grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-md mx-auto lg:mx-0">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              {/* Social proof */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span className="text-xs text-gray-600">
                  Trusted by 15+ restaurant owners
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Optimized image and animations */}
          <div className="relative order-first lg:order-last">
            <div className="relative z-10 bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-4 sm:p-6 lg:p-8 transform hover:scale-105 transition-transform duration-500 active:scale-95">
              <div className="aspect-[3/4] bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex items-center justify-center">
                <div className="w-full bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg text-center space-y-3 sm:space-y-4">
                  {/* Animated header */}
                  <div className="space-y-2">
                    <p className="text-lg sm:text-xl font-bold text-gray-800 leading-tight">
                      See How It Works In Your Restaurant
                    </p>
                    <div className="flex items-center justify-center gap-1 text-amber-600">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Optimized image with loading state */}
                  <div className="relative">
                    <img
                      src="/images/New Demo QR.png"
                      alt="Digital QR code menu in restaurant setting"
                      className={`w-full rounded-lg sm:rounded-xl shadow-md transition-opacity duration-300 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading="eager"
                      onLoad={() => setImageLoaded(true)}
                    />
                    {!imageLoaded && (
                      <div className="absolute inset-0 bg-gray-200 rounded-lg sm:rounded-xl animate-pulse"></div>
                    )}
                  </div>

                  {/* Interactive CTA */}
                  <div className="space-y-2">
                    <p className="text-base sm:text-lg font-semibold text-gray-700 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      SCAN TO EXPERIENCE MAGIC ✨
                    </p>
                    <p className="text-xs text-gray-500">
                      See AR food previews & real portion videos
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements for visual interest */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center shadow-lg">
                <Star className="w-3 h-3 text-white fill-current" />
              </div>
            </div>

            {/* Performance: Reduced background effects on mobile */}
            {!isMobile && (
              <>
                <div className="absolute -top-4 -right-4 w-48 h-48 sm:w-72 sm:h-72 bg-emerald-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-48 h-48 sm:w-72 sm:h-72 bg-teal-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}