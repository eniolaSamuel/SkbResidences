import { Apartment } from '@/types/apartment';
import jmfOne from '@/assets/Adniyi Jones Mini Flat/jones-mf-img1.svg';
import jmfTwo from '@/assets/Adniyi Jones Mini Flat/jones-mf-img2.svg';
import jmfThree from '@/assets/Adniyi Jones Mini Flat/jones-mf-img3.svg';
import jmfFour from '@/assets/Adniyi Jones Mini Flat/jones-mf-img4.svg';
import jmfFive from '@/assets/Adniyi Jones Mini Flat/jones-mf-img5.svg';
import jobfOne from '@/assets/Adeniyi Jones 1 Bed Flat/jones-obf-img1.svg';
import jobfTwo from '@/assets/Adeniyi Jones 1 Bed Flat/jones-obf-img2.svg';
import jobfThree from '@/assets/Adeniyi Jones 1 Bed Flat/jones-obf-img3.svg';
import jobfFour from '@/assets/Adeniyi Jones 1 Bed Flat/jones-obf-img4.svg';
import jobfFive from '@/assets/Adeniyi Jones 1 Bed Flat/jones-obf-img5.svg';
import jobfSix from '@/assets/Adeniyi Jones 1 Bed Flat/jones-obf-img6.svg';
import jobfSeven from '@/assets/Adeniyi Jones 1 Bed Flat/jones-obf-img7.svg';
import jssOne from '@/assets/Adeniyi Jones Standard Studio/jones-ssOne.svg';
import jssTwo from '@/assets/Adeniyi Jones Standard Studio/jones-ssThree.svg';
import jssThree from '@/assets/Adeniyi Jones Standard Studio/jones-ssTwo.svg';
import ddcOne from '@/assets/DideoluCourtTwoBed/ddcImg1.svg';
import ddcTwo from '@/assets/DideoluCourtTwoBed/ddcImg2.svg';
import ddcThree from '@/assets/DideoluCourtTwoBed/ddcImg3.svg';
import ddcFour from '@/assets/DideoluCourtTwoBed/ddcImg4.svg';
import ddcFive from '@/assets/DideoluCourtTwoBed/ddcImg5.svg';
import ddcSix from '@/assets/DideoluCourtTwoBed/ddcImg6.svg';
import ddcSeven from '@/assets/DideoluCourtTwoBed/ddcImg7.svg';
import ddcEight from '@/assets/DideoluCourtTwoBed/ddcImg8.svg';
import roOne from '@/assets/Rev Ogunbiyi Two Bed/roImg1.svg';
import roTwo from '@/assets/Rev Ogunbiyi Two Bed/roImg2.svg';
import roThree from '@/assets/Rev Ogunbiyi Two Bed/roImg3.svg';
import roFour from '@/assets/Rev Ogunbiyi Two Bed/roImg4.svg';
import roFive from '@/assets/Rev Ogunbiyi Two Bed/roImg5.svg';
import roSix from '@/assets/Rev Ogunbiyi Two Bed/roImg6.svg';
import roSeven from '@/assets/Rev Ogunbiyi Two Bed/roImg7.svg';
import roEight from '@/assets/Rev Ogunbiyi Two Bed/roImg8.svg';
import laOne from '@/assets/Ladoke Akintola Two Bed/la1.svg';
import laTwo from '@/assets/Ladoke Akintola Two Bed/la2.svg';
import laThree from '@/assets/Ladoke Akintola Two Bed/la3.svg';
import laFour from '@/assets/Ladoke Akintola Two Bed/la4.svg';
import laFive from '@/assets/Ladoke Akintola Two Bed/la5.svg';
import laSix from '@/assets/Ladoke Akintola Two Bed/la6.svg';
import laxe1 from '@/assets/Ladoke Akintola Executive Two Bed/laxe1.svg';
import laxe2 from '@/assets/Ladoke Akintola Executive Two Bed/laxe2.svg';
import laxe3 from '@/assets/Ladoke Akintola Executive Two Bed/laxe3.svg';
import laxe4 from '@/assets/Ladoke Akintola Executive Two Bed/laxe4.svg';
import laxe5 from '@/assets/Ladoke Akintola Executive Two Bed/laxe5.svg';
import laxe6 from '@/assets/Ladoke Akintola Executive Two Bed/laxe6.svg';
import laxe7 from '@/assets/Ladoke Akintola Executive Two Bed/laxe7.svg';
import laxe8 from '@/assets/Ladoke Akintola Executive Two Bed/laxe8.svg';
import laxe9 from '@/assets/Ladoke Akintola Executive Two Bed/laxe9.svg';



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
        bookingType: ['shortlet'],
        bookingPurpose: ['vacation', 'event', 'business']
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
        bookingType: ['shortlet'],
        bookingPurpose: ['vacation', 'event', 'business']
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
        bookingType: ['shortlet'],
        bookingPurpose: ['vacation', 'event', 'business']
    },
    {
        id: '4',
        name: '3 Bedroom Flat @ Dideolu Estate',
        type: '3 Bedroom',
        location: 'Dideolu Estate, Ogba, Ikeja',
        zone: 'Mainland',
        price: 120000,
        images: [
            ddcOne,
            ddcTwo,
            ddcThree,
            ddcFour,
            ddcFive,
            ddcSix,
            ddcSeven,
            ddcEight
        ],
        description: 'Spacious 3-bedroom apartment perfect for families.',
        amenities: ['WiFi', 'Air Conditioning', 'Kitchen', 'Parking', 'Security', 'Generator', 'Swimming Pool'],
        bookingType: ['annual'],
        bookingPurpose: ['vacation', 'event', 'business']
    },
    {
        id: '5',
        name: '2 Bedroom Flat @ Rev. Ogunbiyi, GRA',
        type: '2 Bedroom',
        location: 'Rev. Ogunbiyi, GRA, Ikeja',
        zone: 'Mainland',
        price: 125000,
        images: [
            roOne,
            roTwo,
            roThree,
            roFour,
            roFive,
            roSix,
            roSeven,
            roEight
        ],
        description: 'Premium 2-bedroom apartment in prestigious GRA location.',
        amenities: ['WiFi', 'Air Conditioning', 'Kitchen', 'Parking', 'Security', 'Generator'],
        bookingType: ['shortlet'],
        bookingPurpose: ['vacation', 'event', 'business']
    },
    {
        id: '6',
        name: '2 Bedroom Flat @ Ladoke Akintola, GRA',
        type: '2 Bedroom',
        location: 'Ladoke Akintola, GRA, Ikeja',
        zone: 'Mainland',
        price: 125000,
        images: [
            laOne,
            laTwo,
            laThree,
            laFour,
            laFive,
            laSix
        ],
        description: 'Elegant 2-bedroom flat in the heart of GRA.',
        amenities: ['WiFi', 'Air Conditioning', 'Kitchen', 'Parking', 'Security'],
        bookingType: ['shortlet'],
        bookingPurpose: ['vacation', 'event', 'business']
    },
    {
        id: '7',
        name: 'Executive 2 Bedroom @ Ladoke Akintola, GRA',
        type: 'Executive 2 Bedroom',
        location: 'Ladoke Akintola, GRA, Ikeja',
        zone: 'Mainland',
        price: 135000,
        images: [
            laxe1,
            laxe2,
            laxe3,
            laxe4,
            laxe5,
            laxe6,
            laxe7,
            laxe8,
            laxe9
        ],
        description: 'Executive 2-bedroom apartment with premium amenities.',
        amenities: ['WiFi', 'Air Conditioning', 'Kitchen', 'Parking', 'Security', 'Generator', 'Gym'],
        bookingType: ['shortlet'],
        bookingPurpose: ['vacation', 'event', 'business']
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
        bookingType: ['shortlet'],
        bookingPurpose: ['vacation', 'event', 'business']
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
        bookingType: ['shortlet'],
        bookingPurpose: ['vacation', 'event', 'business']
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
        bookingType: ['shortlet'],
        bookingPurpose: ['vacation', 'event', 'business']
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
        bookingType: ['shortlet'],
        bookingPurpose: ['vacation', 'event', 'business']
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
        bookingType: ['shortlet'],
        bookingPurpose: ['vacation', 'event', 'business']
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
        bookingType: ['shortlet'],
        bookingPurpose: ['vacation', 'event', 'business']
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
        bookingType: ['shortlet'],
        bookingPurpose: ['vacation', 'event', 'business']
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
