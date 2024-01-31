import Carousel from 'react-bootstrap/Carousel';
import img1 from './assets/finance.png'
import img2 from './assets/mobilepayment.png'
import img3 from './assets/onlinepayment.png'
import  CarouselItem  from './CarouselItem';

function Carousell() {

  const items = [
    {
      label: "First slide label",
      icon:img1,
      alt: "First Slide Image",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum"
    },
    {
      label: "Second slide label",
      icon:  img2 ,
      alt: "Second Slide Image",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum"
    },
    {
      label: "Third slide label",
      icon: img3,
      alt: "Third Slide Image",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum"
    },
  ]
  return (
    <Carousel data-bs-theme="dark" className='m-0'>
      <CarouselItem items={items} />
    </Carousel>
  );
}

export default Carousell;