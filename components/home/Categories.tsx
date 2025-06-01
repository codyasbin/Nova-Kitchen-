"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { useState, useEffect } from "react";

const base_url= process.env.NEXT_PUBLIC_BASE_URL 

interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
}
export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${base_url}api/v1/product/categories/`);
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data.results);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
}, []);





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
            <Link href={`/products?categoryId=${category.id}`} className="block">
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
