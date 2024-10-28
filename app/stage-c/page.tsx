"use server"

import {getMockNumber} from "@/requests/index";
import Error from "@/components/ui/Error";
import StageCClient from "@/components/counter/StageC";

const StageC = async () => {

  const response = await getMockNumber()

  if (!response.ok) {
    return <Error />
  }

  const {number} = await response.json()

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Counter Stage C</h1>
      <StageCClient initialCount={number}/>
    </div>
  );
}

export default StageC