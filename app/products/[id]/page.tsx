import { getProductById, getProductVariants } from "@/lib/data";
import { notFound } from "next/navigation";
import ProductDetails from "@/components/products/ProductDetails";
import { Metadata } from "next";

// Define the expected types for Next.js pages
type ProductPageProps = {
  params: {
    id: string;
  };
  searchParams: Record<string, string | string[] | undefined>;
};

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductById(params.id);
  
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }
  
  return {
    title: product.name,
    description: product.description,
  };
}

// Using the recommended Next.js pattern with async function and explicit typing
const ProductPage = async ({ params, searchParams }: ProductPageProps) => {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  const variants = getProductVariants(product.id);

  return (
    <div className="container mx-auto py-12">
      <ProductDetails product={product} variants={variants} />
    </div>
  );
};

export default ProductPage;