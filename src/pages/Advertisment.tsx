import { useState } from 'react';
import { Navbar } from '@/components/NavBar.tsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Calendar, MapPin, ArrowRight, Bell } from 'lucide-react';

import adn1 from '@/assets/Adeniyi Jones, New/ADNOne.svg';
import adn2 from '@/assets/Adeniyi Jones, New/ADNTwo.svg';
import adn3 from '@/assets/Adeniyi Jones, New/ADNThree.svg';
import adn4 from '@/assets/Adeniyi Jones, New/ADNFour.svg';
import adn5 from '@/assets/Adeniyi Jones, New/ADNFive.svg';
import adn6 from '@/assets/Adeniyi Jones, New/ADNSix.svg';
import i1 from '@/assets/Ilupeju/IOne.svg';
import i2 from '@/assets/Ilupeju/ITwo.svg';
import i3 from '@/assets/Ilupeju/IThree.svg';

const Advertisements = () => {
    const [email, setEmail] = useState('');
    const { toast } = useToast();

    const newsItems = [
        {
            id: 1,
            title: 'New SKB Residences Building Available Soon in Ilupeju',
            description: 'We are excited to announce our latest development in Ilupeju! 6 numbers of Modern 3 bedroom apartments with premium finishes, 24/7 security, and excellent transport links for mixed use. Block of Residential or Commercial Space.',
            images: [
                i1,
                i2,
                i3
            ],
            location: 'Ilupeju, Lagos',
            date: '2025-08-27',
            isNew: true,
            details: 'Starting from ₦15M. Features include: Modern kitchen appliances, Air conditioning, Backup generator, Swimming pool, Gym facility, Children playground'
        },
        {
            id: 2,
            title: 'New Acquired Space @ Adeniyi Jones Avenue, Ikeja.',
            description: 'We are excited to announce our latest development in Ilupeju! Modern 2 and 3 bedroom apartments with premium finishes, 24/7 security, and excellent transport links. Early bird pricing available for the first 5 units.',
            images: [
                adn1,
                adn2,
                adn3,
                adn4,
                adn5,
                adn6
            ],
            location: 'Adeniyi Jones',
            date: '2025-08-27',
            isNew: false,
            details: 'Coming on Stream by November, 2025. Contact our sales team to learn more about payment options that work for your budget.'
        },

    ];

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            toast({
                title: "Error",
                description: "Please enter your email address",
                variant: "destructive"
            });
            return;
        }

        // Here you would integrate with your email service (e.g., Mailchimp, SendGrid, etc.)
        // For now, we'll just show a success message
        toast({
            title: "Successfully subscribed!",
            description: "You'll receive updates about new properties and announcements.",
        });
        setEmail('');
    };

    return (
        <div className="min-h-screen bg-background">
            {/* SEO Meta Tags */}
            <title>News & Updates - SKB Residences</title>
            <meta name="description" content="Stay updated with SKB Residences latest news, new properties, and company announcements. Get notified about new developments in Lagos." />

            <Navbar />

            <main className="pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                News & Announcements
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
                                Stay informed about our latest developments and company updates
                            </p>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="space-y-8">
                            {newsItems.map((news) => (
                                <Card key={news.id} className="group hover:shadow-lg transition-all duration-300">
                                    <div className="flex flex-col md:flex-row">
                                        <div className="md:w-1/3">
                                            <div className="relative rounded-t-lg md:rounded-l-lg md:rounded-t-none h-48 md:h-full">
                                                <Carousel className="w-full h-full">
                                                    <CarouselContent>
                                                        {news.images.map((image, index) => (
                                                            <CarouselItem key={index}>
                                                                <div className="relative overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-t-none h-48 md:h-full">
                                                                    <img
                                                                        src={image}
                                                                        alt={`${news.title} - Image ${index + 1}`}
                                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                                    />
                                                                </div>
                                                            </CarouselItem>
                                                        ))}
                                                    </CarouselContent>
                                                    {news.images.length > 1 && (
                                                        <>
                                                            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                                                            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
                                                        </>
                                                    )}
                                                </Carousel>
                                                {news.isNew && (
                                                    <div className="absolute top-4 left-4 z-10">
                                                        <Badge className="bg-green-100 text-green-800 animate-pulse">
                                                            NEW
                                                        </Badge>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="md:w-2/3 flex flex-col">
                                            <CardHeader>
                                                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                                                    {news.title}
                                                </CardTitle>
                                                <CardDescription className="text-muted-foreground text-base">
                                                    {news.description}
                                                </CardDescription>
                                            </CardHeader>

                                            <CardContent className="flex-1">
                                                <div className="space-y-4">
                                                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground">
                                                        <div className="flex items-center">
                                                            <Calendar className="w-4 h-4 mr-2" />
                                                            {new Date(news.date).toLocaleDateString()}
                                                        </div>
                                                        <div className="flex items-center">
                                                            <MapPin className="w-4 h-4 mr-2" />
                                                            {news.location}
                                                        </div>
                                                    </div>

                                                    <div className="text-muted-foreground">
                                                        {news.details}
                                                    </div>

                                                    <Button className="w-full sm:w-auto group mt-4">
                                                        Contact Us for More Info
                                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                                    </Button>
                                                </div>
                                            </CardContent>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        {/* Newsletter Signup */}
                        <div className="mt-16 bg-muted rounded-2xl p-8 text-center">
                            <div className="flex items-center justify-center mb-4">
                                <Bell className="w-6 h-6 mr-2 text-primary" />
                                <h3 className="text-2xl font-bold">Stay Updated</h3>
                            </div>
                            <p className="text-muted-foreground mb-6">
                                Subscribe to get notified about new properties, special offers, and company updates
                            </p>
                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <Input
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex-1"
                                />
                                <Button type="submit">Subscribe</Button>
                            </form>
                            <p className="text-xs text-muted-foreground mt-4">
                                Subscribers get priority access to new properties and exclusive deals
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Advertisements;