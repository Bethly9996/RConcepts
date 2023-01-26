import React, { useState } from 'react';


const App = () => {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState('blue');

  const decrementCount = () => {
    setCount(prevCount => prevCount -1);
    setTheme('red');
  }

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <span>{theme}</span>
    <button onClick={incrementCount}>+</button>
    </>
  )

}

export default App;