"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const slides = [
    {
        id: 1,
        image: "/placeholder.svg?height=800&width=1600",
        title: "Luxury Apartments in Lagos",
        description: "Experience comfort and elegance in our premium apartments",
    },
    {
        id: 2,
        image: "/placeholder.svg?height=800&width=1600",
        title: "Perfect for Short & Long Stays",
        description: "Flexible booking options to suit your needs",
    },
    {
        id: 3,
        image: "/placeholder.svg?height=800&width=1600",
        title: "Prime Locations",
        description: "Strategically located apartments across Lagos",
    },
]

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <Image
                        src={slide.image || "/placeholder.svg"}
                        alt={slide.title}
                        fill
                        priority={index === 0}
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 max-w-4xl leading-tight">
                            {slide.title}
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-2xl leading-relaxed">{slide.description}</p>
                        <Link
                            href="/bookings"
                            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg flex items-center gap-2 transition-colors font-medium shadow-lg hover:shadow-xl text-sm sm:text-base"
                        >
                            <span>Browse Apartments</span>
                            <ChevronRight size={18} />
                        </Link>
                    </div>
                </div>
            ))}

            {/* Slide indicators */}
            <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                            index === currentSlide ? "bg-teal-500 w-6 sm:w-8" : "bg-white bg-opacity-50"
                        }`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
