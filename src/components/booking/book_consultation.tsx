
"use client"
import { useState, useEffect } from "react";
import {
  Star,
  Clock,
  MapPin,
  Calendar,
  User,
  Phone,
  Mail,
  CreditCard,
  Check,
  X,
  AlertCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";

// Type definitions for form schema
interface BaseFieldSchema {
  required: boolean;
  message: string;
}

interface PatternFieldSchema extends BaseFieldSchema {
  pattern: RegExp;
  minLength?: number;
  maxLength?: number;
}

interface ValidateFieldSchema extends BaseFieldSchema {
  validate: (value: string) => boolean;
}

interface MinMaxFieldSchema extends BaseFieldSchema {
  minLength: number;
  maxLength: number;
  pattern?: RegExp;
}

type FieldSchema = PatternFieldSchema | ValidateFieldSchema | MinMaxFieldSchema;

// Form schema with proper typing
const formSchema: Record<string, FieldSchema> = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s]+$/,
    message: "Name must be 2-50 characters and contain only letters",
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Please enter a valid email address",
  },
  phone: {
    required: true,
    pattern: /^[\+]?[1-9][\d]{0,15}$/,
    message: "Please enter a valid phone number",
  },
  birthDate: {
    required: true,
    validate: (value: string) => {
      const date = new Date(value);
      const today = new Date();
      const minAge = new Date(
        today.getFullYear() - 100,
        today.getMonth(),
        today.getDate()
      );
      return date <= today && date >= minAge;
    },
    message: "Please enter a valid birth date",
  },
  birthTime: {
    required: true,
    pattern: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
    message: "Please enter a valid time",
  },
  birthPlace: {
    required: true,
    minLength: 2,
    maxLength: 100,
    message: "Birth place must be 2-100 characters",
  },
  question: {
    required: true,
    minLength: 10,
    maxLength: 500,
    message: "Question must be 10-500 characters",
  },
};

// Type definitions
interface Astrologer {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  rating: number;
  consultations: number;
  image: string;
  price: number;
  available: boolean;
}

interface Service {
  id: number;
  name: string;
  icon: string;
  duration: string;
  description: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
  question: string;
}

interface FormErrors {
  [key: string]: string;
}

interface FormTouched {
  [key: string]: boolean;
}

interface TimeSlot {
  time: string;
  available: boolean;
}

