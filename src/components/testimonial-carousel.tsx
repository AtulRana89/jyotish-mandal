"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
    {
        name: "Priya Sharma",
        location: "Delhi, India",
        quote: "The birth chart reading was incredibly accurate. The insights about my career path have already started manifesting. I'm truly grateful for the guidance.",
        stars: 5,
        image: "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        name: "Rahul Verma",
        location: "Mumbai, India",
        quote: "I was skeptical at first, but the compatibility analysis for my relationship was eye-opening. It helped us understand our dynamics better and improved our communication.",
        stars: 5,
        image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        name: "Ananya Patel",
        location: "Bangalore, India",
        quote: "The remedial solutions suggested for Saturn's influence in my life have brought noticeable positive changes. I feel more balanced and focused now.",
        stars: 4,
        image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        name: "Vikram Singh",
        location: "Jaipur, India",
        quote: "The Muhurta consultation for my business launch was invaluable. We started at the recommended time and have seen exceptional growth since day one.",
        stars: 5,
        image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
];

export default function TestimonialCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState<"left" | "right" | null>(null);

    const goToPrev = () => {
        setDirection("left");
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setDirection("right");
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(goToNext, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative">
            <div className="overflow-hidden">
                <div className="flex transition-transform duration-500 ease-out">
                    {testimonials.map((testimonial, idx) => (
                        <Card
                            key={idx}
                            className={cn(
                                "cosmic-card flex-shrink-0 w-full transition-all duration-500",
                                idx === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute",
                            )}
                            style={{
                                transform: idx === activeIndex ? "translateX(0)" :
                                    idx === (activeIndex + 1) % testimonials.length ? "translateX(100%)" :
                                        "translateX(-100%)"
                            }}
                        >
                            <CardContent className="p-8">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                                    <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto md:mx-0">
                                        <div className="rounded-full overflow-hidden border-2 border-accent h-full w-full">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="md:col-span-2 text-center md:text-left">
                                        <div className="flex justify-center md:justify-start mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={cn(
                                                        "h-4 w-4 mr-1",
                                                        i < testimonial.stars ? "fill-accent text-accent" : "text-muted"
                                                    )}
                                                />
                                            ))}
                                        </div>
                                        <blockquote className="text-lg mb-4 italic">"{testimonial.quote}"</blockquote>
                                        <div>
                                            <p className="font-bold">{testimonial.name}</p>
                                            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-6 gap-2">
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    onClick={goToPrev}
                >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Previous</span>
                </Button>

                <div className="flex items-center gap-2">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            className={cn(
                                "w-2 h-2 rounded-full transition-all",
                                idx === activeIndex ? "bg-primary w-4" : "bg-muted"
                            )}
                            onClick={() => setActiveIndex(idx)}
                        >
                            <span className="sr-only">Go to slide {idx + 1}</span>
                        </button>
                    ))}
                </div>

                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    onClick={goToNext}
                >
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Next</span>
                </Button>
            </div>
        </div>
    );
}