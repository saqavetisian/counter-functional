"use server"

import {getMockNumber} from "@/requests/index";
import Error from "@/components/ui/Error";
import StageBClient from "@/components/counter/StageB";

const StageB = async () => {

  const response = await getMockNumber()

  if (!response.ok) {
    return <Error />
  }

  const {number} = await response.json()

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Counter Stage B</h1>
      <StageBClient initialCount={number}/>
    </div>
  );
}

export default StageB