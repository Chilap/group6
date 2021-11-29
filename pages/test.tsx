import React, { useState } from "react";

interface Inputs2 {
  a: number;
  b: number;
  c: number;
}

function Exercise () {
  
  const [input, setInput] = useState<Inputs2>({
    a: 0,
    b: 0,
    c: 0
  });
  const [result, setResult] = useState<string>('');
  const {a, b, c} = input;

  function onCalculate() {
    console.log('Calculating')    
    const diff = c - b;
    const ans = a !== 0 ? (diff / a).toString() : (diff === 0 ? 'any value' : 'no solution');
    setResult(ans);
  }

  return (
    <div>
      <p>Only do the calculation when the button is clicked</p>
      <p>ax + b = c</p>
      a: <input type='number' value={a} onChange={x => setInput({...input, a:parseInt(x.target.value)})}></input>
      b: <input type='number' value={b} onChange={x => setInput({...input, b:parseInt(x.target.value)})}></input>
      c: <input type='number' value={c} onChange={x => setInput({...input, c:parseInt(x.target.value)})}></input>
      <button onClick={onCalculate}>Calculate answer</button>
      <p>x = {result}</p>
    </div>
  );
}

export default Exercise;