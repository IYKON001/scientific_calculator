import React, { useState } from 'react';
import * as math from 'mathjs';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');

  const appendToDisplay = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  const deleteLastCharacter = () => {
    setDisplay((prevDisplay) =>
      prevDisplay.length > 0 ? prevDisplay.slice(0, -1) : prevDisplay
    );
  };

  const calculateResult = () => {
    try {
      setDisplay(math.evaluate(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const calculateSine = () => {
    try {
      setDisplay(math.sin(math.evaluate(display)).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const calculateCosine = () => {
    try {
      setDisplay(math.cos(math.evaluate(display)).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const calculateTangent = () => {
    try {
      setDisplay(math.tan(math.evaluate(display)).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const calculateSquareRoot = () => {
    try {
      setDisplay(math.sqrt(math.evaluate(display)).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const calculateCubeRoot = () => {
    try {
      setDisplay(math.cbrt(math.evaluate(display)).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const calculateCube = () => {
    try {
      setDisplay(math.pow(math.evaluate(display), 3).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const calculateReciprocal = () => {
    try {
      setDisplay(math.divide(1, math.evaluate(display)).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const calculateFactorial = () => {
    try {
      setDisplay(math.factorial(math.evaluate(display)).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const calculateExponent = () => {
    try {
      setDisplay(math.pow(math.evaluate(display), 2).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator">
      <div className='author'>scientific software calculator produced by IYKON</div>
      <div className="display">
        <input type="text" value={display} readOnly />
      </div>
      <div className="buttons">
        <button onClick={calculateSine}>sin</button>
        <button onClick={calculateCosine}>cos</button>
        <button onClick={calculateTangent}>tan</button>
        <button onClick={calculateCubeRoot}>³√</button>
        <button onClick={calculateSquareRoot}>√</button>
        <button onClick={calculateCube}>x³</button>
        <button onClick={calculateReciprocal}>1/x</button>
        <button onClick={calculateFactorial}>x!</button>
        <button onClick={calculateExponent}>x^2</button>
        <button onClick={() => appendToDisplay('1')}>1</button>
        <button onClick={() => appendToDisplay('2')}>2</button>
        <button onClick={() => appendToDisplay('3')}>3</button>
        <button onClick={() => appendToDisplay('4')}>4</button>
        <button onClick={() => appendToDisplay('5')}>5</button>
        <button onClick={() => appendToDisplay('6')}>6</button>
        <button onClick={() => appendToDisplay('7')}>7</button>
        <button onClick={() => appendToDisplay('8')}>8</button>
        <button onClick={() => appendToDisplay('9')}>9</button>
        <button onClick={() => appendToDisplay('0')}>0</button>
        <button onClick={() => appendToDisplay('/')}>/</button>
        <button onClick={() => appendToDisplay('(')}>(</button>
        <button onClick={() => appendToDisplay('*')}>*</button>
        <button onClick={() => appendToDisplay(')')}>)</button>
        <button onClick={() => appendToDisplay('-')}>-</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => appendToDisplay('+')}>+</button>
        <button onClick={deleteLastCharacter}>DEL</button>
        <button onClick={clearDisplay}>C</button>
      </div>
    </div>
  );
}

export default App;
