"use client"

import { motion  } from "framer-motion";
import Link from "next/link";
import {TextGenerateEffect} from "@/components/ui/TextGenerateEffect";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 min-h-screen items-center justify-center p-10 md:p-24">
      <TextGenerateEffect words="Hey everyone 👋, Hope you are doing well" />
      <motion.div
        initial={{
          y: -2000,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 100
        }}
        className="flex flex-col gap-4"
      >
        <p className="text-gray-200">
          Happy to see you here! Please click on the links below to check the stage
        </p>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
          <Link href="/stage-a" className="rounded-md border dark:text-green-200 text-green-600  dark:border-green-200 border-green-600  p-4 w-full text-center dark:hover:bg-green hover:bg-600  hover:text-black">
            Stage A
          </Link>
          <Link href="/stage-b"  className="rounded-md border dark:text-yellow-200 text-yellow-600  dark:border-yellow-200 border-yellow-600  p-4 w-full text-center dark:hover:bg-yellow hover:bg-600 hover:text-black">
            Stage B
          </Link>
          <Link href="/stage-c"  className="rounded-md border dark:text-amber-200 text-amber-600  dark:border-amber-200 border-amber-600  p-4 w-full text-center dark:hover:bg-amber hover:bg-600 dark:hover:text-black hover:text-600 ">
            Stage C
          </Link>
          <Link href="/stage-d"  className="rounded-md border dark:text-red-200 text-red-600 border-red-600  dark:border-red-200 p-4 w-full text-center dark:hover:bg-red hover:bg-600  dark:hover:text-black hover:text-600 ">
            Stage D (optional)
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
