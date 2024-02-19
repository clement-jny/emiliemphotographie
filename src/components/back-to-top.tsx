'use client';

import { MoveUp } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      className={`fixed bottom-5 right-5 size-12 cursor-pointer rounded-full border-0 bg-slate-500 text-white ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={scrollToTop}>
      <MoveUp />
    </Button>
  );
};
// <Button
//   className='fixed bottom-4 right-4'
//   variant='outline'
//   size='icon'
//   onClick={scrollToTop}
//   asChild>
//   <Link href=''>
//     <MoveUp className='size-6' />
//   </Link>
// </Button>
