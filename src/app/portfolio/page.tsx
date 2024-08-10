'use client';

import { SharedLayout } from '@/components/shared-layout';
import { Button } from '@/components/ui/button';
import { GallerySection } from '@/components/gallery-section';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Path } from '@/ts/types/path.types';

const Paths: Path[] = [
  { href: '#portrait', label: 'Portrait' },
  { href: '#animaux', label: 'Animaux' },
  { href: '#mariage', label: 'Mariage' },
  { href: '#divers', label: 'Divers' },
];

const PortfolioPage = () => {
  const [activeSection, setActiveSection] = useState<string>('portrait');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25, // Trigger when 25% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <SharedLayout>
      {/* Inner layout */}
      <div className='sticky top-20 z-50 flex h-12 items-center justify-center bg-blue-500'>
        <nav>
          {Paths.map((path) => (
            <Button key={path.href} variant='link' asChild>
              <Link
                href={path.href}
                className={`${activeSection === path.href.substring(1) ? 'underline' : ''}`}>
                {path.label}
              </Link>
            </Button>
          ))}
        </nav>
      </div>

      <main>
        <GallerySection text='Portrait' folder='portrait' />
        <GallerySection text='Animaux' folder='animaux' />
        <GallerySection text='Mariage' folder='mariage' />
        <GallerySection text='Divers' folder='divers' />

        {/* <div className='grid auto-rows-[192px] grid-cols-3 gap-4'>
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${
                i === 3 || i === 6 ? 'col-span-2' : ''
              }`}></div>
          ))}
        </div> */}
      </main>
    </SharedLayout>
  );
};

export default PortfolioPage;
