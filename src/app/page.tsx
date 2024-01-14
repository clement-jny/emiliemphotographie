import Image from 'next/image';
import { Button } from '@/components/ui/button';
// import { Separator } from '@/components/ui/separator';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Landing() {
  return (
    <main className='h-screen flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover'>
      <h1 className='text-8xl mb-10'>Emilie.M Photographie</h1>
      {/* <Image src='/signature.png' alt='Signature' width={3000} height={2000} /> */}

      {/* <div className='flex justify-between'>
        <Button variant='ghost'>Portfolio</Button>

        <Separator />

        <Button variant='ghost'>À propos</Button>

        <Separator />

        <Button variant='ghost'>Tarif</Button>

        <Separator />

        <Button variant='ghost'>Contact</Button>
      </div> */}

      {/* <Separator /> */}

      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">

                <Image src={'/i20n.jpg'} alt='Voiture' height={500} width={300} />


                <span className="text-4xl font-semibold">{index + 1}</span>


              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main >
  )
}
