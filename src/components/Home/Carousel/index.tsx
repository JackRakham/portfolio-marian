'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react'

// Lista de imágenes del portfolio
const portfolioImages = [
    {
        src: '/images/portfolio/cozycasa.png',
        title: 'CozyCasa',
        description: 'Diseño de identidad visual para marca de hogar'
    },
    {
        src: '/images/portfolio/humans.png',
        title: 'Humans',
        description: 'Branding para empresa de recursos humanos'
    },
    {
        src: '/images/portfolio/mars.png',
        title: 'Mars Project',
        description: 'Diseño futurista para proyecto espacial'
    },
    {
        src: '/images/portfolio/panda-logo.png',
        title: 'Panda Logo',
        description: 'Logo minimalista con concepto orgánico'
    },
    {
        src: '/images/portfolio/roket-squred.png',
        title: 'Rocket Squared',
        description: 'Identidad visual para startup tecnológica'
    }
]

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlay, setIsAutoPlay] = useState(true)

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlay) return

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === portfolioImages.length - 1 ? 0 : prevIndex + 1
            )
        }, 4000)

        return () => clearInterval(interval)
    }, [isAutoPlay])

    const goToPrevious = () => {
        setCurrentIndex(
            currentIndex === 0 ? portfolioImages.length - 1 : currentIndex - 1
        )
    }

    const goToNext = () => {
        setCurrentIndex(
            currentIndex === portfolioImages.length - 1 ? 0 : currentIndex + 1
        )
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="text-center mb-12">
                    <h2
                        className="text-4xl font-bold text-midnight_text mb-4"
                        data-aos="fade-up"
                        data-aos-duration="600"
                    >
                        Portfolio de Trabajos
                    </h2>
                    <p
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="600"
                    >
                        Explora algunos de mis proyectos más destacados y descubre la calidad de mis diseños
                    </p>
                </div>

                <div
                    className="relative max-w-6xl mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="600"
                    onMouseEnter={() => setIsAutoPlay(false)}
                    onMouseLeave={() => setIsAutoPlay(true)}
                >
                    {/* Main carousel container */}
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white border border-gray-100">
                        <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
                            {portfolioImages.map((image, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentIndex
                                        ? 'opacity-100 transform translate-x-0'
                                        : index < currentIndex
                                            ? 'opacity-0 transform -translate-x-full'
                                            : 'opacity-0 transform translate-x-full'
                                        }`}
                                >
                                    <div className="relative h-full w-full group">
                                        <Image
                                            src={image.src}
                                            alt={image.title}
                                            fill
                                            className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                                            priority={index === 0}
                                        />

                                        {/* Overlay with project info */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Eye size={20} className="text-green-400" />
                                                    <span className="text-sm font-medium text-green-400">Ver Proyecto</span>
                                                </div>
                                                <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                                                <p className="text-gray-200">{image.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation arrows */}
                        <button
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
                            aria-label="Imagen anterior"
                        >
                            <ChevronLeft size={24} className="group-hover:text-green-600 transition-colors duration-300" />
                        </button>

                        <button
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
                            aria-label="Imagen siguiente"
                        >
                            <ChevronRight size={24} className="group-hover:text-green-600 transition-colors duration-300" />
                        </button>
                    </div>

                    {/* Dots indicator */}
                    <div className="flex justify-center space-x-3 mt-8">
                        {portfolioImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${index === currentIndex
                                    ? 'bg-green-600 shadow-lg'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Ir a imagen ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Progress bar */}
                    <div className="mt-4 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                        <div
                            className="bg-gradient-to-r from-green-500 to-green-600 h-1 rounded-full transition-all duration-300"
                            style={{
                                width: `${((currentIndex + 1) / portfolioImages.length) * 100}%`
                            }}
                        />
                    </div>
                </div>

                {/* CTA Section */}
                <div
                    className="text-center mt-16"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="600"
                >
                    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">¿Te gusta lo que ves?</h3>
                        <p className="text-lg mb-6 opacity-90">
                            Cada proyecto es una nueva oportunidad para crear algo excepcional
                        </p>
                        <a
                            href="https://wa.link/8ye4il"
                            className="inline-block bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 hover:scale-105 transform"
                        >
                            Ver Más Proyectos
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Carousel
