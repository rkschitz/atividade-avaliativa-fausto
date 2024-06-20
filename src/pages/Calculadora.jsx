import React, { useState } from 'react';
import '../styles/Calculadora.css'

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [currentValue, setCurrentValue] = useState('');
  const [operator, setOperator] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setDisplay('0');
      setCurrentValue('');
      setOperator('');
    } else if (value === '=') {
      calculateResult();
    } else if ('+-*/'.includes(value)) {
      setOperator(value);
      setCurrentValue(display);
      setDisplay('0');
    } else {
      setDisplay(display === '0' ? value : display + value);
    }
  };

  const calculateResult = () => {
    const num1 = parseFloat(currentValue);
    const num2 = parseFloat(display);
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        return;
    }
    setDisplay(result.toString());
    setCurrentValue('');
    setOperator('');
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('=')}>=</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('C')}>C</button>
      </div>
    </div>
  );
}

export default Calculator;