const BookConsultation = () => {
  const [selectedAstrologer, setSelectedAstrologer] =
    useState<Astrologer | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    birthDate: "",
    birthTime: "",
    birthPlace: "",
    question: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formTouched, setFormTouched] = useState<FormTouched>({});
  
  const astrologers: Astrologer[] = [
    {
      id: 1,
      name: "Pandit Raj Sharma",
      specialization: "Vedic Astrology",
      experience: "25+ years",
      rating: 4.9,
      consultations: 2500,
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
      price: 1500,
      available: true,
    },
    {
      id: 2,
      name: "Dr. Priya Joshi",
      specialization: "Numerology & Palmistry",
      experience: "15+ years",
      rating: 4.8,
      consultations: 1800,
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      price: 1200,
      available: true,
    },
    {
      id: 3,
      name: "Acharya Kumar Das",
      specialization: "Gemstone Therapy",
      experience: "30+ years",
      rating: 4.9,
      consultations: 3200,
      image:
        "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=150&h=150&fit=crop&crop=face",
      price: 2000,
      available: false,
    },
  ];

  const services: Service[] = [
    {
      id: 1,
      name: "Career Guidance",
      icon: "💼",
      duration: "45 min",
      description: "Professional growth and career decisions",
    },
    {
      id: 2,
      name: "Marriage & Relationships",
      icon: "💝",
      duration: "60 min",
      description: "Love, compatibility and marriage timing",
    },
    {
      id: 3,
      name: "Health & Wellness",
      icon: "🏥",
      duration: "45 min",
      description: "Health predictions and remedies",
    },
    {
      id: 4,
      name: "Business Consultation",
      icon: "📈",
      duration: "60 min",
      description: "Business growth and financial guidance",
    },
    {
      id: 5,
      name: "Education & Studies",
      icon: "📚",
      duration: "40 min",
      description: "Academic success and study guidance",
    },
    {
      id: 6,
      name: "Gemstone Consultation",
      icon: "💎",
      duration: "30 min",
      description: "Gemstone recommendations and benefits",
    },
  ];

  const timeSlots: TimeSlot[] = [
    { time: "09:00 AM", available: true },
    { time: "10:00 AM", available: false },
    { time: "11:00 AM", available: true },
    { time: "02:00 PM", available: true },
    { time: "03:00 PM", available: true },
    { time: "04:00 PM", available: false },
    { time: "05:00 PM", available: true },
    { time: "06:00 PM", available: true },
  ];

  // Validation function with proper type checking
  const validateField = (name: keyof FormData, value: string): string => {
    const fieldSchema = formSchema[name];

    if (fieldSchema.required && !value.trim()) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }

    if (
      "minLength" in fieldSchema &&
      fieldSchema.minLength !== undefined &&
      value.length < fieldSchema.minLength
    ) {
      return fieldSchema.message;
    }

    if (
      "maxLength" in fieldSchema &&
      fieldSchema.maxLength !== undefined &&
      value.length > fieldSchema.maxLength
    ) {
      return fieldSchema.message;
    }

    if (
      "pattern" in fieldSchema &&
      fieldSchema.pattern !== undefined &&
      !fieldSchema.pattern.test(value)
    ) {
      return fieldSchema.message;
    }

    if (
      "validate" in fieldSchema &&
      typeof fieldSchema.validate === "function" &&
      !fieldSchema.validate(value)
    ) {
      return fieldSchema.message;
    }

    return "";
  };

  // Validate all form fields
  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    Object.keys(formData).forEach((key) => {
      const fieldName = key as keyof FormData;
      const error = validateField(fieldName, formData[fieldName]);
      if (error) {
        errors[fieldName] = error;
      }
    });

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormData;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate field on change if it has been touched
    if (formTouched[fieldName]) {
      const error = validateField(fieldName, value);
      setFormErrors({
        ...formErrors,
        [fieldName]: error,
      });
    }
  };

  const handleInputBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormData;

    // Mark field as touched
    setFormTouched({
      ...formTouched,
      [fieldName]: true,
    });

    // Validate field on blur (onTouch mode)
    const error = validateField(fieldName, value);
    setFormErrors({
      ...formErrors,
      [fieldName]: error,
    });
  };

  const handleSubmit = () => {
    // Mark all fields as touched
    router("/payment")
    const allTouched: FormTouched = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });
    setFormTouched(allTouched);

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Check if all selections are made
    if (
      !selectedAstrologer ||
      !selectedService ||
      !selectedTimeSlot ||
      !selectedDate
    ) {
      alert("Please complete all selections before booking.");
      return;
    }

    // Handle booking submission
    console.log("Booking submitted:", {
      astrologer: selectedAstrologer,
      service: selectedService,
      timeSlot: selectedTimeSlot,
      date: selectedDate,
      formData,
    });
    alert("Consultation booked successfully!");
  };

  const isFormValid =
    selectedAstrologer &&
    selectedService &&
    selectedTimeSlot &&
    selectedDate &&
    Object.values(formData).every((value) => value.trim() !== "") &&
    Object.keys(formErrors).length === 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-yellow-300 mb-4">
            Book Your Consultation
          </h1>
          <p className="text-slate-300 text-lg">
            Get personalized guidance from expert astrologers
          </p>
        </div>

        <div className="space-y-8">
          {/* Astrologer Selection */}
          <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50">
            <h2 className="text-2xl font-bold text-yellow-300 mb-6 flex items-center gap-2">
              <User className="w-6 h-6" />
              Choose Your Astrologer
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {astrologers.map((astrologer) => (
                <div
                  key={astrologer.id}
                  onClick={() =>{
                    router.push("/astrologer_details")
                     astrologer.available && setSelectedAstrologer(astrologer)
                  }
                   
                  }
                  className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedAstrologer?.id === astrologer.id
                      ? "border-yellow-400 bg-yellow-400/10 shadow-lg shadow-yellow-400/20"
                      : astrologer.available
                      ? "border-slate-600/50 bg-slate-700/30 hover:border-yellow-400/50"
                      : "border-slate-600/30 bg-slate-700/20 opacity-50 cursor-not-allowed"
                  }`}
                >
                  {!astrologer.available && (
                    <div className="absolute top-2 right-2 bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-xs">
                      Unavailable
                    </div>
                  )}
                  <div className="text-center">
                    <img
                      src={astrologer.image}
                      alt={astrologer.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-yellow-400/50"
                    />
                    <h3 className="font-semibold text-yellow-300 mb-2">
                      {astrologer.name}
                    </h3>
                    <p className="text-slate-400 text-sm mb-2">
                      {astrologer.specialization}
                    </p>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-yellow-300 text-sm">
                        {astrologer.rating}
                      </span>
                      <span className="text-slate-400 text-sm">
                        ({astrologer.consultations})
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm mb-3">
                      {astrologer.experience}
                    </p>
                    <div className="text-yellow-300 font-semibold">
                      ₹{astrologer.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Selection */}
          <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50">
            <h2 className="text-2xl font-bold text-yellow-300 mb-6">
              Select Service
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedService?.id === service.id
                      ? "border-yellow-400 bg-yellow-400/10 shadow-lg shadow-yellow-400/20"
                      : "border-slate-600/50 bg-slate-700/30 hover:border-yellow-400/50"
                  }`}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <h3 className="font-semibold text-yellow-300 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-slate-400 text-sm mb-2">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-center gap-1 text-slate-300">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Details */}
          <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50">
            <h2 className="text-2xl font-bold text-yellow-300 mb-6">
              Personal Details
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-yellow-300 text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  className={`w-full bg-slate-700/50 border rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none transition-colors ${
                    formTouched.name && formErrors.name
                      ? "border-red-500 focus:border-red-500"
                      : "border-slate-600/50 focus:border-yellow-400"
                  }`}
                  placeholder="Enter your full name"
                />
                {formTouched.name && formErrors.name && (
                  <div className="flex items-center gap-1 mt-1 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{formErrors.name}</span>
                  </div>
                )}
              </div>
              <div>
                <label className="block text-yellow-300 text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  className={`w-full bg-slate-700/50 border rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none transition-colors ${
                    formTouched.email && formErrors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-slate-600/50 focus:border-yellow-400"
                  }`}
                  placeholder="your.email@example.com"
                />
                {formTouched.email && formErrors.email && (
                  <div className="flex items-center gap-1 mt-1 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{formErrors.email}</span>
                  </div>
                )}
              </div>
              <div>
                <label className="block text-yellow-300 text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  className={`w-full bg-slate-700/50 border rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none transition-colors ${
                    formTouched.phone && formErrors.phone
                      ? "border-red-500 focus:border-red-500"
                      : "border-slate-600/50 focus:border-yellow-400"
                  }`}
                  placeholder="+91 9876543210"
                />
                {formTouched.phone && formErrors.phone && (
                  <div className="flex items-center gap-1 mt-1 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{formErrors.phone}</span>
                  </div>
                )}
              </div>
              <div>
                <label className="block text-yellow-300 text-sm font-medium mb-2">
                  Birth Date *
                </label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  className={`w-full bg-slate-700/50 border rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none transition-colors ${
                    formTouched.birthDate && formErrors.birthDate
                      ? "border-red-500 focus:border-red-500"
                      : "border-slate-600/50 focus:border-yellow-400"
                  }`}
                />
                {formTouched.birthDate && formErrors.birthDate && (
                  <div className="flex items-center gap-1 mt-1 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{formErrors.birthDate}</span>
                  </div>
                )}
              </div>
              <div>
                <label className="block text-yellow-300 text-sm font-medium mb-2">
                  Birth Time *
                </label>
                <input
                  type="time"
                  name="birthTime"
                  value={formData.birthTime}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  className={`w-full bg-slate-700/50 border rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none transition-colors ${
                    formTouched.birthTime && formErrors.birthTime
                      ? "border-red-500 focus:border-red-500"
                      : "border-slate-600/50 focus:border-yellow-400"
                  }`}
                />
                {formTouched.birthTime && formErrors.birthTime && (
                  <div className="flex items-center gap-1 mt-1 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{formErrors.birthTime}</span>
                  </div>
                )}
              </div>
              <div>
                <label className="block text-yellow-300 text-sm font-medium mb-2">
                  Birth Place *
                </label>
                <input
                  type="text"
                  name="birthPlace"
                  value={formData.birthPlace}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  className={`w-full bg-slate-700/50 border rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none transition-colors ${
                    formTouched.birthPlace && formErrors.birthPlace
                      ? "border-red-500 focus:border-red-500"
                      : "border-slate-600/50 focus:border-yellow-400"
                  }`}
                  placeholder="City, State, Country"
                />
                {formTouched.birthPlace && formErrors.birthPlace && (
                  <div className="flex items-center gap-1 mt-1 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{formErrors.birthPlace}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-yellow-300 text-sm font-medium mb-2">
                Your Question/Concern *
              </label>
              <textarea
                name="question"
                value={formData.question}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                rows={4}
                className={`w-full bg-slate-700/50 border rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none resize-none transition-colors ${
                  formTouched.question && formErrors.question
                    ? "border-red-500 focus:border-red-500"
                    : "border-slate-600/50 focus:border-yellow-400"
                }`}
                placeholder="Please describe your specific questions or concerns you'd like to discuss during the consultation... (10-500 characters)"
              />
              {formTouched.question && formErrors.question && (
                <div className="flex items-center gap-1 mt-1 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>{formErrors.question}</span>
                </div>
              )}
              <div className="text-right mt-1 text-slate-400 text-sm">
                {formData.question.length}/500 characters
              </div>
            </div>
          </div>

          {/* Date & Time Selection */}
          <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50">
            <h2 className="text-2xl font-bold text-yellow-300 mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6" />
              Select Date & Time
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-yellow-300 text-sm font-medium mb-3">
                  Consultation Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-yellow-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-yellow-300 text-sm font-medium mb-3">
                  Available Time Slots
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((slot, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() =>
                        slot.available && setSelectedTimeSlot(slot.time)
                      }
                      className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                        selectedTimeSlot === slot.time
                          ? "border-yellow-400 bg-yellow-400/10 text-yellow-300"
                          : slot.available
                          ? "border-slate-600/50 bg-slate-700/30 text-slate-300 hover:border-yellow-400/50"
                          : "border-slate-600/30 bg-slate-700/20 text-slate-500 cursor-not-allowed"
                      }`}
                      disabled={!slot.available}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {slot.available ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <X className="w-4 h-4 text-red-400" />
                        )}
                        <span className="text-sm font-medium">{slot.time}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Summary & Payment */}
          <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50">
            <h2 className="text-2xl font-bold text-yellow-300 mb-6 flex items-center gap-2">
              <CreditCard className="w-6 h-6" />
              Booking Summary
            </h2>

            {selectedAstrologer && selectedService && (
              <div className="bg-slate-800/50 rounded-lg p-6 mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-yellow-300 font-semibold text-lg">
                      {selectedAstrologer.name}
                    </h3>
                    <p className="text-slate-400">{selectedService.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-yellow-300 font-semibold text-xl">
                      ₹{selectedAstrologer.price}
                    </p>
                    <p className="text-slate-400 text-sm">
                      {selectedService.duration}
                    </p>
                  </div>
                </div>

                {selectedDate && selectedTimeSlot && (
                  <div className="border-t border-slate-600/50 pt-4">
                    <div className="flex items-center gap-4 text-slate-300">
                      <Calendar className="w-5 h-5" />
                      <span>
                        {new Date(selectedDate).toLocaleDateString("en-IN", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <Clock className="w-5 h-5 ml-4" />
                      <span>{selectedTimeSlot}</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={!isFormValid}
              className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                isFormValid
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 hover:from-yellow-500 hover:to-yellow-600 shadow-lg shadow-yellow-400/20"
                  : "bg-slate-700/50 text-slate-500 cursor-not-allowed"
              }`}
            >
              {isFormValid
                ? "Book Consultation & Pay Now"
                : "Please fill all required fields"}
            </button>

            <div className="text-center mt-4 text-slate-400 text-sm">
              <p>🔒 Secure payment • 100% refund if cancelled 24hrs before</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;
