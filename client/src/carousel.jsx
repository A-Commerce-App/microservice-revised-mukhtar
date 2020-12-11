/* eslint-disable react/destructuring-assignment */
import React from 'react';
import CarouselItem from './carouselItem.jsx';

const Carousel = (props) => (
  <div>
    {props.images.map((image) => (
      <CarouselItem
        image={image}
        changeActive={props.changeActive}
      />
    ))}
  </div>
);

export default Carousel;
