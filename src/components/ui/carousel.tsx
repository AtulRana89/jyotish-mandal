"use client";

import { cn } from "@/lib/utils";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import * as React from "react";
import { useEffect } from "react";

export function Carousel({ className, children }: { className?: string; children: React.ReactNode }) {
    return <div className={cn("relative", className)}>{children}</div>;
}

export function CarouselContent({ children }: { children: React.ReactNode }) {
    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: { perView: 1 },
        created: (s) => {
            // Auto-scroll every 5 seconds
            const interval = setInterval(() => {
                s.next();
            }, 5000);
            return () => clearInterval(interval);
        },
    });

    // Pause on hover
    useEffect(() => {
        const currentSlider = slider.current;
        if (!currentSlider) return;

        const intervalRef = { current: null as NodeJS.Timeout | null };

        const pauseAutoPlay = () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };

        const resumeAutoPlay = () => {
            pauseAutoPlay();
            intervalRef.current = setInterval(() => {
                currentSlider.next();
            }, 5000);
        };

        currentSlider.container.addEventListener("mouseenter", pauseAutoPlay);
        currentSlider.container.addEventListener("mouseleave", resumeAutoPlay);

        resumeAutoPlay();

        return () => {
            pauseAutoPlay();
            currentSlider.container.removeEventListener("mouseenter", pauseAutoPlay);
            currentSlider.container.removeEventListener("mouseleave", resumeAutoPlay);
        };
    }, [slider]);

    return (
        <div ref={sliderRef} className="keen-slider overflow-hidden rounded-2xl">
            {children}
        </div>
    );
}

export function CarouselItem({ className = "", children }: { className?: string; children: React.ReactNode }) {
    return <div className={cn("keen-slider__slide", className)}>{children}</div>;
}

export function CarouselPrevious({ slider }: { slider?: any }) {
    return (
        <button
            onClick={() => slider?.current?.prev()}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#1E293B] text-[#FBBF24] p-2 rounded-full shadow hover:bg-[#FBBF24] hover:text-[#0F172A] transition"
        >
            ‹
        </button>
    );
}

export function CarouselNext({ slider }: { slider?: any }) {
    return (
        <button
            onClick={() => slider?.current?.next()}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#1E293B] text-[#FBBF24] p-2 rounded-full shadow hover:bg-[#FBBF24] hover:text-[#0F172A] transition"
        >
            ›
        </button>
    );
}