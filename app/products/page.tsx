"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductList from "@/components/products/ProductList";
import ProductFilters from "@/components/products/ProductFilters";

import { Separator } from "@/components/ui/separator";
import ProductService, { Category, Brand} from "@/app/api/productService"; // Update this import path


export default function ProductsPage() {
  const searchParams = useSearchParams();
  const [categories, setCategories] = useState<Category[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeBrands, setActiveBrands] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);


  useEffect(() => {
      const categories =async () => {
        const response = await ProductService.getCategories();
        const brandsResponse = await ProductService.getBrands();
       
        setBrands(brandsResponse.results);
        setCategories(response.results);
      }
      categories();
  }, []);
    

  // Get search parameters from URL
  useEffect(() => {
    // Set search term from URL if present
    const searchFromUrl = searchParams.get("search");
    if (searchFromUrl) {
      setSearchTerm(searchFromUrl);
    } else {
      setSearchTerm("");
    }

    // Set category from URL if present
    const categoryFromUrl = searchParams.get("category");
    const typefromUrl = searchParams.get("type")?.replace(/-/g, " ");
    if (categoryFromUrl) {
      setActiveCategory(categoryFromUrl);
    }
    if (typefromUrl) {
     setSearchTerm(typefromUrl);
    }
  }, [searchParams]);

  // Fetch products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await ProductService.getProducts();
       const productByCategory = await ProductService.getProductsByCategory(activeCategory);
      if (activeCategory !== "all" && productByCategory.results.length > 0) {
        setProducts(productByCategory.results);
      } else {  
        setProducts(allProducts.results);
      }
    };
    fetchProducts();
  }, []);

  // Filter products when filters change
  useEffect(() => {
    const filtered = products.filter((product) => {
      // Filter by category
      if (activeCategory !== "all" && product.category !== activeCategory) {
        return false;
      }

      // Filter by brand
      if (activeBrands.length > 0 && !activeBrands.includes(product.brand)) {
        return false;
      }

      // Filter by search term
      if (
        searchTerm &&
        !product.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false;
      }

      return true;
    });

    setFilteredProducts(filtered);
  }, [products, activeCategory, activeBrands, searchTerm]);

  return (
    <div className="container mx-auto py-12">
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-playfair font-bold">Our Products</h1>
        {searchTerm && (
          <p className="text-lg font-medium">
            Search results for:{" "}
            <span className="text-primary">"{searchTerm}"</span>
          </p>
        )}
        <p className="text-muted-foreground text-lg max-w-3xl">
          Discover our extensive range of premium kitchen solutions and
          appliances designed to transform your kitchen into a space of beauty
          and functionality.
        </p>
        <Separator className="my-6" />
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/4">
          <ProductFilters
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            activeBrands={activeBrands}
            setActiveBrands={setActiveBrands}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            categories={categories.map((cat) => ({ ...cat, id: String(cat.id) }))}
            brands={brands.map((brand) => String(brand.name))}
          />
        </div>

        <div className="w-full lg:w-3/4">
          {filteredProducts.length > 0 ? (
            <ProductList products={filteredProducts} />
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No products found matching your criteria.
              </p>
              <p className="text-muted-foreground">
                Try adjusting your search or filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
