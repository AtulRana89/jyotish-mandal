import React from "react";

export const Footer = () => (
    <footer
        style={{ backgroundColor: "oklch(85.2% .199 91.936)" }}
        className="text-[#4a6c6f] py-10 px-6 "
    >
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
            {/* Brand Info */}
            <div>
                <h3 className="text-[#ff3366] text-lg font-semibold mb-3">JyotishMandal</h3>
                <p>
                    Accurate Horoscope & Remedies since 2000. Your guide to a balanced life.
                </p>
            </div>

            {/* Quick Links */}
            <div>
                <h3 className="text-[#ff3366] text-lg font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2">
                    {["Ask Astrologer", "2025 Reports", "Remedies", "Contact"].map((item) => (
                        <li key={item}>
                            <a
                                href="#"
                                className="hover:text-[#d81e5b] transition-colors duration-200"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Social Media */}
            <div>
                <h3 className="text-[#ff3366] text-lg font-semibold mb-3">Follow Us</h3>
                <div className="flex space-x-4 mt-2">
                    <a href="#" className="hover:text-[#d81e5b] transition text-xl">🌐</a>
                    <a href="#" className="hover:text-[#d81e5b] transition text-xl">📘</a>
                    <a href="#" className="hover:text-[#d81e5b] transition text-xl">📷</a>
                    <a href="#" className="hover:text-[#d81e5b] transition text-xl">🐦</a>
                </div>
            </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-10 text-xs text-[#4a6c6f]">
            © 2025 <span className="text-[#f15152] font-medium">JyotishMandal</span>. All rights reserved.
        </div>
    </footer>
);
