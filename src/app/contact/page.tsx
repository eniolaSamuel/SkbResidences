import ContactForm from "@/components/ContactForm"
import ContactInfo from "@/components/ContactInfo"

export const metadata = {
    title: "Contact Us | SKB Residences",
    description: "Get in touch with us for any inquiries",
}

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ContactInfo />
                <ContactForm />
            </div>
        </div>
    )
}
