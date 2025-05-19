import type { Apartment } from "./types"

// Sample data based on the provided apartment list
const apartmentsData: Apartment[] = [
    {
        id: "1",
        name: "Mini Flat @ Adeniyi Jones Avenue",
        description:
            "Comfortable mini flat in a prime location at Adeniyi Jones Avenue, Ikeja. Perfect for individuals or couples looking for a cozy living space.",
        location: "Adeniyi Jones Avenue, Ikeja",
        zone: "Mainland",
        type: "Mini Flat",
        purpose: "Shortlet",
        price: 45000,
        cleaningFee: 5000,
        serviceFee: 2000,
        capacity: 2,
        images: [
            "/placeholder.svg?height=600&width=800",
            "/placeholder.svg?height=600&width=800",
            "/placeholder.svg?height=600&width=800",
        ],
        amenities: ["Free Wi-Fi", "Air Conditioning", "Kitchenette", "TV", "24/7 Security", "Water Supply"],
        rules: ["No smoking", "No pets", "No parties or events", "Check-in time is 2PM - 8PM", "Check out by 11AM"],
    },
    {
        id: "2",
        name: "Executive 1 Bedroom Flat @ Adeniyi Jones Avenue",
        description:
            "Luxurious executive 1 bedroom flat located in the heart of Adeniyi Jones Avenue, Ikeja. Features modern amenities and stylish furnishings.",
        location: "Adeniyi Jones Avenue, Ikeja",
        zone: "Mainland",
        type: "1 Bedroom",
        purpose: "Shortlet",
        price: 50000,
        cleaningFee: 5000,
        serviceFee: 2500,
        capacity: 2,
        images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
        amenities: [
            "Free Wi-Fi",
            "Air Conditioning",
            "Fully Equipped Kitchen",
            "Smart TV",
            "24/7 Security",
            "Water Supply",
            "Backup Power",
        ],
        rules: ["No smoking", "No pets", "No parties or events", "Check-in time is 2PM - 8PM", "Check out by 11AM"],
    },
    {
        id: "3",
        name: "Standard Studio @ Alausa",
        description:
            "Cozy standard studio apartment in Alausa, Ikeja. Ideal for short stays and business travelers looking for convenience and comfort.",
        location: "Alausa, Ikeja",
        zone: "Mainland",
        type: "Standard Studio",
        purpose: "Shortlet",
        price: 30000,
        cleaningFee: 3000,
        serviceFee: 1500,
        capacity: 1,
        images: [
            "/placeholder.svg?height=600&width=800",
            "/placeholder.svg?height=600&width=800",
            "/placeholder.svg?height=600&width=800",
        ],
        amenities: ["Free Wi-Fi", "Air Conditioning", "Kitchenette", "TV", "24/7 Security"],
        rules: ["No smoking", "No pets", "No parties or events", "Check-in time is 2PM - 8PM", "Check out by 11AM"],
    },
    {
        id: "4",
        name: "3 Bedroom Flat @ Dideolu Estate, Ogba",
        description:
            "Spacious 3 bedroom flat in the serene Dideolu Estate, Ogba, Ikeja. Perfect for families or groups looking for a comfortable stay.",
        location: "Dideolu Estate, Ogba, Ikeja",
        zone: "Mainland",
        type: "3 Bedroom",
        purpose: "Shortlet",
        price: 120000,
        cleaningFee: 10000,
        serviceFee: 6000,
        capacity: 6,
        images: [
            "/placeholder.svg?height=600&width=800",
            "/placeholder.svg?height=600&width=800",
            "/placeholder.svg?height=600&width=800",
        ],
        amenities: [
            "Free Wi-Fi",
            "Air Conditioning",
            "Fully Equipped Kitchen",
            "Smart TV",
            "Washing Machine",
            "24/7 Security",
            "Backup Power",
            "Water Supply",
        ],
        rules: [
            "No smoking",
            "No pets",
            "No parties or events without prior approval",
            "Check-in time is 2PM - 8PM",
            "Check out by 11AM",
        ],
    },
    {
        id: "5",
        name: "2 Bedroom Flat @ Rev. Ogunbiyi, GRA",
        description:
            "Elegant 2 bedroom flat in the prestigious GRA area of Ikeja. Features high-quality furnishings and a serene environment.",
        location: "Rev. Ogunbiyi, GRA, Ikeja",
        zone: "Mainland",
        type: "2 Bedroom",
        purpose: "Shortlet",
        price: 120000,
        cleaningFee: 10000,
        serviceFee: 6000,
        capacity: 4,
        images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
        amenities: [
            "Free Wi-Fi",
            "Air Conditioning",
            "Fully Equipped Kitchen",
            "Smart TV",
            "Washing Machine",
            "24/7 Security",
            "Backup Power",
            "Water Supply",
        ],
        rules: ["No smoking", "No pets", "No parties or events", "Check-in time is 2PM - 8PM", "Check out by 11AM"],
    },
    {
        id: "6",
        name: "2 Bedroom Flat @ Ladoke Akintola, GRA",
        description:
            "Beautiful 2 bedroom flat in the exclusive Ladoke Akintola area of GRA, Ikeja. Offers comfort and luxury in a secure environment.",
        location: "Ladoke Akintola, GRA, Ikeja",
        zone: "Mainland",
        type: "2 Bedroom",
        purpose: "Shortlet",
        price: 120000,
        cleaningFee: 10000,
        serviceFee: 6000,
        capacity: 4,
        images: [
            "/placeholder.svg?height=600&width=800",
            "/placeholder.svg?height=600&width=800",
            "/placeholder.svg?height=600&width=800",
        ],
        amenities: [
            "Free Wi-Fi",
            "Air Conditioning",
            "Fully Equipped Kitchen",
            "Smart TV",
            "Washing Machine",
            "24/7 Security",
            "Backup Power",
            "Water Supply",
        ],
        rules: ["No smoking", "No pets", "No parties or events", "Check-in time is 2PM - 8PM", "Check out by 11AM"],
    },
    {
        id: "7",
        name: "Executive 2 Bedroom Apartment @ Ladoke Akintola, GRA",
        description:
            "Premium executive 2 bedroom apartment in Ladoke Akintola, GRA, Ikeja. Features upscale amenities and elegant design.",
        location: "Ladoke Akintola, GRA, Ikeja",
        zone: "Mainland",
        type: "2 Bedroom",
        purpose: "Shortlet",
        price: 135000,
        cleaningFee: 12000,
        serviceFee: 7000,
        capacity: 4,
        images: [
            "/placeholder.svg?height=600&width=800",
            "/placeholder.svg?height=600&width=800",
            "/placeholder.svg?height=600&width=800",
        ],
        amenities: [
            "Free Wi-Fi",
            "Air Conditioning",
            "Fully Equipped Kitchen",
            "Smart TV",
            "Washing Machine",
            "24/7 Security",
            "Backup Power",
            "Water Supply",
            "Swimming Pool",
            "Gym",
        ],
        rules: [
            "No smoking",
            "No pets",
            "No parties or events without prior approval",
            "Check-in time is 2PM - 8PM",
            "Check out by 11AM",
        ],
    },
    {
        id: "8",
        name: "2 Bedroom Apartment @ Shonibare Estate",
        description:
            "Comfortable 2 bedroom apartment in the well-maintained Shonibare Estate, Ikeja. Offers a peaceful living environment with good amenities.",
        location: "Shonibare Estate, Ikeja",
        zone: "Mainland",
        type: "2 Bedroom",
        purpose: "Shortlet",
        price: 105000,
        cleaningFee: 8000,
        serviceFee: 5000,
        capacity: 4,
        images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
        amenities: [
            "Free Wi-Fi",
            "Air Conditioning",
            "Fully Equipped Kitchen",
            "Smart TV",
            "24/7 Security",
            "Backup Power",
            "Water Supply",
        ],
        rules: ["No smoking", "No pets", "No parties or events", "Check-in time is 2PM - 8PM", "Check out by 11AM"],
    },
    {
        id: "9",
        name: "2 Bedroom Flat @ George Crescent, Wempco, Ogba",
        description:
            "Spacious 2 bedroom flat at George Crescent, Wempco, Ogba, Ikeja. Offers comfort and convenience in a residential neighborhood.",
        location: "George Crescent, Wempco, Ogba, Ikeja",
        zone: "Mainland",
        type: "2 Bedroom",
        purpose: "Shortlet",
        price: 80000,
        cleaningFee: 7000,
        serviceFee: 4000,
        capacity: 4,
        images: [
            "/placeholder.svg?height=600&width=800",
            "/placeholder.svg?height=600&width=800",
            "/placeholder.svg?height=600&width=800",
        ],
        amenities: ["Free Wi-Fi", "Air Conditioning", "Fully Equipped Kitchen", "TV", "24/7 Security", "Water Supply"],
        rules: ["No smoking", "No pets", "No parties or events", "Check-in time is 2PM - 8PM", "Check out by 11AM"],
    },
    {
        id: "10",
        name: "Executive Studio @ Adeniyi Jones",
        description:
            "Stylish executive studio apartment at Adeniyi Jones, Ikeja. Perfect for business travelers and individuals seeking quality accommodation.",
        location: "Adeniyi Jones Avenue, Ikeja",
        zone: "Mainland",
        type: "Executive Studio",
        purpose: "Shortlet",
        price: 35000,
        cleaningFee: 4000,
        serviceFee: 2000,
        capacity: 2,
        images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
        amenities: ["Free Wi-Fi", "Air Conditioning", "Kitchenette", "Smart TV", "24/7 Security", "Backup Power"],
        rules: ["No smoking", "No pets", "No parties or events", "Check-in time is 2PM - 8PM", "Check out by 11AM"],
    },
    {
        id: "11",
        name: "Standard Studio @ Adeniyi Jones",
        description:
            "Cozy standard studio apartment at Adeniyi Jones, Ikeja. Offers essential amenities for a comfortable stay at an affordable price.",
        location: "Adeniyi Jones Avenue, Ikeja",
        zone: "Mainland",
        type: "Standard Studio",
        purpose: "Shortlet",
        price: 25000,
        cleaningFee: 3000,
        serviceFee: 1500,
        capacity: 1,
        images: [
            "/placeholder.svg?height=600&width=800",
            "/placeholder.svg?height=600&width=800",
            "/placeholder.svg?height=600&width=800",
        ],
        amenities: ["Free Wi-Fi", "Air Conditioning", "Kitchenette", "TV", "24/7 Security"],
        rules: ["No smoking", "No pets", "No parties or events", "Check-in time is 2PM - 8PM", "Check out by 11AM"],
    },
    {
        id: "12",
        name: "Executive 1 Bedroom Flat @ Rev. Ogunbiyi, GRA",
        description:
            "Luxurious executive 1 bedroom flat in the upscale Rev. Ogunbiyi area of GRA, Ikeja. Features premium amenities and elegant design.",
        location: "Rev. Ogunbiyi, GRA, Ikeja",
        zone: "Mainland",
        type: "1 Bedroom",
        purpose: "Shortlet",
        price: 75000,
        cleaningFee: 7000,
        serviceFee: 4000,
        capacity: 2,
        images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
        amenities: [
            "Free Wi-Fi",
            "Air Conditioning",
            "Fully Equipped Kitchen",
            "Smart TV",
            "24/7 Security",
            "Backup Power",
            "Water Supply",
        ],
        rules: ["No smoking", "No pets", "No parties or events", "Check-in time is 2PM - 8PM", "Check out by 11AM"],
    },
    {
        id: "13",
        name: "Mini Flat @ Rev. Ogunbiyi, GRA",
        description:
            "Elegant mini flat in the prestigious Rev. Ogunbiyi area of GRA, Ikeja. Offers comfort and style in a secure environment.",
        location: "Rev. Ogunbiyi, GRA, Ikeja",
        zone: "Mainland",
        type: "Mini Flat",
        purpose: "Shortlet",
        price: 65000,
        cleaningFee: 6000,
        serviceFee: 3000,
        capacity: 2,
        images: [
            "/placeholder.svg?height=600&width=800",
            "/placeholder.svg?height=600&width=800",
            "/placeholder.svg?height=600&width=800",
        ],
        amenities: [
            "Free Wi-Fi",
            "Air Conditioning",
            "Kitchenette",
            "Smart TV",
            "24/7 Security",
            "Backup Power",
            "Water Supply",
        ],
        rules: ["No smoking", "No pets", "No parties or events", "Check-in time is 2PM - 8PM", "Check out by 11AM"],
    },
    {
        id: "14",
        name: "Executive 1 Bedroom Flat @ Keffi Street, Ikoyi",
        description:
            "Premium executive 1 bedroom flat in the exclusive Keffi Street area of Ikoyi. Features luxury amenities and sophisticated design.",
        location: "Keffi Street, Ikoyi",
        zone: "Island",
        type: "1 Bedroom",
        purpose: "Shortlet",
        price: 125000,
        cleaningFee: 12000,
        serviceFee: 8000,
        capacity: 2,
        images: [
            "/placeholder.svg?height=600&width=800",
            "/placeholder.svg?height=600&width=800",
            "/placeholder.svg?height=600&width=800",
        ],
        amenities: [
            "Free Wi-Fi",
            "Air Conditioning",
            "Fully Equipped Kitchen",
            "Smart TV",
            "Washing Machine",
            "24/7 Security",
            "Backup Power",
            "Water Supply",
            "Swimming Pool",
            "Gym",
        ],
        rules: [
            "No smoking",
            "No pets",
            "No parties or events without prior approval",
            "Check-in time is 2PM - 8PM",
            "Check out by 11AM",
        ],
    },
]

