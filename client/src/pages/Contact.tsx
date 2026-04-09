import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Calendar, Clock, Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";

export default function Contact() {
  const { register, handleSubmit, reset, getValues } = useForm();
  const { toast } = useToast();
  const [openScheduler, setOpenScheduler] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [appointmentData, setAppointmentData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Generate time slots with 30-minute intervals (10:30 AM to 6 PM)
  const generateTimeSlots = () => {
    const slots = [];
    // Start from 10:30 AM
    slots.push("10:30 AM");
    // Continue with 11:00 AM onwards
    for (let hour = 11; hour < 18; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const ampm = hour >= 12 ? "PM" : "AM";
        const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
        const timeString = `${displayHour}:${minute === 0 ? "00" : "30"} ${ampm}`;
        slots.push(timeString);
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const handleScheduleClick = () => {
    const formData = getValues();
    
    if (!formData.name || !formData.email ) {
      toast({
        title: "Error",
        description: "Please fill in all required fields first.",
        variant: "destructive",
      });
      return;
    }

    setAppointmentData({
      name: formData.name || "",
      email: formData.email || "",
      phone: formData.phone || ""
    });
    setOpenScheduler(true);
  };

  const confirmAppointment = async () => {
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Error",
        description: "Please select both date and time.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    const formattedDate = selectedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const appointmentMessage = `Appointment Request:

Name: ${appointmentData.name}
Email: ${appointmentData.email}
Phone: ${appointmentData.phone || 'Not provided'}

Preferred Date: ${formattedDate}
Preferred Time: ${selectedTime}`;

    try {
      const response = await fetch('https://archistechnology-contact-form.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: appointmentData.name,
          email: appointmentData.email,
          phone: appointmentData.phone || '',
        }),
      });

      if (response.ok) {
        toast({
          title: "Appointment Scheduled!",
          description: `Your appointment is confirmed for ${formattedDate} at ${selectedTime}. We'll send you a confirmation email shortly.`,
        });

        setOpenScheduler(false);
        setSelectedDate(undefined);
        setSelectedTime("");
        reset();
      } else {
        throw new Error('Failed to schedule appointment');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to schedule appointment. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <div className="min-h-screen bg-slate-50">
      <div className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">Let's Connect</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you're looking for talent, mentorship, or just want to say hi, we're here to listen.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto auto-rows-fr">
          {/* Contact Info */}
          <Card className="border-none shadow-lg">
            <CardContent className="p-8 space-y-8 h-full">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Visit Us</h4>
                      <p className="text-muted-foreground">A-1113, Siddhi Vinayak towers,<br />Near Kataria Arcade, Sarkhej,<br />Ahmedabad</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Email Us</h4>
                      <p className="text-muted-foreground">info@archistechnology.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Call Us</h4>
                      <p className="text-muted-foreground">+91 9722641969</p>
                      <p className="text-muted-foreground">Mon - Fri, 9am - 6pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border">
            <h3 className="text-2xl font-bold mb-6">Schedule an Appointment</h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="Raj Sharma" {...register("name", { required: true })} className="text-sm" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="raj.sharma@gmail.com" {...register("email", { required: true })} className="text-sm" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+91 9313483832" {...register("phone")} className="text-sm" />
              </div>

             
              <Button 
                type="button"
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90"
                onClick={handleScheduleClick}
              >
                <Calendar size={18} className="mr-2" />
                Schedule Appointment
              </Button>
            </div>
          </div>
        </div>

        {/* Map - Full Width Below */}
        <div className="mt-12 max-w-6xl mx-auto">
          <div className="relative p-1 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="rounded-2xl overflow-hidden bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8373934239116!2d72.49445798885496!3d22.993006199999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b4dcb551825%3A0xd2ca8b0aa98f5d41!2sQalbIT%20Infotech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1770290681702!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0, display: "block" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Scheduler Dialog */}
      <Dialog open={openScheduler} onOpenChange={setOpenScheduler}>
        <DialogContent className="max-w-5xl w-[95vw] h-[95vh] max-h-[95vh] p-0 overflow-hidden flex flex-col">
          <DialogHeader className="sticky top-0 bg-gradient-to-r from-primary/10 to-transparent z-10 px-6 py-4 border-b">
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <Calendar className="text-primary" size={24} />
              Schedule Your Appointment
            </DialogTitle>
            <DialogDescription className="mt-2">
              Select a date and time that works best for you. We're available from 10:30 AM to 6 PM with 30-minute time slots.
            </DialogDescription>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Calendar Section */}
              <div className="flex flex-col items-center justify-start">
                <h3 className="font-semibold text-xl mb-6 text-slate-900">Select Date</h3>
                <div className="w-full">
                  <div className="relative p-1 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent shadow-lg">
                    <div className="bg-white rounded-xl p-8 border border-primary/30">
                      <CalendarComponent
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => {
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);
                          const maxDate = new Date(today);
                          maxDate.setDate(maxDate.getDate() + 30);
                          return date < today || date > maxDate;
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Time Slots Section */}
              <div className="flex flex-col">
                <h3 className="font-semibold text-xl mb-6 text-slate-900">Select Time</h3>
                <div className="grid grid-cols-4 gap-3 overflow-y-auto max-h-[450px] pr-3 pb-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedTime(slot)}
                      className={`p-3 rounded-lg border-2 font-medium transition-all text-xs ${
                        selectedTime === slot
                          ? "border-primary bg-primary text-white shadow-lg"
                          : "border-slate-300 bg-white hover:border-primary hover:shadow-md"
                      }`}
                    >
                      <Clock size={14} className="mx-auto mb-1" />
                      <div>{slot}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Appointment Details Summary */}
          {selectedDate && selectedTime && (
            <div className="bg-primary/10 border-t border-primary px-6 py-4">
              <div className="flex items-start gap-2">
                <Check className="text-primary mt-0.5 shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-slate-900">
                    {selectedDate.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-slate-700">{selectedTime}</p>
                </div>
              </div>
              {appointmentData.name && (
                <div className="text-sm text-slate-600 mt-3 space-y-1">
                  <p><strong>Name:</strong> {appointmentData.name}</p>
                  <p><strong>Email:</strong> {appointmentData.email}</p>
                  {appointmentData.phone && <p><strong>Phone:</strong> {appointmentData.phone}</p>}
                </div>
              )}
            </div>
          )}

          <div className="flex gap-3 justify-end sticky bottom-0 bg-white px-6 py-4 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpenScheduler(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              type="button"
              className="bg-primary hover:bg-primary/90"
              onClick={confirmAppointment}
              disabled={!selectedDate || !selectedTime || isLoading}
            >
              <Check size={18} className="mr-2" />
              {isLoading ? "Scheduling..." : "Confirm Appointment"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
