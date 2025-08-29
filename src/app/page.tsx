import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Education from '@/components/Home/Education';
import Progresswork from '@/components/Home/WorkProgress';
import Experiance from '@/components/Home/Experiance';
import Services from '@/components/Home/Services';
import Carousel from '@/components/Home/Carousel';
import Portfolio from '@/components/SharedComponent/portfollio'
export const metadata: Metadata = {
  title: "Marian Daza - Portfolio",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Education />
      <Progresswork isColorMode={false} />
      {/* {<Experiance />} */}
      <Carousel />
      {/* {<Portfolio />} */}
    </main>
  )
}