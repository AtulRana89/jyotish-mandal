"use client"

import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"

export const Header = () => {
  const [isPujaOpen, setIsPujaOpen] = useState(false);

  const pujaMenu = [
    {
      title: "Puja For Life Success",
      items: [
        "Puja for Peace",
        "Birthday Puja",
        "Puja for Wealth",
        "Puja for Health",
        "Puja for Marriage",
        "New Year Puja 2026",
      ],
    },
    {
      title: "Puja For Grah Shanti",
      items: [
        "Navgrah (9 Planets) Puja",
        "Surya Puja",
        "Chandra Puja",
        "Mangal Puja",
        "Budh Puja",
        "Brihaspati Puja",
        "Shukra Puja",
        "Shani Puja",
        "Rahu Puja",
        "Ketu Puja",
      ],
    },
    {
      title: "Puja For Nakshatra Dosh",
      items: [
        "Nakshatra Dosh Shanti Puja",
        "Ashwini Nakshtra Shanti Puja",
        "Ashlesha Nakshtra Shanti Puja",
        "Magha Nakshtra Shanti Puja",
        "Jyeshtha Nakshtra Shanti Puja",
        "Moola Nakshtra Shanti Puja",
        "Revati Nakshtra Shanti Puja",
      ],
    },
    {
      title: "Puja For Kundali Dosh",
      items: [
        "Pitra Dosh Puja",
        "Kaalsarp Dosh Nivaran Puja",
        "Kemdrum Yog Dosh Puja",
        "Gandmool Nakshatra Shanti Puja",
        "Surya Chandra Dosh Puja",
        "Surya Mangal Dosh Puja",
        "Surya Shani Dosh Puja",
        "Surya Rahu Dosh Puja",
        "Surya Ketu Dosh Puja",
        "Chandra Rahu Dosh Puja",
      ],
    },
  ];

  return (
    <header
      style={{ backgroundColor: "oklch(85.2% .199 91.936)" }}
      className="text-[#372554] shadow-md py-4 px-6 relative"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-4">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="h-10 w-10 rounded-full border-2 border-[#d56aa0] shadow-sm"
          />
          <h1 className="text-2xl font-extrabold tracking-wide">
            JYOTISH MANDAL
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-[#4a6c6f] relative">
          {/* Puja with dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsPujaOpen(true)}
            onMouseLeave={() => setIsPujaOpen(false)}
          >
            <a
              href="#"
              className="hover:text-[#d81e5b] transition-colors duration-200"
            >
              Puja
            </a>

            {isPujaOpen && (
              <div
                style={{ backgroundColor: "oklch(85.2% .199 91.936)" }}
                className="absolute top-full -left-50 mt- shadow-lg rounded-2xl grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 z-50 border border-[#d56aa0]/30 min-w-[700px]"
              >
                {pujaMenu.map((menu, idx) => (
                  <ScrollArea key={idx} className="max-h-[400px] overflow-y-auto scrollbar-gray" >
                    <h3 className="font-bold text-[#d81e5b] mb-3 border-b border-[#d56aa0]/30 pb-1">
                      {menu.title}
                    </h3>
                    <ul className="space-y-2">
                      {menu.items.map((item, i) => (
                        <li key={i}>
                          <a
                            href="#"
                            className="block px-2 py-1 rounded-md hover:bg-[#d56aa0]/20 hover:text-[#372554] transition-colors duration-200"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                ))}
              </div>
            )}
          </div>

          {["Ask", "Career", "Love", "Marriage", "Finance", "Talk", "Education"].map(
            (link) => (
              <a
                key={link}
                href="#"
                className="hover:text-[#d81e5b] transition-colors duration-200"
              >
                {link}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
};
