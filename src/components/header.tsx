'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { Path } from '@/ts/types/path.types';
import { ThemeToggle } from './theme-toggle';

const Paths: Path[] = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'À propos' },
  { href: '/', label: 'EmilieM Photographie' },
  { href: '/price', label: 'Tarif' },
  { href: '/contact', label: 'Contact' },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <div
      id='navbar'
      className='sticky top-0 z-50 flex h-20 w-full items-center justify-center bg-purple-400'>
      <nav className='flex items-center justify-center gap-5'>
        {Paths.map((path) => (
          <Button
            key={path.href}
            variant='link'
            className={`${path.href === '/' ? 'mx-3 text-5xl' : path.href === pathname ? 'underline' : ''}`}
            asChild>
            <Link href={path.href}>{path.label}</Link>
          </Button>
        ))}
      </nav>

      <div>
        <ThemeToggle />
      </div>
    </div>
  );
};

// todo : quand mobile que titre et hamburger menu avec les liens
