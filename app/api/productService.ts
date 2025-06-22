import { getProductById } from './../../lib/data';
// Types based on the API response structure
export interface ProductSpecification {
  id: number;
  content: string;
}

export interface ProductFeature {
  id: number;
  content: string;
}

export interface ProductImage {
  image: string;
}

export interface Product {
  id: number;
  category: string;
  subcategory: string;
  brand: string;
  specifications: ProductSpecification[];
  features: ProductFeature[];
  images: ProductImage[];
  status: 'active' | 'inactive';
  created_at: string;
  updated_at: string;
  name: string;
  description: string;
  price: string;
  discount: string;
  best_seller: boolean;
}

export interface ProductListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Product[];
}

export interface ProductQueryParams {
  best_seller?: boolean;
  brand?: string;
  category?: string;
  daterange_after?: string; // Format: YYYY-MM-DD
  daterange_before?: string; // Format: YYYY-MM-DD
  limit?: number;
  name?: string;
  offset?: number;
  status?: string;
  subcategory?: string;
}

export interface Subcategory {
  id: number;
  name: string;
  category: number;
}

export interface Category {
  id: number;
  subcategory: Subcategory[];
  name: string;
}

export interface CategoryListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Category[];
}

export interface CategoryQueryParams {
  limit?: number;
  offset?: number;
}

export interface Brand {
  id: number;
  name: string;
  description: string;
}

export interface BrandListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Brand[];
}

export interface BrandQueryParams {
  limit?: number;
  offset?: number;
}

export interface ProductVariantImage {
  image: string;
}

export interface ProductVariant {
  id: number;
  images: ProductVariantImage[];
  status: 'active' | 'inactive';
  created_at: string;
  updated_at: string;
  name: string;
  price: string;
  discount: string;
  product: number;
}

export interface ProductVariantListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ProductVariant[];
}

export interface ProductVariantQueryParams {
  daterange_after?: string; // Format: YYYY-MM-DD
  daterange_before?: string; // Format: YYYY-MM-DD
  limit?: number;
  offset?: number;
  product?: string;
  status?: string;
}

// Product Service
const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://192.168.18.7:8000/';

class ProductServiceClass {
  private baseURL: string;

  constructor() {
    this.baseURL = NEXT_PUBLIC_BASE_URL;
  }

