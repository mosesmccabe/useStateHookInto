import React, { useState } from "react";

function App() {
  const [arr, setArr] = useState(0);

  function increase() {
    setArr(arr + 1);
  }

  return (
    <div>
      <h1>{arr}</h1>
      <button onClick={increase}>+</button>
      <button onClick={() => setArr(arr - 1)}>-</button>
    </div>
  );
}

export default App;
