import Code from "@/components/code";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useReducer, useState } from "react";

const initialState = 0;
function reducer(state: any, value: any) {
  return state + value;
}

export default function UseReducerExample() {
  const [numbers, setNumbers] = useState([2, 3, 4, 5]);
  const initialState = 0;
  const reducer = (state: number, action: number) => {
    return state + action;
  };
  const total = numbers.reduce(reducer, initialState);

  const [reducerSample, setReducerSample] = useState<
    "advanced" | "simple" | "complex"
  >("simple");

  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col gap-4 p-4 border-r">
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
          code={`const numbers = [2, 3, 4, 5];
const initialState = 0;

const reducer = (state: number, action: number) => {
    return state + action;
};
const total = numbers.reduce(reducer, initialState);`}
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        useReducer Hooks
        <div className="flex gap-2">
          <Button
            className={cn(
              reducerSample === "simple" && "bg-primary",
              "hover:bg-primary/90",
            )}
            variant="secondary"
            size="sm"
            onClick={() => setReducerSample("simple")}
          >
            Simple
          </Button>
          <Button
            className={cn(
              reducerSample === "advanced" && "bg-primary",
              "hover:bg-primary/90",
            )}
            variant="secondary"
            size="sm"
            onClick={() => setReducerSample("advanced")}
          >
            Advanced
          </Button>{" "}
          <Button
            className={cn(
              reducerSample === "complex" && "bg-primary",
              "hover:bg-primary/90",
            )}
            variant="secondary"
            size="sm"
            onClick={() => setReducerSample("complex")}
          >
            Complex - Becoming State Manager
          </Button>
        </div>
        {reducerSample === "simple" ? (
          <SimpleReducer />
        ) : reducerSample === "advanced" ? (
          <AdvancedReducer />
        ) : (
          <ComplexReducer />
        )}
      </div>
    </div>
  );
}

function SimpleReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => dispatch(1);
  const handleDecrement = () => dispatch(-1);

  return (
    <div>
      <Code
        code={`const initialState = 0;
function reducer(state: any, value: any) {
  return state + value;
}

export default function SimpleReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => dispatch(1);
  const handleDecrement = () => dispatch(-1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={handleIncrement}>Increment</Button>
      <Button onClick={handleDecrement}>Decrement</Button>
    </div>
  );
}
`}
      />
      <h1>Count: {count}</h1>
      <div className="flex gap-2">
        <Button onClick={handleIncrement}>Increment</Button>
        <Button onClick={handleDecrement}>Decrement</Button>
      </div>
    </div>
  );
}

function advReducer(state: any, action: "increment" | "decrement" | "reset") {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
}

function AdvancedReducer() {
  const [count, dispatch] = useReducer(advReducer, initialState);

  const handleIncrement = () => dispatch("increment");
  const handleDecrement = () => dispatch("decrement");
  const handleReset = () => dispatch("reset");
  return (
    <div>
      <Code
        code={`
  function advReducer(state: any, action: "increment" | "decrement" | "reset") {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return 0;
      default:
        return state;
    }
  }

  function Advanced() {
  const [count, dispatch] = useReducer(advReducer, initialState);

  const handleIncrement = () => dispatch("increment");
  const handleDecrement = () => dispatch("decrement");
  const handleReset = () => dispatch("reset");
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <div className="flex gap-2">
        <Button onClick={handleIncrement}>Increment</Button>
        <Button onClick={handleDecrement}>Decrement</Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </div>
  );
}`}
      />
      <h1>Count: {count}</h1>
      <div className="flex gap-2">
        <Button onClick={handleIncrement}>Increment</Button>
        <Button onClick={handleDecrement}>Decrement</Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </div>
  );
}

function ComplexReducer() {
  return (
    <div>
      Complex Reducer Pattern
      <div>test</div>
    </div>
  );
}
