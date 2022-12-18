import React from 'react';
import './App.css';

function App() {
  const [firstValue, setFirstValue] = React.useState(0);
  const [secondValue, setSecondValue] = React.useState(null);
  const [thirdValue, setThirdValue] = React.useState(null);
  const [sign, setSign] = React.useState(null);

  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const mathSigns = ['+', '-', '/', '*'];
  const equals = '=';

  const onClickNumber = (number) => {
    setThirdValue(null);
    if (sign === null) {
      setFirstValue(firstValue * 10 + number);
    } else {
      setSecondValue(secondValue * 10 + number);
    }
  };

  const usedSign = (symbol) => {
    setSign(symbol);
    setFirstValue(thirdValue);
    setThirdValue(null);
  };

  const onClickSign = (symbol) => {
    if (firstValue == null) {
      setFirstValue(thirdValue);
      setThirdValue(null);
    } else if (sign != null) {
      setFirstValue(eval(firstValue + sign + secondValue));
      setSecondValue(null);
    }
    setSign(symbol);
  };

  const onClickEquals = () => {
    setThirdValue(eval(firstValue + sign + secondValue));
    setFirstValue(null);
    setSecondValue(null);
    setSign(null);
  };

  return (
    <div className="App">
      <div>{firstValue}</div>
      <div>{sign}</div>
      <div>{secondValue}</div>
      <div>{thirdValue}</div>
      {numbers.map((n, i) => (
        <button onClick={() => onClickNumber(i)}>{n}</button>
      ))}
      {mathSigns.map((s) => (
        <button onClick={() => onClickSign(s)}>{s}</button>
      ))}
      <button onClick={onClickEquals}>{equals}</button>
    </div>
  );
}

export default App;
