'use client';

import { SharedLayout } from '@/components/shared-layout';
import { Button } from '@/components/ui/button';
import { GallerySection } from '@/components/gallery-section';
// import Image from 'next/image';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const PortfolioPage = () => {
  //   const pathname = usePathname();

  //   const activeSection = useRef('animaux-anchor');
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
    <SharedLayout>
      <div
        className={`top-0 z-50 flex h-12 items-center justify-center bg-blue-500`}>
        {/* gap-5 border-b border-border/40 bg-background/95 backdrop-blur ${scrollY > 0 ? 'top-20' : ''} */}
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
        <GallerySection text='portrait' side='left' theme='portrait' />
        <GallerySection text='animaux' side='right' theme='animaux' />
        <GallerySection text='mariage' side='left' theme='mariage' />
        <GallerySection text='divers' side='right' theme='divers' />
      </main>
    </SharedLayout>
  );
};

export default PortfolioPage;
