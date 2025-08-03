import React from 'react'
import Image from 'next/image'
import { Globe } from 'lucide-react'
import { Servicebox } from '@/app/api/data'

const Experiance = () => {
  return (
    <section className='bg-section py-16'>
      <div className='container mx-auto max-w-6xl px-4'>
        <h2 
          className='sm:text-4xl text-2xl leading-tight font-bold text-midnight_text text-start pb-8 m-auto' 
          data-aos="fade-down"
          data-aos-duration="800"
        >
          Experiencia
        </h2>
        <div className='grid md:grid-cols-1 grid-cols-2 gap-7'>
          {Servicebox.map((item, index) => (
            <div 
              key={index} 
              className='bg-white p-6 shadow-service rounded-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="600"
            >
              <div className="flex lg:items-center items-start lg:flex-row flex-col justify-between gap-3 md:gap-8 text-center md:text-left">
                <div className="">
                  <div className="flex justify-center items-center w-[150px] h-[150px] bg-white rounded-lg mb-4 border-2 border-green-100 hover:border-green-300 transition-colors duration-300 group">
                    <Globe size={60} className="text-green-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                  <div className={`flex gap-1 px-3 py-2 rounded-full text-sm font-medium ${item.present === true ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    <span>{item.joindate}</span>
                    -
                    <span>{item.leavedate}</span>
                  </div>
                </div>
                <p className='text-base font-normal text-left text-gray-600 leading-relaxed'>
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
