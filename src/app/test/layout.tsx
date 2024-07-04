'use client';
import { useEffect, useState } from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='relative'>
      <header
        className={`fixed top-0 z-10 w-full bg-white ${scrollY > 100 ? 'top-[-60px]' : ''}`}>
        First Header
      </header>
      <header
        className={`absolute top-[60px] z-[9] w-full bg-[#f8f8f8] ${scrollY > 100 ? 'fixed top-0' : ''}`}>
        Second Header
      </header>
      <main>{children}</main>
    </div>
  );
};
