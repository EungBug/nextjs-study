import GoProductsBtn from "@/components/GoProductsBtn";
import { getProduct, getProducts } from "@/service/products";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";


type Props = {
  params: {
    slug: string;
  };
};

const ProductPage = async ({ params: { slug } }: Props) => {
  const product = await getProduct(slug);

  if (!product) {
    // 존재하지 않은 상품 경로로 접근 시 redirect로 보내줌
    redirect('/products');
    // notFound();
  }

  return (
    <>
      <h1>{product.name} 제품 설명 페이지</h1>
      <Image
        src={'/images/' + product.image}
        alt={product.name}
        width={400} height={400}
      />
      <GoProductsBtn />
    </>

  );
};

// SSG
export const generateStaticParams = async () => {
  const products = await getProducts();
  return products.map(product => ({ slug: product.id }));
};

export default ProductPage;