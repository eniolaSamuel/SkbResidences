"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, MessageCircle } from "lucide-react"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image src="/images/logo.png" alt="SKB Residences Logo" width={120} height={60} className="h-12 w-auto" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-800 hover:text-teal-500 transition-colors">
                            Home
                        </Link>
                        <Link href="/bookings" className="text-gray-800 hover:text-teal-500 transition-colors">
                            Apartments
                        </Link>
                        <Link href="/contact" className="text-gray-800 hover:text-teal-500 transition-colors">
                            Contact
                        </Link>
                        <a
                            href="https://wa.me/1234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors"
                        >
                            <MessageCircle size={18} />
                            <span>Chat with Us</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-800 hover:text-teal-500 focus:outline-none">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 pb-6 border-t border-gray-200">
                        <div className="flex flex-col space-y-4">
                            <Link
                                href="/"
                                className="text-gray-800 hover:text-teal-500 transition-colors px-4 py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/bookings"
                                className="text-gray-800 hover:text-teal-500 transition-colors px-4 py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Apartments
                            </Link>
                            <Link
                                href="/contact"
                                className="text-gray-800 hover:text-teal-500 transition-colors px-4 py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <a
                                href="https://wa.me/1234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors mx-4"
                            >
                                <MessageCircle size={18} />
                                <span>Chat with Us</span>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
