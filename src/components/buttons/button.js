import React from 'react';
import './button.css'; // Assuming you have a CSS file for styling

export default function ButtonCalc({ buttonText, isOperator, onClick }) {
  const handleClick = () => {
    onClick(buttonText);
  };

  return (
    <div className={`buttonCalc ${isOperator ? 'operator' : ''}`} onClick={handleClick}>
      {buttonText}
    </div>
  );
}