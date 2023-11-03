import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href='/' className={router.pathname === '/' ? 'active' : ''}>Home</Link>
      <Link href='/about' className={router.pathname === '/about' ? 'active' : ''}>About</Link>
      <style jsx>
        {`
        nav {
          background-color: tomato;
        }

        :global(a) {
          text-decoration: none;
          color: yellow;
        }

        :global(a).active {
          color: blue;
        }
      `}
      </style>
    </nav>
  )
}

export default NavBar