"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, MapPin, Home, Calendar, Users } from "lucide-react"
import type { Apartment } from "@/lib/types"

export default function ApartmentDetail({ apartment }: { apartment: Apartment }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev === apartment.images.length - 1 ? 0 : prev + 1))
    }

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? apartment.images.length - 1 : prev - 1))
    }

    // Format price to Naira
    const formatPrice = (price: number) => {
        return `₦${price.toLocaleString()}`
    }

    return (
        <div className="mb-12">
            <h1 className="text-3xl font-bold mb-4">{apartment.name}</h1>

            <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                    <MapPin size={18} className="mr-1" />
                    <span>{apartment.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                    <Home size={18} className="mr-1" />
                    <span>{apartment.type}</span>
                </div>
                <div className="flex items-center text-gray-600">
                    <Users size={18} className="mr-1" />
                    <span>Max {apartment.capacity} guests</span>
                </div>
                <div className="flex items-center text-gray-600">
                    <Calendar size={18} className="mr-1" />
                    <span>{apartment.purpose}</span>
                </div>
            </div>

            {/* Image carousel */}
            <div className="relative h-[300px] md:h-[500px] mb-8 rounded-lg overflow-hidden">
                <Image
                    src={apartment.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${apartment.name} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                />

                {apartment.images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                            aria-label="Next image"
                        >
                            <ChevronRight size={24} />
                        </button>

                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                            {apartment.images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full ${
                                        index === currentImageIndex ? "bg-white" : "bg-white bg-opacity-50"
                                    }`}
                                    onClick={() => setCurrentImageIndex(index)}
                                    aria-label={`Go to image ${index + 1}`}
                                />
                            ))}
                        </div>
                    </>
                )}

                <div className="absolute top-4 right-4 bg-teal-500 text-white px-4 py-2 rounded-md font-bold">
                    {formatPrice(apartment.price)}/night
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-semibold mb-4">About this apartment</h2>
                    <p className="text-gray-700 mb-6">{apartment.description}</p>

                    <h3 className="text-xl font-semibold mb-3">Amenities</h3>
                    <ul className="grid grid-cols-2 gap-2 mb-6">
                        {apartment.amenities.map((amenity) => (
                            <li key={amenity} className="flex items-center text-gray-700">
                                <span className="mr-2">✓</span>
                                {amenity}
                            </li>
                        ))}
                    </ul>

                    <h3 className="text-xl font-semibold mb-3">House Rules</h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        {apartment.rules.map((rule) => (
                            <li key={rule}>{rule}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm sticky top-24">
                        <h3 className="text-xl font-semibold mb-4">Price Details</h3>
                        <div className="flex justify-between mb-2">
                            <span>Price per night</span>
                            <span className="font-semibold">{formatPrice(apartment.price)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Cleaning fee</span>
                            <span className="font-semibold">{formatPrice(apartment.cleaningFee)}</span>
                        </div>
                        <div className="flex justify-between mb-4">
                            <span>Service fee</span>
                            <span className="font-semibold">{formatPrice(apartment.serviceFee)}</span>
                        </div>
                        <div className="border-t border-gray-200 pt-4 mb-4">
                            <div className="flex justify-between font-bold">
                                <span>Total</span>
                                <span>{formatPrice(apartment.price + apartment.cleaningFee + apartment.serviceFee)}</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">*Price shown is for one night</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
