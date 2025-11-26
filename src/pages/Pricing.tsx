import { useState, useEffect, ReactNode, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Star, Zap, Crown, ChevronDown, ChevronUp, Sparkles, X, Phone, Mail, MapPin, Calculator, TrendingUp, FileText, IndianRupee } from "lucide-react";

interface Plan {
  name: string;
  icon: ReactNode;
  price: string;
  monthlySubscription: string;
  includes: string;
  terms: string;
  features: string[];
  bestseller?: boolean;
  popular?: boolean;
}

interface Note {
  title: string;
  content: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  restaurant: string;
  plan: string;
}

interface BlogContent {
  id: number;
  title: string;
  description: string;
  content: string;
}

// Calculator Component
const SavingsCalculator = () => {
  const [selectedPlan, setSelectedPlan] = useState<'silver' | 'gold' | 'platinum'>('silver');
  const [months, setMonths] = useState(12);

  const prices = {
    silver: { ourSetup: 5999, ourMonthly: 599, competitorSetup: 15000, competitorMonthly: 1499 },
    gold: { ourSetup: 6999, ourMonthly: 699, competitorSetup: 18000, competitorMonthly: 1799 },
    platinum: { ourSetup: 9999, ourMonthly: 999, competitorSetup: 25000, competitorMonthly: 2499 }
  };

  const calculateSavings = () => {
    const price = prices[selectedPlan];
    const ourTotal = price.ourSetup + (price.ourMonthly * months);
    const competitorTotal = price.competitorSetup + (price.competitorMonthly * months);
    const savings = competitorTotal - ourTotal;
    const savingsPercent = Math.round((savings / competitorTotal) * 100);
    
    return {
      ourTotal,
      competitorTotal,
      savings,
      savingsPercent,
      price
    };
  };

  const results = calculateSavings();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Digital Menu Savings Calculator</h2>
      <p className="text-gray-600">See exactly how much you'll save compared to other providers</p>
      
      {/* Calculator */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
        <div className="grid grid-cols-1 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Your Plan</label>
            <select 
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value as 'silver' | 'gold' | 'platinum')}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              <option value="silver">Silver Plan (₹5,999 + ₹599/month)</option>
              <option value="gold">Gold Plan (₹6,999 + ₹699/month)</option>
              <option value="platinum">Platinum Plan (₹9,999 + ₹999/month)</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Number of Months</label>
            <input 
              type="range" 
              min="12" 
              max="36" 
              value={months}
              onChange={(e) => setMonths(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-600 mt-1">
              <span>1 Year</span>
              <span className="font-semibold">{months} Month{months > 1 ? 's' : ''}</span>
              <span>3 Years</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Competitor Price */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-700 text-sm mb-2">❌ Other Providers</h3>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Setup:</span>
                  <span className="font-semibold">₹{results.price.competitorSetup.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly:</span>
                  <span className="font-semibold">₹{results.price.competitorMonthly.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-t border-red-200 pt-1 mt-1">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold text-red-700">₹{results.competitorTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Our Price */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 relative">
              <div className="absolute -top-2 -right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                OUR PRICE
              </div>
              <h3 className="font-bold text-green-700 text-sm mb-2">✅ The VisuPlate</h3>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Setup:</span>
                  <span className="font-semibold">₹{results.price.ourSetup.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly:</span>
                  <span className="font-semibold">₹{results.price.ourMonthly.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-t border-green-200 pt-1 mt-1">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold text-green-700">₹{results.ourTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Savings */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <h3 className="font-bold text-blue-700 text-sm mb-1">💰 Your Total Savings</h3>
            <div className="text-2xl font-bold text-blue-700">₹{results.savings.toLocaleString()}</div>
            <div className="text-blue-600 text-sm">({results.savingsPercent}% Savings!)</div>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6">
        <h3 className="font-bold text-amber-800 text-lg mb-2">💡 Why Such Big Savings?</h3>
        <ul className="space-y-2 text-sm text-amber-700">
          <li>• <strong>No Middlemen</strong> - We develop directly for you</li>
          <li>• <strong>Efficient Technology</strong> - Our platform reduces development costs</li>
          <li>• <strong>Volume Business</strong> - We serve many restaurants across India</li>
          <li>• <strong>Transparent Pricing</strong> - No hidden fees or commissions</li>
        </ul>
      </div>
    </div>
  );
};

export default function Pricing() {
  const [expandedNote, setExpandedNote] = useState<number | null>(null);
  const [tappedCard, setTappedCard] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    restaurant: '',
    plan: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedBlog, setSelectedBlog] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const plans: Plan[] = useMemo(() => [
    {
      name: "Silver",
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
      price: "₹5,999",
      monthlySubscription: "₹599/month",
      includes: "Essential digital menu with upto 10 bestseller AR/video features",
      terms: "45% advance | Remaining after delivery",
      features: [
        "Up to 10 AR food previews",
        "Up to 10 video previews",
        "5 QR codes included",
        "Basic menu analytics",
        "Email support",
        "21 days delivery",
        "Mobile-responsive design",
        "12 months hosting included",
        "Monthly subscription: ₹599/month"
      ]
    },
    {
      name: "Gold",
      icon: <Star className="w-5 h-5 sm:w-6 sm:h-6" />,
      price: "₹6,999",
      monthlySubscription: "₹699/month",
      includes: "Advanced digital menu with enhanced AR experience",
      terms: "45% advance | Remaining after delivery",
      features: [
        "Up to 20 AR food previews",
        "Up to 20 video previews",
        "5 QR codes included",
        "Advanced analytics dashboard",
        "Priority support",
        "Social media integration",
        "21 days delivery",
        "Mobile-responsive design",
        "12 months hosting included",
        "Monthly subscription: ₹699/month"
      ],
      popular: true
    },
    {
      name: "Platinum",
      icon: <Crown className="w-5 h-5 sm:w-6 sm:h-6" />,
      price: "₹9,999",
      monthlySubscription: "₹999/month",
      includes: "Complete digital ecosystem with premium features",
      terms: "45% advance | Remaining after delivery",
      features: [
        "Up to 35 AR food previews",
        "Up to 35 video previews",
        "10 QR codes included",
        "24/7 priority support",
        "Custom domain support",
        "Social media integration",
        "25 days premium delivery",
        "Mobile-responsive design",
        "12 months hosting included",
        "Custom branding options",
        "Monthly subscription: ₹999/month"
      ],
      bestseller: true
    },
  ], []);

  const extraNotes: Note[] = useMemo(() => [
    {
      title: "Payment Structure",
      content: "Pay the plan price upfront for development and setup. Then pay the monthly subscription (₹599/₹699/₹999) per month which includes hosting, support, and maintenance."
    },
    {
      title: "What's Included in Monthly Subscription?",
      content: "Monthly subscription includes: Cloud hosting, SSL certificate, technical support, security updates, feature updates, and 99.9% uptime guarantee. Required per month."
    },
    {
      title: "Additional QR Codes",
      content: "Need more QR codes? Additional codes available at ₹99 per QR code. Perfect for multiple tables, takeaway counters, or different restaurant sections."
    },
    {
      title: "AR & Video Content Limits",
      content: "Each plan includes a set number of AR previews and videos. Additional content can be added at ₹59 per AR preview or video. Bulk discounts available."
    },
    {
      title: "Support & Maintenance",
      content: "All plans include 12 months of technical support and maintenance through the monthly subscription. Platinum plan includes 24/7 priority support."
    },
    {
      title: "Payment & Refund Policy",
      content: "45% advance payment required to start development. Balance due upon delivery. Monthly subscription starts after delivery. Advance is refundable only if work hasn't started within 24 hours."
    },
    {
      title: "Delivery Timeline",
      content: "Silver & Gold: 15 working days | Platinum: 10 working days. Rush delivery available at 25% extra charge for 50% faster delivery."
    }
  ], []);

  const seoFaqs: Note[] = useMemo(() => [
    {
      title: "What is the cost of digital menu for restaurants?",
      content: "Our digital menu pricing starts at ₹5,999 one-time setup fee plus ₹599/month subscription. This includes QR codes, AR previews, and mobile-responsive design perfect for Indian restaurants."
    },
    {
      title: "How much does QR code menu cost?",
      content: "QR code menu costs ₹5,999 for Silver plan with 5 QR codes included. Additional QR codes available at ₹99 each. Monthly subscription of ₹599 includes hosting and support."
    },
    {
      title: "Is there monthly subscription for digital menus?",
      content: "Yes, all plans include mandatory monthly subscription: Silver ₹599/month, Gold ₹699/month, Platinum ₹999/month. This covers hosting, support, and maintenance."
    },
    {
      title: "What is included in digital menu price?",
      content: "Price includes development, AR food previews, video content, QR codes, mobile-responsive design, analytics, and 12 months hosting with support."
    }
  ], []);

  const blogContents: BlogContent[] = useMemo(() => [
    {
      id: 1,
      title: "How Much Does Digital Menu Cost in India?",
      description: "Complete breakdown of digital menu pricing for restaurants",
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-gray-900">Complete Digital Menu Cost Breakdown in India</h2>
          
          <div class="bg-blue-50 p-4 sm:p-6 rounded-xl">
            <h3 class="text-lg font-semibold text-blue-900 mb-3">💰 Digital Menu Cost Comparison in India</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4">
              <div class="bg-white p-4 sm:p-5 rounded-lg border-2 border-red-200">
                <h4 class="font-bold text-red-700 text-sm sm:text-base mb-3">❌ Other Providers</h4>
                <div class="space-y-2 text-sm">
                  <div class="flex justify-between">
                    <span>Setup Cost:</span>
                    <span class="font-semibold text-red-600">₹15,000 - ₹30,000</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Monthly Fee:</span>
                    <span class="font-semibold text-red-600">₹1,499 - ₹2,999</span>
                  </div>
                  <div class="flex justify-between border-t pt-2">
                    <span class="font-semibold">First Year Total:</span>
                    <span class="font-bold text-red-700">₹33,000 - ₹66,000</span>
                  </div>
                </div>
              </div>
              
              <div class="bg-white p-4 sm:p-5 rounded-lg border-2 border-green-200 relative">
                <div class="absolute -top-2 -right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  OUR PRICE
                </div>
                <h4 class="font-bold text-green-700 text-sm sm:text-base mb-3">✅ The VisuPlate</h4>
                <div class="space-y-2 text-sm">
                  <div class="flex justify-between">
                    <span>Setup Cost:</span>
                    <span class="font-semibold text-green-600">₹5,999 - ₹9,999</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Monthly Fee:</span>
                    <span class="font-semibold text-green-600">₹599 - ₹999</span>
                  </div>
                  <div class="flex justify-between border-t pt-2">
                    <span class="font-semibold">First Year Total:</span>
                    <span class="font-bold text-green-700">₹12,000 - ₹22,000</span>
                  </div>
                </div>
              </div>
            </div>
            <p class="text-blue-800 text-xs sm:text-sm text-center font-semibold">
              💡 Save 60-70% compared to other digital menu providers in India
            </p>
          </div>

          <div class="prose max-w-none">
            <h3 class="text-xl font-semibold text-gray-900">Why Choose The VisuPlate?</h3>
            <p class="text-gray-600 text-sm sm:text-base mb-4">Get premium features at 60% lower cost than competitors</p>
            <ul class="space-y-2 text-sm sm:text-base">
              <li>✅ <strong>Same Premium Features</strong> - AR, videos, analytics included</li>
              <li>✅ <strong>60-70% Cost Saving</strong> - No overpricing like competitors</li>
              <li>✅ <strong>No Hidden Charges</strong> - Transparent pricing</li>
              <li>✅ <strong>Faster Delivery</strong> - 15-25 days vs 30-45 days (others)</li>
              <li>✅ <strong>Better Support</strong> - Direct WhatsApp support included</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-900 mt-6">Hidden Costs to Consider</h3>
            <div class="bg-amber-50 p-4 rounded-lg">
              <ul class="space-y-2 text-sm sm:text-base">
                <li>🔧 Additional QR codes: ₹99 each</li>
                <li>🔄 Extra AR previews: ₹59 each</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 2,
      title: "QR Code Menu vs Traditional Menu Cost Analysis",
      description: "Compare costs and ROI of digital vs paper menus",
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-gray-900">QR Code Menu vs Traditional Menu: Complete Cost Analysis</h2>
          
          <div class="grid grid-cols-1 gap-4 sm:gap-6">
            <div class="bg-green-50 p-4 sm:p-6 rounded-xl">
              <h3 class="text-lg font-semibold text-green-900 mb-4">📱 QR Code Digital Menu</h3>
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span>One-time Setup:</span>
                  <span class="font-semibold">₹5,999 - ₹9,999</span>
                </div>
                <div class="flex justify-between">
                  <span>Monthly Subscription:</span>
                  <span class="font-semibold">₹599 - ₹999</span>
                </div>
                <div class="flex justify-between border-t pt-2">
                  <span class="font-semibold">First Year Total:</span>
                  <span class="font-bold text-green-700">₹12,000 - ₹22,000</span>
                </div>
              </div>
            </div>

            <div class="bg-red-50 p-4 sm:p-6 rounded-xl">
              <h3 class="text-lg font-semibold text-red-900 mb-4">📄 Traditional Paper Menu</h3>
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span>Initial Printing (20 copies):</span>
                  <span class="font-semibold">₹8,000 - ₹15,000</span>
                </div>
                <div class="flex justify-between">
                  <span>Yearly Re-prints:</span>
                  <span class="font-semibold">₹2,000 - ₹5,000</span>
                </div>
                <div class="flex justify-between border-t pt-2">
                  <span class="font-semibold">First Year Total:</span>
                  <span class="font-bold text-red-700">₹32,000 - ₹80,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 3,
      title: "Digital Menu Savings Calculator",
      description: "Calculate how much you'll save with our pricing vs competitors",
      content: "CALCULATOR_COMPONENT"
    }
  ], []);

  const allNotes = useMemo(() => [...extraNotes, ...seoFaqs], [extraNotes, seoFaqs]);

  const pricingFeatures = useMemo(() => [
    "One-time development fee",
    "12 months mandatory subscription",
    "No hidden charges",
    "Professional quality guaranteed",
    "Easy upgrades available",
    "Dedicated support"
  ], []);

  const blogIcons = useMemo(() => [
    <IndianRupee className="w-5 h-5 sm:w-6 sm:h-6" />, 
    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />, 
    <Calculator className="w-5 h-5 sm:w-6 sm:h-6" />, 
    <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
  ], []);

  // Mobile-optimized scroll handler
  const handleScroll = useCallback(() => {
    if (isMobile) return;
    
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    setScrollProgress(progress);
  }, [isMobile]);

  // Track scroll progress for animations (reduced on mobile)
  useEffect(() => {
    const throttledScroll = () => {
      if (isMobile) return;
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll, isMobile]);

  // SEO Meta Tags and Structured Data
  useEffect(() => {
    document.title = "Digital Menu Pricing 2024 | QR Code Menu Plans ₹5,999-₹9,999 | The VisuPlate";
    
    let viewport = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.name = "viewport";
      viewport.content = "width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=1";
      document.head.appendChild(viewport);
    }

    const preventZoom = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        viewport.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
      } else {
        viewport.content = "width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=1";
      }
    };

    document.addEventListener('focusin', preventZoom);
    document.addEventListener('focusout', preventZoom);

    return () => {
      document.removeEventListener('focusin', preventZoom);
      document.removeEventListener('focusout', preventZoom);
    };
  }, []);

  const handlePlanSelect = useCallback((planName: string) => {
    setShowForm(planName);
    setFormData(prev => ({ ...prev, plan: planName }));
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    const phoneNumber = "9599202386";
    const message = `New Plan Inquiry - TheVisuPlate!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nRestaurant: ${formData.restaurant}\nSelected Plan: ${formData.plan}\n\nMessage: I want to get started with the ${formData.plan} plan!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    setSubmitSuccess(true);
    setIsSubmitting(false);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setShowForm(null);
      setSubmitSuccess(false);
      setFormData({ name: '', email: '', phone: '', restaurant: '', plan: '' });
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const toggleNote = useCallback((index: number) => {
    setExpandedNote(expandedNote === index ? null : index);
  }, [expandedNote]);

  const calculateTotalCost = useCallback((plan: Plan) => {
    const setupCost = parseInt(plan.price.replace("₹", "").replace(",", ""));
    const monthlyCost = parseInt(plan.monthlySubscription.replace("₹", "").replace("/month", ""));
    return setupCost + monthlyCost * 12;
  }, []);

  const getPlanByName = useCallback((planName: string) => {
    return plans.find(p => p.name === planName);
  }, [plans]);

  const getCardClasses = (plan: Plan) => {
    const baseClasses = `
      relative group h-full flex flex-col 
      transform-gpu
      transition-all duration-300
      active:scale-95
      ${tappedCard === plan.name ? 'scale-95' : ''}
      ${plan.bestseller && !isMobile ? "lg:scale-105 lg:-translate-y-4" : ""}
    `;

    return baseClasses;
  };

  const getCardInnerClasses = (plan: Plan) => {
    const baseClasses = `
      relative h-full flex flex-col bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 
      border-2 shadow-lg sm:shadow-xl transition-all duration-300
      ${plan.bestseller
        ? "border-purple-200 bg-gradient-to-b from-white to-purple-50/50"
        : plan.popular
          ? "border-amber-200 bg-gradient-to-b from-white to-amber-50/50"
          : "border-emerald-200 bg-gradient-to-b from-white to-emerald-50/30"
      }
    `;

    return baseClasses;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50/10 to-cyan-50/10">
      {/* Lightweight Scroll Progress Bar */}
      {!isMobile && (
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      )}

      {/* Simplified Background Elements */}
      {!isMobile && (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-32 w-60 h-60 bg-gradient-to-r from-emerald-200/10 to-cyan-200/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-40 -left-32 w-60 h-60 bg-gradient-to-r from-purple-200/10 to-pink-200/10 rounded-full blur-2xl"></div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-12 lg:py-16 relative">
        {/* Header */}
        <header className="mb-12 sm:mb-16 lg:mb-20 relative flex flex-col items-center justify-center w-full text-center">
          <div className="pt-2 inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 shadow-lg">
            <Sparkles className="w-4 h-4" />
            One-Time Setup + Monthly Subscription
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 p-2 bg-gradient-to-r from-emerald-600 via-green-600 to-cyan-600 bg-clip-text text-transparent inline-block leading-tight">
            Complete Pricing Package
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            Pay once for development, then monthly for hosting and support. Everything included for your success.
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-2xl mx-auto px-2">
            {pricingFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-full border border-emerald-200 shadow-sm text-xs sm:text-sm">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-700 whitespace-nowrap">{feature}</span>
              </div>
            ))}
          </div>
        </header>

        {/* Pricing Cards */}
        <section className="mb-16 sm:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={getCardClasses(plan)}
                onTouchStart={() => setTappedCard(plan.name)}
                onTouchEnd={() => setTappedCard(null)}
              >

                {/* Bestseller Badge */}
                {plan.bestseller && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold shadow-lg flex items-center gap-1 sm:gap-2 whitespace-nowrap">
                      <Crown className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Popular Badge */}
                {plan.popular && !plan.bestseller && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold shadow-lg flex items-center gap-1 sm:gap-2 whitespace-nowrap">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                      GREAT VALUE
                    </div>
                  </div>
                )}

                {/* Subscription Badge */}
                <div className="absolute -top-2 -right-2 z-20">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold shadow">
                    + {plan.monthlySubscription}
                  </div>
                </div>

                <div className={getCardInnerClasses(plan)}>
                  {/* Plan Header */}
                  <div className="relative text-center mb-6 sm:mb-8">
                    <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 ${plan.bestseller
                      ? "bg-gradient-to-br from-purple-500 to-pink-500 text-white"
                      : plan.popular
                        ? "bg-gradient-to-br from-amber-500 to-orange-500 text-white"
                        : "bg-gradient-to-br from-emerald-500 to-green-500 text-white"
                      }`}>
                      {plan.icon}
                    </div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm">{plan.includes}</p>
                  </div>

                  {/* Pricing */}
                  <div className="relative text-center mb-6 sm:mb-8">
                    <div className="mb-3 sm:mb-4">
                      <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        {plan.price}
                      </p>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg sm:rounded-xl p-2 sm:p-3 mb-2">
                        <p className="text-blue-700 font-semibold text-sm sm:text-base">
                          + {plan.monthlySubscription}
                        </p>
                        <p className="text-blue-600 text-xs sm:text-sm">per month</p>
                      </div>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        One-time setup cost then monthly subscription
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="relative space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-2 sm:gap-3"
                      >
                        <CheckCircle className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 ${plan.bestseller ? "text-purple-500" :
                          plan.popular ? "text-amber-500" :
                            "text-emerald-500"
                          }`} />
                        <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Payment Terms */}
                  <div className="relative bg-white border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-1">Payment Terms</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">{plan.terms}</p>
                    <p className="text-blue-600 text-xs font-semibold mt-1">
                      Monthly subscription starts after delivery
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handlePlanSelect(plan.name)}
                    className={`relative w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all duration-300 overflow-hidden min-h-[44px] flex items-center justify-center ${plan.bestseller
                      ? "bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white shadow-lg"
                      : plan.popular
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg"
                        : "bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg"
                      }`}
                  >
                    <span className="relative flex items-center justify-center gap-2">
                      Get {plan.name} Plan
                      <Sparkles className="w-4 h-4" />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Breakdown */}
        <section className="max-w-4xl mx-auto mb-12 sm:mb-16 relative">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Complete Cost Breakdown
          </h2>

          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-emerald-100 overflow-hidden">
            {/* Desktop Header */}
            <div className="hidden sm:grid grid-cols-4 gap-4 p-4 sm:p-6 bg-gradient-to-r from-emerald-50 to-green-50 border-b border-emerald-200">
              <div className="font-bold text-gray-900 text-sm">Plan</div>
              <div className="text-center font-bold text-gray-600 text-sm">One-Time Setup</div>
              <div className="text-center font-bold text-blue-600 text-sm">Monthly Subscription</div>
              <div className="text-center font-bold text-green-600 text-sm">Total 12 Months</div>
            </div>

            {/* Mobile Header */}
            <div className="sm:hidden p-3 text-center font-semibold bg-emerald-50 border-b border-emerald-200 text-sm">
              Plan Cost Summary
            </div>

            {plans.map((plan, index) => {
              const totalYearCost = calculateTotalCost(plan);

              return (
                <div key={index}>
                  {/* Desktop Row */}
                  <div className="hidden sm:grid grid-cols-4 gap-4 p-4 sm:p-6 border-b border-gray-100 hover:bg-white transition-colors duration-300">
                    <div className="font-medium text-gray-700 flex items-center gap-3 text-sm">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${plan.bestseller
                          ? "bg-purple-500 text-white"
                          : plan.popular
                            ? "bg-amber-500 text-white"
                            : "bg-emerald-500 text-white"
                          }`}
                      >
                        {plan.icon}
                      </div>
                      {plan.name}
                    </div>

                    <div className="text-center">
                      <div className="text-lg sm:text-xl font-bold text-gray-900">{plan.price}</div>
                      <div className="text-gray-500 text-xs">Development</div>
                    </div>

                    <div className="text-center">
                      <div className="text-lg sm:text-xl font-bold text-blue-600">{plan.monthlySubscription}</div>
                      <div className="text-gray-500 text-xs">× 12 months</div>
                    </div>

                    <div className="text-center">
                      <div className="text-lg sm:text-xl font-bold text-green-600">₹{totalYearCost.toLocaleString()}</div>
                      <div className="text-gray-500 text-xs">First year total</div>
                    </div>
                  </div>

                  {/* Mobile Row */}
                  <div className="sm:hidden p-3 space-y-2 border-b border-gray-100 bg-white">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900 flex items-center gap-2 text-sm">
                        <div
                          className={`w-6 h-6 rounded flex items-center justify-center ${plan.bestseller
                            ? "bg-purple-500 text-white"
                            : plan.popular
                              ? "bg-amber-500 text-white"
                              : "bg-emerald-500 text-white"
                            }`}
                        >
                          {plan.icon}
                        </div>
                        {plan.name}
                      </span>

                      <span className="font-bold text-gray-800 text-sm">{plan.price}</span>
                    </div>

                    <div className="flex justify-between text-blue-700 text-xs">
                      <span>Monthly Subscription:</span>
                      <span className="font-semibold">{plan.monthlySubscription}</span>
                    </div>

                    <div className="flex justify-between text-green-700 text-sm">
                      <span className="font-semibold">Total 12 Months:</span>
                      <span className="font-bold">₹{totalYearCost.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Pricing Comparison Table for SEO */}
        <section className="max-w-6xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
            Digital Menu Pricing Comparison 2024
          </h2>
          
          <div className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead className="bg-gradient-to-r from-emerald-500 to-green-500 text-white">
                  <tr>
                    <th className="p-3 sm:p-4 text-left text-xs sm:text-sm">Feature</th>
                    <th className="p-3 sm:p-4 text-center text-xs sm:text-sm">Silver ₹5,999</th>
                    <th className="p-3 sm:p-4 text-center text-xs sm:text-sm">Gold ₹6,999</th>
                    <th className="p-3 sm:p-4 text-center text-xs sm:text-sm">Platinum ₹9,999</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["AR Food Previews", "10", "20", "35"],
                    ["Video Previews", "10", "20", "35"], 
                    ["QR Codes", "5", "5", "10"],
                    ["Monthly Subscription", "₹599", "₹699", "₹999"],
                    ["Delivery Time", "21 days", "21 days", "25 days"],
                    ["Support", "Email", "Priority", "24/7 Priority"]
                  ].map(([feature, silver, gold, platinum], index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-3 sm:p-4 font-medium text-gray-900 text-xs sm:text-sm">{feature as string}</td>
                      <td className="p-3 sm:p-4 text-center text-gray-700 text-xs sm:text-sm">{silver as string}</td>
                      <td className="p-3 sm:p-4 text-center text-gray-700 text-xs sm:text-sm">{gold as string}</td>
                      <td className="p-3 sm:p-4 text-center text-gray-700 text-xs sm:text-sm">{platinum as string}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Location-Based Keywords */}
        <section className="mt-8 sm:mt-12 text-center mb-12 sm:mb-16">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            Popular in Major Cities
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-2xl mx-auto px-2">
            {[
              "Digital Menu Mumbai",
              "QR Menu Delhi", 
              "Online Menu Bangalore",
              "Restaurant Menu Chennai",
              "Cafe Menu Hyderabad",
              "Food Menu Kolkata",
              "Cloud Kitchen Pune"
            ].map((city, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs hover:bg-emerald-100 hover:text-emerald-700 transition-colors"
              >
                {city}
              </span>
            ))}
          </div>
        </section>

        {/* Blog Links Section */}
        <section className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
            Related Articles About Digital Menu Costs
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {blogContents.map((blog, index) => (
              <div 
                key={blog.id}
                onClick={() => setSelectedBlog(blog.id)}
                className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 active:scale-95 transition-transform duration-300 cursor-pointer min-h-[80px] flex items-center"
              >
                <div className="flex items-start gap-3 sm:gap-4 w-full">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {blogIcons[index]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2 line-clamp-2">
                      {blog.title}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">
                      {blog.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {allNotes.map((note, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl border border-emerald-100 overflow-hidden active:scale-95 transition-transform duration-300"
              >
                <button
                  onClick={() => toggleNote(index)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-gradient-to-r from-emerald-50 to-green-50 transition-all duration-300 group min-h-[60px]"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 text-left">
                      {note.title}
                    </h3>
                  </div>
                  {expandedNote === index ? (
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 flex-shrink-0" />
                  )}
                </button>

                {expandedNote === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 animate-fadeIn">
                    <div className="pl-0 sm:pl-14">
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{note.content}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 relative">
              Get Your Digital Menu Today
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto relative">
              Affordable <strong>QR code menu pricing</strong> with <strong>monthly subscription</strong> options. 
              Perfect for <strong>restaurants in India</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center relative">
              <button
                onClick={() => handlePlanSelect("Best Value")}
                className="bg-emerald-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-colors flex items-center justify-center gap-2 min-h-[44px]"
              >
                View Pricing Plans
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <Link to="/contact" className="flex">
                <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-gray-900 transition-colors w-full min-h-[44px]">
                  Contact for Custom Quote
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Hidden SEO Content */}
        <section className="hidden" aria-hidden="true">
          <h2>Digital Menu Pricing for Restaurants</h2>
          <p>
            The VisuPlate offers comprehensive digital menu solutions for restaurants, cafes, 
            and food businesses in India. Our pricing includes Silver plan at ₹5,999, Gold 
            plan at ₹6,999, and Platinum plan at ₹9,999 with monthly subscriptions starting 
            from ₹599/month. All plans include QR codes, AR food previews, video content, 
            and mobile-responsive designs perfect for Indian restaurants looking to upgrade 
            to digital menus.
          </p>
        </section>

        {/* Contact Info */}
        <footer className="text-center mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">

            <a
              href="tel:+918851796110"
              className="flex items-center justify-center gap-2 text-gray-600 text-sm hover:text-emerald-600"
            >
              <Phone className="w-4 h-4 text-emerald-500" />
              <span>+91 8851796110</span>
            </a>

            <a
              href="mailto:thevisuplate@gmail.com"
              className="flex items-center justify-center gap-2 text-gray-600 text-sm hover:text-emerald-600"
            >
              <Mail className="w-4 h-4 text-emerald-500" />
              <span>thevisuplate@gmail.com</span>
            </a>

            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 text-gray-600 text-sm hover:text-emerald-600"
            >
              <MapPin className="w-4 h-4 text-emerald-500" />
              <span>Available In Pan India</span>
            </Link>

          </div>

          <p className="text-gray-500 text-xs sm:text-sm mt-6 sm:mt-8">
            © 2024 TheVisuPlate. All rights reserved.
          </p>
        </footer>

      </div>

      {/* Lead Capture Form Modal */}
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 p-3 sm:p-4 flex items-center justify-center">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 w-full max-w-sm mx-auto shadow-xl border border-emerald-100 max-h-[85vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                Get {showForm} Plan
              </h3>
              <button
                onClick={() => setShowForm(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {submitSuccess ? (
              <div className="text-center py-6 sm:py-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Success!</h4>
                <p className="text-gray-600 text-sm sm:text-base">Redirecting to WhatsApp...</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
                  <h4 className="font-bold text-blue-900 text-sm sm:text-base mb-2">Plan Summary:</h4>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span>One-Time Setup:</span>
                      <span className="font-semibold">
                        {getPlanByName(showForm)?.price}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly Subscription:</span>
                      <span className="font-semibold text-blue-600">
                        {getPlanByName(showForm)?.monthlySubscription}
                      </span>
                    </div>
                    <div className="flex justify-between border-t border-blue-200 pt-1 mt-1">
                      <span>First Year Total:</span>
                      <span className="font-bold text-green-600">
                        ₹{getPlanByName(showForm) ? calculateTotalCost(getPlanByName(showForm)!).toLocaleString() : '0'}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name *"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base min-h-[44px]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base min-h-[44px]"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base min-h-[44px]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="restaurant"
                    placeholder="Restaurant Name *"
                    required
                    value={formData.restaurant}
                    onChange={handleInputChange}
                    className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base min-h-[44px]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-h-[44px]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      Continue to WhatsApp
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    </>
                  )}
                </button>
                <p className="text-gray-500 text-xs sm:text-sm text-center">
                  We'll redirect you to WhatsApp to discuss your {showForm} plan
                </p>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Blog Content Modal */}
      {selectedBlog && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 p-3 sm:p-4 flex items-center justify-center">
          <div className="bg-white rounded-xl sm:rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 pr-2">
                {blogContents.find(b => b.id === selectedBlog)?.title}
              </h3>
              <button
                onClick={() => setSelectedBlog(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center flex-shrink-0"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[60vh] sm:max-h-[70vh]">
              {selectedBlog === 3 ? (
                <SavingsCalculator />
              ) : (
                <div 
                  dangerouslySetInnerHTML={{ 
                    __html: blogContents.find(b => b.id === selectedBlog)?.content || '' 
                  }}
                />
              )}
            </div>

            <div className="p-4 sm:p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between items-center">
                <p className="text-gray-600 text-sm sm:text-base text-center sm:text-left">
                  Need a custom solution for your restaurant?
                </p>
                <button
                  onClick={() => {
                    setSelectedBlog(null);
                    handlePlanSelect("Custom Consultation");
                  }}
                  className="bg-emerald-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors flex items-center gap-2 min-h-[44px] text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4" />
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}