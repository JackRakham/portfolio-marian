'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useEdit } from '@/app/api/contex/EditContext'

const Hero = () => {
  const { isEditing } = useEdit()
  const [imageUrl, setImageUrl] = useState('/images/hero/marian.jpg')

  return (
    <section className='relative bg-cover text-white py-16'>
      <div className='container mx-auto max-w-6xl px-4 grid sm:grid-cols-2 grid-cols-1 gap-8 relative z-10'>
        <div 
          className="relative before:absolute m-auto before:content-[''] before:bg-[url('/images/hero/line-leyar.svg')] before:bg-no-repeat before:-right-1/4 before:top-0 before:h-24 before:w-52 before:-z-10 lg:before:inline-block before:hidden after:absolute after:content-[''] after:bg-[url('/images/hero/round-leyar.svg')] after:bg-no-repeat xl:after:inline-block after:hidden after:-left-1/4 after:bottom-0 after:h-6.25 after:w-6.25 after:-z-10"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div className="relative">
            {isEditing && (
              <div className='absolute top-2 right-2 left-2 bg-white/90 p-2 rounded z-20'>
                <label htmlFor="Image url" className="text-black">
                  Image Url:
                </label>
                <input
                  type="text"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className='w-full p-1 border border-border rounded mb-2 text-black'
                  placeholder="Image URL"
                />
              </div>
            )}
            <Image
              src={imageUrl}
              alt='hero-image'
              width={350}
              height={150}
              quality={100}
              className='rounded-lg mx-auto hover:scale-105 transition-transform duration-500 shadow-lg'
            />
          </div>
        </div>
        <div 
          className='p-4 md:px-4 px-0 space-y-4 flex flex-col items-start justify-center'
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <h1 
            className='text-midnight_text font-bold text-4xl md:text-5xl md:leading-[1.15] hover:text-green-600 transition-colors duration-300' 
            contentEditable={isEditing} 
            suppressContentEditableWarning
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Marian Daza
          </h1>
          <p 
            className='text-black text-lg leading-relaxed' 
            contentEditable={isEditing} 
            suppressContentEditableWarning
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Soy una diseñadora creativa con experiencia en logos, flyers, posters y contenido para redes sociales. Uso Canva y otras herramientas para crear diseños profesionales y alineados con tu marca. Soy rápida, responsable y adaptable.
          </p>
          <div 
            className='grid sm:grid-cols-2 grid-cols-1 mt-4 w-full gap-4'
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="group">
              <span className='text-grey text-base'>Phone</span>
              <p className='bg-transparent border-0 text-midnight_text text-lg group-hover:text-green-600 transition-colors duration-300' contentEditable={isEditing} suppressContentEditableWarning>
                + 57 324 4250043
              </p>
            </div>
            <div className="group">
              <span className='text-grey text-base'>Email</span>
              <p className='bg-transparent border-0 text-midnight_text text-lg group-hover:text-green-600 transition-colors duration-300' contentEditable={isEditing} suppressContentEditableWarning>
                jennifermarianned@gmail.com
              </p>
            </div>
            <div className='col-span-2 pt-4 group'>
              <span className='text-grey text-base'>Location</span>
              <p className='bg-transparent border-0 text-midnight_text text-lg group-hover:text-green-600 transition-colors duration-300' contentEditable={isEditing} suppressContentEditableWarning>
                Tunja, Colombia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
