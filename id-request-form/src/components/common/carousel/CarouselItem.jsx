import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const CarouselItem = ({ items }) => {
  
  return (
    <Carousel>
      {items.map((item, index) => (
                 
        <Carousel.Item key={index}>
          <img
            height={500}
            width={1000}
            className="d-block img-fluid img"
            src={item.icon}
            alt={item.alt}
          />
          {/* <Carousel.Caption>
            <h5 className="m-0">{item.label}</h5>
            <p>{item.description}</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselItem;
