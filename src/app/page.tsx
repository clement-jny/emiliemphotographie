import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { BackgroundImageSlider } from '@/components/backgroundImageSlider';

export default function Landing() {
  return (
    <main className='h-screen flex flex-col justify-center items-center text-white'>
      <BackgroundImageSlider />

      <h1 id='title' className='text-8xl mb-10 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent'>EmilieM Photographie</h1>

      <div className='flex'>
        <Button variant='link' className='text-white'>Portfolio</Button>

        <Separator orientation='vertical' className='mx-2' />

        <Button variant='link' className='text-white'>À propos</Button>

        <Separator orientation='vertical' className='mx-2' />

        <Button variant='link' className='text-white'>Tarif</Button>

        <Separator orientation='vertical' className='mx-2' />

        <Button variant='link' className='text-white'>Contact</Button>
      </div>
    </main>
  )
}
