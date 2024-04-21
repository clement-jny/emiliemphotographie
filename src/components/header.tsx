// import Image from 'next/image';
// import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
// import { ThemeToggle } from './theme-toggle';
// import { RouteLink } from '@/ts/types/link.types';

import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

// import { ThemeToggle } from './theme-toggle';
// import { Button } from './ui/button';

// type RouteLink = {
//   href: string;
//   label: string;
// };

// const RouteLinks: RouteLink[] = [
//   { href: '/portfolio', label: 'Portfolio' },
//   { href: '/a-propos', label: 'À propos' },
//   { href: '/tarif', label: 'Tarif' },
//   { href: '/contact', label: 'Contact' },
// ];

// <div className='flex'>
//   {RouteLinks.map((link) => (
//     <Button
//       key={link.href}
//       variant='link'
//       className={`${pathname === link.href ? 'underline' : ''}`}
//       asChild>
//       <Link href={link.href}>{link.label}</Link>
//     </Button>
//   ))}
// </div>;

export const Header = () => {
  const pathname = usePathname();

  return (
    <div className='sticky top-0 z-50 flex h-20 items-center justify-center bg-purple-400'>
      <nav className='flex items-center justify-center gap-5'>
        <div className='flex gap-3'>
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
        </div>

        <div>
          <Button variant='link' className='mx-3 text-5xl' asChild>
            <Link href='/'>EmilieM Photographie</Link>
          </Button>
        </div>

        <div className='flex gap-3'>
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
      </nav>

      <div className=''>
        <ThemeToggle />
      </div>
    </div>
  );
};

// 2 links - gros titre - 2 links

// quand scroll down scale down du header

// quand mobile que titre et hamburger menu avec les liens
