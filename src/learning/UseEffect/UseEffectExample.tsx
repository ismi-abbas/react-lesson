import { useEffect, useState } from "react";

export default function UseEffectExample() {
  const [time, setTime] = useState(new Date());
  const [rerenderCount, setRerenderCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      setRerenderCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
      <h2>useEffect Sample</h2>
      <div style={{ border: "1px solid #ccc", padding: "10px" }}>
        <div>Current Time: {time.toLocaleTimeString()}</div>
        <div>Rerender Count: {rerenderCount}</div>
      </div>

      <pre
        style={{
          whiteSpace: "pre-wrap",
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        {`  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      setRerenderCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);`}
      </pre>
    </div>
  );
}
