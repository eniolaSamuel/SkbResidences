import { supabase } from "./supabase"
import type { Apartment } from "./types"

export async function getApartments(filters?: {
    zone?: string
    type?: string
    purpose?: string
    location?: string
    minPrice?: string
    maxPrice?: string
}) {
    let query = supabase.from("apartments").select("*")

    if (filters) {
        if (filters.zone && filters.zone !== "All") {
            query = query.eq("zone", filters.zone)
        }

        if (filters.type && filters.type !== "All Types") {
            query = query.eq("type", filters.type)
        }

        if (filters.purpose && filters.purpose !== "All Purposes") {
            query = query.eq("purpose", filters.purpose)
        }

        if (filters.location && filters.location !== "All Locations") {
            query = query.eq("location", filters.location)
        }

        if (filters.minPrice && filters.maxPrice) {
            const min = Number.parseInt(filters.minPrice)
            const max = Number.parseInt(filters.maxPrice)
            query = query.gte("price", min).lte("price", max)
        }
    }

    const { data, error } = await query

    if (error) {
        console.error("Error fetching apartments:", error)
        throw new Error("Failed to fetch apartments")
    }

    return data as Apartment[]
}

export async function getFeaturedApartments() {
    const { data, error } = await supabase.from("apartments").select("*").eq("featured", true).limit(3)

    if (error) {
        console.error("Error fetching featured apartments:", error)
        throw new Error("Failed to fetch featured apartments")
    }

    return data as Apartment[]
}

export async function getApartmentById(id: string): Promise<Apartment> {
    const { data, error } = await supabase.from("apartments").select("*").eq("id", id).single()

    if (error) {
        console.error("Error fetching apartment:", error)
        throw new Error("Apartment not found")
    }

    if (!data) {
        throw new Error("Apartment not found")
    }

    return data as Apartment
}
