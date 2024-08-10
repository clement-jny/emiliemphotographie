'use client';

// import img1 from '../../public/divers/Balade- Emilie WEB-3.jpg';
// import img2 from '../../public/divers/Balade- Emilie WEB-10.jpg';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Gallery } from '@/ts/types/gallery.types';

export const GallerySection = ({ text, folder }: Gallery) => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`/api/image/${folder}`, {
          method: 'GET',
        });
        // console.log('response', response);

        const data = await response.json();
        // console.log(data);

        setImages(data.images);
      } catch (error) {
        console.error('Failed to fetch images', error);
      }
    };

    fetchImages();
  }, [folder]);

  return (
    <section id={`${text.toLowerCase()}`} className='h-full bg-red-300 p-2'>
      <h1 className='mb-1 text-8xl'>{text}</h1>

      <div className='grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5'>
        {/* grid grid-cols-5 grid-rows-4 gap-4 */}
        {images.map((src, index) => (
          <div key={index} className=''>
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={200}
              height={200}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
            {/* {index + 1} */}
          </div>
        ))}
        {/* <div className='col-span-2 row-span-2 border-2'>
          <Image
            src={img1}
            alt='Image 1'
            width={0}
            height={0}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
          1
        </div>

        <div className='col-start-3 border-2'>
          <Image src={img2} alt='Image 2' />2
        </div>

        <div className='col-start-4 border-2'>
          <Image
            src='/placeholder.jpg'
            width={200}
            height={200}
            alt='Image 3'
          />
          3
        </div>
        <div className='col-start-5 border-2'>
          <Image
            src='/placeholder.jpg'
            width={200}
            height={200}
            alt='Image 3'
          />
          4
        </div>

        <div className='col-start-3 row-start-2 border-2'>5</div>

        <div className='col-span-2 col-start-4 row-span-2 row-start-2 border-2'>
          6
        </div>

        <div className='row-start-3 border-2'>7</div>

        <div className='col-span-2 row-span-2 row-start-3 border-2'>8</div>

        <div className='row-start-4 border-2'>9</div>

        <div className='col-start-4 row-start-4 border-2'>10</div>
        <div className='col-start-5 row-start-4 border-2'>11</div> */}
      </div>

      {/* <div className='grid w-[50%] grid-cols-3 gap-5'>
        <Image
          src='/divers/Balade- Emilie WEB-3.jpg'
          width={0}
          height={0}
          alt='Image 1'
          className='row-span-2 size-20'
        />
        <Image
          src='/divers/Balade- Emilie WEB-10.jpg'
          width={500}
          height={500}
          alt='Image 2'
          className='row-span-2'
        />
        <Image
          src='/placeholder.jpg'
          width={200}
          height={200}
          alt='Image 3'
          className='col-span-2 row-span-2'
        />
        <Image
          src='/placeholder.jpg'
          width={200}
          height={200}
          alt='Image 4'
          className='large'
        />
        <Image src='/placeholder.jpg' width={200} height={200} alt='Image 5' />
        <Image src='/placeholder.jpg' width={200} height={200} alt='Image 6' />
        <Image
          src='/placeholder.jpg'
          width={200}
          height={200}
          alt='Image 1'
          className='wide'
        />
        <Image
          src='/placeholder.jpg'
          width={200}
          height={200}
          alt='Image 2'
          className='tall'
        />
        <Image src='/placeholder.jpg' width={200} height={200} alt='Image 3' />
        <Image
          src='/placeholder.jpg'
          width={200}
          height={200}
          alt='Image 4'
          className='large'
        />
        <Image src='/placeholder.jpg' width={200} height={200} alt='Image 5' />
        <Image src='/placeholder.jpg' width={200} height={200} alt='Image 6' />
      </div> */}
    </section>
  );
};
