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

  //   useEffect(() => {
  // console.log(window.location.href.split('#'));

  //     // When the user scrolls down 50px from the top of the document, resize the header's font size
  //     window.onscroll = function () {
  //       scrollFunction();
  //     };

  //     function scrollFunction() {
  //       if (
  //         document.body.scrollTop > 50 ||
  //         document.documentElement.scrollTop > 50
  //       ) {
  //         document.getElementById('header')!.style.fontSize = '30px';
  //       } else {
  //         document.getElementById('header')!.style.fontSize = '90px';
  //       }
  //     }
  //   }, []);

  //   const [scrollY, setScrollY] = useState(0);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       setScrollY(window.scrollY);
  //     };

  //     window.addEventListener('scroll', handleScroll);

  //     let prevScrollpos = window.pageYOffset;

  //     window.onscroll = function () {
  //       const currentScrollPos = window.pageYOffset;

  //       if (prevScrollpos > currentScrollPos) {
  //         document.getElementById('navbar')!.style.top = '0';
  //         document.getElementById('navbar')!.classList.add('static');
  //       } else {
  //         document.getElementById('navbar')!.style.top = '-80px';
  //         document.getElementById('navbar')!.classList.add('static');
  //       }

  //       prevScrollpos = currentScrollPos;
  //     };

  //     return () => {
  //       window.removeEventListener('scroll', handleScroll);
  //     };

  //     // console.log('scroll');
  //   }, []);

  return (
    <>
      <div
        id='navbar'
        className={`top-0 z-50 flex h-20 w-full items-center justify-center bg-purple-400`}
        style={{ transition: 'top 0.3s' }}>
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
      </div>

      <div
        className={` top-0 z-50 flex h-12 items-center justify-center gap-5 border-b border-border/40 bg-background/95 backdrop-blur ${scrollY > 0 ? 'top-20' : ''}`}>
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

      {/* <div
        style={{
          padding: '15px 15px 2500px',
          fontSize: '30px',
          marginTop: '30px',
        }}>
        <p>
          <b>
            This example demonstrates how to hide a navbar when the user starts
            to scroll the page.
          </b>
        </p>
        <p>Scroll down this frame to see the effect!</p>
        <p>Scroll up to show the navbar.</p>
        <p>
          Lorem ipsum dolor dummy text sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor dummy text sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div> */}

      {/* <div
        id='header'
        style={{
          backgroundColor: '#f1f1f1',
          padding: '50px 10px',
          color: 'black',
          textAlign: 'center',
          fontSize: '90px',
          fontWeight: 'bold',
          position: 'sticky',
          top: '120px',
          width: '100%',
          transition: '0.2s',
        }}>
        Header
      </div>

      <div
        style={{
          marginTop: '200px',
          padding: '15px 15px 2500px',
          fontSize: '30px',
        }}>
        <p>
          <b>
            This example demonstrates how to shrink a header when the user
            starts to scroll the page.
          </b>
        </p>
        <p>Scroll down this frame to see the effect!</p>
        <p>Scroll to the top to remove the effect.</p>
        <p>
          Lorem ipsum dolor dummy text sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div> */}

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
    </>
  );
};

export default PortfolioPage;
