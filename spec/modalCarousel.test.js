import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ModalCarousel from '../client/src/ModalCarousel.jsx';

Enzyme.configure({ adapter: new Adapter() });

 const image = 'https://zainfecservice.s3.amazonaws.com/Random+Images/12.jpg'

 const images = ['https://zainfecservice.s3.amazonaws.com/Random+Images/18.jpg', 'https://zainfecservice.s3.amazonaws.com/Random+Images/37.jpg', 'https://zainfecservice.s3.amazonaws.com/Random+Images/3.jpg']


describe('Testing image rendering', () => {

  it('is rendering the component', () => {
    const wrapper = shallow(<ModalCarousel activeImage={image} images={images}/>);
    expect(wrapper.exists()).toBe(true);
  });
});