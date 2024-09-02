"use client";

import { useState } from "react";

export default function Contador() {
  const [numero, setNumero] = useState(0);

  const Add = () => {
    setNumero(numero + 1);
  };

  const Subtract = () => {
    setNumero(numero - 1);
  };

  return (
    <div>
      <h1>Contador</h1>
      <div>Valor: {numero} </div>
      <button onClick={Add}>+</button>
      <button onClick={Subtract}>-</button>
    </div>
  );
}
