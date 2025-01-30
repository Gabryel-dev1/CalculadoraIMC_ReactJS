import React, { useState } from "react";
import './App.css';

const App = () => {
  const [altura, setAltura] = useState(""); // Em centímetros
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  // Função para calcular o IMC
  const calcularIMC = (peso, alturaCm) => {
    const alturaMetros = alturaCm / 100; // Converte a altura de cm para metros
    return peso / (alturaMetros * alturaMetros);
  };

  // Função para classificar o IMC
  const classificarIMC = (imc) => {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc >= 18.5 && imc < 24.9) return "Peso normal";
    if (imc >= 25 && imc < 29.9) return "Sobrepeso";
    if (imc >= 30) return "Obesidade";
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    const imcCalculado = calcularIMC(peso, altura);
    setImc(imcCalculado.toFixed(2)); // Define o IMC com 2 casas decimais
    setClassificacao(classificarIMC(imcCalculado));
  };

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="altura">Altura (em cm):</label>
          <input
            type="number"
            id="altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            step="1"
            required
          />
        </div>
        <div>
          <label htmlFor="peso">Peso (em kg):</label>
          <input
            type="number"
            id="peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            step="0.1"
            required
          />
        </div>
        <button type="submit">Calcular IMC</button>
      </form>

      {imc && (
        <div className="resultado">
          <h2>IMC: {imc}</h2>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
};

export default App;
