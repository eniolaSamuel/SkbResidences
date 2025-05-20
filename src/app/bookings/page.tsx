import { Suspense } from "react"
import ApartmentFilters from "@/components/ApartmentFilters"
import ApartmentList from "@/components/ApartmentList"
import Loading from "@/components/Loading"

export const metadata = {
    title: "Apartments | SKB Residences",
    description: "Browse our selection of apartments in Lagos",
}

export default function BookingsPage({
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
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8">Find Your Perfect Apartment</h1>
            <ApartmentFilters />
            <Suspense fallback={<Loading />}>
                <ApartmentList searchParams={searchParams} />
            </Suspense>
        </div>
    )
}
