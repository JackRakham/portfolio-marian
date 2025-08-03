import React from 'react'
import { count } from '@/app/api/data'
import Image from 'next/image'

const Counter = ({ isColorMode }: { isColorMode: Boolean }) => {
  return (
    <section
      className={`py-16 ${isColorMode
        ? 'dark:bg-darklight bg-section'
        : 'dark:bg-darkmode bg-white'
        }`}>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='flex flex-wrap items-center md:justify-between justify-center md:gap-0 gap-9'>
          {count.map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center gap-4 group hover:scale-105 transition-transform duration-300'
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              data-aos-duration="600"
            >
              <div className="p-4 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors duration-300">
                <Image
                  src={item.icon}
                  alt='icon'
                  width={30}
                  height={30}
                  unoptimized
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className='text-5xl font-semibold text-midnight_text dark:text-white group-hover:text-green-600 transition-colors duration-300'>
                {item.value}
              </span>
              <p className='text-base text-grey text-center max-w-[17.8125rem] w-full dark:text-white/50 group-hover:text-gray-700 transition-colors duration-300'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Counter
