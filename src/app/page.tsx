import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Landing() {
  return (
    <main className=' flex flex-col justify-center items-center'>
      <h1 style={{ fontSize: '100px' }}>EmilieM Photographie</h1>
      <Image src='/signature.png' alt='Signature' width={3000} height={2000} />

      <div className='flex justify-between'>
        <Button variant='link'>Portfolio</Button>

        <span style={{ borderLeft: '1px solid black', height: '100%', marginLeft: '5px', marginRight: '5px' }}></span>

        <Button variant='ghost'>À propos</Button>

        <span style={{ borderLeft: '1px solid black', height: '100%', marginLeft: '5px', marginRight: '5px' }}></span>

        <Button>Tarif</Button>

        <span style={{ borderLeft: '1px solid black', height: '100%', marginLeft: '5px', marginRight: '5px' }}></span>

        <Button>Contact</Button>
      </div>
    </main >
  )
}
