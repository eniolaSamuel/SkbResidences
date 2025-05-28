"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from 'lucide-react'

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
        <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
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
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-2xl">{slide.description}</p>
                        <Link
                            href="/bookings"
                            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md flex items-center gap-2 transition-colors"
                        >
                            <span>Browse Apartments</span>
                            <ChevronRight size={18} />
                        </Link>
                    </div>
                </div>
            ))}

            {/* Slide indicators */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-teal-500" : "bg-white bg-opacity-50"}`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}