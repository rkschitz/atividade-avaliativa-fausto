import React from "react";
import "../styles/PaginaInicial.css";
import CalculadoraJurosCompostos from "./CalculadoraJC";
import CalculadoraJurosSimples from "./CalculadoraJS";
import CalculadoraRegraDeTres from "./CalculadoraRegraDe3";
import Calculator from "./Calculadora";

export default function PaginaInicial() {

  return (
    <div className="paginaInicial">
        <CalculadoraJurosCompostos />
        <CalculadoraJurosSimples />
        <CalculadoraRegraDeTres />
        <Calculator />
    </div>
  );
}
