"use client";

import { useEffect, useState } from "react";

// { next: { revalidate: 0 } } => ssr
//  { cache: 'force-cache' } => ssg

// 현재 버전에서는 client component에서는 async 키워드를 빼야함
const MeowArticle = () => {
  const [text, setText] = useState('데이터 준비중..');
  useEffect(() => {
    fetch('https://meowfacts.herokuapp.com')
      .then(res => res.json())
      .then(data => setText(data.data[0]));
  }, []);

  /*
  const res = await fetch('https://meowfacts.herokuapp.com',
    // { next: { revalidate: 3 } }
    // { cache: 'no-store' } // ssr => ssr로 하자니 서버 과부하가 올 것 같으면 csr로 만드는게 좋음.
  );
  const data = await res.json();
  const factText = data.data[0];
  */

  return (
    <article className='text-lg bg-green-800 m-1 p-2'>
      {text}
    </article>
  );
};

export default MeowArticle;