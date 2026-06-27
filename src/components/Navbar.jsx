import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-verde-oscuro text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold">
            🌾 AgroMatch
          </Link>
          
          {/* Menú de escritorio */}
          <div className="hidden md:flex gap-6">
            <Link to="/" className="hover:text-verde-claro transition-colors">Inicio</Link>
            <Link to="/catalogo" className="hover:text-verde-claro transition-colors">Catálogo</Link>
            <Link to="/publicar" className="hover:text-verde-claro transition-colors">Publicar</Link>
            <Link to="/mis-solicitudes" className="hover:text-verde-claro transition-colors">Mis Solicitudes</Link>
            <Link to="/panel" className="hover:text-verde-claro transition-colors">Panel</Link>
          </div>
          
          {/* Botón hamburguesa para móvil */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-verde-oscuro/80 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link 
              to="/" 
              className="block py-2 px-3 rounded-md hover:bg-verde-oscuro/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/catalogo" 
              className="block py-2 px-3 rounded-md hover:bg-verde-oscuro/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Catálogo
            </Link>
            <Link 
              to="/publicar" 
              className="block py-2 px-3 rounded-md hover:bg-verde-oscuro/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Publicar
            </Link>
            <Link 
              to="/mis-solicitudes" 
              className="block py-2 px-3 rounded-md hover:bg-verde-oscuro/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Mis Solicitudes
            </Link>
            <Link 
              to="/panel" 
              className="block py-2 px-3 rounded-md hover:bg-verde-oscuro/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Panel
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
