
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const heroImages = [
    {
        url: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1920&h=1080&fit=crop',
        title: 'Premium Apartments in Lagos',
        subtitle: 'Experience luxury living in the heart of Lagos'
    },
    {
        url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1920&h=1080&fit=crop',
        title: 'Modern & Comfortable',
        subtitle: 'Fully furnished apartments with all amenities'
    },
    {
        url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1920&h=1080&fit=crop',
        title: 'Perfect Locations',
        subtitle: 'Choose from Mainland and Island locations'
    }
];

export const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    };

    return (
        <div className="relative h-screen overflow-hidden">
            {heroImages.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${image.url})` }}
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white px-4">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                                {image.title}
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 animate-fade-in">
                                {image.subtitle}
                            </p>
                            <Button
                                onClick={() => document.getElementById('bookings')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg animate-fade-in"
                            >
                                Explore Apartments
                            </Button>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentSlide ? 'bg-white' : 'bg-white/50'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};