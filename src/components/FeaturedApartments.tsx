"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import ApartmentCard from "./ApartmentCard"
import { getFeaturedApartments } from "@/lib/apartments"
import type { Apartment } from "@/lib/types"

export default function FeaturedApartments() {
    const [apartments, setApartments] = useState<Apartment[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const loadApartments = async () => {
            try {
                const data = await getFeaturedApartments()
                setApartments(data)
            } catch (error) {
                console.error("Error loading featured apartments:", error)
            } finally {
                setIsLoading(false)
            }
        }

        loadApartments()
    }, [])

    if (isLoading) {
        return (
            <div className="container mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold mb-8 text-center">Featured Apartments</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="bg-gray-100 rounded-lg p-4 h-80 animate-pulse"></div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Apartments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {apartments.map((apartment) => (
                    <ApartmentCard key={apartment.id} apartment={apartment} />
                ))}
            </div>
            <div className="text-center mt-12">
                <Link
                    href="/bookings"
                    className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md transition-colors"
                >
                    View All Apartments
                </Link>
            </div>
        </div>
    )
}
