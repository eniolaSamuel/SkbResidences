"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-4xl font-bold text-red-500 mb-4">Something went wrong!</h1>
            <p className="text-gray-600 mb-8 max-w-md">
                We apologize for the inconvenience. Please try again or contact support if the problem persists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <button
                    onClick={reset}
                    className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md transition-colors"
                >
                    Try again
                </button>
                <Link href="/" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-md transition-colors">
                    Return to Home
                </Link>
            </div>
        </div>
    )
}
