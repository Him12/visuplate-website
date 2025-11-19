import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Star, Zap, Crown, ChevronDown, ChevronUp, Sparkles, X, Phone, Mail, MapPin } from "lucide-react";

interface Plan {
  name: string;
  icon: JSX.Element;
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

export default function Pricing() {
  const [expandedNote, setExpandedNote] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
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

  // Track scroll progress for animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePlanSelect = (planName: string) => {
    setShowForm(planName);
    setFormData(prev => ({ ...prev, plan: planName }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Send to WhatsApp
    const phoneNumber = "9599202386";
    const message = `New Plan Inquiry - TheVisuPlate!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nRestaurant: ${formData.restaurant}\nSelected Plan: ${formData.plan}\n\nMessage: I want to get started with the ${formData.plan} plan!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    setSubmitSuccess(true);
    setIsSubmitting(false);

    // Redirect to WhatsApp after success
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setShowForm(null);
      setSubmitSuccess(false);
      setFormData({ name: '', email: '', phone: '', restaurant: '', plan: '' });
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const plans: Plan[] = [
    {
      name: "Silver",
      icon: <Zap className="w-6 h-6" />,
      price: "₹5,999",
      monthlySubscription: "₹599/month",
      includes: "Essential digital menu with basic AR features",
      terms: "45% advance | Remaining after delivery",
      features: [
        "Up to 10 AR food previews",
        "Up to 10 video previews",
        "5 QR codes included",
        "Basic menu analytics",
        "Email support",
        "15 days delivery",
        "Mobile-responsive design",
        "12 months hosting included",
        "Monthly subscription: ₹599 for 12 months"
      ]
    },
    {
      name: "Gold",
      icon: <Star className="w-6 h-6" />,
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
        "15 days delivery",
        "Mobile-responsive design",
        "12 months hosting included",
        "SEO optimization",
        "Monthly subscription: ₹699 for 12 months"
      ],
      popular: true
    },
    {
      name: "Platinum",
      icon: <Crown className="w-6 h-6" />,
      price: "₹9,999",
      monthlySubscription: "₹999/month",
      includes: "Complete digital ecosystem with premium features",
      terms: "45% advance | Remaining after delivery",
      features: [
        "Up to 50 AR food previews",
        "Up to 50 video previews",
        "10 QR codes included",
        "Premium analytics with insights",
        "24/7 priority support",
        "Custom domain support",
        "Social media integration",
        "10 days premium delivery",
        "Mobile-responsive design",
        "12 months hosting included",
        "Advanced SEO optimization",
        "Monthly performance reports",
        "Custom branding options",
        "Monthly subscription: ₹999 for 12 months"
      ],
      bestseller: true
    },
  ];

  const extraNotes: Note[] = [
    {
      title: "Payment Structure",
      content: "Pay the plan price upfront for development and setup. Then pay the monthly subscription (₹599/₹699/₹999) for 12 months which includes hosting, support, and maintenance."
    },
    {
      title: "What's Included in Monthly Subscription?",
      content: "Monthly subscription includes: Cloud hosting, SSL certificate, technical support, security updates, feature updates, and 99.9% uptime guarantee. Required for 12 months."
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
  ];

  const pricingFeatures = [
    "One-time development fee",
    "12 months mandatory subscription",
    "No hidden charges",
    "Professional quality guaranteed",
    "Easy upgrades available",
    "Dedicated support"
  ];

  const toggleNote = (index: number) => {
    setExpandedNote(expandedNote === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50/20 to-cyan-50/20">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-r from-emerald-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-amber-200/10 to-orange-200/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 relative">
        {/* Header */}
        <header className="text-center mb-16 lg:mb-20 relative">
          <div
  className="
    pt-10 sm:pt-2                   /* ADD THIS LINE */
    inline-flex items-center gap-2 
    bg-gradient-to-r from-emerald-500 to-green-500 
    text-white 
    px-4 py-2 sm:px-6 sm:py-3 
    rounded-full text-sm font-semibold 
    mb-8 shadow-lg 
    hover:shadow-xl transition-all duration-300 hover:scale-105
  "
>
  <Sparkles className="w-5 h-4" />
  One-Time Setup + 12 Months Subscription • Professional Quality
</div>


          <h1
            className="text-4xl lg:text-6xl font-bold mb-4 p-3
             bg-gradient-to-r from-emerald-600 via-green-600 to-cyan-600
             bg-clip-text text-transparent inline-block leading-tight"
          >
            Complete Pricing Package
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Pay once for development, then monthly for hosting and support. Everything included for your success.
          </p>

          {/* Pricing Features */}
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            {pricingFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-emerald-200/80 shadow-sm">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </header>

        {/* Pricing Cards */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative group ${plan.bestseller ? "lg:scale-105 lg:-translate-y-4" : ""
                  } transition-all duration-500`}
                onMouseEnter={() => setHoveredCard(plan.name)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Bestseller Badge */}
                {plan.bestseller && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl flex items-center gap-2 whitespace-nowrap hover:scale-110 hover:shadow-2xl transition-all duration-300 group-hover:animate-pulse">
                      <Crown className="w-4 h-4 fill-current" />
                      MOST POPULAR
                      <Sparkles className="w-3 h-3" />
                    </div>
                  </div>
                )}

                {/* Popular Badge */}
                {plan.popular && !plan.bestseller && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl flex items-center gap-2 whitespace-nowrap">
                      <Star className="w-4 h-4 fill-current" />
                      GREAT VALUE
                    </div>
                  </div>
                )}

