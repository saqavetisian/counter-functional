"use client"

import {useCallback, useState} from "react";
import Button from "@/components/ui/Button";

const StageBClient = ({ initialCount }: {initialCount: number}) => {
  const [count, setCount] = useState(initialCount);

  const increment = useCallback(() => {
    setCount((prevState) => prevState + 1)
  }, []);

  const decrement = useCallback(() => {
    setCount((prevState) => prevState - 1)
  }, []);

  return (
    <>
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
    </>
  );
}

export default StageBClient