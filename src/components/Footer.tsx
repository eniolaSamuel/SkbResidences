import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <Link href="/" className="inline-block mb-4">
                            <Image
                                src="/images/logo.png"
                                alt="SKB Residences Logo"
                                width={120}
                                height={60}
                                className="h-12 w-auto brightness-0 invert"
                            />
                        </Link>
                        <p className="text-gray-400 mb-4">
                            Your trusted partner for premium apartment rentals in Lagos. Experience comfort and luxury at affordable
                            prices.
                        </p>
                        <div className="flex space-x-4">
                            {/* Facebook */}
                            <a
                                href="https://facebook.com/skbresidences"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                                aria-label="Facebook"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://instagram.com/skbresidences"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                                aria-label="Instagram"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/bookings" className="text-gray-400 hover:text-white transition-colors">
                                    Apartments
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Apartment Types</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/bookings?type=Mini%20Flat" className="text-gray-400 hover:text-white transition-colors">
                                    Mini Flat
                                </Link>
                            </li>
                            <li>
                                <Link href="/bookings?type=1%20Bedroom" className="text-gray-400 hover:text-white transition-colors">
                                    1 Bedroom
                                </Link>
                            </li>
                            <li>
                                <Link href="/bookings?type=2%20Bedroom" className="text-gray-400 hover:text-white transition-colors">
                                    2 Bedroom
                                </Link>
                            </li>
                            <li>
                                <Link href="/bookings?type=3%20Bedroom" className="text-gray-400 hover:text-white transition-colors">
                                    3 Bedroom
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/bookings?type=Executive%20Studio"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Executive Studio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/bookings?type=Standard%20Studio"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Standard Studio
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin size={20} className="text-teal-500 mr-2 mt-1" />
                                <span className="text-gray-400">123 Lagos Street, Victoria Island, Lagos, Nigeria</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={20} className="text-teal-500 mr-2" />
                                <span className="text-gray-400">+234 123 456 7890</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={20} className="text-teal-500 mr-2" />
                                <span className="text-gray-400">info@skbresidences.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} SKB Residences Limited. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
