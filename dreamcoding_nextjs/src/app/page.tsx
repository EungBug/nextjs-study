import Image from 'next/image';
import os from 'os'; // 노드 APIs

export default function Home() {
  console.log('안녕! - 서버');
  console.log(os.hostname());

  return (
    <>
      <h1>홈페이지다!!</h1>
      {/* 외부 경로를 사용 시 width와 height를 필수로 작성해야한다.
      next.config에 등록해야함 */}
      <Image src='https://images.unsplash.com/photo-1441986300917-64674bd600d8' alt='#'
        width={400}
        height={400} />
    </>
  );
}
