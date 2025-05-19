'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const inspirationImages = [
  {
    src: 'https://renovationcapital.com.au/wp-content/uploads/2023/01/Minimalist-Kitchen-scaled.jpeg',
    title: 'Modern Minimalist',
  },
  {
    src: 'https://www.nobiliaindia.com/images/modern-c/easytouch-1.jpg',
    title: 'Contemporary Elegance',
  },
  {
    src: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg',
    title: 'Industrial Chic',
  },
  {
    src: 'https://www.andreafanfani.com/images/kitchen/1-classic_paintings_on_canvas_italian_oil.jpg',
    title: 'Classic Luxury',
  },
];

export default function DesignInspiration() {
  return (
    <div className="py-20 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Design Inspiration</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our gallery of stunning kitchen designs to inspire your next renovation project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {inspirationImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                <h3 className="text-xl font-medium">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/gallery">
              View Full Gallery
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}