"use client";
import {useEffect} from "react";
import {useState} from "react";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Card} from "@/components/ui/card";
import {useToast} from "@/hooks/use-toast";
import {MapPin, Phone, Mail, Clock} from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {message: "Name must be at least 2 characters."}),
  email: z.string().email({message: "Please enter a valid email address."}),
  phone: z.string().min(10, {message: "Please enter a valid phone number."}),
  message: z.string().min(10, {message: "Message must be at least 10 characters."}),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {toast} = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/contact/create/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });

      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-playfair font-bold mb-4">Contact Us</h1>
        <p className="text-muted-foreground text-lg">We'd love to hear from you. Get in touch with our team for any queries or to schedule a visit to our showroom.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="p-6 col-span-1 lg:col-span-1 h-min">
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
              <div>
                <h4 className="font-medium">Visit Our Showrooms</h4>
                <p className="text-muted-foreground text-sm mt-1">
                  - Main Road, Narayangarh(way to Pokhara Buspark).
                  <br />- Milan Chowk, Paras Buspark, opposite of Yamaha Showroom
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
              <div>
                <h4 className="font-medium">Call Us</h4>
                <p className="text-muted-foreground text-sm mt-1">
                  +977 9845046865
                  <br />
                  +977 9801246865
                  <br />
                  056-596482
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
              <div>
                <h4 className="font-medium">Email Us</h4>
                <p className="text-muted-foreground text-sm mt-1">mathurashrestha1974@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
              <div>
                <h4 className="font-medium">Working Hours</h4>
                <p className="text-muted-foreground text-sm mt-1">
                  Monday - Saturday: 10:00 AM - 8:00 PM
                  <br />
                  Sunday: 11:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 col-span-1 lg:col-span-2">
          <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="phone"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="Your phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell us about your kitchen requirements" className="min-h-[120px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </Card>
      </div>

      <section id="locate" className="mt-16">
        <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
          <span>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path fill="#2563eb" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"></path>
            </svg>
          </span>
          Find Us Here
        </h3>
        <p className="text-muted-foreground text-lg text-center mb-8">Visit our showroom or get directions to our location.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg border transition hover:shadow-2xl">
            <div className="w-full h-[320px] rounded-t-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.6048962870914!2d84.42087921104606!3d27.698603976088307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fbf9b475ee57%3A0xa7ca91d2a73ccfeb!2sNova%20Kitchen%20%26%20Interiors!5e0!3m2!1sen!2snp!4v1747559068586!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{border: 0, minHeight: 320}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nova Kitchen & Interiors"
              ></iframe>
            </div>
            <div className="flex items-center gap-2 py-4 px-6 w-full justify-center">
              <span className="text-primary text-xl">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path fill="#2563eb" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"></path>
                </svg>
              </span>
              <span className="font-semibold">Nova Kitchen & Interiors</span>
            </div>
            <div className="text-center text-muted-foreground pb-4 px-6 text-sm">
              Main Road, Narayangarh(way to Pokhara Buspark)
              <br />
              Putali Bazar Chowk Opposite of NMB Bank
            </div>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg border transition hover:shadow-2xl">
            <div className="w-full h-[320px] rounded-t-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.523105665602!2d84.44142934673513!3d27.670222763688784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994e52a2b5749dd%3A0xca45722361cf550a!2sMilan%20Chowk!5e0!3m2!1sen!2snp!4v1749101334361!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{border: 0, minHeight: 320}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nova Kitchen & Interiors"
              ></iframe>
            </div>
            <div className="flex items-center gap-2 py-4 px-6 w-full justify-center">
              <span className="text-primary text-xl">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path fill="#2563eb" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"></path>
                </svg>
              </span>
              <span className="font-semibold">Nova Kitchen & Interiors</span>
            </div>
            <div className="text-center text-muted-foreground pb-4 px-6 text-sm">
              Milan Chowk, Bharatpur (150m near Paras Buspark)
              <br />
              Opposite of Yamaha Showroom, Along with United Marbles
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
