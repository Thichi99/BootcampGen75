//utilizamos o atalho 'rfce' para criar uma estrutura inicial do componente
import React from "react";
import { useState } from "react";

function Contador() {
  const [valor, setValor] = useState(0);

  function somarMaisUm() {
    setValor(valor + 1);
  }

  function resetValor() {
    setValor(0);
  }

  function diminuirUm() {
    if (valor > 0) setValor(valor - 1);
  }
  return (
    <div>
      <p
        style={{
          margin: "0",
          padding: "10px",
          fontSize: "2em",
        }}
      >
        O valor é: {valor}
      </p>
      <button onClick={somarMaisUm}>+</button>
      <button onClick={resetValor}>Reset</button>
      <button onClick={diminuirUm}>-</button>
    </div>
  );
}

export default Contador;
