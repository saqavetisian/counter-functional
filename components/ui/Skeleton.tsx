'use client'

const Skeleton = () => {

  return (
    <div
      className="space-y-4 animate-pulse rounded-lg p-4 w-full" >
      <div className="flex items-center justify-center">
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
      </div>
      <div className="flex items-center w-full ">
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
      </div>
      <div className="flex items-center w-full">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
      </div>
    </div>
  )
}

export default Skeleton