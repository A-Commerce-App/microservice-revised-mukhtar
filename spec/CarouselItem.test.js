import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CarouselItem from '../client/src/carouselItem.jsx';

Enzyme.configure({ adapter: new Adapter() });

 const image = 'https://zainfecservice.s3.amazonaws.com/Random+Images/18.jpg'

describe('Testing image rendering', () => {

  it('is rendering the component', () => {
    const wrapper = shallow(<CarouselItem image={image}/>);
    expect(wrapper.exists()).toBe(true);
  });

  it('is rendering image from the given SRC', () => {
    const wrapper = shallow(<CarouselItem image={image}/>);
    expect(wrapper.find('img').prop('src')).toEqual('https://zainfecservice.s3.amazonaws.com/Random+Images/18.jpg');
  });


});