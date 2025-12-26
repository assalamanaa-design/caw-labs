import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Inc</button>
      <button onClick={() => setCounter(counter - 1)}>Dec</button>
    </div>
  );
}

export default Counter;
