import SharedLayout from '@/components/shared-layout';

const PortfolioPage = () => {
  return (
    <SharedLayout>
      <main className='flex flex-col items-center justify-center'>
        <h1 data-testid='title' className='mb-10 h-screen text-8xl'>
          Portfolio Page 1
        </h1>
        <h1 data-testid='title' className='mb-10 h-screen text-8xl'>
          Portfolio Page 2
        </h1>
      </main>
    </SharedLayout>
  );
};

export default PortfolioPage;
