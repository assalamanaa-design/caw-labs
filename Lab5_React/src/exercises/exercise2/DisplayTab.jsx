import { useState } from "react";

function DisplayTab({ table }) {
  const [items, setItems] = useState(table);

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} onClick={() => removeItem(index)}>
          Element {index + 1} is: {item}
        </li>
      ))}
    </ul>
  );
}

export default DisplayTab;
