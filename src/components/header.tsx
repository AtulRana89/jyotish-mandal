import React from "react";

export const Header = () => (
  <header className="bg-[#c0bcb5] text-[#4a6c6f] shadow-md py-4 px-6">
    <div className="flex items-center justify-between max-w-7xl mx-auto">
      {/* Logo + Brand */}
      <div className="flex items-center space-x-4">
        <img
          src="/logo.jpg"
          alt="Logo"
          className="h-10 w-10 rounded-full border-2 border-[#d56aa0] shadow-sm"
        />
        <h1 className="text-2xl font-extrabold tracking-wide text-[#372554]">
          JYOTISH MANDAL
        </h1>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-6 text-sm font-medium">
        {["2025", "Ask", "Career", "Love", "Marriage", "Finance", "Talk", "Education"].map(
          (link) => (
            <a
              key={link}
              href="#"
              className="hover:text-[#ff3366] transition-colors duration-200"
            >
              {link}
            </a>
          )
        )}
      </nav>
    </div>
  </header>
);
