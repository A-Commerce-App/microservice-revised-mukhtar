import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ActiveImage from '../client/src/activeImage.jsx';

Enzyme.configure({ adapter: new Adapter() });

 const image = 'https://zainfecservice.s3.amazonaws.com/Random+Images/16.jpg'

describe('Testing image rendering', () => {

  it('is rendering the component', () => {
    const wrapper = shallow(<ActiveImage activeImage={image}/>);
    expect(wrapper.exists()).toBe(true);
  });

  it('is rendering image from the given SRC', () => {
    const wrapper = shallow(<ActiveImage activeImage={image}/>);
    expect(wrapper.find('img').prop('src')).toEqual('https://zainfecservice.s3.amazonaws.com/Random+Images/16.jpg');
  });


});