import React from 'react';

const Titulo = ({ texto, nivel = 1, className }) => {
  const Heading = `h${nivel}`;
  return <Heading className={className}>{texto}</Heading>;
};

export default Titulo;