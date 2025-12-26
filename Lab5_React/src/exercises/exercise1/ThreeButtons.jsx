import { useState } from "react";

function ThreeButtons() {
  const [clickedButton, setClickedButton] = useState(null);

  return (
    <div>
      <button onClick={() => setClickedButton(1)}>Button1</button>
      <button onClick={() => setClickedButton(2)}>Button2</button>
      <button onClick={() => setClickedButton(3)}>Button3</button>
      {clickedButton && <p>Button #{clickedButton} was clicked</p>}
    </div>
  );
}

export default ThreeButtons;
