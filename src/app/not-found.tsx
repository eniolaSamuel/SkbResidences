import Link from "next/link"

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-6xl font-bold text-teal-500 mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8 max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link href="/" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md transition-colors">
                Return to Home
            </Link>
        </div>
    )
}
