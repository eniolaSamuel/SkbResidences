import { useState } from 'react';
import { Calendar, User, Mail, Phone, MessageSquare, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar as CalendarComponent } from '@/components/ui/calender.tsx';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Apartment, BookingRequest } from '@/types/apartment';
import { useToast } from '@/hooks/use-toast';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    apartment: Apartment | null;
}

export const BookingModal = ({ isOpen, onClose, apartment }: BookingModalProps) => {
    const [checkIn, setCheckIn] = useState<Date>();
    const [checkOut, setCheckOut] = useState<Date>();
    const [guestName, setGuestName] = useState('');
    const [guestEmail, setGuestEmail] = useState('');
    const [guestPhone, setGuestPhone] = useState('');
    const [purpose, setPurpose] = useState<'shortlet' | 'longlet' | 'party'>('shortlet');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!apartment || !checkIn || !checkOut || !guestName || !guestEmail || !guestPhone) {
            toast({
                title: "Missing Information",
                description: "Please fill in all required fields.",
                variant: "destructive",
            });
            return;
        }

        setIsSubmitting(true);

        const bookingRequest: BookingRequest = {
            checkIn,
            checkOut,
            apartmentId: apartment.id,
            apartmentType: apartment.type,
            location: apartment.location,
            guestName,
            guestEmail,
            guestPhone,
            purpose,
            message,
        };

        // Create WhatsApp message
        const whatsappMessage = `
*New Booking Request - SKB Residences*

*Apartment:* ${apartment.name}
*Guest Name:* ${guestName}
*Email:* ${guestEmail}
*Phone:* ${guestPhone}
*Check-in:* ${format(checkIn, 'PPP')}
*Check-out:* ${format(checkOut, 'PPP')}
*Purpose:* ${purpose.charAt(0).toUpperCase() + purpose.slice(1)}
*Price:* ₦${apartment.price.toLocaleString()}/night

${message ? `*Additional Message:* ${message}` : ''}

Please confirm availability and next steps.
    `.trim();

        const whatsappUrl = `https://wa.me/2348000000000?text=${encodeURIComponent(whatsappMessage)}`;

        // Simulate API delay
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');

            toast({
                title: "Booking Request Sent!",
                description: "Your booking request has been sent via WhatsApp. We'll get back to you shortly.",
            });

            // Reset form
            setCheckIn(undefined);
            setCheckOut(undefined);
            setGuestName('');
            setGuestEmail('');
            setGuestPhone('');
            setPurpose('shortlet');
            setMessage('');
            setIsSubmitting(false);
            onClose();
        }, 1000);
    };

    if (!apartment) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        Book {apartment.name}
                    </DialogTitle>
                    <DialogDescription>
                        Fill in your details to make a reservation. We'll contact you via WhatsApp to confirm.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Apartment Summary */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-semibold text-lg">{apartment.name}</h3>
                                <p className="text-gray-600">{apartment.location}</p>
                                <p className="text-sm text-gray-500">{apartment.type} • {apartment.zone}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-bold text-primary">
                                    ₦{apartment.price.toLocaleString()}
                                </p>
                                <p className="text-sm text-gray-600">per night</p>
                            </div>
                        </div>
                    </div>

                    {/* Date Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="checkin">Check-in Date</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className={cn(
                                            "w-full justify-start text-left font-normal",
                                            !checkIn && "text-muted-foreground"
                                        )}
                                    >
                                        <Calendar className="mr-2 h-4 w-4" />
                                        {checkIn ? format(checkIn, "PPP") : "Select date"}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <CalendarComponent
                                        mode="single"
                                        selected={checkIn}
                                        onSelect={setCheckIn}
                                        disabled={(date) => date < new Date()}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="checkout">Check-out Date</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className={cn(
                                            "w-full justify-start text-left font-normal",
                                            !checkOut && "text-muted-foreground"
                                        )}
                                    >
                                        <Calendar className="mr-2 h-4 w-4" />
                                        {checkOut ? format(checkOut, "PPP") : "Select date"}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <CalendarComponent
                                        mode="single"
                                        selected={checkOut}
                                        onSelect={setCheckOut}
                                        disabled={(date) => date < (checkIn || new Date())}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>

                    {/* Guest Information */}
                    <div className="space-y-4">
                        <h3 className="font-semibold flex items-center gap-2">
                            <User className="w-4 h-4" />
                            Guest Information
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name *</Label>
                                <Input
                                    id="name"
                                    value={guestName}
                                    onChange={(e) => setGuestName(e.target.value)}
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number *</Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    value={guestPhone}
                                    onChange={(e) => setGuestPhone(e.target.value)}
                                    placeholder="+234 xxx xxx xxxx"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                                id="email"
                                type="email"
                                value={guestEmail}
                                onChange={(e) => setGuestEmail(e.target.value)}
                                placeholder="your.email@example.com"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="purpose">Booking Purpose</Label>
                            <Select value={purpose} onValueChange={(value: any) => setPurpose(value)}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {apartment.bookingPurpose.map((p) => (
                                        <SelectItem key={p} value={p}>
                                            {p.charAt(0).toUpperCase() + p.slice(1)}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message">Additional Message (Optional)</Label>
                            <Textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Any special requests or questions..."
                                rows={3}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex gap-3 pt-4">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={onClose}
                            className="flex-1"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                        >
                            {isSubmitting ? (
                                'Sending...'
                            ) : (
                                <>
                                    <MessageSquare className="w-4 h-4 mr-2" />
                                    Send via WhatsApp
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};