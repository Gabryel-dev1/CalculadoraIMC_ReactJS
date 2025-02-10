import React from "react";

const ResultadoIMC = ({ imc, classificacao }) => {
  return imc ? (
    <div className="resultado">
      <h2>IMC: {imc}</h2>
      <p>Classificação: {classificacao}</p>
    </div>
  ) : null;
};

export default ResultadoIMC;
