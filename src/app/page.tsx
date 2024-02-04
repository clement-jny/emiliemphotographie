import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { BackgroundImageSlider } from '@/components/backgroundImageSlider';

export default function LandingPage() {
  return (
    <main className='flex h-screen flex-col items-center justify-center text-white'>
      <a href='#top'>Click here</a>
      <Image alt='A cat' src='.' />
      <BackgroundImageSlider />

      <h1
        data-testid='title'
        className='mb-10 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text p-3 text-8xl text-transparent'>
        EmilieM Photographie
      </h1>

      <div className='flex'>
        <Button variant='link' className='text-white'>
          Portfolio
        </Button>

        <Separator orientation='vertical' className='mx-2' />

        <Button variant='link' className='text-white'>
          À propos
        </Button>

        <Separator orientation='vertical' className='mx-2' />

        <Button variant='link' className='text-white'>
          Tarif
        </Button>

        <Separator orientation='vertical' className='mx-2' />

        <Button variant='link' className='text-white'>
          Contact
        </Button>
      </div>
    </main>
  );
}
