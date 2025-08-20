"use client";

import { cn } from "@/lib/utils";
//import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const zodiacSigns = [
    { name: "Aries", path: "/zodiac/aries", symbol: "♈", color: "bg-red-500" },
    { name: "Taurus", path: "/zodiac/taurus", symbol: "♉", color: "bg-green-600" },
    { name: "Gemini", path: "/zodiac/gemini", symbol: "♊", color: "bg-yellow-400" },
    { name: "Cancer", path: "/zodiac/cancer", symbol: "♋", color: "bg-blue-300" },
    { name: "Leo", path: "/zodiac/leo", symbol: "♌", color: "bg-orange-500" },
    { name: "Virgo", path: "/zodiac/virgo", symbol: "♍", color: "bg-green-400" },
    { name: "Libra", path: "/zodiac/libra", symbol: "♎", color: "bg-pink-400" },
    { name: "Scorpio", path: "/zodiac/scorpio", symbol: "♏", color: "bg-red-700" },
    { name: "Sagittarius", path: "/zodiac/sagittarius", symbol: "♐", color: "bg-purple-500" },
    { name: "Capricorn", path: "/zodiac/capricorn", symbol: "♑", color: "bg-gray-600" },
    { name: "Aquarius", path: "/zodiac/aquarius", symbol: "♒", color: "bg-blue-500" },
    { name: "Pisces", path: "/zodiac/pisces", symbol: "♓", color: "bg-indigo-400" },
];

export default function ZodiacWheel() {
    const [activeSign, setActiveSign] = useState<string | null>(null);
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div className="relative w-full max-w-md mx-auto aspect-square">
            <div
                className="absolute inset-0 rounded-full border border-accent/30 bg-card/20 backdrop-blur-sm"
                style={{
                    boxShadow: "0 0 30px rgba(255, 215, 0, 0.15), inset 0 0 20px rgba(255, 215, 0, 0.05)"
                }}
            />

            {/* Zodiac wheel background image */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
                <div
                    className={cn(
                        "w-full h-full transition-transform duration-[20s] ease-linear",
                        isHovering ? "pause-animation" : "animate-spin-slow"
                    )}
                    style={{
                        animationDuration: "120s",
                        animationIterationCount: "infinite",
                        animationTimingFunction: "linear"
                    }}
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                            <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgba(255, 215, 0, 0.7)" />
                                <stop offset="100%" stopColor="rgba(255, 170, 0, 0.7)" />
                            </linearGradient>
                        </defs>
                        <circle cx="50" cy="50" r="49" fill="none" stroke="url(#gold)" strokeWidth="0.5" />

                        {/* Dividing lines */}
                        {[...Array(12)].map((_, i) => (
                            <line
                                key={i}
                                x1="50"
                                y1="50"
                                x2="50"
                                y2="1"
                                stroke="rgba(255, 215, 0, 0.3)"
                                strokeWidth="0.5"
                                transform={`rotate(${i * 30} 50 50)`}
                            />
                        ))}

                        {/* Zodiac symbols */}
                        {zodiacSigns.map((sign, i) => {
                            const angle = i * 30;
                            const radians = (angle - 90) * (Math.PI / 180);
                            const x = 50 + 40 * Math.cos(radians);
                            const y = 50 + 40 * Math.sin(radians);

                            return (
                                <g
                                    key={sign.name}
                                    onMouseEnter={() => {
                                        setActiveSign(sign.name);
                                        setIsHovering(true);
                                    }}
                                    onMouseLeave={() => {
                                        setActiveSign(null);
                                        setIsHovering(false);
                                    }}
                                    className="cursor-pointer"
                                >
                                    <circle
                                        cx={x}
                                        cy={y}
                                        r="5"
                                        className={cn(
                                            "transition-all duration-300",
                                            activeSign === sign.name ? "fill-accent" : "fill-secondary stroke-accent/30"
                                        )}
                                    />
                                    <text
                                        x={x}
                                        y={y}
                                        textAnchor="middle"
                                        dominantBaseline="central"
                                        fill="white"
                                        fontSize="5"
                                        fontWeight="bold"
                                    >
                                        {sign.symbol}
                                    </text>
                                </g>
                            );
                        })}
                    </svg>
                </div>
            </div>

            {/* Central content */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div
                    className={cn(
                        "w-1/2 h-1/2 rounded-full flex items-center justify-center transition-all duration-500",
                        "bg-background/40 backdrop-blur-md border border-accent/30",
                        activeSign ? "scale-110" : "scale-100"
                    )}
                    style={{
                        boxShadow: "0 0 30px rgba(255, 215, 0, 0.2), inset 0 0 20px rgba(255, 215, 0, 0.1)"
                    }}
                >
                    {activeSign ? (
                        <Link href={`/zodiac/${activeSign.toLowerCase()}`} className="text-center">
                            <p className="text-4xl font-bold gold-gradient">{
                                zodiacSigns.find(sign => sign.name === activeSign)?.symbol
                            }</p>
                            <p className="text-xl font-medium mt-2">{activeSign}</p>
                        </Link>
                    ) : (
                        <p className="text-xl text-center font-playfair gold-gradient">
                            Zodiac<br />Wheel
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}