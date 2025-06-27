import React from "react";

export const Footer = () => (
    <footer className="bg-[#1E293B] text-[#F9FAFB] border-t border-[#94A3B8] mt-8 py-8 px-6">
        <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div>
                <h3 className="text-[#FBBF24] font-bold mb-2">JyotishMandal</h3>
                <p>Accurate Horoscope & Remedies since 2000.</p>
            </div>
            <div>
                <h3 className="text-[#FBBF24] font-bold mb-2">Quick Links</h3>
                <ul className="space-y-1">
                    {["Ask Astrologer", "2025 Reports", "Remedies", "Contact"].map((item) => (
                        <li key={item}><a href="#" className="hover:text-[#FBBF24]">{item}</a></li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-[#FBBF24] font-bold mb-2">Follow Us</h3>
                <p>Social media links here</p>
            </div>
        </div>
        <div className="text-center mt-6 text-xs text-[#94A3B8]">© 2025 PavitraJyotish. All rights reserved.</div>
    </footer>
);
