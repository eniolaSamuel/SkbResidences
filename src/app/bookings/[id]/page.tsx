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
    } catch (error) {
        return {
            title: "Apartment Not Found",
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
    } catch (error) {
        notFound()
    }
}
