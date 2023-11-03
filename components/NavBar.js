import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const NavBar = () => {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href='/' style={{ color: router.pathname === '/' ? 'red' : 'blue'}}>Home</Link>
      <Link href='/about' style={{ color: router.pathname === '/about' ? 'red' : 'blue'}}>About</Link>
    </nav>
  )
}

export default NavBar