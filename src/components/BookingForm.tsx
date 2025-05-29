"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Users, MessageCircle, Mail } from "lucide-react"
import type { Apartment, BookingDetails } from "@/lib/types"
import { createBooking } from "@/lib/actions"

export default function BookingForm({ apartment }: { apartment: Apartment }) {
    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")
    const [guests, setGuests] = useState(1)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [message, setMessage] = useState("")
    const [isSuccess, setIsSuccess] = useState(false)
    const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setMessage("")

        try {
            // Calculate total nights
            const startDate = new Date(checkIn)
            const endDate = new Date(checkOut)
            const nights = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))

            if (nights <= 0) {
                throw new Error("Check-out date must be after check-in date")
            }

            const totalPrice = apartment.price * nights + apartment.cleaningFee + apartment.serviceFee

            const booking = {
                apartmentId: apartment.id,
                checkIn,
                checkOut,
                guests,
                name,
                email,
                phone,
                totalPrice,
                nights,
            }

            const result = await createBooking(booking)

            if (result.success) {
                setIsSuccess(true)
                setBookingDetails({
                    ...booking,
                    apartmentName: apartment.name,
                    bookingId: result.bookingId,
                })
                setMessage("Booking request submitted successfully!")
            } else {
                throw new Error("Failed to submit booking")
            }
        } catch (error) {
            setIsSuccess(false)
            setMessage(`Error: ${error instanceof Error ? error.message : "Failed to submit booking"}`)
        } finally {
            setIsSubmitting(false)
        }
    }

    // Calculate minimum check-out date (day after check-in)
    const minCheckOutDate = checkIn ? new Date(new Date(checkIn).getTime() + 86400000).toISOString().split("T")[0] : ""

    // Format price to Naira
    const formatPrice = (price: number) => {
        return `₦${price.toLocaleString()}`
    }

    // Generate WhatsApp message
    const generateWhatsAppMessage = () => {
        if (!bookingDetails) return ""

        const message = `Hello! I would like to confirm my apartment booking:

*Booking Details:*
- Booking ID: ${bookingDetails.bookingId}
- Apartment: ${bookingDetails.apartmentName}
- Check-in: ${bookingDetails.checkIn}
- Check-out: ${bookingDetails.checkOut}
- Guests: ${bookingDetails.guests}
- Nights: ${bookingDetails.nights}

*Guest Information:*
- Name: ${bookingDetails.name}
- Email: ${bookingDetails.email}
- Phone: ${bookingDetails.phone}

*Total Amount: ${formatPrice(bookingDetails.totalPrice)}*

Please confirm this booking and provide payment instructions.

Thank you!`

        return encodeURIComponent(message)
    }

    // Generate email subject and body
    const generateEmailContent = () => {
        if (!bookingDetails) return { subject: "", body: "" }

        const subject = `Booking Confirmation Request - ${bookingDetails.bookingId}`
        const body = `Hello,

I would like to confirm my apartment booking with the following details:

Booking ID: ${bookingDetails.bookingId}
Apartment: ${bookingDetails.apartmentName}
Check-in Date: ${bookingDetails.checkIn}
Check-out Date: ${bookingDetails.checkOut}
Number of Guests: ${bookingDetails.guests}
Total Nights: ${bookingDetails.nights}

Guest Information:
Name: ${bookingDetails.name}
Email: ${bookingDetails.email}
Phone: ${bookingDetails.phone}

Total Amount: ${formatPrice(bookingDetails.totalPrice)}

Please confirm this booking and provide payment instructions.

Thank you for your assistance.

Best regards,
${bookingDetails.name}`

        return {
            subject: encodeURIComponent(subject),
            body: encodeURIComponent(body),
        }
    }

    if (isSuccess && bookingDetails) {
        return (
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-green-600 mb-2">Booking Request Submitted!</h2>
                    <p className="text-gray-600">
                        Your booking request has been received. Please contact us to confirm and complete your booking.
                    </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h3 className="font-semibold mb-3">Booking Summary</h3>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span>Booking ID:</span>
                            <span className="font-medium">{bookingDetails.bookingId}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Apartment:</span>
                            <span className="font-medium">{bookingDetails.apartmentName}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Check-in:</span>
                            <span className="font-medium">{bookingDetails.checkIn}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Check-out:</span>
                            <span className="font-medium">{bookingDetails.checkOut}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Guests:</span>
                            <span className="font-medium">{bookingDetails.guests}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Nights:</span>
                            <span className="font-medium">{bookingDetails.nights}</span>
                        </div>
                        <div className="border-t pt-2 mt-2">
                            <div className="flex justify-between font-semibold text-lg">
                                <span>Total Amount:</span>
                                <span className="text-teal-600">{formatPrice(bookingDetails.totalPrice)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="font-semibold text-center">Contact us to confirm your booking:</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a
                            href={`https://wa.me/1234567890?text=${generateWhatsAppMessage()}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors"
                        >
                            <MessageCircle size={20} />
                            <span>Confirm via WhatsApp</span>
                        </a>

                        <a
                            href={`mailto:info@skbresidences.com?subject=${generateEmailContent().subject}&body=${generateEmailContent().body}`}
                            className="flex items-center justify-center gap-2 bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition-colors"
                        >
                            <Mail size={20} />
                            <span>Confirm via Email</span>
                        </a>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                        <p className="text-blue-800 text-sm">
                            <strong>Payment Methods:</strong> Bank Transfer, Cash, or Mobile Money. Payment instructions will be
                            provided after confirmation.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Book This Apartment</h2>

            {message && !isSuccess && <div className="p-4 mb-6 rounded-md bg-red-100 text-red-700">{message}</div>}

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                            <Calendar size={16} />
                            Check-in Date
                        </label>
                        <input
                            type="date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            min={new Date().toISOString().split("T")[0]}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                            <Calendar size={16} />
                            Check-out Date
                        </label>
                        <input
                            type="date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            min={minCheckOutDate}
                            disabled={!checkIn}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                        <Users size={16} />
                        Number of Guests
                    </label>
                    <input
                        type="number"
                        value={guests}
                        onChange={(e) => setGuests(Number.parseInt(e.target.value))}
                        min={1}
                        max={apartment.capacity}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">Maximum capacity: {apartment.capacity} guests</p>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">Personal Information</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                            />
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-md font-medium transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Processing..." : "Submit Booking Request"}
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                    By clicking "Submit Booking Request", you agree to our terms and conditions. Payment will be arranged after
                    confirmation via WhatsApp or email.
                </p>
            </form>
        </div>
    )
}
