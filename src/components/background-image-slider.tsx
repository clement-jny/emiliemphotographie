'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export const BackgroundImageSlider = () => {
  const images = [
    '/background/bg-1.jpg',
    '/background/bg-2.jpg',
    // '/background/bg-3.jpg',
    // '/background/bg-4.jpg',
    // '/background/bg-5.jpg',
    '/background/bg-6.jpg',
  ];
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(myInterval);
  }, [images.length]);

  return (
    <Image
      src={images[imageIndex]}
      fill={true}
      alt={'Background Image'}
      className='-z-10'
    />
  );
};
