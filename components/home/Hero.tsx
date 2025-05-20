'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    image: 'https://planner5d.com/blog/content/images/2022/11/white-kitchen-with-stainless-steel.jpg',
    title: 'Modern Kitchen Solutions',
    subtitle: 'Transform your kitchen into a space of elegance and functionality',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
    title: 'Premium Appliances',
    subtitle: 'Discover top-of-the-line kitchen appliances from leading brands',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg',
    title: 'Custom Kitchen Interior Designs',
    subtitle: 'Personalized designs that reflect your style and personality',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // for slide direction

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const paginate = (newIndex: number) => {
    setDirection(newIndex > currentSlide ? 1 : -1);
    setCurrentSlide(newIndex);
  };

  return (
    <div className="relative h-[60vh] md:h-[70vh] lg:h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={slides[currentSlide].id}
            className="absolute inset-0"
            custom={direction}
            initial={{ x: direction > 0 ? 1000 : -1000 }}
            animate={{ x: 0 }}
            exit={{ x: direction > 0 ? -1000 : 1000 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container mx-auto h-full flex items-center relative z-10">
        <div className="max-w-2xl text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1 border border-primary/60 text-primary-foreground bg-primary/20 backdrop-blur-sm rounded-full text-sm mb-4">
                Premium Kitchen Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                {slides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Explore Products
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white dark:bg-white hover:text-black">
                  Book Consultation
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-primary scale-125' : 'bg-white/50'
            }`}
            onClick={() => paginate(index)}
          />
        ))}
      </div>
    </div>
  );
}
