import React from 'react';

const Enlace = ({ href, texto, className }) => {
  return (
    <a href={href} className={`text-decoration-none ${className || ''}`}>
      {texto}
    </a>
  );
};

export default Enlace;