import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-verde-oscuro text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold">
            🌾 AgroMatch
          </Link>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-verde-claro transition-colors">Inicio</Link>
            <Link to="/catalogo" className="hover:text-verde-claro transition-colors">Catálogo</Link>
            <Link to="/publicar" className="hover:text-verde-claro transition-colors">Publicar</Link>
            <Link to="/mis-solicitudes" className="hover:text-verde-claro transition-colors">Mis Solicitudes</Link>
            <Link to="/panel" className="hover:text-verde-claro transition-colors">Panel</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
