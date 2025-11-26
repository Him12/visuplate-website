import { useState, useEffect, ReactNode, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Star, Zap, Crown, ChevronDown, ChevronUp, Sparkles, X, Phone, Mail, MapPin, GamepadIcon, Users, Baby, Gift, Zap as Lightning } from "lucide-react";

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
  hasGames?: boolean;
  category: 'basic' | 'premium' | 'addon';
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
// ------------------ FIX ADDED HERE ------------------
type PlanType = 'silver' | 'platinum' | 'silver-games' | 'platinum-games';
// ----------------------------------------------------

const SavingsCalculator = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('silver');
  const [months, setMonths] = useState(12);

  const prices: Record<PlanType, {
    ourSetup: number;
    ourMonthly: number;
    competitorSetup: number;
    competitorMonthly: number;
  }> = {
    silver: { ourSetup: 5999, ourMonthly: 599, competitorSetup: 15000, competitorMonthly: 1499 },
    platinum: { ourSetup: 9999, ourMonthly: 999, competitorSetup: 25000, competitorMonthly: 2499 },
    'silver-games': { ourSetup: 8999, ourMonthly: 899, competitorSetup: 20000, competitorMonthly: 1999 },
    'platinum-games': { ourSetup: 14999, ourMonthly: 1499, competitorSetup: 35000, competitorMonthly: 2999 }
  };

  const calculateSavings = () => {
    const price = prices[selectedPlan];
    const ourTotal = price.ourSetup + price.ourMonthly * months;
    const competitorTotal = price.competitorSetup + price.competitorMonthly * months;
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

      <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">

        <div className="grid grid-cols-1 gap-4 mb-6">
          {/* ---------- SELECT PLAN DROPDOWN (FIXED) ---------- */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Your Plan</label>
            <select
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value as PlanType)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              <option value="silver">Silver Plan (₹5,999 + ₹599/month)</option>
              <option value="silver-games">Silver + Games (₹8,999 + ₹899/month)</option>
              <option value="platinum">Platinum Plan (₹9,999 + ₹999/month)</option>
              <option value="platinum-games">Platinum + Games (₹14,999 + ₹1,499/month)</option>
            </select>
          </div>

          {/* ---------- MONTHS SLIDER ---------- */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Number of Months</label>
            <input
              type="range"
              min="12"
              max="36"
              value={months}
              onChange={(e) => setMonths(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg"
            />
            <div className="flex justify-between text-xs text-gray-600 mt-1">
              <span>1 Year</span>
              <span className="font-semibold">{months} Months</span>
              <span>3 Years</span>
            </div>
          </div>
        </div>

        {/* ---------- PRICING BOXES ---------- */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Competitor Box */}
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

            {/* Our Price Box */}
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

      {/* ---------- WHY SAVINGS INFO ---------- */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6">
        <h3 className="font-bold text-amber-800 text-lg mb-2">💡 Why Such Big Savings?</h3>
        <ul className="space-y-2 text-sm text-amber-700">
          <li>• No Middlemen</li>
          <li>• Efficient Technology</li>
          <li>• Volume Business</li>
          <li>• Transparent Pricing</li>
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
    name: '', email: '', phone: '', restaurant: '', plan: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedBlog, setSelectedBlog] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showGameAddons, setShowGameAddons] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // SEO Meta Tags
  useEffect(() => {
    document.title = "Digital Menu Pricing 2024 | QR Code Menu with Games ₹5,999-₹14,999 | The VisuPlate";
  }, []);

  // Mobile-optimized scroll handler
  const handleScroll = useCallback(() => {
    if (isMobile) return;

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    setScrollProgress(progress);
  }, [isMobile]);

  // Track scroll progress
  useEffect(() => {
    const throttledScroll = () => {
      if (isMobile) return;
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll, isMobile]);

  const plans: Plan[] = useMemo(() => [
    {
      name: "Silver",
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
      price: "₹5,999",
      monthlySubscription: "₹599/month",
      includes: "Essential digital menu - Perfect for getting started",
      terms: "45% advance | Remaining after delivery",
      features: [
        "Digital Menu Only (No AR/Video)",
        "Mobile Responsive Design",
        "5 QR Codes Included",
        "Basic Analytics Dashboard",
        "Email Support",
        "15-Day Delivery",
        "12 Months Hosting Included",
        "Monthly subscription: ₹599/month"
      ],
      category: 'basic',
      popular: true
    },
    {
      name: "Platinum",
      icon: <Crown className="w-5 h-5 sm:w-6 sm:h-6" />,
      price: "₹9,999",
      monthlySubscription: "₹999/month",
      includes: "Complete AR + Video digital menu system",
      terms: "45% advance | Remaining after delivery",
      features: [
        "35 AR Food Previews",
        "35 Video Previews",
        "10 QR Codes Included",
        "Custom Branding Options",
        "Social Media Integration",
        "Priority Support",
        "Custom Domain Support",
        "21-Day Premium Delivery",
        "12 Months Hosting Included",
        "Monthly subscription: ₹999/month"
      ],
      category: 'premium',
      bestseller: true
    }
  ], []);

  const gameAddons: Plan[] = useMemo(() => [
    {
      name: "Silver + Games",
      icon: <GamepadIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
      price: "₹8,999",
      monthlySubscription: "₹899/month",
      includes: "Digital menu + Interactive games to engage customers",
      terms: "45% advance | Remaining after delivery",
      features: [
        "Everything in Silver Plan",
        "3 Interactive Games Included",
        "Keep customers entertained",
        "Perfect for families with kids",
        "Priority Support",
        "15-Day Delivery",
        "12 Months Hosting Included",
        "Monthly subscription: ₹899/month"
      ],
      category: 'addon',
      hasGames: true
    },
    {
      name: "Platinum + Games",
      icon: <GamepadIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
      price: "₹14,999",
      monthlySubscription: "₹1,499/month",
      includes: "Ultimate dining experience with AR + Games",
      terms: "45% advance | Remaining after delivery",
      features: [
        "Everything in Platinum Plan",
        "3 Interactive Games Included",
        "Premium Priority Game Support",
        "Keep customers engaged while waiting",
        "Perfect for family restaurants",
        "Highest customer engagement",
        "21-Day Premium Delivery",
        "12 Months Hosting Included",
        "Monthly subscription: ₹1,499/month"
      ],
      category: 'addon',
      hasGames: true
    }
  ], []);

  const extraNotes: Note[] = useMemo(() => [
    {
      title: "Why Add Games to Your Menu?",
      content: "Interactive games keep customers engaged while waiting for food, reduce perceived wait times, increase customer satisfaction, and make your restaurant more memorable - especially for families with children. Perfect for turning waiting time into fun time!"
    },
    {
      title: "Payment Structure",
      content: "Pay the plan price upfront for development and setup. Then pay the monthly subscription which includes hosting, support, and maintenance."
    }
  ], []);

  const seoFaqs: Note[] = useMemo(() => [
    {
      title: "What is the cost of digital menu for restaurants?",
      content: "Our digital menu pricing starts at ₹5,999 one-time setup fee plus ₹599/month subscription. This includes QR codes, mobile-responsive design, and basic analytics perfect for Indian restaurants."
    },
    {
      title: "How much does QR code menu with games cost?",
      content: "QR code menu with interactive games costs ₹8,999 for Silver + Games plan. Additional games and features available. Monthly subscription of ₹899 includes hosting, support, and game maintenance."
    }
  ], []);

  const blogContents: BlogContent[] = useMemo(() => [
    {
      id: 1,
      title: "How Much Does Digital Menu Cost in India?",
      description: "Complete breakdown of digital menu pricing for restaurants",
      content: `<div>Content here</div>`
    },
    {
      id: 2,
      title: "Interactive Games in Restaurant Menus",
      description: "Increase customer engagement with interactive games",
      content: `<div>Content here</div>`
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
    "One-time development fee", "12 months mandatory subscription", "No hidden charges", "Professional quality guaranteed"
  ], []);

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
    const setupCost = parseInt(plan.price.replace(/[₹,]/g, ""));
    const monthlyCost = parseInt(plan.monthlySubscription.replace(/[₹,/month]/g, ""));
    return setupCost + (monthlyCost * 12);
  }, []);

  const getPlanByName = useCallback((planName: string) => {
    return [...plans, ...gameAddons].find(p => p.name === planName);
  }, [plans, gameAddons]);

  const getCardClasses = (plan: Plan) => {
    const baseClasses = `
      relative group h-full flex flex-col 
      transform-gpu transition-all duration-300
      active:scale-95
      ${tappedCard === plan.name ? 'scale-95' : ''}
      ${plan.bestseller && !isMobile ? "lg:scale-105 lg:-translate-y-4" : ""}
    `;
    return baseClasses;
  };

  const getCardInnerClasses = (plan: Plan) => {
    let gradientClasses = "";
    if (plan.hasGames) {
      gradientClasses = "border-purple-200 bg-gradient-to-b from-white to-purple-50/50";
    } else if (plan.bestseller) {
      gradientClasses = "border-amber-200 bg-gradient-to-b from-white to-amber-50/50";
    } else if (plan.popular) {
      gradientClasses = "border-emerald-200 bg-gradient-to-b from-white to-emerald-50/30";
    } else {
      gradientClasses = "border-gray-200 bg-gradient-to-b from-white to-gray-50/30";
    }

    return `
      relative h-full flex flex-col bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 
      border-2 shadow-lg sm:shadow-xl transition-all duration-300
      ${gradientClasses}
    `;
  };

  const getButtonClasses = (plan: Plan) => {
    if (plan.hasGames) {
      return "bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white shadow-lg";
    } else if (plan.bestseller) {
      return "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg";
    } else if (plan.popular) {
      return "bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg";
    } else {
      return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50/10 to-cyan-50/10 relative overflow-hidden">
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

      <div className="relative z-10">
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

          {/* Main Pricing Cards */}
          <section className="mb-12 sm:mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={getCardClasses(plan)}
                  onTouchStart={() => setTappedCard(plan.name)}
                  onTouchEnd={() => setTappedCard(null)}
                >
                  {plan.bestseller && (
                    <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold shadow-lg flex items-center gap-1 sm:gap-2 whitespace-nowrap">
                        <Crown className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                        MOST POPULAR
                      </div>
                    </div>
                  )}

                  {plan.popular && !plan.bestseller && (
                    <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold shadow-lg flex items-center gap-1 sm:gap-2 whitespace-nowrap">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                        GREAT VALUE
                      </div>
                    </div>
                  )}

                  <div className="absolute -top-2 -right-2 z-20">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold shadow">
                      + {plan.monthlySubscription}
                    </div>
                  </div>

                  <div className={getCardInnerClasses(plan)}>
                    <div className="relative text-center mb-6 sm:mb-8">
                      <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 ${plan.bestseller
                        ? "bg-gradient-to-br from-amber-500 to-orange-500 text-white"
                        : plan.popular
                          ? "bg-gradient-to-br from-emerald-500 to-green-500 text-white"
                          : "bg-gradient-to-br from-blue-500 to-cyan-500 text-white"
                        }`}>
                        {plan.icon}
                      </div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                        {plan.name}
                      </h2>
                      <p className="text-gray-600 text-xs sm:text-sm">{plan.includes}</p>
                    </div>

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

                    <div className="relative space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-2 sm:gap-3"
                        >
                          <CheckCircle className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 ${plan.bestseller ? "text-amber-500" :
                            plan.popular ? "text-emerald-500" :
                              "text-blue-500"
                            }`} />
                          <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="relative bg-white border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
                      <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-1">Payment Terms</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">{plan.terms}</p>
                      <p className="text-blue-600 text-xs font-semibold mt-1">
                        Monthly subscription starts after delivery
                      </p>
                    </div>

                    <button
                      onClick={() => handlePlanSelect(plan.name)}
                      className={`relative w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all duration-300 overflow-hidden min-h-[44px] flex items-center justify-center ${getButtonClasses(plan)}`}
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

          {/* Gaming Addon Section */}
          <section className="mb-12 sm:mb-16">
            <div className="text-center mb-8 sm:mb-12">
              <button
                onClick={() => setShowGameAddons(!showGameAddons)}
                className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center gap-3 mx-auto"
              >
                <GamepadIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce" />
                <span>🎮 Add Interactive Games to Your Menu</span>
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <p className="text-gray-600 mt-4 text-sm sm:text-base">
                Transform waiting time into fun time with interactive games
              </p>
            </div>

            {showGameAddons && (
              <div className="animate-fadeIn">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
                  {gameAddons.map((plan, index) => (
                    <div
                      key={plan.name}
                      className={`relative group h-full flex flex-col transform-gpu transition-all duration-500 hover:scale-105 animate-fadeInUp`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl flex items-center gap-2 border-2 border-yellow-400/50">
                          <GamepadIcon className="w-4 h-4" />
                          <span>GAMING ADDON</span>
                          <Lightning className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>

                      <div className="relative h-full flex flex-col bg-gradient-to-br from-white to-purple-50 rounded-3xl p-6 sm:p-8 border-2 border-purple-200 shadow-2xl">

                        <div className="relative text-center mb-8">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4 shadow-lg">
                            {plan.icon}
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                            {plan.name}
                          </h3>
                          <p className="text-purple-600 text-sm">{plan.includes}</p>
                        </div>

                        <div className="relative text-center mb-8">
                          <div className="mb-4">
                            <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                              {plan.price}
                            </p>
                            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-3">
                              <p className="text-purple-700 font-semibold text-lg">
                                + {plan.monthlySubscription}
                              </p>
                              <p className="text-purple-600 text-sm">Gaming Subscription</p>
                            </div>
                            <p className="text-gray-500 text-sm">
                              One-time gaming setup + monthly power-up
                            </p>
                          </div>
                        </div>

                        <div className="relative space-y-3 mb-8 flex-grow">
                          {plan.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-start gap-3 group"
                            >
                              <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <CheckCircle className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-gray-700 text-sm leading-relaxed group-hover:text-purple-700 transition-colors">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-6">
                          <div className="flex items-center gap-2 mb-1">
                            <Baby className="w-4 h-4 text-purple-600" />
                            <h3 className="text-sm font-bold text-purple-700">FAMILY FRIENDLY!</h3>
                          </div>
                          <p className="text-purple-600 text-xs">
                            Keep children entertained while waiting for food. Reduce stress, increase satisfaction!
                          </p>
                        </div>

                        <button
                          onClick={() => handlePlanSelect(plan.name)}
                          className="relative w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl hover:shadow-purple-500/50 border-2 border-white/20"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:translate-x-[200%] transition-all duration-1000"></div>
                          <span className="relative flex items-center justify-center gap-3">
                            ACTIVATE {plan.name}
                            <GamepadIcon className="w-5 h-5 group-hover:animate-bounce" />
                          </span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 max-w-2xl mx-auto">
                    <h4 className="font-bold text-amber-800 text-lg mb-3">🎯 Why Add Games?</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-amber-600" />
                        <span>Increase Customer Engagement</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Baby className="w-4 h-4 text-amber-600" />
                        <span>Perfect for Families</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Gift className="w-4 h-4 text-amber-600" />
                        <span>Memorable Experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* FAQ Section */}
          <section className="max-w-4xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
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
                Affordable pricing with interactive games and monthly subscription options.
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