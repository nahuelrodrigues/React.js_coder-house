import React from 'react';
import './style.css';

function SuperButton() {
  function doSomething() {
    console.log('Hice click!!!');
  }

  return (
    <button type="button" onClick={doSomething}>
      Click me!
    </button>
  );
}

function SuperForm(props) {
  console.log(props);
  return (
    <>
      <h1>{props.title}</h1>
      {props.renderButton()}
    </>
  );
}

export default function App() {
  return (
    <SuperForm title="Hola Coder desde React" renderButton={SuperButton} />
  );
}
