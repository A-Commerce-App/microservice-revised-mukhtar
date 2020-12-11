/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { CarouselIMG } from './styleFile.jsx';

class CarouselItem extends React.Component {
  constructor(props) {
    super(props);
    this.hoverHandler = this.hoverHandler.bind(this);
  }

  hoverHandler(event) {
    this.props.changeActive(event.target.src);
  }

  render() {
    return (
      <div className="image">
        <CarouselIMG onMouseOver={this.hoverHandler} src={this.props.image} />

      </div>
    );
  }
}

export default CarouselItem;
