import Image from 'next/image';

const Contact = () => {
  return (
    <div>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />

      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </div>
  )
};

export default Contact;
