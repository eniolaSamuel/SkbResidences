import { Search, Calendar, MessageCircle, Home } from 'lucide-react'

export default function BookingProcess() {
    const steps = [
        {
            icon: <Search size={32} className="text-teal-500" />,
            title: "Search",
            description: "Browse our selection of apartments and filter by location, type, and purpose.",
        },
        {
            icon: <Calendar size={32} className="text-teal-500" />,
            title: "Book",
            description: "Select your check-in and check-out dates, and complete the booking form with your details.",
        },
        {
            icon: <MessageCircle size={32} className="text-teal-500" />,
            title: "Confirm",
            description: "Contact us via WhatsApp or email with your booking details to confirm and arrange payment.",
        },
        {
            icon: <Home size={32} className="text-teal-500" />,
            title: "Enjoy",
            description: "Complete your payment and receive confirmation. Then enjoy your stay in our comfortable apartments.",
        },
    ]

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div className="bg-gray-100 p-6 rounded-full mb-4">{step.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-12 bg-teal-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-teal-800">Payment Information</h3>
                <p className="text-teal-700 mb-4">
                    We currently accept offline payments for your convenience and security. After submitting your booking request,
                    you'll receive the total cost and payment instructions via WhatsApp or email.
                </p>
                <p className="text-sm text-teal-600">
                    Accepted payment methods: Bank Transfer, Cash, Mobile Money
                </p>
            </div>
        </div>
    )
}
