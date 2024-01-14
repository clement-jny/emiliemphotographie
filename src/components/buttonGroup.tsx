import { Button } from "./ui/button";

const ButtonGroup = () => {
  return (
    <div className='flex justify-between'>
      <Button variant='link'>Portfolio</Button>

      <span style={{ borderLeft: '1px solid black', height: '100%', marginLeft: '5px', marginRight: '5px' }}></span>

      <Button variant='ghost'>À propos</Button>

      <span style={{ borderLeft: '1px solid black', height: '100%', marginLeft: '5px', marginRight: '5px' }}></span>

      <Button>Tarif</Button>

      <span style={{ borderLeft: '1px solid black', height: '100%', marginLeft: '5px', marginRight: '5px' }}></span>

      <Button>Contact</Button>
    </div>
  );
};

export { ButtonGroup };
