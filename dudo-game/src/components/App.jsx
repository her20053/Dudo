import React, { useState, useEffect } from 'react';

import DiceComponent from './diceComponent.jsx';

import {
  IconDice1,
  IconDice2,
  IconDice3,
  IconDice4,
  IconDice5,
  IconDice6,
  IconDice1Filled,
  IconDice2Filled,
  IconDice3Filled,
  IconDice4Filled,
  IconDice5Filled,
  IconDice6Filled,
} from '@tabler/icons-react';

import '../styles/app.css';

function App() {

  const [diceNumbers, setDiceNumbers] = useState([0, 0, 0, 0, 0, 0]);
  const [numberOccurrences, setNumberOccurrences] = useState({});

  // Función para actualizar el número de un dado específico
  const updateDiceNumber = (index, number) => {
    const newDiceNumbers = [...diceNumbers];
    newDiceNumbers[index] = number;
    setDiceNumbers(newDiceNumbers);
  };

  const getDiceIcon = (number, occurrences) => {
    const icons = {
      1: occurrences ? IconDice1Filled : IconDice1,
      2: occurrences ? IconDice2Filled : IconDice2,
      3: occurrences ? IconDice3Filled : IconDice3,
      4: occurrences ? IconDice4Filled : IconDice4,
      5: occurrences ? IconDice5Filled : IconDice5,
      6: occurrences ? IconDice6Filled : IconDice6,
    };
    const Icon = icons[number];
    return <Icon />;
  };

  // UseEffect para contar las ocurrencias de cada número
  useEffect(() => {
    const occurrences = {};
    diceNumbers.forEach((number) => {
      if (number !== 0) {
        occurrences[number] = occurrences[number] ? occurrences[number] + 1 : 1;
      }
    });
    setNumberOccurrences(occurrences);
  }, [diceNumbers]);

  return (
    <>
      <div className="dice-container">
        {diceNumbers.map((_, index) => (
          <DiceComponent key={index} updateDiceNumber={(number) => updateDiceNumber(index, number)} />
        ))}
      </div>
      <div className="dice-numbers">
        <h3>Ocurrencias por numero</h3>
        <ul>
          {[1, 2, 3, 4, 5, 6].map((number) => (
            <li key={number}>
              {getDiceIcon(number, numberOccurrences[number])} {numberOccurrences[number] || 0}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
