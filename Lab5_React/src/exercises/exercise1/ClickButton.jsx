import { useState } from "react";

function ClickButton() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <button onClick={() => setClicked(true)}>ClickMe</button>
      {clicked && <p>Clicked</p>}
    </div>
  );
}

export default ClickButton;
