"use client";

import {useState} from "react";
import Image from "next/image";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import RelatedProducts from "@/components/products/RelatedProducts";
import ProductGallery from "@/components/products/ProductGallery";
import {Check, Info, Phone, Share2} from "lucide-react";
import {cn} from "@/lib/utils";
import Link from "next/link";
import ScrollToTop from "@/components/scrolltotop";

export default function ProductDetails({product, variants}: {product: any; variants: any[]}) {
  console.log("Product Details:", product);
  console.log("Variants:", variants);
  const [selectedVariant, setSelectedVariant] = useState(-1);

  // --- NEW STATE FOR COPY STATUS ---
  const [copyStatus, setCopyStatus] = useState("");
  const selected = selectedVariant >= 0 ? variants[selectedVariant] : product;

  // Pricing calculations with both discount and special offer discount
  const price = parseFloat(selected.price);
  const discount = parseFloat(selected.discount || "0");
  const specialDiscount = parseFloat(selected.special_offer_discount || "0");

  const discountAmount = (price * discount) / 100;
  const priceAfterDiscount = price - discountAmount;

  const specialDiscountAmount = (priceAfterDiscount * specialDiscount) / 100;
  const finalPrice = priceAfterDiscount - specialDiscountAmount;

  const totalSavings = price - finalPrice;

  // --- COPY LINK HANDLER ---
  const handleCopyLink = async () => {
    if (typeof window === "undefined" || !navigator.clipboard) {
      setCopyStatus("Clipboard not supported.");
      setTimeout(() => setCopyStatus(""), 3000);
      return;
    }

    try {
      const productUrl = window.location.href;
      await navigator.clipboard.writeText(productUrl);
      setCopyStatus("Link copied to the clipboard!");
      setTimeout(() => setCopyStatus(""), 2000);
    } catch (err) {
      console.error("Failed to copy link: ", err);
      setCopyStatus("Failed to copy link.");
      setTimeout(() => setCopyStatus(""), 5000);
    }
  };

  return (
    <>
      <ScrollToTop />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 px-4 sm:px-6 lg:px-0">
        <ProductGallery images={variants[selectedVariant]?.images || product.images} />

        <div className="space-y-4 lg:space-y-6">
          <div>
            <p className="text-sm text-muted-foreground">
              {product.category} / {product.subcategory}
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold mt-2 leading-tight">{variants[selectedVariant]?.name || product.name}</h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 mt-2">
              <p className="text-muted-foreground">{product.brand}</p>
              {product.bestseller && (
                <span className="sm:ml-4 inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800 w-fit">
                  <Check className="mr-1 h-3 w-3" />
                  Bestseller
                </span>
              )}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-end gap-2 sm:gap-4">
              <p className="text-xl sm:text-2xl font-semibold text-green-700">रू {finalPrice.toFixed(2)}</p>

              {(discount > 0 || specialDiscount > 0) && <p className="text-sm sm:text-base text-muted-foreground line-through">रू {price.toFixed(2)}</p>}

              {discount > 0 && <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">{discount}% OFF</span>}
              {specialDiscount > 0 && (
                <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  + {product.special_offer_discount}% OFF {product.special_offer}
                </span>
              )}
            </div>

            {specialDiscount > 0 && (
              <p className="text-sm text-green-600">
                Save रू {totalSavings.toFixed(2)} with {product.special_offer}!
              </p>
            )}
          </div>

          <Separator />

          {variants.length > 0 && (
            <div className="space-y-3 lg:space-y-4">
              <h3 className="font-medium text-base">Available Models</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {variants.map((variant, index) => (
                  <Button
                    key={variant.id}
                    variant={selectedVariant === index ? "default" : "outline"}
                    className={cn("border h-auto py-2 px-3 sm:px-4 text-sm", selectedVariant === index ? "border-primary" : "border-gray-200")}
                    onClick={() => setSelectedVariant(index)}
                  >
                    {variant.model}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <Tabs defaultValue="description" className="mt-4 lg:mt-6">
            <TabsList className="grid w-full grid-cols-3 h-auto">
              <TabsTrigger value="description" className="text-xs sm:text-sm py-2">
                Description
              </TabsTrigger>
              <TabsTrigger value="specifications" className="text-xs sm:text-sm py-2">
                Specifications
              </TabsTrigger>
              <TabsTrigger value="features" className="text-xs sm:text-sm py-2">
                Features
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{product.description}</p>
            </TabsContent>
            <TabsContent value="specifications" className="mt-4">
              <ul className="space-y-2 sm:space-y-3">
                {product.specifications.map((spec: {id: number; content: string}, index: number) => (
                  <li key={spec.id ?? index} className="flex items-start">
                    <Check className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{spec.content}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="features" className="mt-4">
              <ul className="space-y-2 sm:space-y-3">
                {product.features.map((feature: {id: number; content: string}, index: number) => (
                  <li key={feature.id ?? index} className="flex items-start">
                    <Check className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{feature.content}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 lg:mt-8">
            <Link href="/contact" className="flex-1">
              <Button size="lg" className="w-full sm:flex-1">
                Enquire Now
              </Button>
            </Link>
            <a href={`https://wa.me/9779845046865?text=${encodeURIComponent(`Hi, I would like to enquire about ${product.name}`)}`} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button size="lg" variant="outline" className="w-full sm:flex-1">
                <Phone className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-4">
            <Button variant="ghost" size="sm" onClick={handleCopyLink} className="w-fit">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>

            {copyStatus && <p className={`text-sm ${copyStatus.includes("Failed") ? "text-red-500" : "text-green-500"}`}>{copyStatus}</p>}
          </div>

          <Card className="p-3 sm:p-4 bg-muted/50 border border-muted mt-4 lg:mt-6">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">Visit our showroom to experience this product in person and get expert advice from our kitchen specialists.</p>
            </div>
          </Card>
        </div>
      </div>

      <Separator className="my-8 sm:my-12 lg:my-16" />

      <RelatedProducts categoryId={product.category} currentProductId={product.id} />
    </>
  );
}
