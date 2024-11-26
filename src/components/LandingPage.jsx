import React from 'react';
import { 
  Code, Binary, Cpu, Globe, Rocket, Phone, Mail, MapPin, 
  Database, Cloud, Shield, Wifi, Smartphone, Bot, ChevronRight, Building2
} from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-gray-900 to-black">
      {/* Animated background overlay */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px] animate-[gradient_2s_linear_infinite]"></div>
      </div>

      {/* Header/Nav with glassmorphism effect */}
      <header className="sticky top-0 z-50 bg-gray-900 bg-opacity-70 backdrop-blur-lg">
        <nav className="container px-6 py-4 mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 opacity-50 blur-lg"></div>
                <Cpu className="relative z-10 w-8 h-8 mr-2 text-blue-400" />
              </div>
              <div>
                <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  VIVA TECH
                </div>
                <div className="text-xs text-blue-400">Innovación Digital</div>
              </div>
            </div>
            <div className="hidden space-x-8 md:flex">
              <a href="#inicio" className="transition-colors hover:text-blue-400">Inicio</a>
              <a href="#servicios" className="transition-colors hover:text-blue-400">Servicios</a>
              <a href="#tecnologias" className="transition-colors hover:text-blue-400">Tecnologías</a>
              <a href="#contacto" className="transition-colors hover:text-blue-400">Contacto</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section with particle effect */}
      <section className="relative py-20 overflow-hidden md:py-32" id="inicio">
        <div className="container relative z-10 px-6 mx-auto">
          <div className="text-center">
            <div className="inline-block">
              <h1 className="mb-6 text-5xl font-bold text-transparent md:text-7xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text">
                El Futuro del Software
              </h1>
            </div>
            <p className="max-w-3xl mx-auto mb-8 text-xl text-gray-300">
              Desarrollamos soluciones tecnológicas de próxima generación utilizando 
              IA, blockchain y computación en la nube
            </p>
            <button className="flex items-center px-8 py-4 mx-auto font-semibold transition-all transform rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 hover:scale-105">
              Inicia tu Transformación Digital
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section with hover effects */}
      <section className="py-20" id="servicios">
        <div className="container px-6 mx-auto">
          <h2 className="mb-16 text-3xl font-bold text-center text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text">
            Soluciones Innovadoras
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <Binary className="w-8 h-8" />,
                title: "Inteligencia Artificial",
                desc: "Sistemas inteligentes y Machine Learning para optimizar procesos empresariales"
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "Blockchain",
                desc: "Implementación de soluciones descentralizadas y contratos inteligentes"
              },
              {
                icon: <Cloud className="w-8 h-8" />,
                title: "Cloud Computing",
                desc: "Arquitecturas escalables en la nube con tecnologías serverless"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Ciberseguridad",
                desc: "Protección avanzada contra amenazas y vulnerabilidades"
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Desarrollo Móvil",
                desc: "Apps nativas y multiplataforma con tecnologías de última generación"
              },
              {
                icon: <Bot className="w-8 h-8" />,
                title: "RPA",
                desc: "Automatización robótica de procesos empresariales"
              }
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="p-8 transition-all transform bg-gray-800 bg-opacity-50 border border-gray-700 backdrop-blur-lg rounded-2xl hover:bg-opacity-70 hover:-translate-y-2 hover:border-blue-500">
                  <div className="flex items-center justify-center w-16 h-16 p-4 mx-auto mb-6 transition-transform rounded-full bg-gradient-to-br from-blue-500 to-purple-600 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-center text-blue-400">
                    {service.title}
                  </h3>
                  <p className="text-center text-gray-400">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-800 bg-opacity-50" id="tecnologias">
        <div className="container px-6 mx-auto">
          <h2 className="mb-16 text-3xl font-bold text-center text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text">
            Stack Tecnológico
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              "React Native", "Python", "TensorFlow", "AWS",
              "Ethereum", "Node.js", "MongoDB", "Kubernetes"
            ].map((tech, index) => (
              <div key={index} className="p-4 text-center transition-colors bg-gray-900 border border-gray-700 rounded-xl hover:border-blue-500">
                <p className="font-semibold text-blue-400">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with glassmorphism */}
      <section className="py-20" id="contacto">
        <div className="container px-6 mx-auto">
          <h2 className="mb-16 text-3xl font-bold text-center text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text">
            Conéctate con el Futuro
          </h2>
          <div className="grid max-w-4xl gap-12 mx-auto md:grid-cols-3">
            {[
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Teléfono",
                info: "+51 990 911 888"
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email",
                info: "innovation@vivatech.pe"
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Ubicación",
                info: "San Isidro, Lima - Perú"
              }
            ].map((contact, index) => (
              <div key={index} className="p-8 text-center transition-all bg-gray-800 bg-opacity-50 border border-gray-700 backdrop-blur-lg rounded-2xl hover:border-blue-500">
                <div className="flex items-center justify-center w-16 h-16 p-4 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                  {contact.icon}
                </div>
                <h3 className="mb-2 font-semibold text-blue-400">{contact.title}</h3>
                <p className="text-gray-300">{contact.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with gradient */}
      <footer className="py-12 bg-gradient-to-t from-gray-900 to-transparent">
        <div className="container px-6 mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-lg font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text">
                VIVA TECH SAC
              </h3>
              <p className="text-gray-400">
                RUC: 20612512206<br/>
                Transformando el futuro digital
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-blue-400">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="transition-colors hover:text-blue-400">Blog Tech</a></li>
                <li><a href="#" className="transition-colors hover:text-blue-400">Casos de Éxito</a></li>
                <li><a href="#" className="transition-colors hover:text-blue-400">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-blue-400">Social</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="transition-colors hover:text-blue-400">LinkedIn</a></li>
                <li><a href="#" className="transition-colors hover:text-blue-400">GitHub</a></li>
                <li><a href="#" className="transition-colors hover:text-blue-400">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 mt-12 text-center text-gray-400 border-t border-gray-800">
            <p>&copy; 2024 Viva Tech SAC. Pioneros en Innovación Digital.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;