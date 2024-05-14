import React, { useState } from "react";
import "./calculator.css";
import ButtonCalc from "../buttons/button";

export default function Calculator() {
  const [calcVal, setCalcVal, getCalcVal] = useState('');
  const [prevCalcVal, setPrevCalcVal] = useState('');
  const [operators, setOperators] = useState(null);
  const calcBtns = [
    "C",
    "%",
    "=",
    "+",
    7,
    8,
    9,
    "-",
    4,
    5,
    6,
    "*",
    1,
    2,
    3,
    "/",
    0,
    ".",
  ];
  
  const handleClick = (btn) => {
    if (!isNaN(btn) || btn === ".") {
      calcVal = getDisplay() + btn; // Ajoutez le bouton à la valeur actuelle
    }
    if (btn === "C") {
      emptyDisplay();
    }
    if (btn === "=") {
      calculateResult();
    }
    if (btn === "%") {
      calcVal = calcVal / 100 + "";
    }
    if (["/", "+", "-", "*"].includes(btn)) {
      operators = btn;
      prevCalcVal = calcVal;
      calcVal = "";
    }
    setDisplay(calcVal);
  };

  // Méthode pour obtenir la valeur affichée
   getCalcVal = () => {
    return display;
  };

  const isOperator = (btn) => {
    return ["C", "*", "/", "+", "-", "=", "%"].includes(btn);
  };

  const calculateResult = () => {
    try {
      calcVal = eval(prevCalcVal + operators + calcVal);
      setDisplay(calcVal);
      this.prevCalcVal = "";
      this.operators = null;
    } catch (error) {
      setDisplay(error);
    }
  };
  const emptyDisplay = () => {
    setDisplay("");
  };

  return (
    <div className="calculatorBox">
      <div className="resultCalcul">{getCalcVal()}</div>
      <div className="allButtonsCalc">
        {calcBtns.map((btn, index) => (
          <ButtonCalc
            key={index}
            buttonText={btn}
            onClick={handleClick}
            isOperator={isOperator(btn)}
          />
        ))}
      </div>
    </div>
  );
}
