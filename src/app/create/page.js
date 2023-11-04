// onSubmit = 사용자와 상호작용할 때 일어나기 때문에 Client Component로 만들어줘야한다.
'use client';

import { useRouter } from 'next/navigation';

const Create = () => {
  const router = useRouter();

  return (
    <form
      onSubmit={(event) => {
        // onSubmit이 실행했을 때 기본 동작을 방지
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, body }),
        };
        fetch(`http://localhost:9999/topics`, options)
          .then((res) => res.json())
          .then((result) => {
            const lastid = result.id;
            // Next.js 13에서 제공하는 App Router
            // useRouter() 클라이언트 컴포넌트에서만 쓸 수 있음
            // router를 사용해 redirect 시킨다.
            router.refresh(); // 서버 컴포넌트가 새로 데이터를 가져오게 됨.
            router.push(`/read/${lastid}`);
          });
      }}
    >
      <p>
        <input type="text" name="title" placeholder="Title" />
      </p>
      <p>
        <textarea name="body" placeholder="Body" />
      </p>
      <p>
        <input type="submit" value="create" />
      </p>
    </form>
  );
};

export default Create;
