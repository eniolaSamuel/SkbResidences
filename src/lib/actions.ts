"use server"

import { supabase } from './supabase'
import type { Booking, ContactMessage } from './types'

export async function createBooking(booking: Booking) {
    // Validate booking data
    if (!booking.apartmentId || !booking.checkIn || !booking.checkOut ||
        !booking.name || !booking.email || !booking.phone) {
        throw new Error('Missing required booking information')
    }

    // Insert booking into database
    const { data, error } = await supabase
        .from('bookings')
        .insert([booking])
        .select()

    if (error) {
        console.error('Error creating booking:', error)
        throw new Error('Failed to create booking')
    }

    // In a production app, you would send an email confirmation here

    return { success: true, bookingId: data[0].id }
}

export async function sendContactMessage(message: ContactMessage) {
    // Validate message data
    if (!message.name || !message.email || !message.subject || !message.message) {
        throw new Error('Missing required message information')
    }

    // Insert message into database
    const { data, error } = await supabase
        .from('contact_messages')
        .insert([message])
        .select()

    if (error) {
        console.error('Error sending message:', error)
        throw new Error('Failed to send message')
    }

    return { success: true, messageId: data[0].id }
}