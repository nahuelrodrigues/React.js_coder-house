import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Titulo = () => {
  return <h1>Lista de Posts curso de React</h1>;
};

ReactDOM.render(
  <App>
    <Titulo />
  </App>,
  document.getElementById('root')
);
