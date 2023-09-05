import { useState } from 'react'

import DiceComponent from './diceComponent.jsx'

import '../styles/app.css'

function App() {

  return (
    <>
      <h1>¡Dudo!</h1>
      <div className="dice-container">
        <DiceComponent />
        <DiceComponent />
        <DiceComponent />
        <DiceComponent />
        <DiceComponent />
        <DiceComponent />
      </div>
    </>
  )
}

export default App
