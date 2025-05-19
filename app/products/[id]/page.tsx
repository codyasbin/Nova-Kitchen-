// app/products/[id]/page.tsx
import { getProductById, getProductVariants, getAllProducts } from '@/lib/data';
import { notFound } from 'next/navigation';
import ProductDetails from '@/components/products/ProductDetails';

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({ id: product.id }));
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);
  if (!product) return notFound();

  const variants = await getProductVariants(product.id);

  return (
    <div className="container mx-auto py-12">
      <ProductDetails product={product} variants={variants} />
    </div>
  );
}
