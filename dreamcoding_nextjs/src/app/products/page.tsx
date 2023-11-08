import MeowArticle from "@/components/MeowArticle";
import { getProducts } from "@/service/products";
import Image from "next/image";
import Link from 'next/link';
import testImage from 'public/images/test_image.jpg';
// Next.js 13에서 안됨
// export const revalidate = 3;


const ProductsPage = async () => {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <Image
        src={testImage}
        alt="테스트 이미지"
      />
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
};

export default ProductsPage;