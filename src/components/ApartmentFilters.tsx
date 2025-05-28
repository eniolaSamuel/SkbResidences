"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Filter, MapPin, Home, Calendar, CreditCard } from "lucide-react"

const zones = ["All", "Mainland", "Island"]
const apartmentTypes = [
    "All Types",
    "Mini Flat",
    "1 Bedroom",
    "2 Bedroom",
    "3 Bedroom",
    "Executive Studio",
    "Standard Studio",
]
const bookingPurposes = ["All Purposes", "Shortlet", "Longlet", "Party"]
const locations = [
    "All Locations",
    "Adeniyi Jones Avenue, Ikeja",
    "Alausa, Ikeja",
    "Dideolu Estate, Ogba, Ikeja",
    "Rev. Ogunbiyi, GRA, Ikeja",
    "Ladoke Akintola, GRA, Ikeja",
    "Shonibare Estate, Ikeja",
    "George Crescent, Wempco, Ogba, Ikeja",
    "Keffi Street, Ikoyi",
]

export default function ApartmentFilters() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [isFiltersOpen, setIsFiltersOpen] = useState(false)
    const [zone, setZone] = useState(searchParams.get("zone") || "All")
    const [type, setType] = useState(searchParams.get("type") || "All Types")
    const [purpose, setPurpose] = useState(searchParams.get("purpose") || "All Purposes")
    const [location, setLocation] = useState(searchParams.get("location") || "All Locations")
    const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "0")
    const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "150000")
    const [priceRange, setPriceRange] = useState(searchParams.get("maxPrice") || "150000")

    // Update maxPrice when priceRange slider changes
    useEffect(() => {
        setMaxPrice(priceRange)
    }, [priceRange])

    const applyFilters = () => {
        const params = new URLSearchParams()

        if (zone !== "All") params.set("zone", zone)
        if (type !== "All Types") params.set("type", type)
        if (purpose !== "All Purposes") params.set("purpose", purpose)
        if (location !== "All Locations") params.set("location", location)
        if (minPrice !== "0") params.set("minPrice", minPrice)
        if (maxPrice !== "150000") params.set("maxPrice", maxPrice)

        router.push(`/bookings?${params.toString()}`)
    }

    const resetFilters = () => {
        setZone("All")
        setType("All Types")
        setPurpose("All Purposes")
        setLocation("All Locations")
        setMinPrice("0")
        setMaxPrice("150000")
        setPriceRange("150000")
        router.push("/bookings")
    }

    // Format price to Naira
    const formatPrice = (price: string) => {
        return `₦${Number.parseInt(price).toLocaleString()}`
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Filters</h2>
                <button
                    onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                    className="md:hidden flex items-center gap-2 text-gray-600"
                >
                    <Filter size={18} />
                    <span>{isFiltersOpen ? "Hide Filters" : "Show Filters"}</span>
                </button>
            </div>

            <div className={`${isFiltersOpen ? "block" : "hidden"} md:block`}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Zone Filter */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                            <MapPin size={16} />
                            Zone
                        </label>
                        <select
                            value={zone}
                            onChange={(e) => setZone(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        >
                            {zones.map((z) => (
                                <option key={z} value={z}>
                                    {z}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Apartment Type Filter */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                            <Home size={16} />
                            Apartment Type
                        </label>
                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        >
                            {apartmentTypes.map((t) => (
                                <option key={t} value={t}>
                                    {t}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Booking Purpose Filter */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                            <Calendar size={16} />
                            Booking Purpose
                        </label>
                        <select
                            value={purpose}
                            onChange={(e) => setPurpose(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        >
                            {bookingPurposes.map((p) => (
                                <option key={p} value={p}>
                                    {p}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Location Filter */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                            <MapPin size={16} />
                            Location
                        </label>
                        <select
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        >
                            {locations.map((l) => (
                                <option key={l} value={l}>
                                    {l}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Price Range Filter */}
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                        <CreditCard size={16} />
                        Price Range: {formatPrice(minPrice)} - {formatPrice(priceRange)}
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="150000"
                        step="5000"
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>₦0</span>
                        <span>₦50,000</span>
                        <span>₦100,000</span>
                        <span>₦150,000</span>
                    </div>
                </div>

                <div className="flex justify-end gap-4 mt-4">
                    <button
                        onClick={resetFilters}
                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        Reset
                    </button>
                    <button
                        onClick={applyFilters}
                        className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors"
                    >
                        Apply Filters
                    </button>
                </div>
            </div>
        </div>
    )
}
