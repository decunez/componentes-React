import React from 'react';

const Imagen = ({ src, alt, width, height, className }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      width={width} 
      height={height}
      className={`img-fluid ${className || ''}`}
    />
  );
};

export default Imagen;