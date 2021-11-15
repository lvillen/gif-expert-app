import React from 'react';
import { GifGrid } from '../../components/GifGrid';
import { shallow } from 'enzyme';
import useFetchGifs from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Tests GifGrid Component', () => {
  const category = 'Hello world';
  const mockUseFetchGifs = useFetchGifs;
  
  it('should match the snapshot', () => {
    const wrapper = shallow(<GifGrid categoryProp={ category }/>);

    mockUseFetchGifs.mockImplementation( () => {
      return { data: [], loading: true }
    });

    expect( wrapper ).toMatchSnapshot();
  });

  it('should show items when images loaded with useFetchGifs', () => {
    const wrapper = shallow(<GifGrid categoryProp={ category }/>);
    
    const gifs = [{
      id: 'abc',
      url: 'https://localhost/an/image.jpg',
      title: 'A title'
    }]
    
    useFetchGifs.mockReturnValue({ data: gifs, loading: false });
    
    expect( wrapper ).toMatchSnapshot();
  });
});