"use client"

import type React from "react"

import { useState } from "react"
import { sendContactMessage } from "@/lib/actions"

export default function ContactForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [feedback, setFeedback] = useState("")
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setFeedback("")

        try {
            const result = await sendContactMessage({ name, email, subject, message })

            if (result.success) {
                setIsSuccess(true)
                setFeedback("Your message has been sent successfully. We will get back to you soon!")

                // Reset form
                setName("")
                setEmail("")
                setSubject("")
                setMessage("")
            } else {
                throw new Error("Failed to send message")
            }
        } catch {
            setIsSuccess(false)
            setFeedback("Failed to send message. Please try again later.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

            {feedback && (
                <div className={`p-4 mb-6 rounded-md ${isSuccess ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {feedback}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={5}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-md font-medium transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
            </form>
        </div>
    )
}
