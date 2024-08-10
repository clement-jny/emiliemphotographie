import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { BackgroundImageSlider } from '@/components/background-image-slider';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <main className='flex h-screen flex-col items-center justify-center text-white'>
      <BackgroundImageSlider />

      <h1 data-testid='title' className='mb-10 text-8xl'>
        EmilieM Photographie
      </h1>

      <div className='flex'>
        <Button variant='link' className='text-white' asChild>
          <Link href='/portfolio'>Portfolio</Link>
        </Button>

        <Separator orientation='vertical' className='mx-2' />

        <Button variant='link' className='text-white' asChild>
          <Link href='/about'>À propos</Link>
        </Button>

        <Separator orientation='vertical' className='mx-2' />

        <Button variant='link' className='text-white' asChild>
          <Link href='/price'>Tarif</Link>
        </Button>

        <Separator orientation='vertical' className='mx-2' />

        <Button variant='link' className='text-white' asChild>
          <Link href='/contact'>Contact</Link>
        </Button>
      </div>
    </main>
  );
};

export default LandingPage;
