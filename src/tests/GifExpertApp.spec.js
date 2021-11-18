import React from 'react';
import { GifExpertApp } from '../GifExpertApp';
import { shallow } from 'enzyme';

describe('Tests GifExpertApp Component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<GifExpertApp/>);

    expect( wrapper ).toMatchSnapshot();
  });

  it('should show a list of categories', () => {
    const categories = ['Lord of the Rings', 'Game of Thrones'];
    const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('GifGrid').length ).toBe( categories.length );
  });
});