                {/* Subscription Badge */}
                <div className="absolute -top-2 -right-2 z-20">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                    + {plan.monthlySubscription}
                  </div>
                </div>

                {/* Card Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${plan.bestseller
                  ? "from-purple-400/20 via-pink-400/20 to-rose-400/20 blur-xl"
                  : plan.popular
                    ? "from-amber-400/20 to-orange-400/20 blur-xl"
                    : "from-emerald-400/20 to-cyan-400/20 blur-xl"
                  }`}></div>

                <div
                  className={`relative h-full bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 shadow-2xl transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105 ${plan.bestseller
                    ? "border-purple-300/80 bg-gradient-to-b from-white/90 to-purple-50/70 group-hover:border-purple-400"
                    : plan.popular
                      ? "border-amber-300/80 bg-gradient-to-b from-white/90 to-amber-50/70 group-hover:border-amber-400"
                      : "border-emerald-200/80 bg-gradient-to-b from-white/90 to-emerald-50/50 group-hover:border-emerald-300"
                    }`}
                >
                  {/* Shine Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ${hoveredCard === plan.name ? 'animate-shine' : ''
                    }`}></div>

                  {/* Plan Header */}
                  <div className="relative text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg ${plan.bestseller
                      ? "bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-purple-200"
                      : plan.popular
                        ? "bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-amber-200"
                        : "bg-gradient-to-br from-emerald-500 to-green-500 text-white shadow-emerald-200"
                      }`}>
                      {plan.icon}
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 group-hover:scale-105 transition-transform duration-300">
                      {plan.name}
                    </h2>
                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">{plan.includes}</p>
                  </div>

                  {/* Pricing */}
                  <div className="relative text-center mb-8">
                    <div className="mb-4 transform group-hover:scale-105 transition-transform duration-300">
                      <p className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        {plan.price}
                      </p>
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mb-2">
                        <p className="text-blue-700 font-semibold text-lg">
                          + {plan.monthlySubscription}
                        </p>
                        <p className="text-blue-600 text-sm">for 12 months</p>
                      </div>
                      <p className="text-gray-500 text-sm group-hover:text-gray-600 transition-colors duration-300">
                        One-time setup • 12 months subscription included
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="relative space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3 group/feature transform transition-all duration-300 hover:translate-x-2 hover:scale-105"
                      >
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 transition-all duration-300 group-hover/feature:scale-110 ${plan.bestseller ? "text-purple-500" :
                          plan.popular ? "text-amber-500" :
                            "text-emerald-500"
                          }`} />
                        <span className="text-gray-700 text-sm group-hover/feature:text-gray-900 transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Payment Terms */}
                  <div className="relative bg-white/60 backdrop-blur-sm border border-gray-200/80 rounded-xl p-4 mb-6 transition-all duration-300 group-hover:bg-white group-hover:border-gray-300 group-hover:shadow-lg">
                    <h3 className="text-sm font-bold text-gray-900 mb-1">Payment Terms</h3>
                    <p className="text-gray-600 text-sm">{plan.terms}</p>
                    <p className="text-blue-600 text-xs font-semibold mt-1">
                      Monthly subscription starts after delivery
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handlePlanSelect(plan.name)}
                    className={`relative w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-500 overflow-hidden group/btn ${plan.bestseller
                      ? "bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white shadow-lg hover:shadow-2xl hover:scale-105"
                      : plan.popular
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg hover:shadow-2xl hover:scale-105"
                        : "bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg hover:shadow-xl hover:scale-105"
                      }`}
                  >
                    {/* Button Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>

                    <span className="relative flex items-center justify-center gap-2">
                      Get {plan.name} Plan
                      <Sparkles className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Breakdown */}
        <section className="max-w-4xl mx-auto mb-20 relative">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Complete Cost Breakdown
          </h2>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-emerald-100/80 overflow-hidden">

            {/* Desktop Header */}
            <div className="hidden sm:grid grid-cols-4 gap-4 p-6 bg-gradient-to-r from-emerald-50 to-green-50 border-b border-emerald-200/80">
              <div className="font-bold text-gray-900">Plan</div>
              <div className="text-center font-bold text-gray-600">One-Time Setup</div>
              <div className="text-center font-bold text-blue-600">Monthly Subscription</div>
              <div className="text-center font-bold text-green-600">Total 12 Months</div>
            </div>

            {/* Mobile Header */}
            <div className="sm:hidden p-4 text-center font-semibold bg-emerald-50 border-b border-emerald-200">
              Plan Cost Summary
            </div>

            {plans.map((plan, index) => {
              const setupCost = parseInt(plan.price.replace("₹", "").replace(",", ""));
              const monthlyCost = parseInt(plan.monthlySubscription.replace("₹", "").replace("/month", ""));
              const totalYearCost = setupCost + monthlyCost * 12;

              return (
                <div key={index}>
                  {/* Desktop Row */}
                  <div className="hidden sm:grid grid-cols-4 gap-4 p-6 border-b border-gray-100 hover:bg-white transition-all duration-300">
                    <div className="font-medium text-gray-700 flex items-center gap-3">
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
                      <div className="text-xl font-bold text-gray-900">{plan.price}</div>
                      <div className="text-gray-500 text-sm">Development</div>
                    </div>

                    <div className="text-center">
                      <div className="text-xl font-bold text-blue-600">{plan.monthlySubscription}</div>
                      <div className="text-gray-500 text-sm">× 12 months</div>
                    </div>

                    <div className="text-center">
                      <div className="text-xl font-bold text-green-600">₹{totalYearCost.toLocaleString()}</div>
                      <div className="text-gray-500 text-sm">First year total</div>
                    </div>
                  </div>

                  {/* Mobile Row */}
                  <div className="sm:hidden p-4 space-y-3 border-b border-gray-100 bg-white">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900 flex items-center gap-2">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center ${plan.bestseller
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

                      <span className="font-bold text-gray-800">{plan.price}</span>
                    </div>

                    <div className="flex justify-between text-blue-700">
                      <span className="text-sm">Monthly Subscription:</span>
                      <span className="font-semibold">{plan.monthlySubscription}</span>
                    </div>

                    <div className="flex justify-between text-green-700">
                      <span className="text-sm">Total 12 Months:</span>
                      <span className="font-bold">₹{totalYearCost.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {extraNotes.map((note, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-emerald-100/80 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <button
                  onClick={() => toggleNote(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gradient-to-r from-emerald-50 to-green-50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                      {note.title}
                    </h3>
                  </div>
                  {expandedNote === index ? (
                    <ChevronUp className="w-6 h-6 text-emerald-600 transform transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-emerald-600 transform transition-transform duration-300 group-hover:scale-110" />
                  )}
                </button>

                {expandedNote === index && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="pl-14">
                      <p className="text-gray-700 leading-relaxed text-lg">{note.content}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-emerald-500 via-green-500 to-cyan-500 rounded-3xl p-12 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>

            <h2 className="text-3xl lg:text-4xl font-bold mb-4 relative">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto relative">
              Pay once for development, enjoy 12 months of premium hosting and support. No surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative">

              <button
                onClick={() => handlePlanSelect("Custom Consultation")}
                className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
              >
                Get Started Today
                <Sparkles className="w-5 h-5" />
              </button>

              <Link to="/demo-menu">
                <button
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 hover:scale-105"
                >
                  View Demo Menu
                </button>
              </Link>

            </div>

          </div>
        </section>

        {/* Contact Info */}
        <footer className="text-center mt-16 pt-8 border-t border-gray-200/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-gray-600">
              <Phone className="w-5 h-5 text-emerald-500" />
              <span>+91 9599202386</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-600">
              <Mail className="w-5 h-5 text-emerald-500" />
              <span>thevisuplate@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-600">
              <MapPin className="w-5 h-5 text-emerald-500" />
              <span>Available Worldwide</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-8">
            © 2024 TheVisuPlate. All rights reserved.
          </p>
        </footer>
      </div>

      {/* Lead Capture Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-auto shadow-2xl border border-emerald-100/80 animate-scaleIn">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Get {showForm} Plan
              </h3>
              <button
                onClick={() => setShowForm(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {submitSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Success!</h4>
                <p className="text-gray-600">Redirecting to WhatsApp...</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
                  <h4 className="font-bold text-blue-900 mb-2">Plan Summary:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>One-Time Setup:</span>
                      <span className="font-semibold">
                        {plans.find(p => p.name === showForm)?.price}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly Subscription:</span>
                      <span className="font-semibold text-blue-600">
                        {plans.find(p => p.name === showForm)?.monthlySubscription}
                      </span>
                    </div>
                    <div className="flex justify-between border-t border-blue-200 pt-1 mt-1">
                      <span>First Year Total:</span>
                      <span className="font-bold text-green-600">
                        ₹{(parseInt(plans.find(p => p.name === showForm)?.price.replace('₹', '').replace(',', '') || '0') +
                          (parseInt(plans.find(p => p.name === showForm)?.monthlySubscription.replace('₹', '').replace('/month', '') || '0') * 12)).toLocaleString()}
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
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
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
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
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
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
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
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      Continue to WhatsApp
                      <Phone className="w-5 h-5" />
                    </>
                  )}
                </button>
                <p className="text-gray-500 text-sm text-center">
                  We'll redirect you to WhatsApp to discuss your {showForm} plan
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}