import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * OnlineMenu.tsx - SEO Optimized Online Menu System
 * Enhanced with structured data, animations, and comprehensive SEO features
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

export default function OnlineMenu() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  useEffect(() => {
    // Comprehensive SEO setup for Online Menu
    const pageTitle = "Online Menu System for Restaurants | Web-Based Digital Menu | The Visuplate";
    const metaDescription = "Online menu system for restaurants. Web-based digital menus accessible from any device. Shareable links, fast loading, and mobile-optimized. Perfect for delivery and dine-in.";
    
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
    canonical.href = "https://thevisuplate.online/online-menu";

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: metaDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://thevisuplate.online/online-menu' },
      { property: 'og:image', content: 'https://thevisuplate.online/og-online-menu.jpg' },
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

    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: pageTitle },
      { name: 'twitter:description', content: metaDescription },
      { name: 'twitter:image', content: 'https://thevisuplate.online/twitter-online-menu.jpg' },
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

    // Reduce motion preference
    const mq = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq?.matches ?? false);
    const handler = () => setReduceMotion(mq.matches);
    mq?.addEventListener?.("change", handler);
    return () => mq?.removeEventListener?.("change", handler);
  }, []);

  // Comprehensive JSON-LD for Online Menu System
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": "https://thevisuplate.online/online-menu#product",
        "name": "Online Menu System",
        "description": "Web-based online menu solution for restaurants, cafes, and food delivery services. Accessible from any device with shareable links and instant updates.",
        "brand": {
          "@type": "Brand",
          "name": "The Visuplate",
          "logo": "https://thevisuplate.online/logo.png"
        },
        "category": "Restaurant Technology",
        "keywords": ["online menu", "web menu", "digital menu", "restaurant website menu", "food delivery menu"],
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
          "ratingValue": "4.8",
          "ratingCount": "156",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Restaurant Manager" },
            "reviewBody": "Our online menu increased takeaway orders by 45%. Customers love browsing on their phones before ordering.",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            }
          }
        ]
      },
      {
        "@type": "WebApplication",
        "name": "The Visuplate Online Menu",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "permissions": "browser",
        "description": "Responsive online menu system for food businesses",
        "browserRequirements": "Requires JavaScript. Works on all modern browsers."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do customers access the online menu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Customers can access your menu through a shareable link on WhatsApp, Instagram, your website, or by scanning a QR code. No downloads required."
            }
          },
          {
            "@type": "Question",
            "name": "Does the online menu work on all devices?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our online menus are fully responsive and optimized for mobile phones, tablets, laptops, and desktop computers with automatic layout adjustments."
            }
          },
          {
            "@type": "Question",
            "name": "Can I embed the menu on my website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely! We provide embed codes to seamlessly integrate your menu into any website, WordPress, Shopify, or custom web platform."
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
            "name": "Online Menu",
            "item": "https://thevisuplate.online/online-menu"
          }
        ]
      }
    ]
  };

  const features = [
    {
      title: "Universal Device Compatibility",
      description: "Flawless experience on smartphones, tablets, laptops, and desktops. Responsive design adapts to any screen size automatically.",
      icon: "📱",
      stats: "100% Responsive"
    },
    {
      title: "Instant Shareable Links",
      description: "Share your menu via WhatsApp, Instagram, Facebook, or embed directly on your website. One link works everywhere.",
      icon: "🔗",
      stats: "1-Click Sharing"
    },
    {
      title: "Lightning Fast Loading",
      description: "Optimized for speed with lazy loading images and minimal code. Loads in under 2 seconds on mobile networks.",
      icon: "⚡",
      stats: "<2s Load Time"
    },
    {
      title: "SEO Optimized",
      description: "Built with search engine optimization. Your menu can appear in Google search results, driving more organic traffic.",
      icon: "🔍",
      stats: "Google Friendly"
    },
    {
      title: "Real-time Order Integration",
      description: "Connect with food delivery platforms or add direct ordering. Customers can order directly from the menu.",
      icon: "🛒",
      stats: "Order Integration"
    },
    {
      title: "Multi-language Support",
      description: "Serve international customers with automatic translation options. Expand your reach without barriers.",
      icon: "🌐",
      stats: "15+ Languages"
    }
  ];

  const useCases = [
    {
      scenario: "Food Delivery Services",
      benefit: "Customers browse and order before even calling",
      icon: "🚴"
    },
    {
      scenario: "Website Integration",
      benefit: "Seamlessly embed menu on your existing website",
      icon: "💻"
    },
    {
      scenario: "Social Media Marketing",
      benefit: "Share menu links on Instagram and Facebook",
      icon: "📱"
    },
    {
      scenario: "Catering Services",
      benefit: "Send professional menu links to corporate clients",
      icon: "🏢"
    },
    {
      scenario: "Event Menus",
      benefit: "Create special menus for weddings and events",
      icon: "🎉"
    },
    {
      scenario: "Seasonal Specials",
      benefit: "Quickly update and share seasonal offerings",
      icon: "🍂"
    }
  ];

  const benefits = [
    "Increase online orders by up to 60%",
    "Reduce customer service calls about menu items",
    "Update menu instantly without technical skills",
    "Track customer engagement and popular dishes",
    "Professional appearance builds customer trust",
    "Works with any device your customers use"
  ];

  const faqs = [
    {
      question: "How do I share my online menu with customers?",
      answer: "You can share your menu in multiple ways: copy the direct link to share on WhatsApp/email, embed it on your website, add to your social media profiles, or generate QR codes for physical locations."
    },
    {
      question: "Can customers order directly from the online menu?",
      answer: "Yes! We support direct ordering integration with popular food delivery platforms or you can set up direct ordering with payment processing. Customers can browse and order in one seamless experience."
    },
    {
      question: "How often can I update my online menu?",
      answer: "You can update your menu unlimited times in real-time. Changes are instant and reflect immediately across all shared links and embedded versions. Perfect for daily specials or sold-out items."
    },
    {
      question: "Is the online menu optimized for slow internet connections?",
      answer: "Absolutely. Our menus are optimized with compressed images, lazy loading, and minimal code to ensure fast loading even on 2G/3G networks. Perfect for all customer scenarios."
    },
    {
      question: "Can I see analytics for my online menu?",
      answer: "Yes, our dashboard provides detailed analytics including page views, popular items, average time spent, device types, and geographic data to help you understand customer behavior."
    }
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
      />

      {/* Hero Section */}
      <header className="relative w-full py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-green-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-28 -right-28 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-green-300/10 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-700 mb-6"
          >
            Online Menu System
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
          >
            Beautiful, fast, and accessible online menus that work on <strong>any device</strong>. Share via link, embed on your website, or integrate with social media to reach more customers.
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
              href="/demo-online-menu"
              className="px-8 py-4 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-colors font-semibold text-lg flex items-center gap-3"
              aria-label="View online menu demo"
            >
              <span>View Online Demo</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
            
            <motion.a
              whileHover={{ scale: reduceMotion ? 1 : 1.05 }}
              href="/pricing"
              className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-50 transition-colors font-semibold text-lg"
            >
              Pricing & Plans
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2 bg-white/70 px-3 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Works on all devices</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 px-3 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>No technical skills needed</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 px-3 py-2 rounded-full">
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
            Why Choose Online Menus?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Modern solutions for the digital age. Reach customers wherever they are with beautiful, functional online menus.
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
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <div className="mb-2">
                <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {feature.stats}
                </span>
              </div>
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

      {/* Use Cases Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect For Every Scenario
            </h2>
            <p className="text-gray-600 text-lg">
              Whether you're a small cafe or multi-location restaurant chain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.scenario}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">{useCase.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{useCase.scenario}</h3>
                <p className="text-gray-600 text-sm">{useCase.benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Measurable Business Results
            </h2>
            <p className="text-green-100 text-lg max-w-2xl mx-auto">
              Join successful restaurants using our online menu system
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
                <span className="text-green-50">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Experience the Online Menu Difference
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                See how your customers will experience your menu across different devices. Responsive design ensures perfect viewing everywhere.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Mobile-optimized for smartphones</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Tablet-friendly layout</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Desktop-optimized experience</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  whileHover={{ scale: reduceMotion ? 1 : 1.05 }}
                  href="/demo-online-menu"
                  className="px-8 py-4 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-colors font-semibold text-center"
                >
                  View Live Demo
                </motion.a>
                <motion.a
                  whileHover={{ scale: reduceMotion ? 1 : 1.05 }}
                  href="/get-started"
                  className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-50 transition-colors font-semibold text-center"
                >
                  Start Free Trial
                </motion.a>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="relative">
                {/* Device mockups */}
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-2xl shadow-inner">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="bg-white p-2 rounded-lg shadow-md transform -rotate-6">
                      <div className="w-24 h-40 bg-gradient-to-br from-green-400 to-emerald-500 rounded flex items-center justify-center text-white text-xs text-center p-2">
                        Mobile View
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-md transform rotate-3">
                      <div className="w-32 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded flex items-center justify-center text-white text-xs text-center p-2">
                        Tablet View
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md transform -rotate-3">
                      <div className="w-40 h-28 bg-gradient-to-br from-green-400 to-emerald-500 rounded flex items-center justify-center text-white text-xs text-center p-2">
                        Desktop View
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Responsive Design
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
            Everything you need to know about our online menu system
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
                  className={`w-6 h-6 text-green-600 transform transition-transform ${
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
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Launch Your Online Menu Today
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto"
          >
            Join thousands of restaurants serving customers through beautiful, functional online menus.
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
              className="px-8 py-4 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-colors font-semibold text-lg"
            >
              Start Free Trial
            </motion.a>
            <motion.a
              whileHover={{ scale: reduceMotion ? 1 : 1.05 }}
              href="/schedule-demo"
              className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-50 transition-colors font-semibold text-lg"
            >
              Schedule Personalized Demo
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 text-sm text-gray-500"
          >
            No credit card required • Setup in 15 minutes • Free support included
          </motion.p>
        </div>
      </section>
    </>
  );
}