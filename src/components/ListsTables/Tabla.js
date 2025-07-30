import React from 'react';

const Tabla = ({ cabecera, datos, className }) => {
  return (
    <table className={`table table-striped ${className || ''}`}>
      <thead>
        <tr>
          {cabecera.map((columna, index) => (
            <th key={index}>{columna}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {datos.map((fila, indexFila) => (
          <tr key={indexFila}>
            {fila.map((celda, indexCelda) => (
              <td key={indexCelda}>{celda}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;