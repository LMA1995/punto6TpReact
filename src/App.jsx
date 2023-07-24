import React, { useState } from 'react';
import Colores from './components/Colores';
import './App.css';

const App = () => {
  const [coloresGuardados, setColoresGuardados] = useState([]);

  const borrarColor = (colorBorrar) => {
    const coloresFiltrados = coloresGuardados.filter((color) => color !== colorBorrar);
    setColoresGuardados(coloresFiltrados);
  };

  return (
    <>
      <div className='App'></div>
      <Colores coloresGuardados={coloresGuardados} borrarColor={borrarColor} />
    </>
  );
};

export default App;
