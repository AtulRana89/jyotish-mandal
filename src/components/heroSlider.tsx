"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
    {
        image: "/banner.jpg",
        title: "Welcome to AstroWorld",
        description: "Discover your future with precise Vedic astrology insights.",
        button: "Explore Now",
    },
    {
        image: "/banner1.jpg",
        title: "Personalized Kundli Reports",
        description: "Get deep astrological insights tailored to your birth chart.",
        button: "Generate Kundli",
    },
    {
        image: "/banner2.jpg",
        title: "Match Making Made Simple",
        description: "Check compatibility and find your perfect match today.",
        button: "Check Match",
    },
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[70vh] overflow-hidden">
            <AnimatePresence>
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src={slides[current].image}
                        alt="banner"
                        layout="fill"
                        objectFit="cover"
                        className="brightness-75"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                        <motion.h1
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-6xl font-bold mb-4"
                        >
                            {slides[current].title}
                        </motion.h1>
                        <motion.p
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-lg md:text-2xl max-w-xl mb-6"
                        >
                            {slides[current].description}
                        </motion.p>
                        <motion.button
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full shadow-lg"
                        >
                            {slides[current].button}
                        </motion.button>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
