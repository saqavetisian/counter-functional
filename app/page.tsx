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
          <Link href="/stage-a" className="rounded-md border text-green-200 border-green-200 p-4 w-full text-center hover:bg-green-200 hover:text-black">
            Stage A
          </Link>
          <Link href="/stage-b"  className="rounded-md border text-yellow-200 border-yellow-200 p-4 w-full text-center hover:bg-yellow-200 hover:text-black">
            Stage B
          </Link>
          <Link href="/stage-c"  className="rounded-md border text-amber-200 border-amber-200 p-4 w-full text-center hover:bg-amber-200 hover:text-black">
            Stage C
          </Link>
          <Link href="/stage-d"  className="rounded-md border text-red-200 border-red-200 p-4 w-full text-center hover:bg-red-200 hover:text-black">
            Stage D (optional)
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
