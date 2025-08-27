import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LOGO from 'public/logo.svg';



export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleWhatsAppChat = () => {
        window.open('https://wa.me/2348025019606?text=Hello, I would like to chat about SKB Residences LTD apartments', '_blank');
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    <div className="flex items-center">
                        <div className="w-15 h-15  rounded-lg flex items-center justify-center">
                            <img
                                src="/logo.svg"
                                alt="SKB Residences Logo"
                                className="w-10 h-10 object-contain"
                            />
                        </div>
                        <span className="ml-3 text-xl font-bold text-primary">SKB Residences</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <button
                                onClick={() => scrollToSection('home')}
                                className="text-gray-900 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection('bookings')}
                                className="text-gray-900 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Bookings
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="text-gray-900 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Contact
                            </button>
                            <a
                                href="/advertisements"
                                className="text-gray-900 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                News & Projects
                            </a>
                            <Button
                                onClick={handleWhatsAppChat}
                                className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
                            >
                                <MessageCircle className="w-4 h-4"/>
                                Chat
                            </Button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="text-gray-900 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection('bookings')}
                            className="text-gray-900 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                        >
                            Bookings
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-gray-900 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                        >
                            Contact
                        </button>
                        <a
                            href="/advertisements"
                            className="text-gray-900 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                        >
                            News & Projects
                        </a>
                        <Button
                            onClick={handleWhatsAppChat}
                            className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 w-full mt-4"
                        >
                            <MessageCircle className="w-4 h-4"/>
                            Chat on WhatsApp
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};
