import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Counter from '@/components/Home/Counter';
import Education from '@/components/Home/Education';
import Progresswork from '@/components/Home/WorkProgress';
import Experiance from '@/components/Home/Experiance';
import Portfolio from '@/components/SharedComponent/portfollio'
export const metadata: Metadata = {
  title: "Resume",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Counter isColorMode={true} />
      <Education />
      <Progresswork isColorMode={false} />
      <Experiance />
      {/* {<Portfolio />} */}
    </main>
  )
}