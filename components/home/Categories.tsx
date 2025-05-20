"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    id: "modular-kitchen",
    name: "Modular Kitchens",
    description: "Custom designed functional kitchen spaces",
    image:
      "https://media.designcafe.com/wp-content/uploads/2020/05/09150825/blue-and-white-modular-kitchen-design.jpg",
    href: "/products?category=modular-kitchen",
  },
  {
    id: "appliances",
    name: "Kitchen Appliances",
    description: "Premium quality appliances for modern kitchens",
    image: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg",
    href: "/products?category=appliances",
  },
  {
    id: "water-purifier",
    name: "Water Purifiers",
    description: "Advanced water purification solutions",
    image:
      "https://www.cuckoo.com.my/wp-content/uploads/2024/04/Grande-feature-images.png",
    href: "/products?category=water-purifier",
  },
  {
    id: "interior",
    name: "Interior Solutions",
    description: "Beautiful interior designs for your home",
    image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
    href: "/products?category=interior",
  },
  {
    id: "kitchen-accessories",
    name: "Kitchen Accessories",
    description: "Essential accessories for your kitchen",
    image:
      "https://stoneintl.net/wp-content/uploads/2024/01/interior-of-kitchen-and-details-of-decor-of-utensi-2023-11-27-04-50-17-utc-min-scaled.jpg",
    href: "/products?category=kitchen-accessories",
  },
  {
    id: "solar-heater",
    name: "Solar Water Heaters",
    description: "Eco-friendly solar water heating solutions",
    image:
      "https://www.lewington-heating.co.uk/wp-content/uploads/2024/07/Solar-hot-water-systems.jpg",
    href: "/products?category=solar-heater",
  },
  {
    id: "air-conditioners",
    name: "Air Conditioners",
    description: "Efficient cooling solutions for your home",
    image:
      "https://www.lg.com/eastafrica/images/microsite/rac-product-buying-guide/LG-Air-conditioner-Buying-Guide-2-M.jpg",
    href: "/products?category=ac",
  },
  {
    id: "other-products",
    name: "Other Products",
    description: "Explore our range of other products",
    image:
      "https://www.kitchenaid.com/is/image/content/dam/business-unit/kitchenaid/en-us/digital-assets/pages/suites-refresh/Group%20880111831.jpeg?fit=constrain&fmt=jpeg&utc=2022-09-30T14:25:33Z&wid=1000",
    href: "/products?category=other-products",
  },
];

export default function Categories() {
  return (
    <div className="py-20 container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
          Our Categories
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Explore our range of premium kitchen and interior solutions designed
          for modern living.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={category.href} className="block">
              <div className="group relative overflow-hidden rounded-xl">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-white/80 mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-sm font-medium text-white/90 group-hover:text-primary transition-colors">
                    <span>Explore</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
