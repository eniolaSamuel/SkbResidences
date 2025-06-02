import { Suspense } from "react"
import { notFound } from "next/navigation"
import ApartmentDetail from "@/components/ApartmentDetail"
import BookingForm from "@/components/BookingForm"
import Loading from "@/components/Loading"
import { getApartmentById } from "@/lib/apartments"

export async function generateMetadata({ params }: { params: { id: string } }) {
    try {
        const apartment = await getApartmentById(params.id)

        return {
            title: `${apartment.name} | SKB Residences`,
            description: apartment.description,
        }
    } catch {
        return {
            title: "Apartment Not Found | SKB Residences",
            description: "The apartment you're looking for could not be found.",
        }
    }
}

export default async function ApartmentPage({ params }: { params: { id: string } }) {
    try {
        const apartment = await getApartmentById(params.id)

        return (
            <div className="container mx-auto px-4 py-12">
                <Suspense fallback={<Loading />}>
                    <ApartmentDetail apartment={apartment} />
                    <BookingForm apartment={apartment} />
                </Suspense>
            </div>
        )
    } catch {
        notFound()
    }
}
