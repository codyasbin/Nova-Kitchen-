'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { X, Search } from 'lucide-react';
import { getBrands, getCategories } from '@/lib/data';

type ProductFiltersProps = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  activeBrands: string[];
  setActiveBrands: (brands: string[]) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export default function ProductFilters({
  activeCategory,
  setActiveCategory,
  activeBrands,
  setActiveBrands,
  searchTerm,
  setSearchTerm,
}: ProductFiltersProps) {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
  
  const categories = getCategories();
  const brands = getBrands();
  
  const handleBrandToggle = (brand: string) => {
    if (activeBrands.includes(brand)) {
      setActiveBrands(activeBrands.filter(b => b !== brand));
    } else {
      setActiveBrands([...activeBrands, brand]);
    }
  };
  
  const clearAllFilters = () => {
    setActiveCategory('all');
    setActiveBrands([]);
    setSearchTerm('');
    setLocalSearchTerm('');
  };
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(localSearchTerm);
  };
  
  return (
    <div className="space-y-6 sticky top-24">
      <div>
        <form onSubmit={handleSearchSubmit} className="relative">
          <Input
            type="search"
            placeholder="Search products..."
            value={localSearchTerm}
            onChange={e => setLocalSearchTerm(e.target.value)}
            className="pr-10"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          >
            <Search className="h-4 w-4" />
          </button>
        </form>
      </div>
      
      <div className="flex justify-between items-center">
        <h3 className="font-medium">Filters</h3>
        {(activeCategory !== 'all' || activeBrands.length > 0 || searchTerm) && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="h-8 text-xs"
          >
            <X className="h-3 w-3 mr-1" />
            Clear all
          </Button>
        )}
      </div>
      
      <Separator />
      
      <Accordion type="multiple" defaultValue={['categories', 'brands']} className="w-full">
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="all"
                  checked={activeCategory === 'all'}
                  onCheckedChange={() => setActiveCategory('all')}
                />
                <Label
                  htmlFor="all"
                  className="text-sm cursor-pointer flex-1"
                >
                  All Products
                </Label>
              </div>
              
              {categories.map(category => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={category.id}
                    checked={activeCategory === category.id}
                    onCheckedChange={() => setActiveCategory(category.id)}
                  />
                  <Label
                    htmlFor={category.id}
                    className="text-sm cursor-pointer flex-1"
                  >
                    {category.name}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="brands">
          <AccordionTrigger>Brands</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {brands.map(brand => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={`brand-${brand}`}
                    checked={activeBrands.includes(brand)}
                    onCheckedChange={() => handleBrandToggle(brand)}
                  />
                  <Label
                    htmlFor={`brand-${brand}`}
                    className="text-sm cursor-pointer flex-1"
                  >
                    {brand}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}