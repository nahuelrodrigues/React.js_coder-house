import React from 'react';

const estiloComentario = {
  color: 'pink',
  fontWeight: 600
};

const Comentario = ({ nombre, comentario, onSeleccionar }) => {
  return (
    <div className="contenedor">
      <img
        style={{ objectFit: 'cover' }}
        src="https://img.icons8.com/ios-glyphs/30/000000/user--v1.png"
      />
      <div className="contenido">
        <div style={{ fontWeight: 900 }}>{nombre}</div>
        <div style={estiloComentario}>{comentario}</div>
      </div>
      <button onClick={onSeleccionar}>Seleccionar</button>
    </div>
  );
};

export default Comentario;
