import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( categoryProp ) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect( () => {
    getGifs( categoryProp ).then( imgs => {
      setState({
        data: imgs,
        loading: false
      });
    });
  }, [ categoryProp ]);

  return state;
};