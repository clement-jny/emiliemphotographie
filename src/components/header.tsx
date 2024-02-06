'use client';

// import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { ThemeToggle } from './themeToggle';
import { BackToTop } from './backToTop';
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
    <header className='h-20'>
      <nav className='m-4 flex content-center justify-center'>
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

          <h1 id='top' className='mx-3 text-2xl'>
            EmilieM Photographie
          </h1>
          {/* <Image
            src='/me.svg'
            alt='Signature EmilieM Photographie'
            width='300'
            height='200'
            priority={true}
          /> */}

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

          <ThemeToggle />

          <BackToTop />
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
