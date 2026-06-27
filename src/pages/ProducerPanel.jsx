import { useEffect, useState } from 'react'

export default function ProducerPanel() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const savedProducts = localStorage.getItem('agromatch_products')
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts))
    }
  }, [])

  const totalProducts = products.length
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0)
  const totalValue = products.reduce((sum, p) => sum + (p.price * p.stock), 0)

  const deleteProduct = (id) => {
    if (window.confirm('¿Estás seguro de eliminar este producto?')) {
      const updated = products.filter(p => p.id !== id)
      setProducts(updated)
      localStorage.setItem('agromatch_products', JSON.stringify(updated))
    }
  }

  return (
    <div className="flex-grow py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-verde-oscuro mb-8 text-center">Panel del Productor</h1>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-4xl mb-2">📦</div>
            <p className="text-gray-500 mb-1">Productos Publicados</p>
            <p className="text-4xl font-bold text-verde-oscuro">{totalProducts}</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-4xl mb-2">📊</div>
            <p className="text-gray-500 mb-1">Stock Total</p>
            <p className="text-4xl font-bold text-verde-oscuro">{totalStock}</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-4xl mb-2">💰</div>
            <p className="text-gray-500 mb-1">Valor del Inventario</p>
            <p className="text-4xl font-bold text-verde-oscuro">${totalValue.toLocaleString('es-CL')}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-900">Lista de Productos</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Producto</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Precio</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Stock</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Comuna</th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded mr-4" />
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-sm text-gray-500">{product.category}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium">${product.price.toLocaleString('es-CL')}/{product.unit}</td>
                    <td className="px-6 py-4">{product.stock} {product.unit}</td>
                    <td className="px-6 py-4">{product.commune}</td>
                    <td className="px-6 py-4 text-right">
                      <button onClick={() => deleteProduct(product.id)} className="text-red-600 hover:text-red-800 font-medium mr-4">
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
