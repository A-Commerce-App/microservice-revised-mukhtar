/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReactDOM from 'react-dom';
import ModalCarousel from './modalCarousel.jsx';
import { ModalStyle, BackgroundStyle } from './styleFile.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.props.toggleModal();
  }

  render() {
    if (this.props.showModal) {
      return ReactDOM.createPortal(
        <>
          <BackgroundStyle onClick={this.clickHandler} />
          <ModalStyle>
            <ModalCarousel
              activeImage={this.props.activeImage}
              productName={this.props.productName}
              images={this.props.images}
              changeActiveModal={this.changeActiveModal}
            />
          </ModalStyle>
        </>, document.getElementById('portal'),
      );
    }
    return (null);
  }
}

export default Modal;
