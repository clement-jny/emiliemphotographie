import { useState } from 'react';

interface Props<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function Carousel<T>({ items, renderItem }: Props<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    // setCurrentIndex(
    //   (prevIndex) => (prevIndex - 1 + items.length) % items.length,
    // );
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    );
  };
  return (
    <div>
      <button onClick={prevItem}>Previous</button>
      {renderItem(items[currentIndex])}
      <button onClick={nextItem}>Next</button>
    </div>
  );
}

export default Carousel;

{
  /* <div>
  {items.map((item, index) => (
    <div key={index}>{renderItem(item)}</div>
  ))}
</div>; */
}

// interface Slide {
//   id: number;
//   imageUrl: string;
//   caption: string;
// }

// const slides: Slide[] = [
//   {
//     id: 1,
//     imageUrl: '/background/bg-1.jpg',
//     caption: 'First slide',
//   },
//   {
//     id: 2,
//     imageUrl: '/background/bg-2.jpg',
//     caption: 'Second slide',
//   },
//   {
//     id: 3,
//     imageUrl: '/background/bg-6.jpg',
//     caption: 'Third slide',
//   },
// ];

// return (
//   <div>
//     <h1>Carousel</h1>
//     <Carousel<Slide>
//       items={slides}
//       renderItem={(slide) => (
//         <div key={slide.id}>
//           <img src={slide.imageUrl} alt={slide.caption} />
//           <p>{slide.caption}</p>
//         </div>
//       )}
//     />
//   </div>
// );
