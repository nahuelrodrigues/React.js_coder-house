import React, { useState, useEffect } from 'react';
import './style.css';

const numbers = [1, 2, 3, 4, 5];

const App = () => {
  /*   const [number, setNumber] = useState(0); */
  const [characters, setCharacters] = useState([]);

  // CUANTAS VECES LO PIDE? -
  // MANEJAR EL CICLO DE VIDA
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      //SI EXISTE ESTO, ENTONCES JSON
      .then(response => response.json())
      // ACÁ BUSCAMOS LO QUE NECESITAMOS, SE PUEDE VER POR NAVEGADOR DEV
      .then(data => setCharacters(data.results));
    //CATCH LO USAMOS PARA CUANDO SE CAE EL SERVER O HAY ALGUN ERROR DE PETICIÓN

    // CON ARRAY VACÍO UNA SÓLA VEZ
  }, []);

  return (
    <div className="app.container">
      <ul />
      {/* LO DESESTRUCTURO PREVIAMENTE ACÁ PARA NO TENER QUE ACCEDER TODO EL TIEMPO AL OBJETO TIPO "CHARACTER."LOQUEQUIERA" ...... MAPEO UN OBJETO*/}
      {characters.map(({ id, image, name }) => (
        <li key={id}>
          {name}
          <img src={image} />{' '}
        </li>
      ))}
      {/*       <button type="button" oncClick={() => setNumber(number - 1)}>
        restar
      </button>
      <h1>{number}</h1>
      <button type="button" oncClick={() => setNumber(number + 1)}>
        {' '}
        sumar
      </button> */}
    </div>
  );
};

export default App;
