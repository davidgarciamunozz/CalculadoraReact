import './App.css';
import './hojas-de-estilo/BotonClear.css';
import './hojas-de-estilo/Pantalla.css';
import './hojas-de-estilo/Boton.css'
import { BotonClear } from './componentes/BotonClear.jsx';
import { Pantalla } from './componentes/Pantalla.jsx';
import {Boton} from './componentes/Boton'
import { useState } from 'react';
import {evaluate} from 'mathjs';

function App() {
  
  const [input, setInput] = useState('');
  
  const agregarInput = valor => {
    setInput(input + valor);
  };
  
  const clear = () => {
    setInput('');
  }

  const calcular = () => {
    if (input === ''){
      return;
    }
    setInput(evaluate(input));
  }


  return (
    <div className="App">
    <div className='contenedor-calculadora'>
      <Pantalla input={input}/>
    <div className="fila">
      <Boton manejarClick={agregarInput}>1</Boton>
      <Boton manejarClick={agregarInput}>2</Boton>
      <Boton manejarClick={agregarInput}>3</Boton>
      <Boton manejarClick={agregarInput}>+</Boton>
    </div>
    <div className="fila">
      <Boton manejarClick={agregarInput}>4</Boton>
      <Boton manejarClick={agregarInput}>5</Boton>
      <Boton manejarClick={agregarInput}>6</Boton>
      <Boton manejarClick={agregarInput}>-</Boton>
    </div>
    <div className="fila">
      <Boton manejarClick={agregarInput}>7</Boton>
      <Boton manejarClick={agregarInput}>8</Boton>
      <Boton manejarClick={agregarInput}>9</Boton>
      <Boton manejarClick={agregarInput}>*</Boton>
    </div>
    <div className="fila">
      <Boton manejarClick={calcular}>=</Boton>
      <Boton manejarClick={agregarInput}>0</Boton>
      <Boton manejarClick={agregarInput}>.</Boton>
      <Boton manejarClick={agregarInput}>/</Boton>
    </div>
    <div className="fila">
      <BotonClear manejarClear={clear}>Clear</BotonClear>
    </div>
    </div>
    </div>
  );
}

export default App;