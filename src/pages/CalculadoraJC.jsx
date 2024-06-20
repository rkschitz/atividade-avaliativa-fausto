import '../styles/CalculadoraJurosCompostos.css';
export default function CalculadoraJurosCompostos(){
    function calcular(){
        var capital = parseFloat(document.getElementById("capital").value);
        var taxa = parseFloat(document.getElementById("taxa").value);
        var tempo = parseFloat(document.getElementById("tempo").value);
        var montante = capital * Math.pow(1 + taxa / 100, tempo);
        var juros = montante - capital;
        document.getElementById("juros").value = juros.toFixed(2);
        document.getElementById("montante").value = montante.toFixed(2);
    }
    return (
        <div className='jc'>
            <h1>Calculadora de Juros Compostos</h1>
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