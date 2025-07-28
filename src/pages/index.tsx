
import { useState, useMemo } from 'react';
import { Navbar } from '@/components/NavBar';
import { HeroCarousel } from '@/components/HeroCarousel';
import { ApartmentCard } from '@/components/ApartmentCard';
import { FilterPanel } from '@/components/FilterPanel';
import { BookingModal } from '@/components/BookingModal';
import { ContactSection } from '@/components/ContactSection';
import { apartments } from '@/data/apartments';
import { Apartment, FilterOptions } from '@/types/apartment';

const Index = () => {
    const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
    const [filters, setFilters] = useState<FilterOptions>({
        zone: 'all',
        apartmentType: 'all',
        bookingType: 'all',
        purpose: 'all',
        location: 'all',
        priceRange: [0, 200000]
    });

    const filteredApartments = useMemo(() => {
        return apartments.filter((apartment) => {
            // Zone filter
            if (filters.zone !== 'all' && apartment.zone !== filters.zone) {
                return false;
            }

            // Apartment type filter
            if (filters.apartmentType !== 'all' && apartment.type !== filters.apartmentType) {
                return false;
            }

            // Location filter
            if (filters.location !== 'all' && apartment.location !== filters.location) {
                return false;
            }

            // BookingType filter
            if (filters.bookingType !== 'all' && !apartment.bookingType.includes(filters.bookingType)) {
                return false;
            }

            // Purpose filter
            if (filters.purpose !== 'all' && !apartment.bookingPurpose.includes(filters.purpose)) {
                return false;
            }

            // Price range filter
            if (apartment.price < filters.priceRange[0] || apartment.price > filters.priceRange[1]) {
                return false;
            }

            return true;
        });
    }, [filters]);

    const handleBookNow = (apartment: Apartment) => {
        setSelectedApartment(apartment);
        setIsBookingModalOpen(true);
    };

    const handleCloseBookingModal = () => {
        setIsBookingModalOpen(false);
        setSelectedApartment(null);
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section id="home">
                <HeroCarousel />
            </section>

            {/* Bookings Section */}
            <section id="bookings" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Premium Apartments
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover luxury living spaces across Lagos. From cozy studios to spacious family apartments.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Filter Panel */}
                        <div className="lg:w-1/4">
                            <FilterPanel
                                filters={filters}
                                onFiltersChange={setFilters}
                                isOpen={isFilterPanelOpen}
                                onToggle={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
                            />
                        </div>

                        {/* Apartments Grid */}
                        <div className="lg:w-3/4">
                            <div className="mb-6 flex justify-between items-center">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {filteredApartments.length} apartment{filteredApartments.length !== 1 ? 's' : ''} found
                                </h3>
                            </div>

                            {filteredApartments.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {filteredApartments.map((apartment) => (
                                        <ApartmentCard
                                            key={apartment.id}
                                            apartment={apartment}
                                            onBookNow={handleBookNow}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-16">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        No apartments found
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        Try adjusting your filters to find more options.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <ContactSection />

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-3">
                                <span className="text-primary font-bold text-lg">SKB</span>
                            </div>
                            <span className="text-2xl font-bold">SKB Residences</span>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-md mx-auto">
                            Premium apartment rentals across Lagos. Your comfort is our priority.
                        </p>
                        <div className="flex justify-center space-x-6 text-gray-400">
                            <span>&copy; 2024 SKB Residences. All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Booking Modal */}
            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={handleCloseBookingModal}
                apartment={selectedApartment}
            />
        </div>
    );
};

export default Index;
