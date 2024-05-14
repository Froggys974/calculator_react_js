import React, { useState } from "react";
import "./calculator.css";
import ButtonCalc from "../buttons/button";

export default function Calculator() {
  const [calcVal, setCalcVal] = useState(''); 
  const [prevCalcVal, setPrevCalcVal] = useState('');
  const [operators, setOperators] = useState(null);
  const [calculEnd, setCalculEnd] = useState(false);
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
    let updatedCalcVal = calcVal;

    if (!isNaN(btn) || btn === ".") {
        if (calculEnd) {
            updatedCalcVal=btn;
            setCalculEnd(false);
        }else{
            updatedCalcVal += btn;

        }
    }
    if (btn === "C") {
      emptyDisplay();
      return; // Return here to prevent further execution
    }
    if (btn === "=") {
      calculateResult();
      return; // Return here to prevent further execution
    }
    if (btn === "%") {
      updatedCalcVal = parseFloat(updatedCalcVal) / 100 + "";
    }
    if (["/", "+", "-", "*"].includes(btn)) {
      setOperators(btn);
      setPrevCalcVal(updatedCalcVal);
      updatedCalcVal = "";
    }
    setCalcVal(updatedCalcVal);
  };

  const getCalcVal = () => {
    return calcVal;
  };

  const isOperator = (btn) => {
    return ["C", "*", "/", "+", "-", "=", "%"].includes(btn);
  };

  const calculateResult = () => {
    try {
      let result = eval(prevCalcVal + operators + calcVal).toString();
      setCalcVal(result + "");
      setPrevCalcVal("");
      setOperators(null);
      setCalculEnd(true);
    } catch (error) {
      setCalcVal("Error");
    }
  };

  const emptyDisplay = () => {
    setCalcVal("");
    setPrevCalcVal("");
    setOperators(null);
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
