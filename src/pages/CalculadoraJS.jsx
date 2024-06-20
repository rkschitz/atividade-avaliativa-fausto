import '../styles/CalculadoraJurosSimples.css';

export default function CalculadoraJurosSimples() {
    function calcular() {
        var capital = parseFloat(document.getElementById("capital").value);
        var taxa = parseFloat(document.getElementById("taxa").value);
        var tempo = parseFloat(document.getElementById("tempo").value);
        var juros = capital * taxa * tempo / 100;
        var montante = capital + juros;
        document.getElementById("juros").value = juros.toFixed(2);
        document.getElementById("montante").value = montante.toFixed(2);
    }
    
    return (
        <div className='js'>
            <h1>Calculadora de Juros Simples</h1>
            <div>
                <label>Capital (R$)</label>
                <input type="number" id="capital" />
            </div>
            <div>
                <label>Taxa de juros (%)</label>
                <input type="number" id="taxa" />
            </div>
            <div>
                <label>Tempo (meses)</label>
                <input type="number" id="tempo" />
            </div>
            <button onClick={calcular}>Calcular</button>
            <div>
                <label>Juros (R$)</label>
                <input type="number" id="juros" readOnly />
            </div>
            <div>
                <label>Montante (R$)</label>
                <input type="number" id="montante" readOnly />
            </div>
        </div>
    )
}