import React from 'react'
import { Palette, Camera, Edit, Megaphone, Users, Award } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: "Diseño de Logos",
    description: "Creación de identidades visuales únicas y memorables que representen la esencia de tu marca.",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    icon: Camera,
    title: "Contenido para Redes",
    description: "Diseños atractivos para Instagram, Facebook y otras plataformas que aumenten tu engagement.",
    color: "text-pink-600",
    bgColor: "bg-pink-100"
  },
  {
    icon: Edit,
    title: "Flyers y Posters",
    description: "Material publicitario impactante para promocionar tus eventos, productos o servicios.",
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    icon: Megaphone,
    title: "Publicidad Digital",
    description: "Banners, anuncios y material promocional optimizado para campañas digitales efectivas.",
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    icon: Users,
    title: "Branding Completo",
    description: "Desarrollo integral de marca: paleta de colores, tipografías y elementos visuales coherentes.",
    color: "text-orange-600",
    bgColor: "bg-orange-100"
  },
  {
    icon: Award,
    title: "Diseños Premium",
    description: "Trabajos de alta calidad con atención al detalle para clientes que buscan excelencia.",
    color: "text-red-600",
    bgColor: "bg-red-100"
  }
]

const Services = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 
            className="text-4xl font-bold text-midnight_text mb-4"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Mis Servicios de Diseño
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="600"
          >
            Ofrezco soluciones creativas personalizadas para impulsar tu marca y hacer que destaque en el mercado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-green-200"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="600"
              >
                <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent size={32} className={service.color} />
                </div>
                
                <h3 className="text-xl font-bold text-midnight_text mb-4 group-hover:text-green-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Decorative element */}
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-green-400 to-green-600 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div 
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="600"
        >
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Listo para llevar tu marca al siguiente nivel?</h3>
            <p className="text-lg mb-6 opacity-90">
              Trabajemos juntos para crear diseños que realmente conecten con tu audiencia
            </p>
            <a 
              href="https://wa.link/8ye4il"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 hover:scale-105 transform"
            >
              Comenzar Proyecto
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
