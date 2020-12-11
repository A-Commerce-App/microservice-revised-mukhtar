import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Carousel from '../client/src/carousel.jsx';

Enzyme.configure({ adapter: new Adapter() });

 const images = ['https://zainfecservice.s3.amazonaws.com/Random+Images/18.jpg', 'https://zainfecservice.s3.amazonaws.com/Random+Images/37.jpg', 'https://zainfecservice.s3.amazonaws.com/Random+Images/3.jpg']

describe('Testing carousel rendering', () => {

  it('is rendering the component', () => {
    const wrapper = shallow(<Carousel images={images}/>);
    expect(wrapper.exists()).toBe(true);
  });

  it('is rendering individual images', () => {
    const wrapper = mount(<Carousel images={images}/>);
    expect(wrapper.find('img').exists()).toBe(true);
  });
});