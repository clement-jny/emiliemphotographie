'use client';

// import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
// import { RouteLink } from '@/ts/types/link.types';

// export type RouteLink = {
//   href: string;
//   label: string;
// };

// const RouteLinks: RouteLink[] = [
//   { href: '/portfolio', label: 'Portfolio' },
//   { href: '/a-propos', label: 'À propos' },
//   { href: '/tarif', label: 'Tarif' },
//   { href: '/contact', label: 'Contact' },
// ];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className='flex h-16 items-center justify-center bg-white text-black'>
      <nav>
        {/* <Image
          src='/me.svg'
          alt='logo'
          width='150'
          height='150'
          priority={true}
        /> */}

        <div className='flex'>
          <Button
            variant='link'
            className={`${pathname === '/portfolio' ? 'underline' : ''}`}
            asChild>
            <Link href='/portfolio'>Portfolio</Link>
          </Button>

          <Button
            variant='link'
            className={`${pathname === '/a-propos' ? 'underline' : ''}`}
            asChild>
            <Link href='/a-propos'>À propos</Link>
          </Button>

          <h1 className='mx-3 text-2xl'>EmilieM Photographie</h1>

          <Button
            variant='link'
            className={`${pathname === '/tarif' ? 'underline' : ''}`}
            asChild>
            <Link href='/tarif'>Tarif</Link>
          </Button>

          <Button
            variant='link'
            className={`${pathname === '/contact' ? 'underline' : ''}`}
            asChild>
            <Link href='/contact'>Contact</Link>
          </Button>
        </div>

        {/* <div className='flex'>
          {RouteLinks.map((link) => (
            <Button
              key={link.href}
              variant='link'
              className={`${pathname === link.href ? 'underline decoration-cyan-300' : ''}`}
              asChild>
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </div> */}
      </nav>
    </header>
  );
};
