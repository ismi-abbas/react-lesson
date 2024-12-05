import Code from "@/components/code";
import { useState } from "react";

export default function UseReducerExample() {
  const [numbers, setNumbers] = useState([2, 3, 4, 5]);

  const initialState = 0;

  const reducer = (state: number, action: number) => {
    return state + action;
  };

  const total = numbers.reduce(reducer, initialState);

  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col gap-4 p-4">
        Standard impolementation - Mutate on each iteration - making it impure
        function
        <Code
          code={`const numbers = [2, 3, 4, 5];
let state = 0;
numbers.forEach((number) => {
  state += number;
});
`}
        />
        Using reducer
        <Code
          code={`const numbers = [2, 3, 4, 5];
numbers.reduce((acc, curr) => {
  return acc + curr;
});`}
        />
        Reducer pattern - A functional programming pattern that takes a
        collection as input and returns a single value as output
        <Code
          code={`  const numbers = [2, 3, 4, 5];

  const initialState = 0;

  const reducer = (state: number, action: number) => {
    return state + action;
  };

  const total = numbers.reduce(reducer, initialState);`}
        />
      </div>
    </div>
  );
}
