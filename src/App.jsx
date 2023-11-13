import React, { useState } from 'react';
import './components/MeuComponente.css';

function App() {
  const [altura , setAltura] = useState('')
  const [peso, setPeso] = useState('')
  
  const alturaNumero = parseFloat(altura);
  const pesoNumero = parseFloat(peso);

  const calculo = pesoNumero / (alturaNumero * alturaNumero);


  const handleAlturaChange = (event) => {
    setAltura(event.target.value);
  };

  const handlePesoChange = (event) => {
    setPeso(event.target.value);
  };

  return (
    <div>
        <div className="header">
          <h1>Tabela de IMC</h1>
        </div>
      <main className='main'>
          <input className='mainItens' value={altura} type="number" onChange={handleAlturaChange} placeholder='Digite sua Altura' />
          <input className='mainItens' value={peso} type="number" onChange={handlePesoChange} placeholder='Digite seu Peso' />
          <p>
            {calculo.toFixed(2)}
          </p>
      </main>
    </div>
  );
}

export default App;
