import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {Check} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-playfair font-bold mb-4">About Nova Kitchen & Interiors</h1>
        <p className="text-muted-foreground text-lg">Elevating kitchen experiences with innovative design and premium quality products since 2010.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-playfair font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Nova Kitchen & Interiors began with a simple vision – to transform ordinary kitchens into extraordinary spaces where functionality meets elegance. Founded in 2010 by a team of passionate
            interior designers and kitchen specialists, we've grown from a small boutique store to one of India's premier kitchen solution providers.
          </p>
          <p className="text-muted-foreground mb-4">
            We specialize in designing various types of kitchens, including L-shape, B-shape, G-shape, and straight-line configurations. Our offerings come in a range of premium finishes, such as
            laminate, acrylic, membrane, PU, and glass, tailored to meet your unique needs. Each design ensures your dream kitchen is not only exclusive and glamorous but also a true reflection of
            your personality.
          </p>
          <p className="text-muted-foreground mb-4">
            Over the years, we've helped thousands of homeowners across the country reimagine their kitchens. By combining innovative designs, high-quality materials, and cutting-edge appliances, we
            create spaces that inspire culinary creativity and bring families together.
          </p>
          <p className="text-muted-foreground">Let Nova Kitchen & Interiors redefine your kitchen, making it the centerpiece of your home.</p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg" alt="Our showroom" fill className="object-cover" />
        </div>
      </div>

      <Separator className="my-16" />

      <div className="text-center mb-12">
        <h2 className="text-3xl font-playfair font-bold mb-4">Our Values</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">These core principles guide everything we do at Nova Kitchen & Interiors.</p>
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
          <p className="text-muted-foreground">
            We push creative boundaries, staying ahead of global trends while designing practical, beautiful kitchens that reflect our clients' unique personalities.
          </p>
        </div>

        <div className="bg-background p-6 rounded-lg border border-border shadow-sm transition-all hover:shadow-md">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Check className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
          <p className="text-muted-foreground">From the first consultation to final installation and beyond, we prioritize an exceptional customer experience with attentive service and support.</p>
        </div>
      </div>

      <div className="bg-muted/30 py-20 rounded-xl mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold mb-4">Our Kitchen Range</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Discover our comprehensive range of kitchen solutions designed to suit every budget and style preference.</p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* === Economy Range === */}
            <div className="group relative h-full rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/80 group-hover:from-white/70 group-hover:via-white/60 group-hover:to-white/70 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100/20 rounded-full -translate-y-16 translate-x-16 group-hover:translate-y-0 group-hover:translate-x-8 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-100/30 rounded-full translate-y-12 -translate-x-12 group-hover:translate-y-6 group-hover:-translate-x-6 transition-all duration-700" />

              <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="text-center mb-8">
                  <div className="inline-block mb-4 w-16 h-1 bg-green-500 rounded-full" />
                  <h3 className="text-3xl font-playfair font-bold mb-3 text-gray-800 group-hover:text-green-800 transition-colors">Economy</h3>
                  <p className="text-gray-600 font-light text-lg">Affordable solutions without compromising quality</p>
                </div>
                <div className="space-y-4 mt-auto">
                  {["Laminate Matt Finishing", "Hi Gloss"].map((item, i) => (
                    <div
                      key={item}
                      className={`flex items-center p-4 bg-white/70 backdrop-blur-md rounded-xl border border-green-100 shadow-[0_0_12px_rgba(34,197,94,0.4)] group-hover:shadow-[0_0_18px_rgba(34,197,94,0.7)] group-hover:bg-green-50/80 transition-all duration-300 transform group-hover:translate-x-1 delay-[${
                        i * 75
                      }ms]`}
                    >
                      <svg className="w-5 h-5 text-green-600 mr-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-semibold text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* === Premium Range === */}
            <div className="group relative h-full rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                style={{backgroundImage: "url(https://www.nobiliaindia.com/images/campaing/luxury-modular-kitchen.jpg)"}}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/80 group-hover:from-white/70 group-hover:via-white/60 group-hover:to-white/70 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/20 rounded-full -translate-y-16 translate-x-16 group-hover:translate-y-0 group-hover:translate-x-8 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-100/30 rounded-full translate-y-12 -translate-x-12 group-hover:translate-y-6 group-hover:-translate-x-6 transition-all duration-700" />

              <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="text-center mb-8">
                  <div className="inline-block mb-4 w-16 h-1 bg-blue-500 rounded-full" />
                  <h3 className="text-3xl font-playfair font-bold mb-3 text-gray-800 group-hover:text-blue-800 transition-colors">Premium</h3>
                  <p className="text-gray-600 font-light text-lg">Enhanced features with superior aesthetics</p>
                </div>
                <div className="space-y-4 mt-auto">
                  {["Acrylic Finishing", "Premium Materials"].map((item, i) => (
                    <div
                      key={item}
                      className={`flex items-center p-4 bg-white/70 backdrop-blur-md rounded-xl border border-blue-100 shadow-[0_0_12px_rgba(59,130,246,0.4)] group-hover:shadow-[0_0_18px_rgba(59,130,246,0.7)] group-hover:bg-blue-50/80 transition-all duration-300 transform group-hover:translate-x-1 delay-[${
                        i * 75
                      }ms]`}
                    >
                      <svg className="w-5 h-5 text-blue-600 mr-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-semibold text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* === Luxury Range === */}
            <div className="group relative h-full rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                style={{backgroundImage: "url(https://www.oppeinhome.com/upload/images/ueditor/20250422/classic-off-white-floor-to-ceiling-luxury-kitchen-design.webp)"}}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/80 group-hover:from-white/70 group-hover:via-white/60 group-hover:to-white/70 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/20 rounded-full -translate-y-16 translate-x-16 group-hover:translate-y-0 group-hover:translate-x-8 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-100/30 rounded-full translate-y-12 -translate-x-12 group-hover:translate-y-6 group-hover:-translate-x-6 transition-all duration-700" />

              <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="text-center mb-8">
                  <div className="inline-block mb-4 w-16 h-1 bg-purple-500 rounded-full" />
                  <h3 className="text-3xl font-playfair font-bold mb-3 text-gray-800 group-hover:text-purple-800 transition-colors">Luxury</h3>
                  <p className="text-gray-600 font-light text-lg">Premium materials with exquisite craftsmanship</p>
                </div>
                <div className="space-y-4 mt-auto">
                  {["Membrane", "Acrylic", "PU", "Glass"].map((item, i) => (
                    <div
                      key={item}
                      className={`flex items-center p-4 bg-white/70 backdrop-blur-md rounded-xl border border-purple-100 shadow-[0_0_12px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_18px_rgba(168,85,247,0.7)] group-hover:bg-purple-50/80 transition-all duration-300 transform group-hover:translate-x-1 delay-[${
                        i * 75
                      }ms]`}
                    >
                      <svg className="w-5 h-5 text-purple-600 mr-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className=" text-gray-800 font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-muted p-12 rounded-xl text-center mb-12">
        <h2 className="text-3xl font-playfair font-bold mb-4">Ready to Transform Your Kitchen?</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          Whether you're renovating an existing space or designing a kitchen for your new home, we're here to help bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href={"/contact#locate"}>
            <Button size="lg">Visit Our Showroom</Button>
          </Link>
          <Link href={"/contact"}>
            <Button size="lg" variant="outline">
              Book a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
