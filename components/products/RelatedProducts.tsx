"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getRelatedProducts } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RelatedProducts({
  categoryId,
  currentProductId,
}: {
  categoryId: string;
  currentProductId: string;
}) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const relatedProducts = getRelatedProducts(categoryId, currentProductId);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 340; // Approximate width of a card + gap
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (direction === "left") {
      const newPosition = Math.max(scrollPosition - scrollAmount, 0);
      setScrollPosition(newPosition);
      container.scrollTo({ left: newPosition, behavior: "smooth" });
    } else {
      const newPosition = Math.min(scrollPosition + scrollAmount, maxScroll);
      setScrollPosition(newPosition);
      container.scrollTo({ left: newPosition, behavior: "smooth" });
    }
  };

  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = scrollContainerRef.current
    ? scrollPosition <
      scrollContainerRef.current.scrollWidth -
        scrollContainerRef.current.clientWidth -
        10 // Small buffer
    : false;

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-playfair font-bold">Related Products</h2>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="h-10 w-10 rounded-full"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="h-10 w-10 rounded-full"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex space-x-6 overflow-x-scroll scrollbar-hide scroll-smooth pb-4"
      >
        {relatedProducts.map((product) => (
          <div key={product.id} className="flex-shrink-0 w-64 md:w-72">
            <Link
              href={`/products/${product.id}`}
              className="group bg-background rounded-lg overflow-hidden border border-border hover:shadow-md transition-all"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <div className="text-sm text-muted-foreground mb-1">
                  {product.brand}
                </div>
                <h3 className="font-medium text-lg truncate group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-baseline mt-2">
                  <span className="text-lg font-semibold">
                    ₹{product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="ml-2 text-sm text-muted-foreground line-through">
                      ₹{product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
