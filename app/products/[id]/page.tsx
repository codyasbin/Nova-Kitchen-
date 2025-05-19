import { getProductById, getProductVariants } from "@/lib/data";
import { notFound } from "next/navigation";
import ProductDetails from "@/components/products/ProductDetails";

export default function ProductPage({ params }: { params: { id: string } }) {
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
}
