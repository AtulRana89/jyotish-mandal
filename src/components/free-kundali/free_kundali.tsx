"use client";

import React, { useState } from "react";

interface FormState {
  name: string;
  gender: string;
  birthDay: string;
  birthMonth: string;
  birthYear: string;
  birthHour: string;
  birthMinute: string;
  birthPeriod: string;
  birthPlace: string;
  email: string;
  phone: string;
}

const initialState: FormState = {
  name: "",
  gender: "",
  birthDay: "",
  birthMonth: "",
  birthYear: "",
  birthHour: "",
  birthMinute: "",
  birthPeriod: "",
  birthPlace: "",
  email: "",
  phone: "",
};

type Language = "hi" | "en" | "pa" | "gu";

interface KundaliSection {
  id: string;
  title: string;
  content: string | Record<string, unknown>;
}

interface KundaliResponse {
  sections: KundaliSection[];
}

const translations: Record<Language, Record<string, string>> = {
  hi: {
    title: "फ्री कुंडली ऑनलाइन",
    subtitle: "अपनी जन्म विवरण भरें और अपनी कुंडली प्राप्त करें।",
    name: "पूरा नाम",
    gender: "लिंग",
    birthDate: "जन्म तिथि",
    birthTime: "जन्म समय",
    birthPlace: "जन्म स्थान",
    email: "ईमेल",
    phone: "फोन",
    generate: "कुंडली बनाएं",
    summaryTitle: "कुंडली विवरण",
    empty: "फॉर्म सबमिट करने के बाद आपकी कुंडली यहां दिखेगी।",
    lang: "भाषा",
    male: "पुरुष",
    female: "महिला",
    other: "अन्य",
    loading: "कृपया प्रतीक्षा करें...",
    error: "कुंडली लोड नहीं हो सकी।",
  },
  en: {
    title: "Free Kundali Online",
    subtitle: "Enter your birth details to generate your kundali.",
    name: "Full Name",
    gender: "Gender",
    birthDate: "Birth Date",
    birthTime: "Birth Time",
    birthPlace: "Birth Place",
    email: "Email",
    phone: "Phone",
    generate: "Generate Kundali",
    summaryTitle: "Kundali Details",
    empty: "After you submit the form, your kundali will appear here.",
    lang: "Language",
    male: "Male",
    female: "Female",
    other: "Other",
    loading: "Please wait...",
    error: "Unable to load kundali.",
  },
  pa: {
    title: "ਮੁਫ਼ਤ ਕੁੰਡਲੀ ਆਨਲਾਈਨ",
    subtitle: "ਜਨਮ ਦੇ ਵੇਰਵੇ ਭਰੋ ਅਤੇ ਆਪਣੀ ਕੁੰਡਲੀ ਪ੍ਰਾਪਤ ਕਰੋ।",
    name: "ਪੂਰਾ ਨਾਮ",
    gender: "ਲਿੰਗ",
    birthDate: "ਜਨਮ ਤਾਰੀਖ",
    birthTime: "ਜਨਮ ਸਮਾਂ",
    birthPlace: "ਜਨਮ ਸਥਾਨ",
    email: "ਈਮੇਲ",
    phone: "ਫ਼ੋਨ",
    generate: "ਕੁੰਡਲੀ ਬਣਾਓ",
    summaryTitle: "ਕੁੰਡਲੀ ਵੇਰਵੇ",
    empty: "ਫਾਰਮ ਭਰਨ ਤੋਂ ਬਾਅਦ ਤੁਹਾਡੀ ਕੁੰਡਲੀ ਇੱਥੇ ਦਿਖਾਈ ਦੇਵੇਗੀ।",
    lang: "ਭਾਸ਼ਾ",
    male: "ਮਰਦ",
    female: "ਔਰਤ",
    other: "ਹੋਰ",
    loading: "ਕਿਰਪਾ ਕਰਕੇ ਉਡੀਕ ਕਰੋ...",
    error: "ਕੁੰਡਲੀ ਲੋਡ ਨਹੀਂ ਹੋ ਸਕੀ।",
  },
  gu: {
    title: "ફ્રી કુંડળી ઓનલાઇન",
    subtitle: "જન્મ વિગતો દાખલ કરો અને તમારી કુંડળી મેળવો.",
    name: "પૂરું નામ",
    gender: "લિંગ",
    birthDate: "જન્મ તારીખ",
    birthTime: "જન્મ સમય",
    birthPlace: "જન્મ સ્થાન",
    email: "ઇમેઇલ",
    phone: "ફોન",
    generate: "કુંડળી બનાવો",
    summaryTitle: "કુંડળી વિગતો",
    empty: "ફોર્મ સબમિટ કર્યા પછી તમારી કુંડળી અહીં દેખાશે.",
    lang: "ભાષા",
    male: "પુરુષ",
    female: "સ્ત્રી",
    other: "અન્ય",
    loading: "કૃપા કરીને રાહ જુઓ...",
    error: "કુંડળી લોડ થઈ શકી નથી.",
  },
};

