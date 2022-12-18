import React from 'react';
import './App.css';

function App() {
  const [firstValue, setFirstValue] = React.useState('');
  const [secondValue, setSecondValue] = React.useState('');
  const [sign, setSign] = React.useState('');

  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const mathSigns = ['+', '-', '/', '*'];
  const equals = '=';

  const onClickNumber = (number) => {
    setFirstValue(firstValue + sign + number);
    setSign('');
    if (secondValue !== '') {
      setSecondValue('');
    }
  };

  const onClickSign = (symbol) => {
    if (secondValue !== '') {
      setFirstValue(secondValue);
      setSecondValue('');
      setSign(symbol);
    } else if (firstValue !== '') {
      setSign(symbol);
    }
  };

  const onClickEquals = () => {
    setSecondValue(eval(firstValue));
    setFirstValue('');
  };

  return (
    <div className="App">
      <div>
        {firstValue} {sign}
      </div>
      <div>{secondValue}</div>
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
