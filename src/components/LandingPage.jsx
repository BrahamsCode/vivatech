import React, { useState } from "react";
import {
  Calculator,
  Building2,
  Hotel,
  ShoppingBag,
  Factory,
  Library,
  Binary,
  Database,
  Cloud,
  Shield,
  Smartphone,
  Bot,
  ChevronRight,
  Cpu,
  Phone,
  Mail,
  MapPin,
  FileSpreadsheet,
  Store,
  Briefcase,
  Truck,
  Hospital,
  GitBranch,
  Users,
  Settings,
  BarChart,
  School,
  Coffee,
  Dumbbell,
  Code,
  X,
} from "lucide-react";

const DemoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="relative w-full max-w-md p-8 bg-gray-900 border border-blue-500 rounded-2xl">
        <button
          onClick={onClose}
          className="absolute text-gray-400 hover:text-white top-4 right-4"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="mb-6 text-2xl font-bold text-white">
          Solicitar una Demo
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Nombre Completo
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 text-white bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Empresa
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 text-white bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 text-white bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Teléfono
            </label>
            <input
              type="tel"
              required
              className="w-full px-4 py-2 text-white bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Sistema de Interés
            </label>
            <select className="w-full px-4 py-2 text-white bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
              <option value="contable">Sistema Contable</option>
              <option value="hotelero">Sistema Hotelero</option>
              <option value="pos">Punto de Venta</option>
              <option value="restaurante">Sistema Restaurante</option>
              <option value="educativo">Sistema Educativo</option>
              <option value="gimnasio">Sistema Gimnasio</option>
              <option value="personalizado">Sistema Personalizado</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 font-semibold text-white transition-opacity rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90"
          >
            Solicitar Demo
          </button>
        </form>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
                  VIVA TECH SAC
                </div>
                <div className="text-xs text-blue-400">RUC: 20612512206</div>
              </div>
            </div>
            <div className="hidden space-x-8 md:flex">
              <a
                href="#inicio"
                className="transition-colors hover:text-blue-400"
              >
                Inicio
              </a>
              <a
                href="#soluciones"
                className="transition-colors hover:text-blue-400"
              >
                Soluciones
              </a>
              <a
                href="#tecnologias"
                className="transition-colors hover:text-blue-400"
              >
                Tecnologías
              </a>
              <a
                href="#contacto"
                className="transition-colors hover:text-blue-400"
              >
                Contacto
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden md:py-32" id="inicio">
        <div className="container relative z-10 px-6 mx-auto">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-bold text-transparent md:text-7xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text">
              Desarrollo de Software Empresarial
            </h1>
            <p className="max-w-3xl mx-auto mb-8 text-xl text-gray-300">
              Expertos en crear soluciones tecnológicas a medida para todo tipo
              de empresas. Sistemas web y escritorio con tecnología de última
              generación.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center px-8 py-4 mx-auto font-semibold transition-all transform rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 hover:scale-105"
            >
              Solicita una Demo
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Soluciones Empresariales Section */}
      <section className="relative py-20" id="soluciones">
        <div className="absolute inset-0 bg-blue-900/10 backdrop-blur-3xl"></div>
        <div className="container relative px-6 mx-auto">
          <h2 className="mb-16 text-3xl font-bold text-center text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text">
            Soluciones Empresariales
          </h2>

          {/* Grid de soluciones */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Sistema Contable */}
            <div className="p-8 transition-all bg-gray-800 bg-opacity-50 border border-gray-700 rounded-2xl hover:bg-opacity-70 hover:border-blue-500 group">
              <div className="flex items-center justify-center w-16 h-16 p-4 mx-auto mb-6 transition-transform rounded-full bg-gradient-to-br from-blue-500 to-purple-600 group-hover:scale-110">
                <Calculator className="w-8 h-8" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-center text-blue-400">
                Sistema Contable
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Facturación Electrónica SUNAT</li>
                <li>• Libros Electrónicos</li>
                <li>• Control de Inventarios</li>
                <li>• Compras y Ventas</li>
                <li>• Reportes Contables</li>
              </ul>
            </div>

            {/* Sistema Hotelero */}
            <div className="p-8 transition-all bg-gray-800 bg-opacity-50 border border-gray-700 rounded-2xl hover:bg-opacity-70 hover:border-blue-500 group">
              <div className="flex items-center justify-center w-16 h-16 p-4 mx-auto mb-6 transition-transform rounded-full bg-gradient-to-br from-blue-500 to-purple-600 group-hover:scale-110">
                <Hotel className="w-8 h-8" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-center text-blue-400">
                Sistema Hotelero
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Gestión de Reservas</li>
                <li>• Control de Habitaciones</li>
                <li>• Facturación Integrada</li>
                <li>• Check-in/Check-out</li>
                <li>• Reportes Gerenciales</li>
              </ul>
            </div>

            {/* Punto de Venta */}
            <div className="p-8 transition-all bg-gray-800 bg-opacity-50 border border-gray-700 rounded-2xl hover:bg-opacity-70 hover:border-blue-500 group">
              <div className="flex items-center justify-center w-16 h-16 p-4 mx-auto mb-6 transition-transform rounded-full bg-gradient-to-br from-blue-500 to-purple-600 group-hover:scale-110">
                <Store className="w-8 h-8" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-center text-blue-400">
                Punto de Venta
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Ventas Rápidas</li>
                <li>• Control de Stock</li>
                <li>• Múltiples Cajas</li>
                <li>• Facturación SUNAT</li>
                <li>• Reportes de Ventas</li>
              </ul>
            </div>

            {/* Sistema Restaurante */}
            <div className="p-8 transition-all bg-gray-800 bg-opacity-50 border border-gray-700 rounded-2xl hover:bg-opacity-70 hover:border-blue-500 group">
              <div className="flex items-center justify-center w-16 h-16 p-4 mx-auto mb-6 transition-transform rounded-full bg-gradient-to-br from-blue-500 to-purple-600 group-hover:scale-110">
                <Coffee className="w-8 h-8" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-center text-blue-400">
                Sistema Restaurante
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Control de Mesas</li>
                <li>• Comandas Digitales</li>
                <li>• Control de Cocina</li>
                <li>• Delivery Integrado</li>
                <li>• Control de Insumos</li>
              </ul>
            </div>

            {/* Sistema Educativo */}
            <div className="p-8 transition-all bg-gray-800 bg-opacity-50 border border-gray-700 rounded-2xl hover:bg-opacity-70 hover:border-blue-500 group">
              <div className="flex items-center justify-center w-16 h-16 p-4 mx-auto mb-6 transition-transform rounded-full bg-gradient-to-br from-blue-500 to-purple-600 group-hover:scale-110">
                <School className="w-8 h-8" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-center text-blue-400">
                Sistema Educativo
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Matrícula Online</li>
                <li>• Control de Notas</li>
                <li>• Asistencia Digital</li>
                <li>• Portal de Padres</li>
                <li>• Gestión Académica</li>
              </ul>
            </div>

            {/* Sistema Gimnasio */}
            <div className="p-8 transition-all bg-gray-800 bg-opacity-50 border border-gray-700 rounded-2xl hover:bg-opacity-70 hover:border-blue-500 group">
              <div className="flex items-center justify-center w-16 h-16 p-4 mx-auto mb-6 transition-transform rounded-full bg-gradient-to-br from-blue-500 to-purple-600 group-hover:scale-110">
                <Dumbbell className="w-8 h-8" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-center text-blue-400">
                Sistema Gimnasio
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Control de Membresías</li>
                <li>• Asistencia Biométrica</li>
                <li>• Rutinas Personalizadas</li>
                <li>• Control de Pagos</li>
                <li>• App para Clientes</li>
              </ul>
            </div>
          </div>

          {/* Características Generales */}
          <div className="p-8 mt-16 bg-gray-800 border border-gray-700 bg-opacity-30 rounded-2xl">
            <h3 className="mb-6 text-xl font-semibold text-center text-blue-400">
              Características de Nuestros Sistemas
            </h3>
            <div className="grid gap-6 md:grid-cols-4">
              <div className="flex items-center space-x-3">
                <Code className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Versión Web y Escritorio</span>
              </div>
              <div className="flex items-center space-x-3">
                <Cloud className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Respaldos en la Nube</span>
              </div>
              <div className="flex items-center space-x-3">
                <Settings className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">100% Personalizable</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Máxima Seguridad</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-800 bg-opacity-50" id="tecnologias">
        <div className="container px-6 mx-auto">
          <h2 className="mb-16 text-3xl font-bold text-center text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text">
            Tecnologías que Usamos
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              "React",
              "Node.js",
              "Python",
              "Laravel",
              "PostgreSQL",
              "MongoDB",
              "AWS",
              "Docker",
            ].map((tech, index) => (
              <div
                key={index}
                className="p-4 text-center transition-colors bg-gray-900 border border-gray-700 rounded-xl hover:border-blue-500"
              >
                <p className="font-semibold text-blue-400">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" id="contacto">
        <div className="container px-6 mx-auto">
          <h2 className="mb-16 text-3xl font-bold text-center text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text">
            Contáctanos
          </h2>
          <div className="grid max-w-4xl gap-12 mx-auto md:grid-cols-3">
            <div className="p-8 text-center transition-all bg-gray-800 bg-opacity-50 border border-gray-700 backdrop-blur-lg rounded-2xl hover:border-blue-500">
              <div className="flex items-center justify-center w-16 h-16 p-4 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="mb-2 font-semibold text-blue-400">Teléfono</h3>
              <p className="text-gray-300">+51 987 654 321</p>
            </div>
            <div className="p-8 text-center transition-all bg-gray-800 bg-opacity-50 border border-gray-700 backdrop-blur-lg rounded-2xl hover:border-blue-500">
              <div className="flex items-center justify-center w-16 h-16 p-4 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="mb-2 font-semibold text-blue-400">Email</h3>
              <p className="text-gray-300">ventas@vivatech.pe</p>
            </div>
            <div className="p-8 text-center transition-all bg-gray-800 bg-opacity-50 border border-gray-700 backdrop-blur-lg rounded-2xl hover:border-blue-500">
              <div className="flex items-center justify-center w-16 h-16 p-4 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="mb-2 font-semibold text-blue-400">Ubicación</h3>
              <p className="text-gray-300">Lima, Perú</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-t from-gray-900 to-transparent">
        <div className="container px-6 mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text">
                VIVA TECH SAC
              </h3>
              <p className="text-gray-400">
                RUC: 20612512206
                <br />
                Transformando empresas a través de la tecnología
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-blue-400">Soluciones</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="transition-colors hover:text-blue-400">
                    Sistema Contable
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-blue-400">
                    Sistema Hotelero
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-blue-400">
                    Punto de Venta
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-blue-400">
                    Sistemas a Medida
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-blue-400">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="transition-colors hover:text-blue-400">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-blue-400">
                    Casos de Éxito
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-blue-400">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-blue-400">
                    Soporte
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-blue-400">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="transition-colors hover:text-blue-400">
                    Términos y Condiciones
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-blue-400">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-blue-400">
                    Libro de Reclamaciones
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 mt-12 text-center text-gray-400 border-t border-gray-800">
            <p>&copy; 2024 Viva Tech SAC. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default LandingPage;