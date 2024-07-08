'use client';

import './style.css';
import Layout from './layout';
import Image from 'next/image';

const TestPage = () => {
  //   useEffect(() => {
  //     const mainHeader = document.getElementById('main-header');
  //     const secondaryHeader = document.getElementById('secondary-header');
  //     const pageContent = document.getElementById('page-content');

  //     let prevScrollPos = window.pageYOffset;

  //     window.addEventListener('scroll', () => {
  //       const currentScrollPos = window.pageYOffset;

  //       if (prevScrollPos > currentScrollPos) {
  //         // Scrolling up
  //         mainHeader!.style.transform = 'translateY(0)';
  //         secondaryHeader!.style.transform = 'translateY(0)';
  //       } else {
  //         // Scrolling down
  //         mainHeader!.style.transform = 'translateY(-100%)';
  //         secondaryHeader!.style.transform = 'translateY(0)';
  //       }

  //       prevScrollPos = currentScrollPos;
  //     });
  //   }, []);

  return (
    <Layout>
      <div className='pt-[120px]'>
        <div className='flex justify-between'>
          <h2 className='flex-1 p-[20%]'>Title 1</h2>
          <div className='flex flex-[2] flex-wrap'>
            {/* Add your images here */}
            <Image
              className='m-[10px] max-w-full'
              width={200}
              height={200}
              src='/placeholder.jpg'
              alt='Image 1'
            />
            <Image
              className='m-[10px] max-w-full'
              width={200}
              height={200}
              src='/image2.jpg'
              alt='Image 2'
            />
          </div>
        </div>

        <div className='flex justify-between'>
          <div className='flex flex-[2] flex-wrap'>
            {/* Add your images here */}
            <Image
              className='m-[10px] max-w-full'
              width={200}
              height={200}
              src='/image3.jpg'
              alt='Image 3'
            />
            <Image
              className='m-[10px] max-w-full'
              width={200}
              height={200}
              src='/image4.jpg'
              alt='Image 4'
            />
          </div>
          <h2 className='flex-1 p-[20%]'>Title 2</h2>
        </div>
        {/* Repeat as needed */}
      </div>
    </Layout>

    // <>
    //   <header className='main-header'>
    //     <nav>
    //       <ul>
    //         <li>
    //           <a href='#home'>Home</a>
    //         </li>
    //         <li>
    //           <a href='#about'>About</a>
    //         </li>
    //       </ul>
    //     </nav>
    //   </header>

    //   <div id='page-content'>
    //     <header className='secondary-header'></header>

    //     <div className='gallery-container'>
    //       <div className='gallery-item'>
    //         <div className='gallery-text'>
    //           <h2>Gallery Title</h2>
    //           <p>Gallery description...</p>
    //         </div>
    //         <div className='gallery-images'></div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default TestPage;
