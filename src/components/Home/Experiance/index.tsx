import React from 'react'
import Image from 'next/image'
import { Globe } from 'lucide-react'
import { Servicebox } from '@/app/api/data'

const Experiance = () => {
  return (
    <section className='bg-section'>
      <div className='container mx-auto max-w-6xl px-4'>
        <h2 className='sm:text-4xl text-2xl leading-tight font-bold text-midnight_text text-start pb-8 m-auto' >
          Experiencia
        </h2>
        <div className='grid md:grid-cols-1 grid-cols-2 gap-7'>
          {Servicebox.map((item, index) => (
            <div key={index} className='bg-white p-6 shadow-service rounded-md'>
              <div className="flex lg:items-center items-start lg:flex-row flex-col justify-between gap-3 md:gap-8 text-center md:text-left">
                <div className="">
                  <div className="flex justify-center items-center w-[150px] h-[150px] bg-white rounded-lg mb-4">
                    <Globe size={60} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <div className={`flex gap-1 px-2 py-1 rounded-full ${item.present === true ? "bg-success/40 " : "bg-red-700/10"}`}>
                    <span>{item.joindate}</span>
                    -
                    <span>{item.leavedate}</span>
                  </div>
                </div>
                <p className='text-base font-normal text-left'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experiance
