import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Check } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-playfair font-bold mb-4">About Nova Kitchen & Interiors</h1>
        <p className="text-muted-foreground text-lg">
          Elevating kitchen experiences with innovative design and premium quality products since 2010.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-playfair font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Nova Kitchen & Interiors began with a simple vision - to transform ordinary kitchens into extraordinary spaces where functionality meets elegance. Founded in 2010 by a team of passionate interior designers and kitchen specialists, we've grown from a small boutique store to one of India's premier kitchen solution providers.
          </p>
          <p className="text-muted-foreground">
            Over the years, we've helped thousands of homeowners across the country reimagine their kitchens, bringing together innovative designs, premium materials, and cutting-edge appliances to create spaces that inspire culinary creativity and family gatherings.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg"
            alt="Our showroom"
            fill
            className="object-cover"
          />
        </div>
      </div>
      
      <Separator className="my-16" />
      
      <div className="text-center mb-12">
        <h2 className="text-3xl font-playfair font-bold mb-4">Our Values</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          These core principles guide everything we do at Nova Kitchen & Interiors.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="bg-background p-6 rounded-lg border border-border shadow-sm transition-all hover:shadow-md">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Check className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Quality Excellence</h3>
          <p className="text-muted-foreground">We never compromise on quality, sourcing the finest materials and partnering with world-class brands to ensure longevity and performance.</p>
        </div>
        
        <div className="bg-background p-6 rounded-lg border border-border shadow-sm transition-all hover:shadow-md">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Check className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Innovative Design</h3>
          <p className="text-muted-foreground">We push creative boundaries, staying ahead of global trends while designing practical, beautiful kitchens that reflect our clients' unique personalities.</p>
        </div>
        
        <div className="bg-background p-6 rounded-lg border border-border shadow-sm transition-all hover:shadow-md">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Check className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
          <p className="text-muted-foreground">From the first consultation to final installation and beyond, we prioritize an exceptional customer experience with attentive service and support.</p>
        </div>
      </div>
      
      <div className="relative h-[500px] w-full rounded-xl overflow-hidden mb-20">
        <Image
          src="https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg"
          alt="Our team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white p-8 max-w-2xl">
            <h2 className="text-3xl font-playfair font-bold mb-4">Our Team</h2>
            <p className="text-lg mb-6">
              Behind every beautiful kitchen is our dedicated team of designers, craftsmen, and specialists who bring vision to reality with passion and precision.
            </p>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors">
              Meet the Team
            </Button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/7319316/pexels-photo-7319316.jpeg"
            alt="Our process"
            fill
            className="object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-playfair font-bold mb-4">Our Process</h2>
          <p className="text-muted-foreground mb-4">
            We believe that creating your dream kitchen should be an enjoyable journey. Our streamlined process combines expert guidance with personalized attention at every step:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary bg-primary/10 text-sm font-medium text-primary mr-3">1</span>
              <span><span className="font-medium">Consultation</span> - We listen to your needs, preferences, and vision to understand your unique requirements.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary bg-primary/10 text-sm font-medium text-primary mr-3">2</span>
              <span><span className="font-medium">Design</span> - Our designers create detailed 3D renderings of your kitchen with material and appliance selections.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary bg-primary/10 text-sm font-medium text-primary mr-3">3</span>
              <span><span className="font-medium">Production</span> - Your kitchen components are crafted with precision using premium materials.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary bg-primary/10 text-sm font-medium text-primary mr-3">4</span>
              <span><span className="font-medium">Installation</span> - Our expert team ensures flawless installation with minimal disruption to your home.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary bg-primary/10 text-sm font-medium text-primary mr-3">5</span>
              <span><span className="font-medium">After-service</span> - We provide ongoing support and maintenance to ensure your kitchen remains perfect.</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-muted p-12 rounded-xl text-center mb-12">
        <h2 className="text-3xl font-playfair font-bold mb-4">Ready to Transform Your Kitchen?</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          Whether you're renovating an existing space or designing a kitchen for your new home, we're here to help bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg">Visit Our Showroom</Button>
          <Button size="lg" variant="outline">Book a Consultation</Button>
        </div>
      </div>
    </div>
  );
}