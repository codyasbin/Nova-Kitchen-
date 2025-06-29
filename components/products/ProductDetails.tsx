"use client";

import {useState} from "react";
import Image from "next/image";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import RelatedProducts from "@/components/products/RelatedProducts";
import ProductGallery from "@/components/products/ProductGallery";
import {Bookmark, Check, Info, Phone, Share2} from "lucide-react";
import {cn} from "@/lib/utils";
import Link from "next/link";

export default function ProductDetails({product, variants}: {product: any; variants: any[]}) {
  console.log("Product Details:", product);
  console.log("Variants:", variants);

  // Combine product and variants into a single array to toggle between them
  const variantOptions = [
    {
      id: product.id,
      model: product.name,
      price: product.price,
      discount: product.discount,
      images: product.images,
      isBaseProduct: true,
    },
    ...variants.map((variant) => ({
      ...variant,
      model: variant.name, // make sure 'model' is filled properly
    })),
  ];

  const [selectedVariant, setSelectedVariant] = useState(0); // Start with the product itself
  const selected = variantOptions[selectedVariant]; // Current selected item (product or variant)

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ProductGallery key={selected.id} images={selected.images} />

        <div className="space-y-6">
          <div>
            <p className="text-muted-foreground">
              {product.category} / {product.subcategory}
            </p>
            <h1 className="text-3xl md:text-4xl font-playfair font-bold mt-2">{selected.model}</h1>
            <div className="flex items-center mt-2">
              <p className="text-muted-foreground">{product.brand}</p>
              {product.best_seller && (
                <span className="ml-4 inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                  <Check className="mr-1 h-3 w-3" />
                  Bestseller
                </span>
              )}
            </div>
          </div>

          <div className="flex items-end gap-4">
            <p className="text-2xl font-semibold">₹{selected.price}</p>
            {selected.originalPrice && <p className="text-muted-foreground line-through">₹{selected.originalPrice}</p>}
            {selected.discount && <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">{selected.discount}% OFF</span>}
          </div>

          <Separator />

          {variantOptions.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-medium">Available Models</h3>
              <div className="flex flex-wrap gap-3">
                {variantOptions.map((variant, index) => (
                  <Button
                    key={variant.id}
                    variant={selectedVariant === index ? "default" : "outline"}
                    className={cn("border h-auto py-2 px-4", selectedVariant === index ? "border-primary" : "border-gray-200")}
                    onClick={() => setSelectedVariant(index)}
                  >
                    {variant.model}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <Tabs defaultValue="description" className="mt-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <p className="text-muted-foreground">{product.description}</p>
            </TabsContent>
            <TabsContent value="specifications" className="mt-4">
              <ul className="space-y-2">
                {product.specifications.map((spec: {id: number; content: string}, index: number) => (
                  <li key={spec.id ?? index} className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                    <span>{spec.content}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="features" className="mt-4">
              <ul className="space-y-2">
                {product.features.map((feature: {id: number; content: string}, index: number) => (
                  <li key={feature.id ?? index} className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                    <span>{feature.content}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>

          <div className="flex gap-4 mt-8">
            <Link href="/contact">
              <Button size="lg" className="flex-1">
                Enquire Now
              </Button>
            </Link>
            <a href={`https://wa.me/9779845046865?text=${encodeURIComponent(`Hi, I would like to enquire about ${product.name}`)}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="flex-1">
                <Phone className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <Button variant="ghost" size="sm">
              <Bookmark className="mr-2 h-4 w-4" />
              Save
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>

          <Card className="p-4 bg-muted/50 border border-muted mt-6">
            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-muted-foreground mt-0.5" />
              <p className="text-sm text-muted-foreground">Visit our showroom to experience this product in person and get expert advice from our kitchen specialists.</p>
            </div>
          </Card>
        </div>
      </div>

      <Separator className="my-16" />

      <RelatedProducts categoryId={product.category} currentProductId={product.id} />
    </>
  );
}
