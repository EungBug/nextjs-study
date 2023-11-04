'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
// useParams hook을 사용하기 위해서는 client component로 생성해야한다.

export const Control = () => {
  const params = useParams();
  const id = params.id;
  return (
    <ul>
      <li>
        <Link href="/create">Create</Link>
      </li>
      {id ? (
        <>
          <li>
            <Link href={`/update/${id}`}>Update</Link>
          </li>
          <li>
            <input type="button" value="delete" />
          </li>
        </>
      ) : null}
    </ul>
  );
};