// Function to get all apartments with optional filtering
export async function getApartments(filters?: {
    zone?: string
    type?: string
    purpose?: string
    location?: string
    minPrice?: string
    maxPrice?: string
}) {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    let filteredApartments = [...apartmentsData]

    if (filters) {
        if (filters.zone && filters.zone !== "All") {
            filteredApartments = filteredApartments.filter((apt) => apt.zone === filters.zone)
        }

        if (filters.type && filters.type !== "All Types") {
            filteredApartments = filteredApartments.filter((apt) => apt.type === filters.type)
        }

        if (filters.purpose && filters.purpose !== "All Purposes") {
            filteredApartments = filteredApartments.filter((apt) => apt.purpose === filters.purpose)
        }

        if (filters.location && filters.location !== "All Locations") {
            filteredApartments = filteredApartments.filter((apt) => apt.location === filters.location)
        }

        if (filters.minPrice && filters.maxPrice) {
            const min = Number.parseInt(filters.minPrice)
            const max = Number.parseInt(filters.maxPrice)
            filteredApartments = filteredApartments.filter((apt) => apt.price >= min && apt.price <= max)
        }
    }

    return filteredApartments
}

// Function to get featured apartments
export async function getFeaturedApartments() {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Return a subset of apartments as featured
    return [apartmentsData[6], apartmentsData[13], apartmentsData[4]].filter(Boolean)
}

// Function to get a single apartment by ID
export async function getApartmentById(id: string) {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    return apartmentsData.find((apt) => apt.id === id) || null
}
