import React from 'react';
import PropTypes from 'prop-types';
import 'animate.css';
import { AddCategory } from './AddCategory';

export const GifGridItem = ({ title, url }) => {
  return (
    <>
      <div className="card animate__animated animate__fadeInUp">
        <img src={ url } alt={ title } />
        <p> { title } </p>
      </div>
    </>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}