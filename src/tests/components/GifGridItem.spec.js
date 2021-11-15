import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Tests GifGridItem Component', () => {
  const title = 'A title';
  const url = 'https://localhost/image.jpg';
  const wrapper = shallow( <GifGridItem title={ title } url={ url }/> );

  it('should match the snapshot', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  it('should have a p tag with title', () => {
    const p = wrapper.find('p');
    
    expect( p.text().trim() ).toBe( title );
  });

  it('should have an img tag that matches url and must have an alt attribute with the title', () => {
    const img = wrapper.find('img');

    expect( img.prop('src') ).toBe( url );
    expect( img.prop('alt') ).toBe( title );
  });

  it('should have animate__fadeIn in div class', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');

    expect( className.includes('animate__fadeIn') ).toBe( true );
  })
});