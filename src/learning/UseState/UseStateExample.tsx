import { useState } from "react";

export default function UseStateExample() {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleCounter}></button>
    </div>
  );
}
