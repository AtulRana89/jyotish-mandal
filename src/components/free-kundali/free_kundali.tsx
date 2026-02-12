"use client";

import React, { useState } from "react";

interface FormState {
  name: string;
  gender: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
  email: string;
  phone: string;
}

const initialState: FormState = {
  name: "",
  gender: "",
  birthDate: "",
  birthTime: "",
  birthPlace: "",
  email: "",
  phone: "",
};

const FreeKundali = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      style={{ backgroundColor: "oklch(96.5% .03 92)" }}
      className="min-h-screen py-10 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#372554]">
            Free Kundali Online
          </h1>
          <p className="text-[#4a6c6f] mt-2">
            Enter your birth details to generate your kundali.
          </p>
        </div>

        <div className="grid lg:grid-cols-[2fr_3fr] gap-8 items-start">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-md border border-[#d56aa0]/20 p-6 space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm text-[#372554]">Full Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-[#d56aa0]/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#d56aa0]/40"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm text-[#372554]">Gender</label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#d56aa0]/30 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#d56aa0]/40"
                  required
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-sm text-[#372554]">Birth Date</label>
                <input
                  name="birthDate"
                  value={form.birthDate}
                  onChange={handleChange}
                  type="date"
                  className="w-full rounded-lg border border-[#d56aa0]/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#d56aa0]/40"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm text-[#372554]">Birth Time</label>
                <input
                  name="birthTime"
                  value={form.birthTime}
                  onChange={handleChange}
                  type="time"
                  className="w-full rounded-lg border border-[#d56aa0]/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#d56aa0]/40"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm text-[#372554]">Birth Place</label>
              <input
                name="birthPlace"
                value={form.birthPlace}
                onChange={handleChange}
                type="text"
                placeholder="City, State, Country"
                className="w-full rounded-lg border border-[#d56aa0]/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#d56aa0]/40"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm text-[#372554]">Email</label>
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
                <label className="text-sm text-[#372554]">Phone</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Phone number"
                  className="w-full rounded-lg border border-[#d56aa0]/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#d56aa0]/40"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-[#d81e5b] text-white font-semibold py-2.5 rounded-lg hover:bg-[#c21952] transition-colors"
            >
              Generate Kundali
            </button>
          </form>

          <div className="bg-white rounded-2xl shadow-md border border-[#d56aa0]/20 p-6">
            {!submitted ? (
              <div className="text-[#4a6c6f]">
                <h2 className="text-xl font-semibold text-[#372554] mb-2">
                  Your Kundali Details
                </h2>
                <p>
                  After you submit the form, your kundali details will appear
                  here.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-[#372554]">
                  Kundali Summary (Preview)
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-[#4a6c6f]">
                  <div>
                    <span className="font-semibold text-[#372554]">Name: </span>
                    {form.name}
                  </div>
                  <div>
                    <span className="font-semibold text-[#372554]">Gender: </span>
                    {form.gender}
                  </div>
                  <div>
                    <span className="font-semibold text-[#372554]">Birth Date: </span>
                    {form.birthDate}
                  </div>
                  <div>
                    <span className="font-semibold text-[#372554]">Birth Time: </span>
                    {form.birthTime}
                  </div>
                  <div>
                    <span className="font-semibold text-[#372554]">Birth Place: </span>
                    {form.birthPlace}
                  </div>
                  <div>
                    <span className="font-semibold text-[#372554]">Email: </span>
                    {form.email}
                  </div>
                </div>
                <div className="mt-4 rounded-xl border border-dashed border-[#d56aa0]/40 p-4 text-[#4a6c6f]">
                  API integration is pending. Once the kundali API is connected,
                  the full chart and details will be rendered here.
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
