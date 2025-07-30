import React from 'react';

const Boton = ({ texto, onClick, type = 'button', className, disabled }) => {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`btn btn-primary ${className || ''}`}
      disabled={disabled}
    >
      {texto}
    </button>
  );
};

export default Boton;