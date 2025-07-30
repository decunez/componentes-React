import React from 'react';

const Lista = ({ elementos, ordenada = false, className }) => {
  const ListComponent = ordenada ? 'ol' : 'ul';
  
  return (
    <ListComponent className={`list-group ${className || ''}`}>
      {elementos.map((elemento, index) => (
        <li key={index} className="list-group-item">{elemento}</li>
      ))}
    </ListComponent>
  );
};

export default Lista;