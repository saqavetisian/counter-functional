"use client"

import {memo, useCallback, useState} from "react";
import Button from "@/components/ui/Button";
import { motion  } from "framer-motion";

const StageCClient = ({ initialCount }: {initialCount: number}) => {
  const [count, setCount] = useState(initialCount);

  const increment = useCallback(() => {
    setCount((prevState) => prevState + 1)
  }, []);

  const decrement = useCallback(() => {
    setCount((prevState) => prevState - 1)
  }, []);

  const randomize = useCallback(() => {
    setCount(Math.floor(Math.random() * 100))
  }, []);

  return (
    <motion.div
      viewport={{ once: true }}
      initial={{
        y: 50,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
    >
      <div className="text-2xl text-center mb-4">Count: {count}</div>
      <div className="flex space-x-4 mb-4 justify-center">
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
      <div className="flex justify-center">
        <Button
          onClick={randomize}
          className="bg-indigo-600 hover:bg-indigo-700"
        >
          Randomize
        </Button>
      </div>
    </motion.div>
  );
}

export default memo(StageCClient)