import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Separator} from "@/components/ui/separator";
import {Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold">
              <span>Nova</span>
              <span className="text-primary"> Kitchen</span>
            </h3>
            <p className="text-muted-foreground">Premium kitchen solutions for modern homes. Transforming spaces with innovative designs and quality craftsmanship since 2010.</p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 p-0">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 p-0">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 p-0">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 p-0">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-foreground transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=modular-kitchen" className="text-muted-foreground hover:text-foreground transition-colors">
                  Modular Kitchens
                </Link>
              </li>
              <li>
                <Link href="/products?category=appliances" className="text-muted-foreground hover:text-foreground transition-colors">
                  Kitchen Appliances
                </Link>
              </li>
              <li>
                <Link href="/products?category=water-purifier" className="text-muted-foreground hover:text-foreground transition-colors">
                  Water Purifiers
                </Link>
              </li>
              <li>
                <Link href="/products?category=accessories" className="text-muted-foreground hover:text-foreground transition-colors">
                  Kitchen Accessories
                </Link>
              </li>
              <li>
                <Link href="/products?category=interior" className="text-muted-foreground hover:text-foreground transition-colors">
                  Interior Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 text-primary shrink-0" />
                <span className="text-muted-foreground">MCXF+C9W Swastik Furniture, Near, Bharatpur 44200</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 text-primary shrink-0" />
                <span className="text-muted-foreground">+91 9876543210</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 text-primary shrink-0" />
                <span className="text-muted-foreground">info@novakitchens.com</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">© {new Date().getFullYear()} Nova Kitchen & Interiors. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
