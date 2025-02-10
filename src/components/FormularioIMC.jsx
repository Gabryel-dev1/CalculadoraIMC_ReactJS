import React, { useState } from "react";

function FormularioIMC(props) {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);

  function calcularIMC(p, a) {
    let alt = a / 100;
    let imc = p / (alt * alt);
    return imc;
  }

  function classificarIMC(imc) {
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
      return "Sobrepeso";
    } else {
      return "Obesidade";
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    let resultadoIMC = calcularIMC(peso, altura);
    props.setImc(resultadoIMC.toFixed(2));
    let classificacao = classificarIMC(resultadoIMC);
    props.setClassificacao(classificacao);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Altura (cm):</label>
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Peso (kg):</label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <button>Calcular IMC</button>
    </form>
  );
}

export default FormularioIMC;