const FreeKundali = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [language, setLanguage] = useState<Language>("hi");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [kundali, setKundali] = useState<KundaliResponse | null>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [placeSuggestions, setPlaceSuggestions] = useState<
    Array<{ display_name: string }>
  >([]);
  const [isPlaceOpen, setIsPlaceOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceChange = async (value: string) => {
    setForm((prev) => ({ ...prev, birthPlace: value }));
    if (!value || value.length < 3) {
      setPlaceSuggestions([]);
      setIsPlaceOpen(false);
      return;
    }
    try {
      const params = new URLSearchParams({
        q: value,
        format: "json",
        addressdetails: "1",
        limit: "6",
      });
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?${params.toString()}`
      );
      if (!res.ok) {
        setPlaceSuggestions([]);
        setIsPlaceOpen(false);
        return;
      }
      const data = (await res.json()) as Array<{ display_name: string }>;
      setPlaceSuggestions(data);
      setIsPlaceOpen(true);
    } catch {
      setPlaceSuggestions([]);
      setIsPlaceOpen(false);
    }
  };

  const handlePlaceSelect = (place: { display_name: string }) => {
    setForm((prev) => ({ ...prev, birthPlace: place.display_name }));
    setPlaceSuggestions([]);
    setIsPlaceOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSubmitted(true);
    setActiveSection(0);
    try {
      const birthDate =
        form.birthDay && form.birthMonth && form.birthYear
          ? `${form.birthYear}-${form.birthMonth}-${form.birthDay}`
          : "";
      const birthTime =
        form.birthHour && form.birthMinute && form.birthPeriod
          ? `${form.birthHour.padStart(2, "0")}:${form.birthMinute.padStart(2, "0")} ${form.birthPeriod}`
          : "";
      const res = await fetch("/api/kundali", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, birthDate, birthTime, language }),
      });
      if (!res.ok) {
        throw new Error("Request failed");
      }
      const data = (await res.json()) as KundaliResponse;
      setKundali(data);
    } catch (err) {
      setError("error");
      setKundali(null);
    } finally {
      setIsLoading(false);
    }
  };

  const t = translations[language];

  const sections = kundali?.sections ?? [
    {
      id: "birth",
      title: "Birth Details",
      content: {
        name: form.name,
        gender: form.gender,
        birthDate:
          form.birthDay && form.birthMonth && form.birthYear
            ? `${form.birthYear}-${form.birthMonth}-${form.birthDay}`
            : "",
        birthTime:
          form.birthHour && form.birthMinute && form.birthPeriod
            ? `${form.birthHour.padStart(2, "0")}:${form.birthMinute.padStart(2, "0")} ${form.birthPeriod}`
            : "",
        birthPlace: form.birthPlace,
      },
    },
    { id: "charts", title: "D1–D60 Charts", content: "Pending API data" },
    { id: "dosha", title: "Dosha", content: "Pending API data" },
    { id: "planets", title: "Planet Positions", content: "Pending API data" },
    { id: "predictions", title: "Predictions", content: "Pending API data" },
    { id: "remedies", title: "Remedies", content: "Pending API data" },
    { id: "pdf", title: "PDF Report", content: "Pending API data" },
  ];

  return (
    <section
      style={{ backgroundColor: "oklch(96.5% .03 92)" }}
      className="min-h-screen py-10 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#372554]">
            {t.title}
          </h1>
          <p className="text-[#4a6c6f] mt-2">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-[2fr_3fr] gap-8 items-start">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-md border border-[#d56aa0]/20 p-6 space-y-4"
          >
            <div className="space-y-1">
              <label className="text-sm text-[#372554]">{t.lang}</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="w-full rounded-lg border border-[#d56aa0]/30 px-3 py-2 bg-white text-[#372554] focus:outline-none focus:ring-2 focus:ring-[#d56aa0]/40"
              >
                <option value="hi">Hindi</option>
                <option value="en">English</option>
                <option value="pa">Punjabi</option>
                <option value="gu">Gujarati</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm text-[#372554]">{t.name}</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  placeholder={t.name}
                  className="w-full rounded-lg border border-[#d56aa0]/30 px-3 py-2 text-[#372554] placeholder:text-[#7b8c8e] focus:outline-none focus:ring-2 focus:ring-[#d56aa0]/40"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm text-[#372554]">{t.gender}</label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#d56aa0]/30 px-3 py-2 bg-white text-[#372554] focus:outline-none focus:ring-2 focus:ring-[#d56aa0]/40"
                  required
                >
                  <option value="">Select</option>
                  <option value="male">{t.male}</option>
                  <option value="female">{t.female}</option>
                  <option value="other">{t.other}</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm text-[#372554]">{t.birthDate}</label>
              <div className="grid grid-cols-3 gap-2">
                <select
                  name="birthDay"
                  value={form.birthDay}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#d56aa0]/30 px-3 py-2 bg-white text-[#372554] focus:outline-none focus:ring-2 focus:ring-[#d56aa0]/40"
                  required
                >
                  <option value="">DD</option>
                  {Array.from({ length: 31 }).map((_, i) => {
                    const day = String(i + 1).padStart(2, "0");
                    return (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    );
                  })}
                </select>
                <select
                  name="birthMonth"
                  value={form.birthMonth}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#d56aa0]/30 px-3 py-2 bg-white text-[#372554] focus:outline-none focus:ring-2 focus:ring-[#d56aa0]/40"
                  required
                >
                  <option value="">MM</option>
                  {Array.from({ length: 12 }).map((_, i) => {
                    const month = String(i + 1).padStart(2, "0");
                    return (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    );
                  })}
                </select>
                <select
                  name="birthYear"
                  value={form.birthYear}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#d56aa0]/30 px-3 py-2 bg-white text-[#372554] focus:outline-none focus:ring-2 focus:ring-[#d56aa0]/40"
                  required
                >
                  <option value="">YYYY</option>
                  {Array.from({ length: 100 }).map((_, i) => {
                    const year = new Date().getFullYear() - i;
                    return (
                      <option key={year} value={String(year)}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm text-[#372554]">{t.birthTime}</label>
              <div className="grid grid-cols-3 gap-2">
                <select
                  name="birthHour"
                  value={form.birthHour}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#d56aa0]/30 px-3 py-2 bg-white text-[#372554] focus:outline-none focus:ring-2 focus:ring-[#d56aa0]/40"
                  required
                >
                  <option value="">HH</option>
                  {Array.from({ length: 12 }).map((_, i) => {
                    const hour = String(i + 1).padStart(2, "0");
                    return (
                      <option key={hour} value={hour}>
                        {hour}
                      </option>
                    );
                  })}
                </select>
                <select
                  name="birthMinute"
                  value={form.birthMinute}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#d56aa0]/30 px-3 py-2 bg-white text-[#372554] focus:outline-none focus:ring-2 focus:ring-[#d56aa0]/40"
                  required
                >
                  <option value="">MM</option>
                  {Array.from({ length: 60 }).map((_, i) => {
                    const minute = String(i).padStart(2, "0");
                    return (
                      <option key={minute} value={minute}>
                        {minute}
                      </option>
                    );
                  })}
                </select>
                <select
                  name="birthPeriod"
                  value={form.birthPeriod}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#d56aa0]/30 px-3 py-2 bg-white text-[#372554] focus:outline-none focus:ring-2 focus:ring-[#d56aa0]/40"
                  required
                >
                  <option value="">AM/PM</option>
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>

            <div className="space-y-1 relative">
              <label className="text-sm text-[#372554]">{t.birthPlace}</label>
              <input
                name="birthPlace"
                value={form.birthPlace}
                onChange={(e) => handlePlaceChange(e.target.value)}
                onFocus={() => form.birthPlace && setIsPlaceOpen(true)}
                onBlur={() => setTimeout(() => setIsPlaceOpen(false), 150)}
                type="text"
                placeholder={t.birthPlace}
                className="w-full rounded-lg border border-[#d56aa0]/30 px-3 py-2 text-[#372554] placeholder:text-[#7b8c8e] focus:outline-none focus:ring-2 focus:ring-[#d56aa0]/40"
                required
              />
              {isPlaceOpen && placeSuggestions.length > 0 && (
                <div className="absolute z-20 mt-1 w-full rounded-xl border border-[#d56aa0]/20 bg-white shadow-lg overflow-hidden">
                  {placeSuggestions.map((place) => (
                    <button
                      key={place.display_name}
                      type="button"
                      onClick={() => handlePlaceSelect(place)}
                      className="w-full text-left px-3 py-2 text-sm text-[#372554] hover:bg-[#d56aa0]/10"
                    >
                      {place.display_name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm text-[#372554]">{t.email}</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-[#d56aa0]/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#d56aa0]/40"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm text-[#372554]">{t.phone}</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder={t.phone}
                  className="w-full rounded-lg border border-[#d56aa0]/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#d56aa0]/40"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-[#d81e5b] text-white font-semibold py-2.5 rounded-lg hover:bg-[#c21952] transition-colors"
            >
              {t.generate}
            </button>
          </form>

          <div className="bg-white rounded-2xl shadow-md border border-[#d56aa0]/20 p-6">
            {!submitted ? (
              <div className="text-[#4a6c6f]">
                <h2 className="text-xl font-semibold text-[#372554] mb-2">
                  {t.summaryTitle}
                </h2>
                <p>
                  {t.empty}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-[#372554]">
                    {t.summaryTitle}
                  </h2>
                  {isLoading && (
                    <span className="text-sm text-[#4a6c6f]">{t.loading}</span>
                  )}
                </div>
                {error && (
                  <div className="text-sm text-red-600">{t.error}</div>
                )}
                <div className="grid md:grid-cols-[220px_1fr] gap-4">
                  <div className="space-y-2">
                    {sections.map((section, idx) => (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() => setActiveSection(idx)}
                        className={`w-full text-left px-3 py-2 rounded-lg border transition-colors ${idx === activeSection
                          ? "bg-[#d56aa0]/10 border-[#d56aa0]/40 text-[#372554]"
                          : "border-[#d56aa0]/20 text-[#4a6c6f] hover:bg-[#d56aa0]/10"
                          }`}
                      >
                        {section.title}
                      </button>
                    ))}
                  </div>
                  <div className="rounded-xl border border-[#d56aa0]/20 p-4 text-[#4a6c6f] min-h-[240px]">
                    {sections[activeSection] ? (
                      typeof sections[activeSection].content === "string" ? (
                        <p>{sections[activeSection].content as string}</p>
                      ) : (
                        <pre className="whitespace-pre-wrap text-sm">
                          {JSON.stringify(
                            sections[activeSection].content,
                            null,
                            2
                          )}
                        </pre>
                      )
                    ) : null}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeKundali;
