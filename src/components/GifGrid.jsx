import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import 'animate.css';

export const GifGrid = ({ categoryProp }) => {
  const { data:images, loading } = useFetchGifs( categoryProp );

  return (
    <>
      <h3>{ categoryProp }</h3>

      { loading && <p className="animate__animated animate__flash">Loading</p> }

      <div className="card-grid">
        {
          images.map( img => (
            <GifGridItem 
              key={img.id} 
              { ...img } 
            />
          ))
        }
      </div>

    </>
  );
};
