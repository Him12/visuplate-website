import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * DigitalMenu.tsx - SEO Optimized
 * Enhanced with better semantic HTML, structured data, and SEO improvements
 */

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.4 } },
};

const cardVariants = {
  off: { opacity: 0, y: 18, scale: 0.98 },
  on: { opacity: 1, y: 0, scale: 1 },
};

const faqItemVariants = {
  closed: { height: 0, opacity: 0 },
  open: { height: "auto", opacity: 1, transition: { duration: 0.35 } },
};

export default function DigitalMenu() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  // SEO Keywords for restaurant digital menus
  const seoKeywords = [
    "digital menu", "QR menu", "online menu", "restaurant menu",
    "contactless menu", "food menu", "menu QR code", "digital restaurant",
    "cafe menu", "cloud kitchen", "food ordering", "menu management"
  ];

  useEffect(() => {
    // Enhanced SEO setup
    const pageTitle = "Digital Menu • QR Code Menu System for Restaurants | The Visuplate";
    const metaDescription = "Transform your restaurant with our digital QR menu system. Contactless ordering, instant updates, mobile-friendly. Perfect for restaurants, cafes, cloud kitchens. Start free today.";
    
    document.title = pageTitle;
    
    // Update or create meta description
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
    canonical.href = "https://thevisuplate.online/digital-menu";

    // Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: metaDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://thevisuplate.online/digital-menu' },
      { property: 'og:image', content: 'https://thevisuplate.online/og-digital-menu.jpg' },
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

    // Twitter Card meta tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: pageTitle },
      { name: 'twitter:description', content: metaDescription },
      { name: 'twitter:image', content: 'https://thevisuplate.online/twitter-digital-menu.jpg' },
    ];

    twitterTags.forEach(tag => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = tag.name;
        document.head.appendChild(meta);
      }
      meta.content = tag.content;
    });

    // Reduce motion check
    const mq = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq?.matches ?? false);
    const handler = () => setReduceMotion(mq.matches);
    mq?.addEventListener?.("change", handler);
    return () => mq?.removeEventListener?.("change", handler);
  }, []);

  // Enhanced JSON-LD with multiple schema types
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": "https://thevisuplate.online/digital-menu#product",
        "name": "The Visuplate Digital Menu System",
        "description": "Premium digital QR menu solution for restaurants, cafes, and food businesses. Contactless ordering, real-time updates, and customer analytics.",
        "brand": { 
          "@type": "Brand", 
          "name": "The Visuplate",
          "logo": "https://thevisuplate.online/logo.png"
        },
        "category": "Restaurant Technology",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR",
          "priceValidUntil": "2024-12-31",
          "url": "https://thevisuplate.online/pricing",
          "availability": "https://schema.org/InStock",
          "hasMerchantReturnPolicy": "https://thevisuplate.online/refund-policy"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "127",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Restaurant Owner" },
            "reviewBody": "Game changer for our restaurant. Orders increased by 30% after switching to digital menus.",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            }
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": "The Visuplate Digital Menu",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web Browser",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR"
        }
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
            "name": "Digital Menu",
            "item": "https://thevisuplate.online/digital-menu"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I update menu items on my digital menu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Login to your dashboard and make changes in real-time. Updates go live immediately - no printing or waiting required."
            }
          },
          {
            "@type": "Question",
            "name": "Do customers need to download an app to use the QR menu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No app download required. Customers simply scan the QR code with their phone camera and the menu opens directly in their mobile browser."
            }
          },
          {
            "@type": "Question",
            "name": "Is the digital menu mobile-friendly and fast?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our menus are fully responsive and optimized for all mobile devices with fast loading times even on slow internet connections."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to set up a digital menu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most restaurants can get their digital menu live within 10-30 minutes. Just upload your menu items, customize the design, and generate your QR code."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use my own domain for the menu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we support custom domains and white-labeling options. Connect your own domain through simple DNS configuration."
            }
          }
        ]
      },
      {
        "@type": "Organization",
        "name": "The Visuplate",
        "url": "https://thevisuplate.online",
        "logo": "https://thevisuplate.online/logo.png",
        "description": "Digital menu solutions for modern restaurants and food businesses",
        "sameAs": [
          "https://facebook.com/thevisuplate",
          "https://instagram.com/thevisuplate",
          "https://linkedin.com/company/thevisuplate"
        ]
      }
    ]
  };

  const features = [
    {
      title: "Instant Menu Updates",
      desc: "Update items, prices, and availability in real-time from your dashboard. Changes go live immediately across all devices.",
      schema: "RealTimeUpdate"
    },
    {
      title: "No App Required for Customers",
      desc: "Customers scan QR codes with their phone camera. Works instantly in any mobile browser without downloads or installations.",
      schema: "MobileCompatibility"
    },
    {
      title: "Shareable & Trackable Menus",
      desc: "Share via WhatsApp, Instagram, or embed on your website. Built-in analytics show popular items and customer engagement.",
      schema: "AnalyticsFeature"
    },
    {
      title: "Brand-Customizable Design",
      desc: "Match your restaurant's branding with custom colors, fonts, logos, and layout. Professional appearance that builds trust.",
      schema: "CustomizationFeature"
    },
    {
      title: "Fast & Optimized Performance",
      desc: "Lightning-fast loading with image optimization and lazy loading. Works perfectly even on low-bandwidth mobile networks.",
      schema: "PerformanceOptimization"
    },
    {
      title: "Secure & Reliable Hosting",
      desc: "HTTPS security, reliable cloud hosting, and regular backups. Your menu is always available when customers need it.",
      schema: "SecurityFeature"
    },
  ];

  const faqs = [
    {
      q: "How long does it take to set up a digital menu?",
      a: "Most restaurants can get their digital menu live within 15-21 days. Setup involves uploading your menu items, customizing the design to match your brand, and generating your QR code. No technical expertise required."
    },
    {
      q: "Can I use my own domain for the menu?",
      a: "Yes, we support custom domains and white-labeling options. You can connect your own domain (like menu.yourrestaurant.com) through simple DNS configuration in your dashboard."
    },
    {
      q: "Do you provide analytics for the menu?",
      a: "Yes, our built-in analytics show you item impressions, click-through rates, popular dishes, and customer engagement metrics. Understand what your customers love and optimize your menu accordingly."
    },
    {
      q: "Is there a limit on menu items or updates?",
      a: "No limits on menu items or updates. You can add unlimited dishes, categories, and make as many real-time changes as needed. Different pricing plans offer additional features like advanced analytics and custom domains."
    },
    {
      q: "How do customers access the digital menu?",
      a: "Customers can scan your QR code (placed on tables, counters, or marketing materials) or click a direct link shared via social media, WhatsApp, or your website. No app download required."
    }
  ];

  return (
    <>
      {/* Enhanced JSON-LD for SEO */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
      />

      {/* HERO SECTION with semantic HTML */}
      <header className="relative overflow-hidden" role="banner">
        {/* Background elements for visual appeal */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute -left-40 -top-28 w-[420px] h-[420px] bg-gradient-to-br from-indigo-300/20 to-emerald-200/10 rounded-full filter blur-3xl animate-blob-slow opacity-90" />
          <div className="absolute right-[-120px] top-16 w-[320px] h-[320px] bg-gradient-to-br from-purple-300/20 to-indigo-100/10 rounded-full filter blur-2xl animate-blob-slower opacity-70" />
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-80px] w-[640px] h-[320px] bg-gradient-to-br from-emerald-200/6 to-white rounded-full filter blur-3xl opacity-60" />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="enter"
            exit="exit"
            className="text-center"
            aria-labelledby="digital-menu-heading"
          >
            <h1 id="digital-menu-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-emerald-700">
              Digital QR Menu System for Restaurants
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-gray-700 text-base sm:text-lg">
              Transform your restaurant with contactless digital menus. <strong>QR code ordering</strong>, instant updates, and customer insights that boost sales and improve service.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                whileHover={{ scale: reduceMotion ? 1 : 1.03 }}
                whileTap={{ scale: reduceMotion ? 1 : 0.98 }}
                className="inline-flex items-center gap-3 bg-emerald-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-emerald-700 transition font-semibold"
                href="/demo-menu"
                aria-label="View live demo of our digital menu system"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 3v18l15-9L5 3z" fill="currentColor" />
                </svg>
                View Live Demo
              </motion.a>

              <motion.a
                whileHover={{ scale: reduceMotion ? 1 : 1.02 }}
                className="inline-flex items-center gap-3 border border-emerald-600 text-emerald-600 px-6 py-3 rounded-full shadow-sm hover:bg-emerald-50 transition font-semibold"
                href="/pricing"
                aria-label="See pricing plans for digital menus"
              >
                View Pricing Plans
              </motion.a>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <span className="inline-flex items-center gap-2">
                <strong className="text-emerald-700">Free demo available</strong>
                <span>• No credit card required • Works on all devices</span>
              </span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* FEATURES GRID with semantic markup */}
      <section aria-labelledby="features-heading" className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 id="features-heading" className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Our Digital Menu Solution?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Designed specifically for restaurants, cafes, and food businesses to enhance customer experience and streamline operations.
          </p>
        </div>

        <motion.div
          initial="off"
          animate="on"
          variants={cardVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              custom={i}
              initial="off"
              animate="on"
              variants={cardVariants}
              transition={{
                delay: i * 0.12,
                duration: 0.55,
              }}
              whileHover={{
                y: reduceMotion ? 0 : -6,
                boxShadow: reduceMotion
                  ? "0 6px 12px rgba(0,0,0,0.06)"
                  : "0 18px 40px rgba(16,24,40,0.08)",
              }}
              className="bg-white rounded-2xl p-6 md:p-8 border border-transparent hover:border-emerald-100 cursor-default"
              aria-labelledby={`feature-${i}`}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content={String(i + 1)} />
              <h3 id={`feature-${i}`} className="text-xl font-semibold text-gray-900 mb-4" itemProp="name">
                {f.title}
              </h3>

              <p className="text-gray-600 leading-relaxed" itemProp="description">
                {f.desc}
              </p>

              <div className="mt-6">
                <span className="inline-flex items-center text-sm text-emerald-600 font-medium">
                  Learn more about {f.title.toLowerCase()}
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="M5 10h10M11 6l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* DEMO SECTION with clear CTAs */}
      <section aria-labelledby="demo-heading" className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 md:p-12 shadow-lg border border-emerald-100"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 id="demo-heading" className="text-3xl font-bold text-gray-900 mb-4">
                Experience Our Digital Menu Live
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                See exactly how your customers will experience your menu. Scan the demo QR code or click to view the fully functional mobile-optimized menu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/demo-menu" 
                  className="px-6 py-3 bg-emerald-600 text-white rounded-full shadow hover:bg-emerald-700 transition font-semibold text-center"
                  aria-label="Open interactive digital menu demo"
                >
                  Open Interactive Demo
                </a>
                <a 
                  href="/pricing" 
                  className="px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-full hover:bg-emerald-50 transition font-semibold text-center"
                >
                  See All Plans & Features
                </a>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                <strong>Perfect for:</strong> Restaurants, Cafes, Food Trucks, Cloud Kitchens, Bars, Catering Services
              </p>
            </div>

            <div className="w-full md:w-80">
              {/* Enhanced phone mockup with QR code */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-gray-200 shadow-xl bg-white">
                <div className="bg-gradient-to-b from-emerald-600 to-emerald-700 p-4 text-white text-center">
                  <div className="text-sm font-semibold">The Visuplate Demo Menu</div>
                </div>
                <div className="p-4">
                  <div className="h-40 rounded-lg bg-gradient-to-br from-emerald-50 to-white flex flex-col justify-center items-center p-4 border border-emerald-100">
                    <div className="text-xs text-gray-500 mb-2">Scan to view demo</div>
                    {/* QR code placeholder */}
                    <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
                      <span className="text-xs text-gray-400">QR Code</span>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <div className="font-semibold text-gray-800 text-sm">Chef's Special Thali</div>
                    <div className="text-xs text-gray-600 mt-1">₹ 299 • Vegetarian • Serves 1</div>
                  </div>
                </div>
                <div className="absolute right-3 bottom-3 text-xs text-gray-400 bg-white px-2 py-1 rounded">
                  Live Preview
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ENHANCED FAQ SECTION */}
      <section aria-labelledby="faq-heading" className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 id="faq-heading" className="text-3xl font-bold text-gray-900 mb-4">
            Digital Menu Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our QR code digital menu system for restaurants.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = faqOpen === i;
            return (
              <article 
                key={f.q} 
                className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setFaqOpen(isOpen ? null : i)}
                  className="w-full flex justify-between items-start gap-4 text-left"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2" itemProp="name">
                      {f.q}
                    </h3>
                    <div className="text-sm text-emerald-600 font-medium">
                      {isOpen ? "Click to collapse answer" : "Click to expand answer"}
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${isOpen ? "bg-emerald-50 border-emerald-200" : "bg-gray-50 border-gray-200"}`}>
                      <svg 
                        className={`w-5 h-5 transform transition-transform ${isOpen ? "rotate-45 text-emerald-600" : "text-gray-600"}`} 
                        viewBox="0 0 24 24" 
                        fill="none"
                        aria-hidden="true"
                      >
                        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="panel"
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={faqItemVariants}
                      className="overflow-hidden"
                      id={`faq-answer-${i}`}
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <div className="pt-4 mt-2 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed" itemProp="text">
                          {f.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </section>

      {/* ENHANCED CTA SECTION */}
      <section aria-labelledby="cta-heading" className="py-16 bg-gradient-to-br from-emerald-50 to-white border-t border-emerald-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 id="cta-heading" className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Restaurant Menu?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join thousands of restaurants using our digital menu system to increase orders, reduce costs, and provide better customer experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a 
              href="/demo-menu" 
              className="px-8 py-4 bg-emerald-600 rounded-full text-white shadow-lg hover:bg-emerald-700 transition font-semibold text-lg"
              aria-label="Try our digital menu demo now"
            >
              Try Free Demo Now
            </a>
            <a 
              href="/contact" 
              className="px-8 py-4 border-2 border-emerald-600 rounded-full text-emerald-600 hover:bg-emerald-50 transition font-semibold text-lg"
            >
              Get Custom Quote
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-600 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Setup in under 15-21 days</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Free support included</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEO FOOTER WITH KEYWORDS */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">
              <strong>Popular Searches:</strong> {seoKeywords.slice(0, 6).join(" • ")}
            </p>
            <p className="text-xs text-gray-500 max-w-3xl mx-auto">
              The Visuplate Digital Menu solution helps restaurants, cafes, food trucks, and catering businesses create beautiful, functional QR code menus that work on all devices. Our contactless menu system is optimized for search engines and mobile users, making it easy for customers to browse your menu and place orders.
            </p>
            <div className="mt-4 text-xs text-gray-400">
              © {new Date().getFullYear()} The Visuplate. Digital Menu Solutions for Restaurants.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}