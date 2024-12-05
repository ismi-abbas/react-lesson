import Code from "@/components/code";
import { Button } from "@/components/ui/button";
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
    <div className="flex flex-col items-center gap-4">
      <div className="text-3xl font-bold">{counter}</div>
      <div className="flex gap-2">
        <Button size="sm" variant="destructive" onClick={handleDecrement}>
          Decrement
        </Button>
        <Button size="sm" onClick={handleIncrement}>
          Increment
        </Button>
      </div>

      <Code
        code={`const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };`}
      />
    </div>
  );
}
