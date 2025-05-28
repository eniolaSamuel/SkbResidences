"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, MapPin, Home } from "lucide-react"
import type { Apartment } from "@/lib/types"

export default function ApartmentCard({ apartment }: { apartment: Apartment }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setCurrentImageIndex((prev) => (prev === apartment.images.length - 1 ? 0 : prev + 1))
    }

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setCurrentImageIndex((prev) => (prev === 0 ? apartment.images.length - 1 : prev - 1))
    }

    // Format price to Naira
    const formatPrice = (price: number) => {
        return `₦${price.toLocaleString()}`
    }

    return (
        <Link href={`/bookings/${apartment.id}`}>
            <div
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative h-56">
                    <Image
                        src={apartment.images[currentImageIndex] || "/placeholder.svg"}
                        alt={apartment.name}
                        fill
                        className="object-cover"
                    />

                    {/* Image carousel controls - only show on hover */}
                    {isHovered && apartment.images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full"
                                aria-label="Previous image"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full"
                                aria-label="Next image"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                        <span className="text-white font-bold text-lg">{formatPrice(apartment.price)}/night</span>
                    </div>
                </div>

                <div className="p-4">
                    <h3 className="font-bold text-xl mb-2">{apartment.name}</h3>

                    <div className="flex items-center text-gray-600 mb-2">
                        <MapPin size={16} className="mr-1" />
                        <span className="text-sm">{apartment.location}</span>
                    </div>

                    <div className="flex items-center text-gray-600 mb-3">
                        <Home size={16} className="mr-1" />
                        <span className="text-sm">{apartment.type}</span>
                    </div>

                    <p className="text-gray-700 line-clamp-2">{apartment.description}</p>
                </div>
            </div>
        </Link>
    )
}
