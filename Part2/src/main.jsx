//import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import { useState } from 'react';



//forma de añadir un estado a un componente
const App = (props) =>{
  const [contadorValue, updateContador] = useState(13);
  const Counter = ({number}) =>{
    console.log("counter render")
    return <h1> 
    jandemore {number} 
  </h1>
  }
  /*
  const contador = useState(0);
  const contadorValue = contador[0];
  const updateContador = contador[1];
  */
  const updateButton = ()=>{
    //updateContador(contadorValue+1);

    //De esta forma podríamos tener el valos anterior controlado dentro de prevContador
   
    updateContador ( prevContador => prevContador+1 ) 
    
  }
 const valorPrevio = updateContador;
  const updateButtonReset = ()=>{
    updateContador(0);
  }

  // {elEvento ? 'Es par' : 'Es impar'} esto sería una ternaria
  const elEvento = contadorValue %2 === 0;
  const parImpar = elEvento ? 'Es par' : 'Es impar'

  return ( 
    <div>
      <p>
        {parImpar}
      </p>
      <Counter number = {2}/>
      <button onClick={updateButton}> 
        incrementar 
      </button>
      <button onClick={updateButtonReset}> 
        reset 
      </button>  

    </div>
    
    
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
      <App />
);


