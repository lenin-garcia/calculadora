
import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/Boton-clear';
import {useState} from 'react'
import { evaluate } from 'mathjs'

function App() {
{/**Mostrar lo que se teclea en la pantalla */}
  const [input, setInput] = useState(''); 
  const agregarInput = (val) =>{
    setInput(input + val )
  }

  {/**Calculo de resultados */}

  const CalcularResultado  = () =>{
   if (input) {
     setInput(evaluate(input))
   }else{
    alert('Ingresar valores para hacer el la operación')
   }
   
  }



  return (
    <div className="App">


      <div className='contenenedor-calculadora'>
     
        <Pantalla input ={input} />  

        {/**Filas de la calculadora */}
          <div className='fila'>
            <Boton manejarClic={agregarInput} >1</Boton>
            <Boton manejarClic={agregarInput} >2</Boton>
            <Boton manejarClic={agregarInput} >3</Boton>
            <Boton manejarClic={agregarInput} >+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput} >4</Boton>
            <Boton manejarClic={agregarInput} >5</Boton>
            <Boton manejarClic={agregarInput} >6</Boton>
            <Boton manejarClic={agregarInput} >-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput} >7</Boton>
            <Boton manejarClic={agregarInput} >8</Boton>
            <Boton manejarClic={agregarInput} >9</Boton>
            <Boton manejarClic={agregarInput} >*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={CalcularResultado} >=</Boton>
            <Boton manejarClic={agregarInput} >0</Boton>
            <Boton manejarClic={agregarInput} >.</Boton>
            <Boton manejarClic={agregarInput} >/</Boton>
          </div>
          <div className='fila'>
            <BotonClear manejarClear = {()=> setInput('')}>Clear</BotonClear>
          </div>
          
      </div>
    </div>
  );
}

export default App;
