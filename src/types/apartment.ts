
export interface Apartment {
    id: string;
    name: string;
    type: 'Mini Flat' | 'Standard Studio' | 'Executive Studio' | '1 Bedroom' | 'Executive 1 Bedroom' | '2 Bedroom' | 'Executive 2 Bedroom' | '3 Bedroom';
    location: string;
    zone: 'Mainland' | 'Island';
    price: number;
    images: string[];
    description: string;
    amenities: string[];
    serviceCharge: string;
    bookingType: ('shortlet' | 'annual')[];
    bookingPurpose: ('vacation' | 'event' | 'business')[];
}

export interface BookingRequest {
    checkIn: Date;
    checkOut: Date;
    apartmentId: string;
    apartmentType: string;
    location: string;
    guestName: string;
    guestEmail: string;
    guestPhone: string;
    bookingType: 'shortlet' | 'annual';
    purpose: 'vacation' | 'event' | 'business';
    message?: string;
}

export interface FilterOptions {
    zone: 'all' | 'Mainland' | 'Island';
    apartmentType: 'all' | Apartment['type'];
    bookingType: 'all' | 'shortlet' | 'annual';
    purpose: 'all' | 'vacation' | 'event' | 'business';
    location: 'all' | string;
    priceRange: [number, number];
}