// src/Calculator.js
import React, { useState } from "react";
import './Kalkulator.css';

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      setResult(eval(input)); 
    } catch (error) {
      setResult("Błąd");
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <h1>LELELEELELEELELE</h1>
        <br />
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>

        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("4")}>4</button>
        <h2>zuzek</h2>
        <button onClick={() => handleClick("5")}>5</button>
        <h3>masnybenek</h3>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
    
      </div>
    </div>
  );
};

export default Calculator;
