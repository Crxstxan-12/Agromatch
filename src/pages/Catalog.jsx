import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { initialProducts } from '../data/initialProducts'

export default function Catalog() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const savedProducts = localStorage.getItem('agromatch_products')
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts))
    } else {
      localStorage.setItem('agromatch_products', JSON.stringify(initialProducts))
      setProducts(initialProducts)
    }
  }, [])

  const handleWhatsApp = (product) => {
    const message = encodeURIComponent(`Hola, estoy interesado en comprar ${product.name} publicado en AgroMatch.`)
    window.open(`https://wa.me/${product.phone}?text=${message}`, '_blank')
  }

  const handleOrder = (product) => {
    const quantity = prompt(`¿Cuántas unidades de ${product.name} (${product.unit}) quieres pedir?`, '1')
    if (quantity && !isNaN(quantity) && parseInt(quantity) > 0) {
      const orders = JSON.parse(localStorage.getItem('agromatch_orders') || '[]')
      const newOrder = {
        id: Date.now(),
        productId: product.id,
        productName: product.name,
        quantity: parseInt(quantity),
        unitPrice: product.price,
        totalPrice: parseInt(quantity) * product.price,
        status: 'Pendiente',
        date: new Date().toLocaleDateString('es-CL'),
        producer: product.producer,
        commune: product.commune
      }
      orders.push(newOrder)
      localStorage.setItem('agromatch_orders', JSON.stringify(orders))
      alert('¡Pedido realizado con éxito!')
    }
  }

  return (
    <div className="flex-grow py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-verde-oscuro mb-8 text-center">Catálogo de Productos</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <span className="bg-verde-claro text-verde-oscuro px-2 py-1 rounded text-sm font-medium">{product.category}</span>
                </div>
                <p className="text-2xl font-bold text-verde-oscuro mb-1">${product.price.toLocaleString('es-CL')}</p>
                <p className="text-gray-500 text-sm mb-2">por {product.unit}</p>
                <p className="text-gray-700 mb-1">Stock: <span className="font-medium">{product.stock} {product.unit}</span></p>
                <p className="text-gray-700 mb-1">Productor: {product.producer}</p>
                <p className="text-gray-500 text-sm mb-4">{product.commune}, Ñuble</p>
                <div className="flex flex-col gap-2">
                  <Link to={`/producto/${product.id}`} className="w-full bg-verde-oscuro text-white text-center py-2 rounded-lg hover:bg-green-800 transition-colors">
                    Ver Detalle
                  </Link>
                  <button onClick={() => handleWhatsApp(product)} className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors">
                    💬 WhatsApp
                  </button>
                  <button onClick={() => handleOrder(product)} className="w-full bg-amarillo-suave text-verde-oscuro py-2 rounded-lg font-medium hover:bg-yellow-200 transition-colors">
                    🛒 Hacer Pedido
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
