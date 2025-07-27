import { Apartment } from '@/types/apartment';
import jmfOne from '@/assets/jones-mf-img1.svg';
import jmfTwo from '@/assets/jones-mf-img2.svg';
import jmfThree from '@/assets/jones-mf-img3.svg';
import jmfFour from '@/assets/jones-mf-img4.svg';
import jmfFive from '@/assets/jones-mf-img5.svg';
import jobfOne from '@/assets/jones-obf-img1.svg';
import jobfTwo from '@/assets/jones-obf-img2.svg';
import jobfThree from '@/assets/jones-obf-img3.svg';
import jobfFour from '@/assets/jones-obf-img4.svg';
import jobfFive from '@/assets/jones-obf-img5.svg';
import jobfSix from '@/assets/jones-obf-img6.svg';
import jobfSeven from '@/assets/jones-obf-img7.svg';
import jssOne from '@/assets/jones-ssOne.svg';
import jssTwo from '@/assets/jones-ssThree.svg';
import jssThree from '@/assets/jones-ssTwo.svg';

export const apartments: Apartment[] = [
    {
        id: '1',
        name: 'Mini Flat @ Adeniyi Jones Avenue',
        type: 'Mini Flat',
        location: 'Adeniyi Jones Avenue, Ikeja',
        zone: 'Mainland',
        price: 50000,
        images: [
            jmfOne,
            jmfTwo,
            jmfThree,
            jmfFour,
            jmfFive
        ],
        description: 'Cozy mini flat in the heart of Ikeja, perfect for young professionals.',
        amenities: ['WiFi', 'Air Conditioning', 'Kitchen', 'Parking'],
        bookingPurpose: ['shortlet', 'longlet']
    },
    {
        id: '2',
        name: 'Executive 1 Bedroom Flat @ Adeniyi Jones Avenue',
        type: 'Executive 1 Bedroom',
        location: 'Adeniyi Jones Avenue, Ikeja',
        zone: 'Mainland',
        price: 50000,
        images: [
            jobfOne,
            jobfTwo,
            jobfThree,
            jobfFour,
            jobfFive,
            jobfSix,
            jobfSeven
        ],
        description: 'Luxury executive apartment with premium finishes and modern amenities.',
        amenities: ['WiFi', 'Air Conditioning', 'Kitchen', 'Parking', 'Security', 'Generator'],
        bookingPurpose: ['shortlet', 'longlet', 'party']
    },
    {
        id: '3',
        name: 'Standard Studio @ Alausa',
        type: 'Standard Studio',
        location: 'Alausa, Ikeja',
        zone: 'Mainland',
        price: 35000,
        images: [
            jssOne,
            jssTwo,
            jssThree
        ],
        description: 'Affordable studio apartment in Alausa business district.',
        amenities: ['WiFi', 'Air Conditioning', 'Kitchenette'],
        bookingPurpose: ['shortlet', 'longlet']
    },
    {
        id: '4',
        name: '3 Bedroom Flat @ Dideolu Estate',
        type: '3 Bedroom',
        location: 'Dideolu Estate, Ogba, Ikeja',
        zone: 'Mainland',
        price: 120000,
        images: [
            'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop'
        ],
        description: 'Spacious 3-bedroom apartment perfect for families.',
        amenities: ['WiFi', 'Air Conditioning', 'Kitchen', 'Parking', 'Security', 'Generator', 'Swimming Pool'],
        bookingPurpose: ['shortlet', 'longlet', 'party']
    },
    {
        id: '5',
        name: '2 Bedroom Flat @ Rev. Ogunbiyi, GRA',
        type: '2 Bedroom',
        location: 'Rev. Ogunbiyi, GRA, Ikeja',
        zone: 'Mainland',
        price: 120000,
        images: [
            'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop'
        ],
        description: 'Premium 2-bedroom apartment in prestigious GRA location.',
        amenities: ['WiFi', 'Air Conditioning', 'Kitchen', 'Parking', 'Security', 'Generator'],
        bookingPurpose: ['shortlet', 'longlet', 'party']
    },
    {
        id: '6',
        name: '2 Bedroom Flat @ Ladoke Akintola, GRA',
        type: '2 Bedroom',
        location: 'Ladoke Akintola, GRA, Ikeja',
        zone: 'Mainland',
        price: 120000,
        images: [
            'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop'
        ],
        description: 'Elegant 2-bedroom flat in the heart of GRA.',
        amenities: ['WiFi', 'Air Conditioning', 'Kitchen', 'Parking', 'Security'],
        bookingPurpose: ['shortlet', 'longlet']
    },
    {
        id: '7',
        name: 'Executive 2 Bedroom @ Ladoke Akintola, GRA',
        type: 'Executive 2 Bedroom',
        location: 'Ladoke Akintola, GRA, Ikeja',
        zone: 'Mainland',
        price: 135000,
        images: [
            'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop'
        ],
        description: 'Executive 2-bedroom apartment with premium amenities.',
        amenities: ['WiFi', 'Air Conditioning', 'Kitchen', 'Parking', 'Security', 'Generator', 'Gym'],
        bookingPurpose: ['shortlet', 'longlet', 'party']
    },
    {
        id: '8',
        name: '2 Bedroom @ Shonibare Estate',
        type: '2 Bedroom',
        location: 'Shonibare Estate, Ikeja',
        zone: 'Mainland',
        price: 105000,
        images: [
            'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop'
        ],
        description: 'Modern 2-bedroom apartment in serene estate environment.',
        amenities: ['WiFi', 'Air Conditioning', 'Kitchen', 'Parking', 'Security'],
        bookingPurpose: ['shortlet', 'longlet']
    },
    {
        id: '9',
        name: '2 Bedroom @ George Crescent, Wempco',
        type: '2 Bedroom',
        location: 'George Crescent, Wempco, Ogba, Ikeja',
        zone: 'Mainland',
        price: 80000,
        images: [
            'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop'
        ],
        description: 'Affordable 2-bedroom flat in peaceful Ogba neighborhood.',
        amenities: ['WiFi', 'Air Conditioning', 'Kitchen', 'Parking'],
        bookingPurpose: ['shortlet', 'longlet']
    },
    {
        id: '10',
        name: 'Executive Studio @ Adeniyi Jones',
        type: 'Executive Studio',
        location: 'Adeniyi Jones, Ikeja',
        zone: 'Mainland',
        price: 35000,
        images: [
            'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop'
        ],
        description: 'Luxurious studio apartment with executive finishes.',
        amenities: ['WiFi', 'Air Conditioning', 'Kitchenette', 'Parking', 'Security'],
        bookingPurpose: ['shortlet', 'longlet', 'party']
    },
    {
        id: '11',
        name: 'Standard Studio @ Adeniyi Jones',
        type: 'Standard Studio',
        location: 'Adeniyi Jones, Ikeja',
        zone: 'Mainland',
        price: 25000,
        images: [
            'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop'
        ],
        description: 'Comfortable studio apartment at an affordable price.',
        amenities: ['WiFi', 'Air Conditioning', 'Kitchenette'],
        bookingPurpose: ['shortlet', 'longlet']
    },
    {
        id: '12',
        name: 'Executive 1 Bedroom @ Rev. Ogunbiyi, GRA',
        type: 'Executive 1 Bedroom',
        location: 'Rev. Ogunbiyi, GRA, Ikeja',
        zone: 'Mainland',
        price: 75000,
        images: [
            'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop'
        ],
        description: 'Executive 1-bedroom apartment in prestigious GRA.',
        amenities: ['WiFi', 'Air Conditioning', 'Kitchen', 'Parking', 'Security', 'Generator'],
        bookingPurpose: ['shortlet', 'longlet', 'party']
    },
    {
        id: '13',
        name: 'Mini Flat @ Rev. Ogunbiyi, GRA',
        type: 'Mini Flat',
        location: 'Rev. Ogunbiyi, GRA, Ikeja',
        zone: 'Mainland',
        price: 65000,
        images: [
            'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop'
        ],
        description: 'Cozy mini flat in the prestigious GRA neighborhood.',
        amenities: ['WiFi', 'Air Conditioning', 'Kitchen', 'Parking', 'Security'],
        bookingPurpose: ['shortlet', 'longlet']
    },
    {
        id: '14',
        name: 'Executive 1 Bedroom @ Keffi Street, Ikoyi',
        type: 'Executive 1 Bedroom',
        location: 'Keffi Street, Ikoyi',
        zone: 'Island',
        price: 125000,
        images: [
            'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop'
        ],
        description: 'Premium executive apartment in the heart of Ikoyi.',
        amenities: ['WiFi', 'Air Conditioning', 'Kitchen', 'Parking', 'Security', 'Generator', 'Swimming Pool', 'Gym'],
        bookingPurpose: ['shortlet', 'longlet', 'party']
    }
];

export const locations = [
    'Adeniyi Jones Avenue, Ikeja',
    'Alausa, Ikeja',
    'Dideolu Estate, Ogba, Ikeja',
    'Rev. Ogunbiyi, GRA, Ikeja',
    'Ladoke Akintola, GRA, Ikeja',
    'Shonibare Estate, Ikeja',
    'George Crescent, Wempco, Ogba, Ikeja',
    'Adeniyi Jones, Ikeja',
    'Keffi Street, Ikoyi'
];
