'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { Button } from './ui/button';
// import { ThemeToggle } from './theme-toggle';
import { NavLinks } from './nav-links';
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
  //   const pathname = usePathname();

  return (
    <header className='h-20'>
      <NavLinks />
    </header>
  );
};
