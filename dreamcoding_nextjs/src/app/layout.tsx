import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import { Nanum_Gothic } from 'next/font/google';
import './globals.css';

const sans = Noto_Sans_KR({ subsets: ['latin'] });
const gothic = Nanum_Gothic({
  weight: '700',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body>
        <h1 className={`${gothic.className} text-4xl`}>Demo Note</h1>
        {children}
      </body>
    </html>
  );
}
