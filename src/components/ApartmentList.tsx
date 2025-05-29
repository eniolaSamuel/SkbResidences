import { getApartments } from "@/lib/apartments"
import ApartmentCard from "./ApartmentCard"

export default async function ApartmentList({
                                                searchParams,
                                            }: {
    searchParams?: {
        zone?: string
        type?: string
        purpose?: string
        location?: string
        minPrice?: string
        maxPrice?: string
    }
}) {
    const apartments = await getApartments(searchParams)

    if (apartments.length === 0) {
        return (
            <div className="text-center py-12">
                <h3 className="text-2xl font-semibold mb-4">No apartments found</h3>
                <p className="text-gray-600">Try adjusting your filters to find more options.</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apartments.map((apartment) => (
                <ApartmentCard key={apartment.id} apartment={apartment} />
            ))}
        </div>
    )
}
