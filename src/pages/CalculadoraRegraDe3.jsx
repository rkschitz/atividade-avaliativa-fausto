import {useState} from 'react';
import '../styles/CalculadoraRegraDe3.css'
function CalculadoraRegraDeTres() {
    const [valueA, setValueA] = useState('');
    const [valueB, setValueB] = useState('');
    const [valueC, setValueC] = useState('');
    const [result, setResult] = useState(null);
  
    const handleCalculate = () => {
      if (valueA && valueB && valueC) {
        const resultValue = (parseFloat(valueC) * parseFloat(valueB)) / parseFloat(valueA);
        setResult(resultValue.toFixed(2));
      } else {
        setResult(null);
      }
    };
  
    return (
      <div className='calculator-container'>
        <h2>Regra de Três</h2>
        <div>
          <label>Valor A:</label>
          <input type="number" value={valueA} onChange={(e) => setValueA(e.target.value)} />
        </div>
        <div>
          <label>Valor B:</label>
          <input type="number" value={valueB} onChange={(e) => setValueB(e.target.value)} />
        </div>
        <div>
          <label>Valor C:</label>
          <input type="number" value={valueC} onChange={(e) => setValueC(e.target.value)} />
        </div>
        <button onClick={handleCalculate}>Calcular</button>
        {result !== null && (
          <div>
            <h3>Resultado:</h3>
            <p>{result}</p>
          </div>
        )}
      </div>
    );
  }
  
  export default CalculadoraRegraDeTres;