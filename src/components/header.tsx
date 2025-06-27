import React from "react";

export const Header = () => (
    <header className="border-b border-[#94A3B8] py-4 px-6 flex items-center justify-between bg-[#1E293B]">
        <div className="flex items-center space-x-4">
            <img src="/logo.jpg" alt="Logo" className="h-10" />
            <h1 className="text-xl font-bold text-[#FBBF24]">JYOTISH MANDAL</h1>
        </div>
        <nav className="space-x-6 text-sm text-[#F9FAFB] hidden md:flex">
            {["2025", "Ask", "Career", "Love", "Marriage", "Finance", "Talk", "Education"].map((link) => (
                <a key={link} href="#" className="hover:text-[#FBBF24]">{link}</a>
            ))}
        </nav>
    </header>
);
