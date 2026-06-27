import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('agromatch_products') || '[]')
    const found = products.find(p => p.id === parseInt(id))
    setProduct(found)
  }, [id])

  if (!product) return <div className="flex-grow flex items-center justify-center"><p className="text-xl">Producto no encontrado</p></div>

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hola, estoy interesado en comprar ${product.name} publicado en AgroMatch.`)
    window.open(`https://wa.me/${product.phone}?text=${message}`, '_blank')
  }

  return (
    <div className="flex-grow py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/catalogo" className="text-verde-oscuro hover:underline mb-6 inline-block">&larr; Volver al catálogo</Link>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img src={product.image} alt={product.name} className="w-full h-96 object-cover" />
            </div>
            <div className="p-8 md:w-1/2">
              <span className="bg-verde-claro text-verde-oscuro px-3 py-1 rounded text-sm font-medium mb-4 inline-block">{product.category}</span>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-4xl font-bold text-verde-oscuro mb-2">${product.price.toLocaleString('es-CL')}</p>
              <p className="text-gray-500 mb-6">por {product.unit}</p>
              <div className="mb-6 space-y-2">
                <p className="text-gray-700"><span className="font-medium">Stock:</span> {product.stock} {product.unit}</p>
                <p className="text-gray-700"><span className="font-medium">Productor:</span> {product.producer}</p>
                <p className="text-gray-700"><span className="font-medium">Comuna:</span> {product.commune}</p>
              </div>
              <p className="text-gray-700 mb-8">{product.description}</p>
              <button onClick={handleWhatsApp} className="w-full bg-green-500 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors">
                💬 Contactar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
