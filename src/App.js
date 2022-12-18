import React from 'react';
import './App.css';

function App() {
  const [firstValue, setFirstValue] = React.useState(0);
  const [secondValue, setSecondValue] = React.useState(0);
  const [sign, setSign] = React.useState('');

  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const mathSigns = ['+', '-', '/', '*'];

  const onClickNumber = (number) => {
    if (sign === '') {
      setFirstValue(firstValue * 10 + number);
    } else {
      setSecondValue(secondValue * 10 + number);
    }
  };
  const onClickSign = (sign) => {
    setSign(sign);
  };
  console.log(firstValue);
  console.log(secondValue);
  return (
    <div className="App">
      <div>{firstValue}</div>
      <div>{secondValue}</div>
      {numbers.map((n, i) => (
        <div onClick={() => onClickNumber(i)}>{n}</div>
      ))}
      {mathSigns.map((s) => (
        <div onClick={() => onClickSign(s)}>{s}</div>
      ))}
    </div>
  );
}

export default App;
