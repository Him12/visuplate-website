import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * QRMenu.tsx - SEO Optimized QR Code Menu System
 * Enhanced with structured data, animations, and better SEO
 */

const cardVariants = {
  off: { opacity: 0, y: 20 },
  on: { opacity: 1, y: 0 },
};

const staggerVariants = {
  on: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function QRMenu() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    // Enhanced SEO setup for QR Menu
    const pageTitle = "QR Code Menu System for Restaurants | Contactless Digital Menu | The Visuplate";
    const metaDescription = "QR code menu system for restaurants. Contactless digital menus that load instantly when scanned. Hygienic, trackable, and easy to update. Perfect for modern dining.";
    
    document.title = pageTitle;
    
    // Update meta description
    let desc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!desc) {
      desc = document.createElement("meta");
      desc.name = "description";
      document.head.appendChild(desc);
    }
    desc.content = metaDescription;

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://thevisuplate.online/qr-menu";

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: metaDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://thevisuplate.online/qr-menu' },
      { property: 'og:image', content: 'https://thevisuplate.online/og-qr-menu.jpg' },
    ];

    ogTags.forEach(tag => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", tag.property);
        document.head.appendChild(meta);
      }
      meta.content = tag.content;
    });

    // Reduce motion preference
    const mq = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq?.matches ?? false);
    const handler = () => setReduceMotion(mq.matches);
    mq?.addEventListener?.("change", handler);
    return () => mq?.removeEventListener?.("change", handler);
  }, []);

  // Comprehensive JSON-LD for QR Menu System
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": "https://thevisuplate.online/qr-menu#product",
        "name": "QR Code Menu System",
        "description": "Contactless QR code digital menu solution for restaurants, cafes, and food establishments. Customers scan to view menu instantly.",
        "brand": {
          "@type": "Brand",
          "name": "The Visuplate",
          "logo": "https://thevisuplate.online/logo.png"
        },
        "category": "Restaurant Technology",
        "keywords": ["QR menu", "digital menu", "contactless menu", "QR code menu", "restaurant QR code"],
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR",
          "priceValidUntil": "2024-12-31",
          "url": "https://thevisuplate.online/pricing",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "ratingCount": "89",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Cafe Owner" },
            "reviewBody": "Our customers love the QR menu. So much faster than waiting for physical menus.",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does the QR code menu work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Customers scan your QR code with their smartphone camera, which instantly opens your digital menu in their mobile browser. No app download required."
            }
          },
          {
            "@type": "Question",
            "name": "Do customers need to install an app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No app installation needed. The QR code opens directly in the phone's web browser, making it accessible to all customers instantly."
            }
          },
          {
            "@type": "Question",
            "name": "Can I track how many people scan my QR menu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our analytics dashboard shows scan counts, popular menu items, peak usage times, and customer engagement metrics."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://thevisuplate.online"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "QR Menu",
            "item": "https://thevisuplate.online/qr-menu"
          }
        ]
      }
    ]
  };

  const features = [
    {
      title: "Instant Scan & View",
      description: "Customers scan QR code and menu loads immediately in their browser. No delays, no app downloads required.",
      icon: "📱",
      schema: "InstantLoading"
    },
    {
      title: "100% Contactless Experience",
      description: "Eliminate physical menu handling. More hygienic and safer for both customers and staff in post-pandemic dining.",
      icon: "👐",
      schema: "HygienicSolution"
    },
    {
      title: "Smart Analytics & Trends",
      description: "Track popular dishes, scan frequency, and customer preferences. Make data-driven menu decisions.",
      icon: "📊",
      schema: "AnalyticsFeature"
    },
    {
      title: "Real-time Menu Updates",
      description: "Change prices, add specials, or mark items sold out instantly. Changes reflect immediately across all devices.",
      icon: "⚡",
      schema: "RealTimeUpdate"
    },
    {
      title: "Brand Customization",
      description: "Match your restaurant's branding with custom colors, logos, and layout. Professional appearance builds trust.",
      icon: "🎨",
      schema: "BrandCustomization"
    },
    {
      title: "Multi-language Support",
      description: "Serve international customers with multi-language menu options. Expand your customer reach effortlessly.",
      icon: "🌐",
      schema: "MultiLanguage"
    }
  ];

  const benefits = [
    "Reduce menu printing costs by up to 80%",
    "30% faster table turnover with instant menu access",
    "Update menu items in real-time without waste",
    "Track customer preferences and popular dishes",
    "Eco-friendly solution reduces paper waste",
    "Works on any smartphone with camera"
  ];

  const faqs = [
    {
      question: "How long does it take to set up a QR menu?",
      answer: "Most restaurants can set up their QR menu in under 15 minutes. Simply upload your menu items, customize the design, and download your QR codes for printing."
    },
    {
      question: "What if customers don't have QR scanner apps?",
      answer: "Modern smartphones (iOS 11+, Android 9+) have built-in QR code scanners in their camera apps. No additional apps needed - just point and scan."
    },
    {
      question: "Can I use the same QR code for multiple tables?",
      answer: "Yes, one QR code can be printed and placed on multiple tables. Each scan is tracked individually in your analytics dashboard."
    },
    {
      question: "How do I print and display the QR codes?",
      answer: "We provide print-ready QR code files in multiple sizes. Common placements include table tents, stickers on tables, wall posters, or counter displays."
    }
  ];

  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <>
      {/* Structured Data for SEO */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
      />

      {/* Hero Section */}
      <header className="relative w-full py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-300/10 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-700 mb-6"
          >
            QR Code Menu System
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
          >
            Transform your restaurant with <strong>contactless QR code menus</strong>. Customers scan to view your digital menu instantly - faster, cleaner, and smarter than traditional menus.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: reduceMotion ? 1 : 1.05 }}
              whileTap={{ scale: reduceMotion ? 1 : 0.95 }}
              href="/demo-qr-menu"
              className="px-8 py-4 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-colors font-semibold text-lg flex items-center gap-3"
              aria-label="Try our QR menu demo"
            >
              <span>Try QR Menu Demo</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
            
            <motion.a
              whileHover={{ scale: reduceMotion ? 1 : 1.05 }}
              href="/pricing"
              className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-colors font-semibold text-lg"
            >
              View Pricing
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>No app download required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Setup in 15 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Free demo available</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Features Grid */}
      <section aria-labelledby="features-heading" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose QR Code Menus?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Modern solutions for modern restaurants. Enhance customer experience while streamlining your operations.
          </p>
        </div>

        <motion.div
          variants={staggerVariants}
          initial="off"
          whileInView="on"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.article
              key={feature.title}
              variants={cardVariants}
              whileHover={{ 
                y: reduceMotion ? 0 : -8,
                transition: { duration: 0.3 }
              }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transform Your Restaurant Service
            </h2>
            <p className="text-purple-100 text-lg max-w-2xl mx-auto">
              Join thousands of restaurants that have upgraded to QR code menus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm"
              >
                <svg className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-purple-50">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to See It in Action?
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Experience our QR menu system firsthand. Scan the demo code or click to view the mobile-optimized menu that your customers will see.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  whileHover={{ scale: reduceMotion ? 1 : 1.05 }}
                  href="/demo-qr-menu"
                  className="px-8 py-4 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-colors font-semibold text-center"
                >
                  View Live Demo
                </motion.a>
                <motion.a
                  whileHover={{ scale: reduceMotion ? 1 : 1.05 }}
                  href="/contact"
                  className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-colors font-semibold text-center"
                >
                  Get Custom Quote
                </motion.a>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-6 rounded-2xl shadow-inner">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="w-48 h-48 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-center text-sm p-4">
                    Scan This QR Code<br />To View Demo Menu
                  </div>
                  <div className="mt-4 text-center text-sm text-gray-600">
                    Point your camera at this code
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section aria-labelledby="faq-heading" className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 id="faq-heading" className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know about QR code menus for restaurants
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                className="w-full flex justify-between items-center text-left"
                aria-expanded={activeFaq === index}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <svg 
                  className={`w-6 h-6 text-purple-600 transform transition-transform ${
                    activeFaq === index ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {activeFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 mt-4 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Start Your QR Menu Journey Today
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto"
          >
            Join the future of restaurant service with our easy-to-implement QR code menu system.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: reduceMotion ? 1 : 1.05 }}
              href="/get-started"
              className="px-8 py-4 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-colors font-semibold text-lg"
            >
              Get Started Free
            </motion.a>
            <motion.a
              whileHover={{ scale: reduceMotion ? 1 : 1.05 }}
              href="/schedule-demo"
              className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-colors font-semibold text-lg"
            >
              Schedule Demo
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}