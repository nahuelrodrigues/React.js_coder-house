import React from 'react';
import Comentario from './components/Comentario';
import './style.css';

const comentarios = [
  {
    nombre: 'Milena',
    mensaje: 'Felicidades'
  },
  {
    nombre: 'Pedro',
    mensaje: 'Too good'
  },
  {
    nombre: 'Martin',
    mensaje: 'OK'
  },
  {
    nombre: 'Felipe',
    mensaje: 'Too bad'
  }
];

const renderComentarios = onSeleccionarComentario => {
  return comentarios.map(comentario => {
    return (
      <Comentario
        nombre={comentario.nombre}
        comentario={comentario.mensaje}
        onSeleccionar={() => onSeleccionarComentario(comentario.mensaje)}
      />
    );
  });
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mensajeActual: null };
  }

  onSeleccionarComentario(mensaje) {
    this.setState({ mensajeActual: mensaje });
  }

  render() {
    return (
      <div>
        <div>{this.props.children}</div>
        {renderComentarios(this.onSeleccionarComentario.bind(this))}
        <div>{this.state.mensajeActual}</div>
      </div>
    );
  }
}

export default App;
