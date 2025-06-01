'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function ProductGallery({ images }: { images: { image: string }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  return (
    <div className="space-y-4">
      <div className="relative rounded-lg overflow-hidden">
        <div className="aspect-square relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex].image}
                alt={`Product image ${currentIndex + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/20 text-white hover:bg-black/40"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/20 text-white hover:bg-black/40"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-3 bottom-3 h-10 w-10 rounded-full bg-black/20 text-white hover:bg-black/40"
            >
              <ZoomIn className="h-6 w-6" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>Product Image</DialogTitle>
              <DialogDescription>Zoom in to see details</DialogDescription>
            </DialogHeader>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src={images[currentIndex].image}
                alt={`Product image ${currentIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative aspect-square rounded-md overflow-hidden cursor-pointer ${
              index === currentIndex ? 'ring-2 ring-primary' : 'opacity-70'
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <Image
              src={image.image}
              alt={`Product thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}