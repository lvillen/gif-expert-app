import { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categoryProp }) => {
  const [images, setImages] = useState([]);

  useEffect( () => {
    getGifs();
  }, []);

  const getGifs = async() => {
    const url = 'https://api.giphy.com/v1/gifs/search?q=Lord+of+the+Rings&limit=10&api_key=wOYIa1qIXGN2erRRDRcJ8KWrqPA6XiyI';
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      };
    });

    setImages( gifs );
  }

  return (
    <>
      {console.log(images)}
      <h3>{ categoryProp }</h3>
      {
        images.map( img => (
          <GifGridItem 
            key={img.id} 
            { ...img } 
          />
        ))
      }
    </>
  );
};
