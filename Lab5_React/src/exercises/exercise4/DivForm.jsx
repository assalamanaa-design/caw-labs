import { useState } from "react";

function DivForm() {
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [bgColor, setBgColor] = useState("#000000");
  const [divs, setDivs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (height && width) {
      setDivs([...divs, { height, width, bgColor }]);
      setHeight("");
      setWidth("");
      setBgColor("#000000");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Height px"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Width px"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
        <input
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />
        <button type="submit">Add Div</button>
      </form>
      <div style={{ marginTop: "20px" }}>
        {divs.map((d, i) => (
          <div
            key={i}
            style={{
              height: `${d.height}px`,
              width: `${d.width}px`,
              backgroundColor: d.bgColor,
              margin: "10px auto",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default DivForm;
