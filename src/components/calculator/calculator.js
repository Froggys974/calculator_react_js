import React, { useState } from "react";
import "./calculator.css";
import ButtonCalc from "../buttons/button";

export default function Calculator() {
  const [display, setDisplay] = useState("");
  const calcBtns = ["C", "%", "=", "+", 7, 8, 9, "-", 4, 5, 6, "*", 1, 2, 3, "/", 0, "."];

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const isOperator=(btn)=>{
    return ['C', '*', '/', '+', '-', '=', '%'].includes(btn);
  }
  

  return (
    <div className="calculatorBox">
      <div className="resultCalcul">{display}</div>
      <div className="allButtonsCalc">
        {calcBtns.map((btn, index) => (
          <ButtonCalc key={index} buttonText={btn} onClick={handleClick} isOperator={isOperator(btn)} />
        ))}
      </div>
    </div>
  );
}
