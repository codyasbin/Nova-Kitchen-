"use client";

import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {motion, useInView} from "framer-motion";
import {Card} from "@/components/ui/card";
import {StarIcon} from "lucide-react";

// Define a type for the testimonial object
type Testimonial = {
  id: number;
  status: string;
  created_at: string;
  updated_at: string;
  name: string;
  content: string;
  location: string;
  image: string;
  rating: string; // Stored as string in the API response
};

// Define a type for the API response structure
type TestimonialResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Testimonial[];
};

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, amount: 0.2});
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/product/testimonials/`);
        const data: TestimonialResponse = await res.json();
        setTestimonials(data.results);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="py-20 container mx-auto" ref={ref}>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">What Our Clients Say</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Don't just take our word for it. Here's what our customers have to say about their experience with Nova Kitchen & Interiors.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.slice(0, 4).map((testimonial, index) => (
          <motion.div key={testimonial.id} initial={{opacity: 0, y: 20}} animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}} transition={{duration: 0.5, delay: index * 0.1}}>
            <Card className="p-6 h-full flex flex-col">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`${testimonial.name}'s photo`}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {Array.from({length: 5}).map((_, i) => (
                  <StarIcon key={i} className={`h-4 w-4 ${i < Math.round(parseFloat(testimonial.rating || "0")) ? "text-amber-500 fill-amber-500" : "text-muted"}`} />
                ))}
              </div>

              <p className="text-muted-foreground flex-1">"{testimonial.content}"</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
