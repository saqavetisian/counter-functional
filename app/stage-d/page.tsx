"use server"

import {getMockNumber} from "@/requests/index";
import Error from "@/components/ui/Error";
import StageDList from "../../components/counter/StageDList";

const StageC = async () => {

  const response = await getMockNumber()

  if (!response.ok) {
    return <Error />
  }

  const {number} = await response.json()

  return (
    <div>
      <h1 className="text-4xl text-center font-bold my-4">Counter Stage D</h1>
      <StageDList initialCount={number}/>
    </div>
  );
}

export default StageC