import React from 'react';
import { ActiveIMG } from './styleFile.jsx';

class ActiveImage extends React.Component {
  constructor(props) {
    super(props);
    this.hoverHandlerOn = this.hoverHandlerOn.bind(this);
    this.hoverHandlerOff = this.hoverHandlerOff.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  hoverHandlerOn(event) {
    this.props.toggleZoomOn(event.target.src, event.pageX, event.pageY);
  }

  hoverHandlerOff() {
    this.props.toggleZoomOff();
  }

  clickHandler() {
    this.props.toggleModal();
  }

  render() {
    return (
      <div>
        <ActiveIMG
          onClick={this.clickHandler}
          onMouseMove={this.hoverHandlerOn}
          onMouseLeave={this.hoverHandlerOff}
          src={this.props.activeImage}
        />
      </div>
    );
  }
}

export default ActiveImage;
