import { getProduct, getProducts } from "@/service/products";
import { notFound } from "next/navigation";


type Props = {
  params: {
    slug: string;
  };
};

const ProductPage = async ({ params: { slug } }: Props) => {
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <h1>{product.name} 제품 설명 페이지</h1>
  );
};

// SSG
export const generateStaticParams = async () => {
  const products = await getProducts();
  return products.map(product => ({ slug: product.id }));
};

export default ProductPage;