import React, { useState, useEffect } from 'react';

function Game() {
  const [targetNumber, setTargetNumber] = useState(0);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1); // Random number between 1 and 100
    setGuess('');
    setMessage('');
    setAttempts(0);
  };

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleGuessSubmit = () => {
    const guessedNumber = parseInt(guess);

    if (isNaN(guessedNumber)) {
      setMessage('Please enter a valid number.');
      return;
    }

    setAttempts(attempts + 1);

    if (guessedNumber === targetNumber) {
      setMessage(`Congratulations! You guessed the number in ${attempts + 1} attempts.`);
    } else if (guessedNumber < targetNumber) {
      setMessage('Too low. Try again.');
    } else {
      setMessage('Too high. Try again.');
    }
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif', padding: '20px' }}>
      <h1>Guess the Number!</h1>
      <p>I'm thinking of a number between 1 and 100.</p>

      <input
        type="number"
        value={guess}
        onChange={handleGuessChange}
        placeholder="Enter your guess"
        style={{ padding: '8px', margin: '10px', fontSize: '16px' }}
      />
      <br />
      <button onClick={handleGuessSubmit} style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
        Submit Guess
      </button>

      <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{message}</p>
      <button onClick={resetGame} style={{marginTop: '20px', padding:'10px 20px', backgroundColor: '#008CBA', color: 'white', border: 'none', cursor: 'pointer'}}>Reset Game</button>
    </div>
  );
}

export default Game;