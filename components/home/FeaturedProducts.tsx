"use client";
import {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Button} from "@/components/ui/button";
import {ChevronRight, Star} from "lucide-react";
import {getFeaturedProducts, type Product} from "@/lib/data";

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("all");
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Fetch products only once when component mounts
  useEffect(() => {
    const fetchedProducts = getFeaturedProducts();
    setProducts(fetchedProducts);
    setFilteredProducts(fetchedProducts);
  }, []);

  // Filter products when tab changes
  useEffect(() => {
    if (activeTab === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === activeTab));
    }
  }, [activeTab, products]);

  return (
    <div className="py-20 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Discover our collection of premium products designed to elevate your kitchen experience.</p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-8" onValueChange={setActiveTab}>
          <div className="flex justify-center">
            <TabsList className="inline-flex h-10 items-center justify-start rounded-md bg-muted p-1 text-muted-foreground mb-8 overflow-x-auto scrollbar-hide" style={{maxWidth: "100%", minWidth: 0}}>
              <TabsTrigger
                value="all"
                className="rounded-sm px-3 py-1.5 text-sm font-medium transition-all hover:text-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm whitespace-nowrap"
              >
                All Products
              </TabsTrigger>
              <TabsTrigger
                value="modular-kitchen"
                className="rounded-sm px-3 py-1.5 text-sm font-medium transition-all hover:text-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm whitespace-nowrap"
              >
                Modular Kitchens
              </TabsTrigger>
              <TabsTrigger
                value="appliances"
                className="rounded-sm px-3 py-1.5 text-sm font-medium transition-all hover:text-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm whitespace-nowrap"
              >
                Appliances
              </TabsTrigger>
              <TabsTrigger
                value="water-purifier"
                className="rounded-sm px-3 py-1.5 text-sm font-medium transition-all hover:text-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm whitespace-nowrap"
              >
                Water Purifiers
              </TabsTrigger>
              <TabsTrigger
                value="ac"
                className="rounded-sm px-3 py-1.5 text-sm font-medium transition-all hover:text-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm whitespace-nowrap"
              >
                Air Conditioners
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Single TabsContent that shows the filtered products */}
          <TabsContent value={activeTab} className="mt-2">
            <ProductGrid products={filteredProducts} />
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/products" className="flex items-center">
              View All Products
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function ProductGrid({products}: {products: Product[]}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.length > 0 ? (
        products.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)
      ) : (
        <div className="col-span-full text-center py-10 text-muted-foreground">No products found in this category.</div>
      )}
    </div>
  );
}

function ProductCard({product, index}: {product: Product; index: number}) {
  return (
    <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.5, delay: index * 0.1}}>
      <Link href={`/products/${product.id}`} className="group bg-background rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 block h-full">
        <div className="relative aspect-square overflow-hidden">
          <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
          {product.discount && <span className="absolute top-2 left-2 z-10 bg-red-600 text-white text-xs font-medium px-2 py-1 rounded">{product.discount}% OFF</span>}
          {product.bestseller && (
            <span className="absolute top-2 right-2 z-10 bg-amber-500 text-white text-xs font-medium px-2 py-1 rounded flex items-center">
              <Star className="h-3 w-3 mr-1 fill-white" />
              Bestseller
            </span>
          )}
        </div>
        <div className="p-4">
          <div className="text-sm text-muted-foreground mb-1">{product.brand}</div>
          <h3 className="font-medium text-lg truncate group-hover:text-primary transition-colors">{product.name}</h3>
          <div className="flex items-baseline mt-2">
            <span className="text-lg font-semibold">रू{product.price.toLocaleString("en-IN")}</span>
            {product.originalPrice && <span className="ml-2 text-sm text-muted-foreground line-through">रू{product.originalPrice.toLocaleString("en-IN")}</span>}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
