'use client';

import SharedLayout from '@/components/shared-layout';
import { Button } from '@/components/ui/button';
// import { Button } from '@/components/ui/button';
// import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const PortfolioPage = () => {
  const pathname = usePathname();
  const { getAll } = useSearchParams();
  const {} = useRouter();

  console.log('pathname', pathname);
  console.log('searchParams', getAll);

  return (
    <SharedLayout>
      {/* <nav className='relative w-full border-2 border-black'>
        <div className='fixed flex'>
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
      </nav> */}

      <main className='relative flex flex-col items-center justify-center'>
        <aside className='fixed left-0 top-10 h-screen w-1/4 bg-gray-200'>
          <nav>
            <ul>
              <li>
                <Button variant='link' asChild>
                  <Link href='#portrait-anchor'>Portrait</Link>
                </Button>
              </li>
              <li>
                <Button variant='link' asChild>
                  <Link href='#animaux-anchor'>Animaux</Link>
                </Button>
              </li>
              <li>
                <Button variant='link' asChild>
                  <Link href='#mariage-anchor'>Mariage</Link>
                </Button>
              </li>
              <li>
                <Button variant='link' asChild>
                  <Link href='#divers-anchor'>Divers</Link>
                </Button>
              </li>
            </ul>
          </nav>
        </aside>

        <section className='flex flex-col items-center justify-center'>
          <div>
            <h1 id='portrait-anchor' className='sticky top-0 text-8xl'>
              Portrait
            </h1>
            <div>
              <div>
                <strong>Andrew Alfred</strong>
              </div>
              <div>
                <strong>Aisha Houston</strong>
              </div>
              <p className='h-14'>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
            </div>
          </div>
        </section>

        <section className='flex flex-col items-center justify-center'>
          <div>
            <h1 id='animaux-anchor' className='sticky top-0 text-8xl'>
              Animaux
            </h1>
            <div>
              <div>
                <strong>Bob Alfred</strong>
              </div>
              <p className='h-14'>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
            </div>
          </div>
        </section>

        <section className='flex flex-col items-center justify-center'>
          <div>
            <h1 id='mariage-anchor' className='sticky top-0 text-8xl'>
              Mariage
            </h1>
            <div>
              <div>
                <strong>Bob Alfred</strong>
              </div>
              <p className='h-14'>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
            </div>
          </div>
        </section>

        <section className='flex flex-col items-center justify-center'>
          <div>
            <h1 id='divers-anchor' className='sticky top-0 text-8xl'>
              Divers
            </h1>
            <div>
              <div>
                <strong>Bob Alfred</strong>
              </div>
              <p className='h-14'>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
              <p>Some content</p>
            </div>
          </div>
        </section>

        {/* <div className='relative'>
          <div className='fixed inset-x-0 top-0'>Contacts</div>
          <div>
            <div>
              <strong>Andrew Alfred</strong>
            </div>
            <div>
              <strong>Debra Houston</strong>
            </div>
          </div>
        </div> */}
      </main>
    </SharedLayout>
  );
};

export default PortfolioPage;
