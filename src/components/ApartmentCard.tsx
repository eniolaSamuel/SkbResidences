import { useState } from 'react';
import { Star, MapPin, Wifi, Car, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Apartment } from '@/types/apartment';

interface ApartmentCardProps {
    apartment: Apartment;
    onBookNow: (apartment: Apartment) => void;
}

export const ApartmentCard = ({ apartment, onBookNow }: ApartmentCardProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleImageHover = () => {
        if (apartment.images.length > 1) {
            setIsHovered(true);
            const interval = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % apartment.images.length);
            }, 1000);

            setTimeout(() => {
                clearInterval(interval);
                setIsHovered(false);
                setCurrentImageIndex(0);
            }, apartment.images.length * 1000);
        }
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN',
            minimumFractionDigits: 0,
        }).format(price);
    };

    return (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div
                className="relative h-48 overflow-hidden cursor-pointer"
                onMouseEnter={handleImageHover}
            >
                <img
                    src={apartment.images[currentImageIndex]}
                    alt={apartment.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded text-sm">
                    {apartment.zone}
                </div>
                <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {apartment.images.length} photos
                </div>
            </div>

            <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">
                        {apartment.name}
                    </h3>
                    <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm text-gray-600">4.8</span>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{apartment.location}</span>
                </div>

                <div className="text-sm text-gray-600 mb-3">
                    {apartment.type}
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                    {apartment.amenities.slice(0, 3).map((amenity, index) => (
                        <div key={index} className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {amenity === 'WiFi' && <Wifi className="w-3 h-3" />}
                            {amenity === 'Parking' && <Car className="w-3 h-3" />}
                            {amenity === 'Security' && <Shield className="w-3 h-3" />}
                            {amenity}
                        </div>
                    ))}
                    {apartment.amenities.length > 3 && (
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            +{apartment.amenities.length - 3} more
                        </span>
                    )}
                </div>

                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-2xl font-bold text-gray-900">
                            {formatPrice(apartment.price)}
                        </span>
                        <span className="text-gray-600 text-sm">
                           {apartment.bookingType.includes("annual") ? "/year" : "/night"}
                        </span>

                        {apartment.bookingType.includes("annual")  && apartment.serviceCharge && (
                            <div className="text-sm text-gray-500">
                                Service Charge: {formatPrice(apartment.serviceCharge)}
                            </div>
                        )}
                    </div>
                    <Button
                        onClick={() => onBookNow(apartment)}
                        className="bg-primary hover:bg-primary/90 text-white"
                    >
                        Book Now
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};
