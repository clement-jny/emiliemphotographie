'use client';

import SharedLayout from '@/components/shared-layout';

import { Button } from '@/components/ui/button';
// import Image from 'next/image';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
// import { ThemeToggle } from '@/components/theme-toggle';
// import { ChevronDownIcon, ChevronLeft, SearchIcon } from 'lucide-react';

// import SharedLayout from '@/components/shared-layout';

interface Artwork {
  artist: string;
  art: string;
}

const works: Artwork[] = [
  {
    artist: 'Ornella Binni',
    art: 'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Tom Byrom',
    art: 'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Vladimir Malyavko',
    art: 'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80',
  },
];

const PortfolioPage = () => {
  const pathname = usePathname();

  const activeSection = useRef('animaux-anchor');
  //   const [activeSection, setActiveSection] = useState('');

  //   useEffect(() => {
  // const handleScroll = () => {
  //   const header = document.getElementById('myHeader');
  //   const sticky = header!.offsetTop;
  //   if (window.pageYOffset > sticky) {
  //     header!.classList.add('sticky');
  //   } else {
  //     header!.classList.remove('sticky');
  //   }
  //   console.log('activeSection.current : ' + activeSection.current);
  //   const pSection = document.getElementById('portrait-section');
  //   const pTitle = document.getElementById('portrait-anchor');
  //   if (pSection !== null && pTitle !== null) {
  //     // console.log('pSection.offsetTop : ' + pSection.offsetTop);
  //     console.log('pSection.offsetHeight : ' + pSection.offsetHeight);
  //     console.log('window.scrollY : ' + window.scrollY);
  //     console.log('pTitle.offsetTop : ' + pTitle.offsetTop);
  //     console.log('pTitle.offsetHeight : ' + pTitle.offsetHeight);
  //     if (pTitle.offsetTop + pTitle.offsetHeight === pSection.offsetHeight) {
  //       console.log('end of section');
  //       activeSection.current = 'animaux-anchor';
  //     }
  //   }
  //       const sections = document.querySelectorAll(
  //         '#portrait-anchor, #animaux-anchor, #mariage-anchor, #divers-anchor',
  //       );
  //       console.log(sections);
  //       setActiveSection('');
  //       const scrollPosition = window.scrollY + 250;
  //       sections.forEach((section) => {
  //         const sectionTop = section.offsetTop;
  //         const sectionHeight = section.offsetHeight;
  //         if (
  //           scrollPosition >= sectionTop &&
  //           scrollPosition <= sectionTop + sectionHeight
  //         ) {
  //           setActiveSection('portrait-anchor');
  //         }
  //       });
  // };
  // window.addEventListener('scroll', handleScroll);
  // return () => {
  //   window.removeEventListener('scroll', handleScroll);
  // };
  //   }, []);

  return (
    <SharedLayout>
      <div className='sticky top-20 z-50 flex h-20 items-center justify-center gap-5 bg-purple-600'>
        <nav>
          <Button variant='link' asChild>
            <Link href='#portrait'>Portrait</Link>
          </Button>

          <Button variant='link' asChild>
            <Link href='#animaux'>Animaux</Link>
          </Button>
          <Button variant='link' asChild>
            <Link href='#mariage'>Mariage</Link>
          </Button>
          <Button variant='link' asChild>
            <Link href='#divers'>Divers</Link>
          </Button>
        </nav>
      </div>

      <main>
        <section
          id='portrait'
          className='flex flex-col items-center justify-center bg-red-300'>
          <div>
            <h1 className='sticky top-0 text-8xl'>Portrait</h1>
            <div>
              <div>
                <strong>Andrew Alfred</strong>
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

        <section
          id='animaux'
          className='flex flex-col items-center justify-center bg-blue-300'>
          <div>
            <h1 className='sticky top-0 text-8xl'>Animaux</h1>
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

        <section
          id='mariage'
          className='flex flex-col items-center justify-center bg-green-300'>
          <div>
            <h1 className='sticky top-0 text-8xl'>Mariage</h1>
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

        <section
          id='divers'
          className='flex flex-col items-center justify-center bg-yellow-300'>
          <div>
            <h1 className='sticky top-0 text-8xl'>Divers</h1>
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
      </main>
    </SharedLayout>
  );
};

export default PortfolioPage;
