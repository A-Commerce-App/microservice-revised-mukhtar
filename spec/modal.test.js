import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Modal from '../client/src/Modal.jsx';

Enzyme.configure({ adapter: new Adapter() });

const images = ['https://zainfecservice.s3.amazonaws.com/Random+Images/18.jpg', 'https://zainfecservice.s3.amazonaws.com/Random+Images/37.jpg', 'https://zainfecservice.s3.amazonaws.com/Random+Images/3.jpg']

describe('Testing if modal renders', () => {

  it('is rendering the component', () => {
    const wrapper = shallow(<Modal images={images}/>);
    expect(wrapper.exists()).toBe(true);
  });

});