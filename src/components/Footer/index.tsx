import React from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Heart } from 'lucide-react'
import { heroinfo } from '@/app/api/data'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Contact Info Section */}
          <div 
            className="space-y-4"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 hover:text-green-400 transition-colors duration-300">
                <Mail size={20} className="text-green-400" />
                <a href={`mailto:${heroinfo.email}`} className="hover:underline">
                  {heroinfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 hover:text-green-400 transition-colors duration-300">
                <Phone size={20} className="text-green-400" />
                <a href={`tel:${heroinfo.phone}`} className="hover:underline">
                  {heroinfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-green-400" />
                <span>{heroinfo.location}</span>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div 
            className="space-y-4"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="600"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Acerca de</h3>
            <p className="text-gray-300 leading-relaxed">
              {heroinfo.description}
            </p>
            <div className="pt-2">
              <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {heroinfo.subtitle}
              </span>
            </div>
          </div>

          {/* Social Links Section */}
          <div 
            className="space-y-4"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="600"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Sígueme</h3>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#" 
                className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-green-600 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-blue-400 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
            
            {/* Skills Tags */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-3">Habilidades</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'].map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-green-600 hover:text-white transition-colors duration-300 cursor-default"
                    data-aos="zoom-in"
                    data-aos-delay={index * 50}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto max-w-6xl px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>© {currentYear} {heroinfo.title}. Hecho con</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>y mucho café ☕</span>
            </div>
            <div className="text-gray-400 text-sm">
              <p>Desarrollado con Next.js y Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
