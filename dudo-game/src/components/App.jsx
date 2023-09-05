import React, { useState } from 'react';

import DiceComponent from './diceComponent.jsx';

import '../styles/app.css';

function App() {
  // Estado para mantener un registro de los números de los dados
  const [diceNumbers, setDiceNumbers] = useState([0, 0, 0, 0, 0, 0]);

  // Función para actualizar el número de un dado específico
  const updateDiceNumber = (index, number) => {
    const newDiceNumbers = [...diceNumbers];
    newDiceNumbers[index] = number;
    setDiceNumbers(newDiceNumbers);
  };

  return (
    <>
      <div className="dice-container">
        {diceNumbers.map((_, index) => (
          <DiceComponent key={index} updateDiceNumber={(number) => updateDiceNumber(index, number)} />
        ))}
      </div>
      <div className="dice-numbers">
        <h2>Números de los dados:</h2>
        <ul>
          {diceNumbers.map((number, index) => (
            <li key={index}>Dado {index + 1}: {number}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
