'use client';

import SharedLayout from '@/components/shared-layout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
// import { usePathname } from 'next/navigation';

const PortfolioPage = () => {
  //   const pathname = usePathname();

  return (
    <SharedLayout>
      <main className='flex flex-col items-center justify-center'>
        <h1 data-testid='title' className='mb-10 h-screen text-8xl'>
          Portfolio Page 1
        </h1>
        <h1 data-testid='title' className='mb-10 h-screen text-8xl'>
          Portfolio Page 2
        </h1>
        <div>
          <div>
            <div className='sticky top-0'>A</div>
            <div>
              <div>
                {/* <img src='...' /> */}
                <strong>Andrew Alfred</strong>
              </div>
              <div>
                {/* <img src='...' /> */}
                <strong>Aisha Houston</strong>
              </div>
            </div>
          </div>
          <div>
            <div className='sticky top-0'>B</div>
            <div>
              <div>
                {/* <img src='...' /> */}
                <strong>Bob Alfred</strong>
              </div>
            </div>
          </div>
        </div>

        <div className='relative'>
          <div className='fixed inset-x-0 top-0'>Contacts</div>
          <div>
            <div>
              {/* <img src='...' /> */}
              <strong>Andrew Alfred</strong>
            </div>
            <div>
              {/* <img src='...' /> */}
              <strong>Debra Houston</strong>
            </div>
          </div>
        </div>

        <nav>
          <div className='flex'>
            <Button
              variant='link'
              // className={`${pathname === '/portfolio' ? 'underline' : ''}`}
              asChild>
              <Link href='#'>Portrait</Link>
            </Button>

            <Button
              variant='link'
              // className={`${pathname === '/a-propos' ? 'underline' : ''}`}
              asChild>
              <Link href='#'>Animaux</Link>
            </Button>

            <Button
              variant='link'
              // className={`${pathname === '/tarif' ? 'underline' : ''}`}
              asChild>
              <Link href='#'>Mariage</Link>
            </Button>

            <Button
              variant='link'
              // className={`${pathname === '/contact' ? 'underline' : ''}`}
              asChild>
              <Link href='#'>Divers</Link>
            </Button>
          </div>
        </nav>
      </main>
    </SharedLayout>
  );
};

export default PortfolioPage;
