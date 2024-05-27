type GallerySectionProps = {
  side: 'left' | 'right';
  text: string;
  theme: string;
};

export const GallerySection = ({ side, text, theme }: GallerySectionProps) => {
  return (
    // <section id='projects' className='content-section'>
    //   <div className='text sticky'>
    //     <p>Texte à gauche qui se colle en haut de la page en défilement</p>
    //   </div>
    //   <div className='gallery'>
    //     <img src='image1.jpg' alt='Image 1' />
    //     <img src='image2.jpg' alt='Image 2' />
    //     <img src='image3.jpg' alt='Image 3' />
    //   </div>
    // </section>

    <section id={`${text}`} className='h-full bg-red-300 pt-10'>
      <div className='flex w-full justify-center'>
        {side === 'left' ? (
          <>
            <h1 className='sticky top-0 z-10 w-[50%] text-center text-8xl'>
              {text}
            </h1>

            <div className='w-[50%] text-center'>
              {/* <div>
					<strong>{text}</strong>
				</div> */}
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
          </>
        ) : (
          <>
            <div className='w-[50%] text-center'>
              {/* <div>
					<strong>{text}</strong>
				</div> */}
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

            <h1 className='sticky top-0 w-[50%] text-center text-8xl'>
              {text}
            </h1>
          </>
        )}
      </div>
    </section>
  );
};
