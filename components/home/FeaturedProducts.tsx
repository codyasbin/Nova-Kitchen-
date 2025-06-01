"use client";
import {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Button} from "@/components/ui/button";
import {ChevronRight, Star} from "lucide-react";
import ProductService, {Product, Category} from "@/app/api/productService"; // Update this import path

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("all");
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch bestseller products when component mounts
  useEffect(() => {
    const fetchBestsellerProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await ProductService.getBestSellerProducts();
        const responseCategories = await ProductService.getCategories();
    
        setProducts(response.results);
        setFilteredProducts(response.results);
        setCategories(responseCategories.results);
        
        console.log("Fetched categories:", responseCategories.results);
      } catch (err) {
        console.error('Error fetching bestseller products:', err);
        setError('Failed to load products');
        setProducts([]);
        setFilteredProducts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBestsellerProducts();
  }, []);

  // Filter products when tab changes
  useEffect(() => {
    if (activeTab === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === activeTab));
    }
  }, [activeTab, products]);

  if (isLoading) {
    return (
      <div className="py-20 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Discover our collection of premium products designed to elevate your kitchen experience.</p>
          </div>
          <div className="flex justify-center items-center py-20">
            <div className="text-muted-foreground">Loading products...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Discover our collection of premium products designed to elevate your kitchen experience.</p>
          </div>
          <div className="flex justify-center items-center py-20">
            <div className="text-red-500">{error}</div>
          </div>
        </div>
      </div>
    );
  }

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
              {categories.map((category) => (
                <TabsTrigger
                  key={category.name}
                  value={category.name}
                  className="rounded-sm px-3 py-1.5 text-sm font-medium transition-all hover:text-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm whitespace-nowrap"
                >
                  {category.name}
                </TabsTrigger>
              ))}
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
  // Helper function to get the first image URL
  const getFirstImage = (product: Product): string => {
    if (product.images && product.images.length > 0) {
      return product.images[0].image;
    }
    return "/placeholder.png"; // Fallback image if no images are available
  };

  // Helper function to calculate discounted price
  const getDiscountedPrice = (price: string, discount: string): number => {
    const priceNum = parseFloat(price);
    const discountNum = parseFloat(discount);
    if (discountNum > 0) {
      return priceNum - (priceNum * discountNum / 100);
    }
    return priceNum;
  };

  const originalPrice = parseFloat(product.price);
  const discountAmount = parseFloat(product.discount);
  const finalPrice = getDiscountedPrice(product.price, product.discount);

  return (
    <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.5, delay: index * 0.1}}>
      <Link href={`/products/${product.id}`} className="group bg-background rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 block h-full">
        <div className="relative aspect-square overflow-hidden">
          <Image src={getFirstImage(product)} alt={product.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
          {discountAmount > 0 && <span className="absolute top-2 left-2 z-10 bg-red-600 text-white text-xs font-medium px-2 py-1 rounded">{product.discount}% OFF</span>}
          {product.best_seller && (
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
            <span className="text-lg font-semibold">रू{finalPrice.toLocaleString("en-IN")}</span>
            {discountAmount > 0 && <span className="ml-2 text-sm text-muted-foreground line-through">रू{originalPrice.toLocaleString("en-IN")}</span>}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}