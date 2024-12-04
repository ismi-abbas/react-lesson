import Code from "@/components/shiki";
import { useEffect, useState } from "react";

const useEffectCode: string = `  const [time, setTime] = useState(new Date());
  const [rerenderCount, setRerenderCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      setRerenderCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);`;

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
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-2xl font-bold">useEffect Sample</h2>
      <div className="bg-white p-4 rounded-md shadow-md">
        <div className="flex items-center gap-2">
          <div className="text-lg">Current Time:</div>
          <div className="text-lg font-bold">{time.toLocaleTimeString()}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-lg">Rerender Count:</div>
          <div className="text-lg font-bold">{rerenderCount}</div>
        </div>
      </div>

      <Code code={useEffectCode} />
    </div>
  );
}