  /**
   * Build query string from parameters
   */
  private buildQueryString(params: ProductQueryParams | CategoryQueryParams | BrandQueryParams | ProductVariantQueryParams): string {
    const searchParams = new URLSearchParams();
    
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        searchParams.append(key, value.toString());
      }
    });

    return searchParams.toString();
  }

  /**
   * Get products with optional filtering
   */
  async getProducts(params: ProductQueryParams = {}): Promise<ProductListResponse> {
    try {
      const queryString = this.buildQueryString(params);
      // const url = `${this.baseURL}api/v1/product/${queryString ? `?${queryString}` : ''}`;
      const url = `${this.baseURL}api/v1/product/?limit=1000&offset=10`;
      
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add authorization header if needed
          // 'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ProductListResponse = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  /**
   * Get products by category
   */
  async getProductsByCategory(category: string, additionalParams: Omit<ProductQueryParams, 'category'> = {}): Promise<ProductListResponse> {
    return this.getProducts({ ...additionalParams, category });
  }

  async getProductById(productId: string): Promise<Product | null> {
    try {
      const response = await fetch(`${this.baseURL}api/v1/product/${productId}/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add authorization header if needed
          // 'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: Product = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching product by ID:', error);
      throw error;
    }
  }

  /**
   * Get products by brand
   */
  async getProductsByBrand(brand: string, additionalParams: Omit<ProductQueryParams, 'brand'> = {}): Promise<ProductListResponse> {
    return this.getProducts({ ...additionalParams, brand });
  }

  /**
   * Get best seller products
   */
  async getBestSellerProducts(additionalParams: Omit<ProductQueryParams, 'best_seller'> = {}): Promise<ProductListResponse> {
    return this.getProducts({ ...additionalParams, best_seller: true });
  }

  /**
   * Search products by name
   */
  async searchProductsByName(name: string, additionalParams: Omit<ProductQueryParams, 'name'> = {}): Promise<ProductListResponse> {
    return this.getProducts({ ...additionalParams, name });
  }

  /**
   * Get products with pagination
   */
  async getProductsWithPagination(limit: number, offset: number, additionalParams: Omit<ProductQueryParams, 'limit' | 'offset'> = {}): Promise<ProductListResponse> {
    return this.getProducts({ ...additionalParams, limit, offset });
  }

  /**
   * Get products by status
   */
  async getProductsByStatus(status: string, additionalParams: Omit<ProductQueryParams, 'status'> = {}): Promise<ProductListResponse> {
    return this.getProducts({ ...additionalParams, status });
  }

  /**
   * Get products by date range
   */
  async getProductsByDateRange(
    dateAfter?: string, 
    dateBefore?: string, 
    additionalParams: Omit<ProductQueryParams, 'daterange_after' | 'daterange_before'> = {}
  ): Promise<ProductListResponse> {
    return this.getProducts({
      ...additionalParams,
      daterange_after: dateAfter,
      daterange_before: dateBefore,
    });
  }

  /**
   * Get products by subcategory
   */
  async getProductsBySubcategory(subcategory: string, additionalParams: Omit<ProductQueryParams, 'subcategory'> = {}): Promise<ProductListResponse> {
    return this.getProducts({ ...additionalParams, subcategory });
  }

  // ===== CATEGORY ENDPOINTS =====

  /**
   * Get categories with optional pagination
   */
  async getCategories(params: CategoryQueryParams = {}): Promise<CategoryListResponse> {
    try {
      const queryString = this.buildQueryString(params);
      const url = `${this.baseURL}api/v1/product/categories/${queryString ? `?${queryString}` : ''}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add authorization header if needed
          // 'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: CategoryListResponse = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  }

  /**
   * Get categories with pagination
   */
  async getCategoriesWithPagination(limit: number, offset: number): Promise<CategoryListResponse> {
    return this.getCategories({ limit, offset });
  }

  /**
   * Get all categories (useful for dropdown lists, etc.)
   */
  async getAllCategories(): Promise<Category[]> {
    try {
      let allCategories: Category[] = [];
      let offset = 0;
      const limit = 100;
      let hasMore = true;

      while (hasMore) {
        const response = await this.getCategories({ limit, offset });
        allCategories = [...allCategories, ...response.results];
        
        hasMore = response.next !== null;
        offset += limit;
      }

      return allCategories;
    } catch (error) {
      console.error('Error fetching all categories:', error);
      throw error;
    }
  }

  /**
   * Get subcategories for a specific category
   */
  async getSubcategoriesForCategory(categoryId: number): Promise<Subcategory[]> {
    try {
      const categories = await this.getAllCategories();
      const category = categories.find(cat => cat.id === categoryId);
      return category ? category.subcategory : [];
    } catch (error) {
      console.error('Error fetching subcategories for category:', error);
      throw error;
    }
  }

  // ===== BRAND ENDPOINTS =====

  /**
   * Get brands with optional pagination
   */
  async getBrands(params: BrandQueryParams = {}): Promise<BrandListResponse> {
    try {
      const queryString = this.buildQueryString(params);
      const url = `${this.baseURL}api/v1/product/brands/${queryString ? `?${queryString}` : ''}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add authorization header if needed
          // 'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: BrandListResponse = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching brands:', error);
      throw error;
    }
  }

  /**
   * Get brands with pagination
   */
  async getBrandsWithPagination(limit: number, offset: number): Promise<BrandListResponse> {
    return this.getBrands({ limit, offset });
  }

  /**
   * Get all brands (useful for dropdown lists, etc.)
   */
  async getAllBrands(): Promise<Brand[]> {
    try {
      let allBrands: Brand[] = [];
      let offset = 0;
      const limit = 100;
      let hasMore = true;

      while (hasMore) {
        const response = await this.getBrands({ limit, offset });
        allBrands = [...allBrands, ...response.results];
        
        hasMore = response.next !== null;
        offset += limit;
      }

      return allBrands;
    } catch (error) {
      console.error('Error fetching all brands:', error);
      throw error;
    }
  }

  /**
   * Get brand by ID
   */
  async getBrandById(brandId: number): Promise<Brand | null> {
    try {
      const brands = await this.getAllBrands();
      return brands.find(brand => brand.id === brandId) || null;
    } catch (error) {
      console.error('Error fetching brand by ID:', error);
      throw error;
    }
  }

  /**
   * Search brands by name
   */
  async searchBrandsByName(searchTerm: string): Promise<Brand[]> {
    try {
      const brands = await this.getAllBrands();
      return brands.filter(brand => 
        brand.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } catch (error) {
      console.error('Error searching brands by name:', error);
      throw error;
    }
  }

  // ===== PRODUCT VARIANT ENDPOINTS =====

  /**
   * Get product variants with optional filtering
   */
  async getProductVariants(params: ProductVariantQueryParams = {}): Promise<ProductVariantListResponse> {
    try {
      const queryString = this.buildQueryString(params);
      const url = `${this.baseURL}api/v1/product/variants/${queryString ? `?${queryString}` : ''}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add authorization header if needed
          // 'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ProductVariantListResponse = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching product variants:', error);
      throw error;
    }
  }

  /**
   * Get product variants with pagination
   */
  async getProductVariantsWithPagination(limit: number, offset: number, additionalParams: Omit<ProductVariantQueryParams, 'limit' | 'offset'> = {}): Promise<ProductVariantListResponse> {
    return this.getProductVariants({ ...additionalParams, limit, offset });
  }

  /**
   * Get variants for a specific product
   */
  async getVariantsByProduct(productId: string, additionalParams: Omit<ProductVariantQueryParams, 'product'> = {}): Promise<ProductVariantListResponse> {
    return this.getProductVariants({ ...additionalParams, product: productId });
  }

  /**
   * Get product variants by status
   */
  async getProductVariantsByStatus(status: string, additionalParams: Omit<ProductVariantQueryParams, 'status'> = {}): Promise<ProductVariantListResponse> {
    return this.getProductVariants({ ...additionalParams, status });
  }

  /**
   * Get active product variants
   */
  async getActiveProductVariants(additionalParams: Omit<ProductVariantQueryParams, 'status'> = {}): Promise<ProductVariantListResponse> {
    return this.getProductVariants({ ...additionalParams, status: 'active' });
  }

  /**
   * Get product variants by date range
   */
  async getProductVariantsByDateRange(
    dateAfter?: string, 
    dateBefore?: string, 
    additionalParams: Omit<ProductVariantQueryParams, 'daterange_after' | 'daterange_before'> = {}
  ): Promise<ProductVariantListResponse> {
    return this.getProductVariants({
      ...additionalParams,
      daterange_after: dateAfter,
      daterange_before: dateBefore,
    });
  }

  /**
   * Get all variants for a specific product (handles pagination automatically)
   */
  async getAllVariantsForProduct(productId: string): Promise<ProductVariant[]> {
    try {
      let allVariants: ProductVariant[] = [];
      let offset = 0;
      const limit = 100;
      let hasMore = true;

      while (hasMore) {
        const response = await this.getVariantsByProduct(productId, { limit, offset });
        allVariants = [...allVariants, ...response.results];
        
        hasMore = response.next !== null;
        offset += limit;
      }

      return allVariants;
    } catch (error) {
      console.error('Error fetching all variants for product:', error);
      throw error;
    }
  }

  /**
   * Get variant by ID (searches through all variants)
   */
  async getVariantById(variantId: number): Promise<ProductVariant | null> {
    try {
      // First try to get all variants with a reasonable limit
      const response = await this.getProductVariants({ limit: 1000 });
      const variant = response.results.find(v => v.id === variantId);
      
      if (variant) {
        return variant;
      }

      // If not found in first batch, continue searching if there are more results
      if (response.next) {
        let offset = 1000;
        let hasMore = true;

        while (hasMore) {
          const nextResponse = await this.getProductVariants({ limit: 1000, offset });
          const foundVariant = nextResponse.results.find(v => v.id === variantId);
          
          if (foundVariant) {
            return foundVariant;
          }

          hasMore = nextResponse.next !== null;
          offset += 1000;
        }
      }

      return null;
    } catch (error) {
      console.error('Error fetching variant by ID:', error);
      throw error;
    }
  }
}

// Export as default
const ProductService = new ProductServiceClass();
export default ProductService;