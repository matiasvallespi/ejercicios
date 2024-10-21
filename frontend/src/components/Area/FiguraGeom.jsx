import React, { useState } from 'react'
import { Cuadrado } from './Cuadrado';
import { Rectangulo } from './Rectangulo';
import { Circulo } from './Circulo';

export const FiguraGeom = () => {

  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

  const manejarCambio = (event) => {
    setOpcionSeleccionada(event.target.value);
  };

  

  return (
    <div>
      {opcionSeleccionada === "cuadrado" ? <Cuadrado /> : ""}
      {opcionSeleccionada === "rectangulo" ? <Rectangulo /> : ""}
      {opcionSeleccionada === "circulo" ? <Circulo /> : ""}
      <select id="opciones" value={opcionSeleccionada} onChange={manejarCambio}>
        <option>Selecc</option>
        <option value="cuadrado">□</option>
        <option value="rectangulo">▭</option>
        <option value="circulo">○</option>
      </select>
    </div>
  );
};
