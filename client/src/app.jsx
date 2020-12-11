/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import Carousel from './carousel.jsx';
import ActiveImage from './activeImage.jsx';
import Modal from './modal.jsx';
import ImageZoom from './imageZoom.jsx';
import { Container } from './styleFile.jsx';
import randInclusive from './utils/randInclusive.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      images: [],
      activeImage: '',
      showModal: false,
      showZoom: false,
      zoomParameters: {
        imgSrc: '',
        x: 0,
        y: 0,
      },
    };
    this.changeActive = this.changeActive.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleZoomOn = this.toggleZoomOn.bind(this);
    this.toggleZoomOff = this.toggleZoomOff.bind(this);
  }

  componentDidMount() {


    const urlParts = window.location.href.split('/')
    const id = urlParts[urlParts.length - 1] ? urlParts[urlParts.length - 1] : randInclusive(0, 10000000)
    this.getImages(id);
  }

  getImages(val) {
    // axios.get(`/api/product/${val}`)
    //   .then((response) => {
    //     this.setState({
    //       productName: response.data[0].productName,
    //       images: response.data[0].images,
    //       activeImage: response.data[0].images[0],
    //     });
    //   });

    fetch(`/api/product/${val}`).then(res => res.json())
      .then((data) => {
        const myImages = typeof data.images === 'string' ? JSON.parse(data.images) : data.images

        console.log(myImages)
        this.setState({
          productName: data.productName,
          images: myImages,
          activeImage: myImages[0],
        })

      })
  }

  changeActive(image) {
    this.setState({
      activeImage: image,
    });
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  toggleZoomOn(image, x, y) {
    this.setState({
      showZoom: true,
      zoomParameters: {
        imgSrc: image,
        x: ((x / 600) * 100) - 5,
        y: ((y / 600) * 100) - 5,
      },
    });
  }

  toggleZoomOff() {
    this.setState({
      showZoom: false,
      zoomParameters: {
        imgSrc: '',
        x: 0,
        y: 0,
      },
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Carousel
            images={this.state.images}
            changeActive={this.changeActive}
          />
          <ActiveImage
            activeImage={this.state.activeImage}
            toggleModal={this.toggleModal}
            toggleZoomOn={this.toggleZoomOn}
            toggleZoomOff={this.toggleZoomOff}
          />
          <ImageZoom
            showZoom={this.state.showZoom}
            zoomParameters={this.state.zoomParameters}
          />
        </Container>
        <Modal
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
          productName={this.state.productName}
          images={this.state.images}
          activeImage={this.state.activeImage}
          changeActive={this.changeActive}
        />
      </div>
    );
  }
}

export default App;
