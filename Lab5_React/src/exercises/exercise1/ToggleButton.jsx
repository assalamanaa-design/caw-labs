import { useState } from "react";

function ToggleButton() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>ClickMe</button>
      <p>{count % 2 === 1 ? "Clicked" : "Not Clicked"}</p>
    </div>
  );
}

export default ToggleButton;
