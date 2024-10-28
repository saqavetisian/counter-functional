"use client"

import {useCallback, useState} from "react";
import Button from "@/components/ui/Button";

const StageA = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevState) => prevState + 1)
  }, []);

  const decrement = useCallback(() => {
    setCount((prevState) => prevState - 1)
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Counter Stage A</h1>
      <div className="text-2xl mb-4">Count: {count}</div>
      <div className="flex space-x-4">
        <Button
          onClick={increment}
          className="bg-blue-500 hover:bg-blue-700"
        >
          Increment
        </Button>
        <Button
          onClick={decrement}
          className="bg-red-500 hover:bg-red-700"
        >
          Decrement
        </Button>
      </div>
    </div>
  );
}

export default StageA