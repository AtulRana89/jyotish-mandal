"use client";
import React, { useState, useEffect } from "react";
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
  ArrowLeft,
  Video,
  PhoneCall,
  Languages,
  GraduationCap,
  Target,
  Camera,
  Mic,
  Play,
  ChevronRight,
  ChevronLeft,
  Download,
  Share2,
  Bookmark,
  ThumbsUp,
  Eye,
  BadgeCheck,
  Crown,
  Diamond,
  Flame,
  Lightbulb,
  Meditation,
  Compass,
  Mountain,
  Sunrise,
  Sunset,
  CloudRain,
  Waves,
  TreePine,
  X,
} from "lucide-react";

const AstrologerDetail = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedService, setSelectedService] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const astrologer = {
    name: "Pandit Raj Kumar Sharma",
    title: "Vedic Astrology Expert & Spiritual Guide",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    experience: "28 Years",
    consultations: "12,000+",
    rating: 4.9,
    reviewCount: 856,
    languages: ["Hindi", "English", "Sanskrit", "Punjabi"],
    location: "New Delhi, India",
    specializations: [
      "Vedic Astrology",
      "Marriage Compatibility",
      "Career Guidance",
      "Gemstone Consultation",
      "Vastu Shastra",
      "Numerology",
    ],
    bio: "Pandit Raj Kumar Sharma is a renowned Vedic astrologer with over 28 years of experience in providing accurate predictions and life guidance. Born into a family of traditional astrologers, he has been practicing since childhood and has helped thousands of people find their true path. His deep understanding of ancient scriptures combined with modern practical wisdom makes him one of the most sought-after astrologers in India.",
    achievements: [
      "Gold Medalist in Vedic Astrology from Sanskrit University",
      "Author of 'Cosmic Wisdom: A Modern Guide to Vedic Astrology'",
      "Featured Expert on National Television Shows",
      "President of All India Astrology Association (2018-2020)",
      "Honored with 'Jyotish Ratna' Award",
    ],
    availability: {
      status: "Available Now",
      nextSlot: "Today, 3:00 PM",
      responseTime: "Within 2 hours",
    },
  };

  const services = [
    {
      id: 1,
      title: "Complete Birth Chart Analysis",
      description:
        "Comprehensive analysis of your natal chart with detailed predictions for all life aspects",
      icon: <BookOpen className="w-8 h-8 text-yellow-400" />,
      price: "₹3,500",
      duration: "120 mins",
      popular: true,
      features: [
        "Detailed personality analysis",
        "Life path predictions",
        "Strength & weakness assessment",
        "Remedial measures",
        "Written report included",
      ],
    },
    {
      id: 2,
      title: "Marriage & Relationship Consultation",
      description:
        "Expert guidance on marriage compatibility, relationship issues, and timing",
      icon: <Heart className="w-8 h-8 text-pink-400" />,
      price: "₹2,800",
      duration: "90 mins",
      features: [
        "Compatibility analysis",
        "Marriage timing predictions",
        "Relationship guidance",
        "Manglik dosha analysis",
        "Gemstone recommendations",
      ],
    },
    {
      id: 3,
      title: "Career & Business Guidance",
      description:
        "Professional guidance for career growth, business decisions, and financial planning",
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      price: "₹2,200",
      duration: "75 mins",
      features: [
        "Career path analysis",
        "Business timing",
        "Financial predictions",
        "Job change guidance",
        "Success strategies",
      ],
    },
    {
      id: 4,
      title: "Gemstone & Remedial Consultation",
      description:
        "Personalized gemstone recommendations and Vedic remedies for life challenges",
      icon: <Diamond className="w-8 h-8 text-purple-400" />,
      price: "₹1,800",
      duration: "60 mins",
      features: [
        "Gemstone selection",
        "Mantra recommendations",
        "Remedial measures",
        "Puja guidance",
        "Yantra consultation",
      ],
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Priya Mehta",
      location: "Mumbai",
      rating: 5,
      date: "2 weeks ago",
      text: "Pandit Sharma's predictions about my career change were incredibly accurate. His guidance helped me make the right decision at the right time. Highly recommended!",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      service: "Career Guidance",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      date: "1 month ago",
      text: "The marriage compatibility analysis was thorough and insightful. We followed his advice for the wedding muhurat, and everything went perfectly. Very grateful!",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      service: "Marriage Consultation",
    },
    {
      id: 3,
      name: "Anita Singh",
      location: "Jaipur",
      rating: 5,
      date: "3 weeks ago",
      text: "His gemstone recommendations have brought positive changes in my life. The birth chart analysis was detailed and very accurate. Excellent service!",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      service: "Gemstone Consultation",
    },
    {
      id: 4,
      name: "Vikram Patel",
      location: "Ahmedabad",
      rating: 5,
      date: "1 week ago",
      text: "Business consultation helped me choose the right time for expansion. His predictions about market trends were spot on. Truly gifted astrologer!",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      service: "Business Guidance",
    },
  ];

  const achievements = [
    {
      icon: <Award className="w-6 h-6 text-yellow-400" />,
      title: "Jyotish Ratna Award",
      description: "Prestigious award for excellence in Vedic astrology",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-400" />,
      title: "Published Author",
      description: "Author of acclaimed astrology books",
    },
    {
      icon: <Users className="w-6 h-6 text-green-400" />,
      title: "12,000+ Consultations",
      description: "Successfully guided thousands of clients",
    },
    {
      icon: <Crown className="w-6 h-6 text-purple-400" />,
      title: "Association President",
      description: "Former president of All India Astrology Association",
    },
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: <User className="w-4 h-4" /> },
    {
      id: "services",
      label: "Services",
      icon: <Sparkles className="w-4 h-4" />,
    },
    { id: "reviews", label: "Reviews", icon: <Star className="w-4 h-4" /> },
    {
      id: "achievements",
      label: "Achievements",
      icon: <Award className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-800 text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-blue-600/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,204,21,0.1),transparent_50%)]"></div>

        {/* Starry Silver Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-2 h-2 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full animate-pulse shadow-lg shadow-slate-400/50"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full animate-pulse shadow-md shadow-slate-300/50"></div>
          <div className="absolute top-60 left-1/3 w-3 h-3 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full animate-pulse shadow-xl shadow-slate-400/60"></div>
          <div className="absolute bottom-40 right-20 w-2 h-2 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full animate-pulse shadow-lg shadow-slate-400/50"></div>
        </div>

        <div className="relative container mx-auto px-4 py-8">
          {/* Back Button */}
          <button className="flex items-center gap-2 text-slate-300 hover:text-yellow-400 transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            Back to Astrologers
          </button>

          {/* Astrologer Profile Header */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 rounded-2xl blur-xl opacity-50"></div>
                <div className="relative bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50">
                  <div className="relative">
                    <img
                      src={astrologer.image}
                      alt={astrologer.name}
                      className="w-full aspect-square rounded-xl object-cover border-4 border-yellow-400/50"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="mt-6 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h1 className="text-2xl font-bold text-yellow-300">
                        {astrologer.name}
                      </h1>
                      <BadgeCheck className="w-6 h-6 text-blue-400" />
                    </div>
                    <p className="text-slate-300 mb-4">{astrologer.title}</p>

                    <div className="flex items-center justify-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(astrologer.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-slate-400"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-yellow-400 font-semibold">
                        {astrologer.rating}
                      </span>
                      <span className="text-slate-400">
                        ({astrologer.reviewCount} reviews)
                      </span>
                    </div>

                    <div className="space-y-2 text-sm text-slate-300">
                      <div className="flex items-center justify-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{astrologer.experience} Experience</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{astrologer.consultations} Consultations</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{astrologer.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-yellow-300 mb-2">
                      About Pandit Sharma
                    </h2>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex items-center gap-1 text-green-400">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>{astrologer.availability.status}</span>
                      </div>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-300">
                        Next slot: {astrologer.availability.nextSlot}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {astrologer.bio}
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-yellow-300 mb-3">
                    Specializations
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {astrologer.specializations.map((spec, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-yellow-400/20 to-yellow-300/20 text-yellow-300 px-3 py-1 rounded-full text-sm border border-yellow-400/30"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-yellow-300 mb-3">
                    Languages
                  </h3>
                  <div className="flex items-center gap-2">
                    <Languages className="w-5 h-5 text-slate-400" />
                    <span className="text-slate-300">
                      {astrologer.languages.join(", ")}
                    </span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setShowBookingModal(true)}
                    className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-slate-800 py-3 px-6 rounded-xl font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-yellow-400/30"
                  >
                    Book Consultation
                  </button>
                  <button className="flex items-center gap-2 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 py-3 px-6 rounded-xl font-semibold transition-all duration-200 border border-slate-500/50">
                    <MessageCircle className="w-5 h-5" />
                    Chat Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="sticky top-0 z-10 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-semibold transition-all duration-200 border-b-2 ${
                  activeTab === tab.id
                    ? "border-yellow-400 text-yellow-400"
                    : "border-transparent text-slate-400 hover:text-slate-300"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-4 py-12">
        {activeTab === "overview" && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50">
                <h3 className="text-xl font-bold text-yellow-300 mb-4">
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">
                      {astrologer.experience}
                    </div>
                    <div className="text-sm text-slate-400">Experience</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">
                      {astrologer.consultations}
                    </div>
                    <div className="text-sm text-slate-400">Consultations</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">
                      {astrologer.rating}
                    </div>
                    <div className="text-sm text-slate-400">Rating</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">
                      {astrologer.availability.responseTime}
                    </div>
                    <div className="text-sm text-slate-400">Response Time</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50">
                <h3 className="text-xl font-bold text-yellow-300 mb-4">
                  Consultation Methods
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-lg">
                    <Video className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="font-semibold">Video Call</div>
                      <div className="text-sm text-slate-400">
                        Face-to-face consultation
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-lg">
                    <PhoneCall className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="font-semibold">Phone Call</div>
                      <div className="text-sm text-slate-400">
                        Audio consultation
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="font-semibold">Chat</div>
                      <div className="text-sm text-slate-400">
                        Text-based consultation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50">
                <h3 className="text-xl font-bold text-yellow-300 mb-4">
                  Education & Qualifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-blue-400 mt-1" />
                    <div>
                      <div className="font-semibold">
                        Gold Medalist in Vedic Astrology
                      </div>
                      <div className="text-sm text-slate-400">
                        Sanskrit University, Delhi
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-green-400 mt-1" />
                    <div>
                      <div className="font-semibold">
                        Diploma in Vastu Shastra
                      </div>
                      <div className="text-sm text-slate-400">
                        Indian Institute of Astrology
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-400 mt-1" />
                    <div>
                      <div className="font-semibold">
                        Certified Numerologist
                      </div>
                      <div className="text-sm text-slate-400">
                        International Numerology Association
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50">
                <h3 className="text-xl font-bold text-yellow-300 mb-4">
                  Approach & Philosophy
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  I believe in combining ancient Vedic wisdom with practical
                  modern guidance. My approach is compassionate,
                  solution-oriented, and focused on empowering clients to make
                  informed decisions about their lives. I don't just predict the
                  future; I help you shape it positively.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "services" && (
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group relative">
                <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50 hover:border-yellow-400/60 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/20">
                  {service.popular && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-yellow-400 text-slate-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}

                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-yellow-300 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-yellow-300 mb-2">
                      What's Included:
                    </h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-sm text-slate-300"
                        >
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-bold text-yellow-400">
                        {service.price}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-slate-400">
                        <Clock className="w-4 h-4" />
                        {service.duration}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-slate-800 py-2 rounded-lg font-semibold transform hover:scale-105 transition-all duration-200"
                  >
                    Book This Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full border-2 border-yellow-400/50"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-yellow-300">
                      {review.name}
                    </h4>
                    <span className="text-sm text-slate-400">
                      • {review.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-slate-400">
                      {review.date}
                    </span>
                  </div>
                  <span className="inline-block bg-yellow-400/20 text-yellow-300 text-xs px-2 py-1 rounded-full">
                    {review.service}
                  </span>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 backdrop-blur-sm rounded-full px-6 py-3 border border-yellow-400/30">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="text-yellow-300 font-semibold">
              4.9/5 Average Rating
            </span>
            <span className="text-slate-400">• 500+ Happy Clients</span>
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default AstrologerDetail