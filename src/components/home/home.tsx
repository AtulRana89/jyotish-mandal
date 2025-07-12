"use client"
import React, { useEffect, useState, } from "react";
import {
  Star,
  Moon,
  Sun,
  Heart,
  Users,
  BookOpen,
  Calendar,
  Sparkles,
  Quote,
  Shield,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  User,
  Globe,
  TrendingUp,
  MessageCircle,
  Zap,
  Gift,
} from "lucide-react";

const Home: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const beliefs = [
    {
      icon: <Moon className="w-8 h-8 text-yellow-400" />,
      title: "Ancient Wisdom",
      description:
        "We honor the timeless knowledge of Vedic astrology passed down through generations of enlightened masters.",
    },
    {
      icon: <Sun className="w-8 h-8 text-yellow-300" />,
      title: "Cosmic Harmony",
      description:
        "Every soul is connected to the cosmic dance of planets and stars, influencing our earthly journey.",
    },
    {
      icon: <Heart className="w-8 h-8 text-yellow-200" />,
      title: "Divine Guidance",
      description:
        "Through sacred calculations and intuitive insights, we help you align with your highest purpose.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-yellow-500" />,
      title: "Spiritual Growth",
      description:
        "Jyotish is not just prediction, but a path to understanding your soul's journey and karmic lessons.",
    },
  ];

  const services = [
    {
      title: "Birth Chart Analysis",
      description:
        "Comprehensive reading of your natal chart revealing personality, strengths, and life path",
      icon: <BookOpen className="w-12 h-12 text-yellow-400" />,
      price: "₹2,500",
      duration: "90 mins",
    },
    {
      title: "Career Guidance",
      description:
        "Discover your professional calling and optimal timing for career moves",
      icon: <TrendingUp className="w-12 h-12 text-yellow-300" />,
      price: "₹1,800",
      duration: "60 mins",
    },
    {
      title: "Marriage Compatibility",
      description:
        "Detailed analysis of relationship compatibility and auspicious wedding dates",
      icon: <Heart className="w-12 h-12 text-yellow-200" />,
      price: "₹3,200",
      duration: "120 mins",
    },
    {
      title: "Muhurat Consultation",
      description:
        "Find the most auspicious times for important life events and decisions",
      icon: <Calendar className="w-12 h-12 text-yellow-500" />,
      price: "₹1,200",
      duration: "45 mins",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: "25+ Years Experience",
      description:
        "Trusted by thousands with decades of astrological expertise",
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-300" />,
      title: "100% Confidential",
      description:
        "Your personal information and readings are completely private",
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-200" />,
      title: "24/7 Support",
      description: "Round-the-clock guidance and support for all your queries",
    },
    {
      icon: <Globe className="w-8 h-8 text-yellow-500" />,
      title: "Global Reach",
      description: "Serving clients worldwide with online consultations",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Book Your Session",
      description:
        "Choose your preferred service and schedule a convenient time slot",
    },
    {
      step: "2",
      title: "Provide Birth Details",
      description:
        "Share your accurate birth date, time, and location for precise calculations",
    },
    {
      step: "3",
      title: "Expert Analysis",
      description:
        "Our experienced astrologer analyzes your chart with ancient techniques",
    },
    {
      step: "4",
      title: "Personalized Reading",
      description:
        "Receive detailed insights and guidance tailored to your unique situation",
    },
  ];

  const faqs = [
    {
      question: "How accurate are your predictions?",
      answer:
        "Our predictions are based on ancient Vedic principles with over 25 years of experience. While astrology provides insights and guidance, it's important to remember that you always have free will in shaping your destiny.",
    },
    {
      question: "What information do I need to provide?",
      answer:
        "For accurate readings, we need your exact birth date, time (preferably to the minute), and place of birth. This information helps us create your precise birth chart.",
    },
    {
      question: "How long does a consultation take?",
      answer:
        "Consultation duration varies by service: Birth Chart Analysis (90 mins), Career Guidance (60 mins), Marriage Compatibility (120 mins), and Muhurat Consultation (45 mins).",
    },
    {
      question: "Do you offer online consultations?",
      answer:
        "Yes, we provide both in-person and online consultations via video call, making our services accessible worldwide while maintaining the same quality and personal attention.",
    },
  ];

  const reviews = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "Guruji's insights about my career transition were incredibly accurate. The remedies suggested have brought positive changes in my life.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      text: "The marriage compatibility analysis was detailed and helpful. We're now happily married following the suggested muhurat!",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Anita Patel",
      location: "Ahmedabad",
      rating: 5,
      text: "Birth chart reading gave me clarity about my life purpose. The guidance has been transformational for my spiritual journey.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Vikram Singh",
      location: "Jaipur",
      rating: 5,
      text: "Business consultation helped me choose the right partnership. The timing predictions were spot on!",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-800 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-blue-600/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,204,21,0.1),transparent_50%)]"></div>
        {/* Starry Silver Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-2 h-2 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full animate-pulse shadow-lg shadow-slate-400/50"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full animate-pulse shadow-md shadow-slate-300/50"></div>
          <div className="absolute top-60 left-1/3 w-3 h-3 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full animate-pulse shadow-xl shadow-slate-400/60"></div>
          <div className="absolute bottom-40 right-20 w-2 h-2 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full animate-pulse shadow-lg shadow-slate-400/50"></div>
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex justify-center items-center mb-6">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 rounded-full blur-lg opacity-70 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 rounded-full p-4 shadow-2xl border-2 border-slate-400/50">
                  <Moon className="w-12 h-12 text-slate-800" />
                </div>
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl">
              Jyotish-Mandal
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto">
              Illuminate your path with ancient Vedic wisdom and cosmic guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-slate-800 px-8 py-3 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-200 shadow-2xl hover:shadow-yellow-400/30">
                Book Consultation
              </button>
              <button className="border-2 border-yellow-400 hover:bg-yellow-400 hover:bg-opacity-10 hover:border-yellow-300 px-8 py-3 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-200 shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-slate-800/50 to-blue-900/30 relative border-y border-slate-700/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(250,204,21,0.05),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600 bg-clip-text text-transparent text-4xl font-bold mb-2 group-hover:from-yellow-400 group-hover:to-yellow-300 transition-all duration-300">
                5000+
              </div>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                Happy Clients
              </p>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600 bg-clip-text text-transparent text-4xl font-bold mb-2 group-hover:from-yellow-400 group-hover:to-yellow-300 transition-all duration-300">
                25+
              </div>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                Years Experience
              </p>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600 bg-clip-text text-transparent text-4xl font-bold mb-2 group-hover:from-yellow-400 group-hover:to-yellow-300 transition-all duration-300">
                50+
              </div>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                Countries Served
              </p>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600 bg-clip-text text-transparent text-4xl font-bold mb-2 group-hover:from-yellow-400 group-hover:to-yellow-300 transition-all duration-300">
                99%
              </div>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                Satisfaction Rate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-blue-900/30 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(250,204,21,0.05),transparent_50%)]"></div>
        {/* Starry Silver Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-1 h-1 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full animate-pulse shadow-sm shadow-slate-400/50"></div>
          <div className="absolute bottom-20 left-16 w-2 h-2 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full animate-pulse shadow-md shadow-slate-400/60"></div>
          <div className="absolute top-32 left-1/4 w-1 h-1 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full animate-pulse shadow-sm shadow-slate-300/50"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
            What We Believe
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beliefs.map((belief, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-slate-700/20 to-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 hover:border-yellow-400/60 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Starry Silver Effect inside cards */}
                  <div className="absolute top-2 right-2 w-1 h-1 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full animate-pulse shadow-sm shadow-slate-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="p-3 bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600 rounded-full shadow-lg shadow-slate-500/50 border border-slate-400/30">
                        {belief.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-center text-yellow-300">
                      {belief.title}
                    </h3>
                    <p className="text-slate-300 text-center leading-relaxed">
                      {belief.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(250,204,21,0.08),transparent_50%)]"></div>
        {/* Starry Silver Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-2 h-2 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full animate-pulse shadow-lg shadow-slate-400/50"></div>
          <div className="absolute bottom-32 right-24 w-1 h-1 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full animate-pulse shadow-md shadow-slate-300/50"></div>
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full animate-pulse shadow-xl shadow-slate-400/60"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-slate-800/40 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 hover:border-yellow-400/60 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/20 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Starry Silver Effect inside cards */}
                  <div className="absolute top-3 right-3 w-1 h-1 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full animate-pulse shadow-sm shadow-slate-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-3 left-3 w-1 h-1 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full animate-pulse shadow-sm shadow-slate-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="p-3 bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600 rounded-full shadow-lg shadow-slate-500/50 border border-slate-400/30">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-center text-yellow-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 text-center mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="text-center mb-4">
                      <span className="text-sm text-slate-400 bg-gradient-to-r from-slate-700 to-slate-600 px-3 py-1 rounded-full border border-slate-600/50">
                        {service.duration}
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="text-2xl font-bold text-yellow-400 drop-shadow-lg">
                        {service.price}
                      </span>
                      <button className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-slate-800 py-2 rounded-full font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-yellow-400/30">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-slate-800/50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(250,204,21,0.06),transparent_50%)]"></div>
        {/* Starry Silver Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-16 right-16 w-2 h-2 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full animate-pulse shadow-lg shadow-slate-400/50"></div>
          <div className="absolute bottom-24 left-20 w-1 h-1 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full animate-pulse shadow-md shadow-slate-300/50"></div>
          <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full animate-pulse shadow-sm shadow-slate-400/60"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
            Why Choose Jyotish-Mandal?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="group text-center">
                <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 hover:border-yellow-400/60 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Starry Silver Effect inside cards */}
                  <div className="absolute top-2 right-2 w-1 h-1 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full animate-pulse shadow-sm shadow-slate-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="p-4 bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600 rounded-full shadow-lg shadow-slate-500/50 border border-slate-400/30">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-yellow-300">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(250,204,21,0.08),transparent_50%)]"></div>
        {/* Starry Silver Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-32 w-2 h-2 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full animate-pulse shadow-lg shadow-slate-400/50"></div>
          <div className="absolute bottom-20 right-20 w-1 h-1 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full animate-pulse shadow-md shadow-slate-300/50"></div>
          <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full animate-pulse shadow-xl shadow-slate-400/60"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
            How It Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group text-center relative">
                <div className="bg-gradient-to-br from-slate-800/40 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 hover:border-yellow-400/60 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Starry Silver Effect inside cards */}
                  <div className="absolute top-3 right-3 w-1 h-1 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full animate-pulse shadow-sm shadow-slate-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600 rounded-full flex items-center justify-center shadow-lg shadow-slate-500/50 border border-slate-400/30 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl font-bold text-yellow-400">
                          {step.step}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-yellow-300">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-300 shadow-sm shadow-yellow-400/50"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Reviews Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-800/30 to-purple-800/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12">
              <div className="absolute top-4 left-4 text-purple-400 opacity-30">
                <Quote className="w-12 h-12" />
              </div>
              <div className="text-center">
                <div className="mb-6">
                  <img
                    src={reviews[currentReview].image}
                    alt={reviews[currentReview].name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-amber-400 shadow-lg"
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(reviews[currentReview].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-amber-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xl md:text-2xl text-gray-200 mb-6 italic leading-relaxed">
                  "{reviews[currentReview].text}"
                </p>
                <div>
                  <h4 className="text-lg font-semibold text-amber-300">
                    {reviews[currentReview].name}
                  </h4>
                  <p className="text-gray-400">
                    {reviews[currentReview].location}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReview
                      ? "bg-amber-400"
                      : "bg-gray-600 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-amber-600/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Discover Your Cosmic Path?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Take the first step towards understanding your destiny with our
            expert Jyotish consultations
          </p>
          <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 px-12 py-4 rounded-full font-semibold text-xl transform hover:scale-105 transition-all duration-200 shadow-lg">
            Schedule Your Reading
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/20 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-4">
            <Moon className="w-8 h-8 text-amber-400 mr-2" />
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent">
              Jyotish-Mandal
            </span>
          </div>
          <p className="text-gray-400 mb-4">
            Illuminating lives through ancient wisdom and cosmic guidance
          </p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <a href="#" className="hover:text-amber-400 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Services
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
