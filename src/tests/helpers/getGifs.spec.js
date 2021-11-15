import { getGifs } from '../../helpers/getGifs';

describe('Tests getGifs', () => {
  it('should receive 10 elements', async() => {
    const gifs = await getGifs('Lord of the Rings');

    expect( gifs.length ).toBe( 10 );
  })

  it('should receive 0 elements if argument is an empty string', async() => {
    const gifs = await getGifs('');

    expect( gifs.length ).toBe( 0 );
  })
})