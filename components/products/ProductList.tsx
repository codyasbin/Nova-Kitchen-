"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function ProductList({ products }: { products: any[] }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">
          No products found. Try adjusting your filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <Link
            href={`/products/${product.id}`}
            className="group bg-background rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-all"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {product.discount && (
                <span className="absolute top-2 left-2 z-10 bg-red-600 text-white text-xs font-medium px-2 py-1 rounded">
                  {product.discount}% OFF
                </span>
              )}
              {product.bestseller && (
                <span className="absolute top-2 right-2 z-10 bg-amber-500 text-white text-xs font-medium px-2 py-1 rounded flex items-center">
                  <Star className="h-3 w-3 mr-1 fill-white" />
                  Bestseller
                </span>
              )}
            </div>
            <div className="p-4">
              <div className="text-sm text-muted-foreground mb-1">
                {product.brand}
              </div>
              <h3 className="font-medium text-lg truncate group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <div className="flex items-baseline mt-2">
                <span className="text-lg font-semibold">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="ml-2 text-sm text-muted-foreground line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
