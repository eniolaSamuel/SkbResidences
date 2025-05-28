"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
    {
        id: 1,
        name: "K.P",
        location: "Adeniyi Jones",
        image: "/placeholder.svg?height=100&width=100",
        text: "The apartment exceeded my expectations. It was clean, spacious, and had all the amenities I needed. The location was perfect, and the staff was very helpful. I would definitely stay here again.",
        rating: 5,
    },
    {
        id: 2,
        name: "Doctor",
        location: "Victoria Island",
        image: "/placeholder.svg?height=100&width=100",
        text: "I had a wonderful experience staying at this apartment. The check-in process was smooth, and the apartment was exactly as described. The location was convenient, and I felt safe throughout my stay.",
        rating: 4,
    },
    {
        id: 3,
        name: "Michael Johnson",
        location: "Ikoyi",
        image: "/placeholder.svg?height=100&width=100",
        text: "I booked this apartment for a business trip, and it was perfect. The high-speed internet was reliable, and the workspace was comfortable. The apartment was quiet, which allowed me to focus on my work.",
        rating: 5,
    },
]

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [autoplay, setAutoplay] = useState(true)

    useEffect(() => {
        if (!autoplay) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
        }, 5000)

        return () => clearInterval(interval)
    }, [autoplay])

    const handlePrev = () => {
        setAutoplay(false)
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setAutoplay(false)
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }

    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">What Our Guests Say</h2>

                <div className="relative max-w-4xl mx-auto">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                                    <div className="bg-white rounded-lg shadow-md p-8 text-center">
                                        <div className="flex justify-center mb-4">
                                            <Image
                                                src={testimonial.image || "/placeholder.svg"}
                                                alt={testimonial.name}
                                                width={80}
                                                height={80}
                                                className="rounded-full"
                                            />
                                        </div>
                                        <div className="flex justify-center mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-gray-700 mb-4 italic">{testimonial.text}</p>
                                        <h3 className="font-semibold">{testimonial.name}</h3>
                                        <p className="text-gray-600 text-sm">{testimonial.location}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md text-gray-800 hover:text-teal-500 focus:outline-none"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md text-gray-800 hover:text-teal-500 focus:outline-none"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className="flex justify-center mt-6 gap-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-teal-500" : "bg-gray-300"}`}
                            onClick={() => {
                                setAutoplay(false)
                                setCurrentIndex(index)
                            }}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
