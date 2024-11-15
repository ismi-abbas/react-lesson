import { useState } from "react";

export default function UseStateExample() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div style={{ fontSize: "2rem" }}>Counter State: {counter}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: "1rem",
        }}
      >
        <button className="button-primary" onClick={handleDecrement}>
          Decrement
        </button>
        <button className="button-primary" onClick={handleIncrement}>
          Increment
        </button>
      </div>

      <pre
        style={{
          whiteSpace: "pre-wrap",
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        {`  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };
`}
      </pre>
    </div>
  );
}
