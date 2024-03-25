import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';

export type RouteLink = {
  href: string;
  label: string;
};

export const NavLinks = () => {
  const pathname = usePathname();

  // const RouteLinks: RouteLink[] = [
  //   { href: '/portfolio', label: 'Portfolio' },
  //   { href: '/a-propos', label: 'À propos' },
  //   { href: '/tarif', label: 'Tarif' },
  //   { href: '/contact', label: 'Contact' },
  // ];

  return (
    // <>
    // 	{[
    // 		{ href: '/portfolio', label: 'Portfolio' },
    // 		{ href: '/a-propos', label: 'À propos' },
    // 		{ href: '/tarif', label: 'Tarif' },
    // 		{ href: '/contact', label: 'Contact' },
    // 	].map((link) => (
    // 		<Button
    // 			key={link.href}
    // 			variant='link'
    // 			className={`${pathname === link.href ? 'underline' : ''}`}
    // 			asChild>
    // 			<Link href={link.href}>{link.label}</Link>
    // 		</Button>
    // 	))}
    // </>

    <nav className='m-4 flex content-center justify-between'>
      <div>
        {/* <h1 className='mx-3 text-2xl'>
            EmilieM Photographie
          </h1> */}
        <Button variant='link' asChild>
          <Link href='/'>EmilieM Photographie</Link>
        </Button>
        {/* <Image
            src='/me.svg'
            alt='Signature EmilieM Photographie'
            width='300'
            height='200'
            priority={true}
          /> */}
      </div>

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

      <div>
        <ThemeToggle />
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
  );
};