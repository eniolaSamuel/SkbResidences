import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Label } from '@/components/ui/label.tsx';
import { Textarea } from '@/components/ui/textarea.tsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !message) {
            toast({
                title: "Missing Information",
                description: "Please fill in all required fields.",
                variant: "destructive",
            });
            return;
        }

        setIsSubmitting(true);

        // Create WhatsApp message for contact enquiry
        const whatsappMessage = `
*Contact Enquiry - SKB Residences*

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone || 'Not provided'}

*Message:*
${message}
    `.trim();

        const whatsappUrl = `https://wa.me/2348000000000?text=${encodeURIComponent(whatsappMessage)}`;

        // Simulate sending delay
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');

            toast({
                title: "Message Sent!",
                description: "Your enquiry has been sent via WhatsApp. We'll get back to you shortly.",
            });

            // Reset form
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
            setIsSubmitting(false);
        }, 1000);
    };

    const handleWhatsAppChat = () => {
        window.open('https://wa.me/2348000000000?text=Hello, I would like to enquire about SKB Residences apartments', '_blank');
    };

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Have questions about our apartments? We're here to help you find the perfect place to call home.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">Phone</p>
                                        <p className="text-gray-600">+234 800 000 0000</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">Email</p>
                                        <p className="text-gray-600">info@skbresidences.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">Location</p>
                                        <p className="text-gray-600">Lagos, Nigeria</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Chat Button */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <MessageCircle className="w-5 h-5 text-green-600" />
                                    Quick Chat
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-4">
                                    Get instant responses to your questions via WhatsApp
                                </p>
                                <Button
                                    onClick={handleWhatsAppChat}
                                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                                >
                                    <MessageCircle className="w-4 h-4 mr-2" />
                                    Start WhatsApp Chat
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Send us a Message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="contact-name">Full Name *</Label>
                                        <Input
                                            id="contact-name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Enter your full name"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="contact-phone">Phone Number</Label>
                                        <Input
                                            id="contact-phone"
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="+234 xxx xxx xxxx"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="contact-email">Email Address *</Label>
                                    <Input
                                        id="contact-email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="contact-message">Message *</Label>
                                    <Textarea
                                        id="contact-message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Tell us about your enquiry..."
                                        rows={5}
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary hover:bg-primary/90"
                                >
                                    {isSubmitting ? (
                                        'Sending...'
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4 mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};