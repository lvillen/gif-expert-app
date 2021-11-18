import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Tests useFetchGifs Hook', () => {
  it('should return initial state', async() => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Lord of the Rings' ) );
    const { data, loading } = result.current;

    console.log(result);
    console.log(data, loading);
    await waitForNextUpdate();


    expect( data ).toEqual([]);
    expect( loading ).toBe(true);
  });

  it('should return an array of images and loading as false', async() => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Lord of the Rings' ) );
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect( data.length ).toBe(10);
    expect( loading ).toBe(false);


  });
});