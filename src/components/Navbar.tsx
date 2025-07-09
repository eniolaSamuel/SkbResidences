"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, MessageCircle } from "lucide-react"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const closeMenu = () => setIsMenuOpen(false)

    return (
        <nav className="bg-white shadow-md border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center flex-shrink-0" onClick={closeMenu}>
                        <div className="text-2xl font-semibold text-[#B22222] tracking-wide">SKB Residences</div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center space-x-10">
                        <Link href="/" className="text-gray-700 hover:text-[#B22222] transition-colors text-sm font-medium">
                            Home
                        </Link>
                        <Link href="/bookings" className="text-gray-700 hover:text-[#B22222] transition-colors text-sm font-medium">
                            Apartments
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-[#B22222] transition-colors text-sm font-medium">
                            Contact
                        </Link>
                        <a
                            href="https://wa.me/1234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-[#B22222] text-white px-4 py-2 rounded-md hover:bg-[#a11c1c] transition-colors text-sm font-medium shadow"
                        >
                            <MessageCircle size={18} />
                            <span className="hidden xl:inline">Chat with Us</span>
                            <span className="xl:hidden">Chat</span>
                        </a>
                    </div>

                    {/* Mobile menu toggle */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-800 hover:text-[#B22222] focus:outline-none p-2"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                <div
                    className={`lg:hidden transition-all duration-300 ease-in-out ${
                        isMenuOpen ? "max-h-96 opacity-100 visible" : "max-h-0 opacity-0 invisible overflow-hidden"
                    }`}
                >
                    <div className="px-4 pt-2 pb-6 space-y-2 bg-white border-t border-gray-200">
                        <Link
                            href="/"
                            className="block px-3 py-2 text-gray-700 hover:text-[#B22222] hover:bg-gray-50 rounded-md transition-colors text-sm font-medium"
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                        <Link
                            href="/bookings"
                            className="block px-3 py-2 text-gray-700 hover:text-[#B22222] hover:bg-gray-50 rounded-md transition-colors text-sm font-medium"
                            onClick={closeMenu}
                        >
                            Apartments
                        </Link>
                        <Link
                            href="/contact"
                            className="block px-3 py-2 text-gray-700 hover:text-[#B22222] hover:bg-gray-50 rounded-md transition-colors text-sm font-medium"
                            onClick={closeMenu}
                        >
                            Contact
                        </Link>

                        <div className="pt-4">
                            <a
                                href="https://wa.me/1234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-[#B22222] text-white px-4 py-3 rounded-md hover:bg-[#a11c1c] transition-colors text-sm font-medium shadow-sm"
                                onClick={closeMenu}
                            >
                                <MessageCircle size={18} />
                                <span>Chat with Us</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
