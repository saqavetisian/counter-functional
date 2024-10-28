"use client"
import React, {useCallback} from "react";
import StageCClient from "./StageC";
import {useState} from "react";
import Divider from "@/components/ui/Divider";
import Button from "@/components/ui/Button";
import { motion  } from "framer-motion";

const StageDList = ({ initialCount }: {initialCount: number}) => {
  const [list, setList] = useState([1])

  const handleAddNewCounter = useCallback(() => {
    setList((prevState) => [...prevState, prevState.length + 1])
  }, [])

  return (
    <>
      <div className="flex justify-end px-4 sticky top-0 py-6  bg-black z-10">
        <Button onClick={handleAddNewCounter} className="bg-blue-200 hover:bg-blue-300">
          + add new counter
        </Button>
      </div>
      <div>
        {list.map((item) => (
          <React.Fragment key={item}>
            <p className="text-gray-300 text-xs mx-4">
              id: #{item}
            </p>
            <StageCClient initialCount={initialCount} />
            <motion.div
              viewport={{ once: true }}
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1
              }}
            >
              <Divider />
            </motion.div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default StageDList