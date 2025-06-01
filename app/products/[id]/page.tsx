'use client';

import { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import ProductDetails from "@/components/products/ProductDetails";
import ProductService from "@/app/api/productService";

type Product = {
  id: string;
  name: string;
  description: string;
  // Add other product properties as needed
};

type Variant = {
  id: string;
  // Add variant properties as needed
};

const ProductPage = () => {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [variants, setVariants] = useState<Variant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);
        setError(null);

        const productId = Array.isArray(params.id) ? params.id[0] : params.id;
        
        if (!productId) {
          setError('Product ID not found');
          return;
        }

        // Fetch product data
        const productData = await ProductService.getProductById(productId);
        
        if (!productData) {
          setError('Product not found');
          return;
        }

        setProduct({
          ...productData,
          id: String(productData.id),
        });

        // Fetch variants
        const variantsResponse = await ProductService.getProductVariants({ 
          product: productId 
        });
        setVariants(
          (variantsResponse.results || []).map((variant: any) => ({
            ...variant,
            id: String(variant.id),
          }))
        );

      } catch (err) {
        setError('Failed to load product data');
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [params.id]);

  // Loading state
  if (loading) {
    return (
      <div className="container mx-auto py-12">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-lg">Loading product...</div>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !product) {
    return (
      <div className="container mx-auto py-12">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-lg text-red-600">
            {error || 'Product not found'}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12">
      <ProductDetails product={product} variants={variants} />
    </div>
  );
};

export default ProductPage;