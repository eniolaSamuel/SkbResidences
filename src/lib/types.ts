export interface Apartment {
    id: string
    name: string
    description: string
    location: string
    zone: "Mainland" | "Island"
    type: "Mini Flat" | "1 Bedroom" | "2 Bedroom" | "3 Bedroom" | "Executive Studio" | "Standard Studio"
    purpose: "Shortlet" | "Longlet" | "Party"
    price: number
    cleaningFee: number
    serviceFee: number
    capacity: number
    images: string[]
    amenities: string[]
    rules: string[]
    featured?: boolean
}

export interface Booking {
    id?: string
    apartmentId: string
    checkIn: string
    checkOut: string
    guests: number
    name: string
    email: string
    phone: string
    totalPrice: number
    nights: number
    status?: string
    created_at?: string
}

export interface ContactMessage {
    id?: string
    name: string
    email: string
    subject: string
    message: string
    created_at?: string
}

export interface BookingDetails extends Booking {
    apartmentName: string
    bookingId: string
}
