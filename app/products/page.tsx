'use client';

import { useState } from 'react';
import ProductList from '@/components/products/ProductList';
import ProductFilters from '@/components/products/ProductFilters';
import { getAllProducts } from '@/lib/data';
import { Separator } from '@/components/ui/separator';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeBrands, setActiveBrands] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const allProducts = getAllProducts();
  
  const filteredProducts = allProducts.filter(product => {
    // Filter by category
    if (activeCategory !== 'all' && product.category !== activeCategory) {
      return false;
    }
    
    // Filter by brand
    if (activeBrands.length > 0 && !activeBrands.includes(product.brand)) {
      return false;
    }
    
    // Filter by search term
    if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="container mx-auto py-12">
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-playfair font-bold">Our Products</h1>
        <p className="text-muted-foreground text-lg max-w-3xl">
          Discover our extensive range of premium kitchen solutions and appliances designed to transform your kitchen into a space of beauty and functionality.
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
          />
        </div>
        
        <div className="w-full lg:w-3/4">
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}