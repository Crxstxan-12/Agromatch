import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="flex-grow">
      <section className="bg-gradient-to-br from-verde-oscuro to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">🌾 AgroMatch</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Conectamos productores agrícolas de Ñuble con compradores de manera directa, rápida y confiable.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/catalogo" className="bg-verde-claro text-verde-oscuro px-8 py-3 rounded-lg font-bold hover:bg-green-300 transition-colors">
              Ver Catálogo
            </Link>
            <Link to="/publicar" className="bg-white text-verde-oscuro px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Publicar Producto
            </Link>
            <Link to="/panel" className="bg-amarillo-suave text-verde-oscuro px-8 py-3 rounded-lg font-bold hover:bg-yellow-200 transition-colors">
              Panel Productor
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-verde-oscuro mb-6">El problema</h2>
              <p className="text-gray-700 text-lg mb-4">
                Los productores agrícolas de la Región de Ñuble enfrentan dificultades para vender sus productos directamente, dependiendo de intermediarios que reducen sus ganancias.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-verde-oscuro mb-6">Nuestra solución</h2>
              <p className="text-gray-700 text-lg mb-4">
                AgroMatch es un marketplace que conecta directamente a productores y compradores locales, reduciendo costos y fomentando el comercio justo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-verde-oscuro mb-8">¿Por qué elegir AgroMatch?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2 text-verde-oscuro">Directo</h3>
              <p className="text-gray-600">Sin intermediarios, negociación directa</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2 text-verde-oscuro">Justo</h3>
              <p className="text-gray-600">Mejores precios para productores y compradores</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-2 text-verde-oscuro">Local</h3>
              <p className="text-gray-600">Apoyamos la economía de la Región de Ñuble</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
