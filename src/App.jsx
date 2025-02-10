import React, { useState } from "react";
import FormularioIMC from "./components/FormularioIMC.jsx";
import ResultadoIMC from "./components/ResultadoIMC.jsx";
import "./App.css";

const App = () => {
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      <FormularioIMC setImc={setImc} setClassificacao={setClassificacao} />
      <ResultadoIMC imc={imc} classificacao={classificacao} />
    </div>
  );
};

export default App;
