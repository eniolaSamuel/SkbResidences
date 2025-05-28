import Hero from "@/components/Hero"
import FeaturedApartments from "@/components/FeaturedApartments"
import BookingProcess from "@/components/BookingProcess"
import Testimonials from "@/components/Testimonials"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  return (
      <div className="flex flex-col gap-16 pb-16">
        <Hero />
        <FeaturedApartments />
        <BookingProcess />
        <Testimonials />
        <ContactSection />
      </div>
  )
}
