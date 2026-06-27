import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddProduct() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    unit: '',
    stock: '',
    producer: '',
    commune: '',
    phone: '',
    description: '',
    image: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const products = JSON.parse(localStorage.getItem('agromatch_products') || '[]')
    const newProduct = {
      id: Date.now(),
      ...formData,
      price: parseInt(formData.price),
      stock: parseInt(formData.stock)
    }
    products.push(newProduct)
    localStorage.setItem('agromatch_products', JSON.stringify(products))
    alert('¡Producto publicado con éxito!')
    navigate('/catalogo')
  }

  return (
    <div className="flex-grow py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-verde-oscuro mb-8 text-center">Publicar Nuevo Producto</h1>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Nombre del Producto</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full border rounded-lg px-4 py-2" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Categoría</label>
              <input type="text" name="category" value={formData.category} onChange={handleChange} required className="w-full border rounded-lg px-4 py-2" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Precio</label>
              <input type="number" name="price" value={formData.price} onChange={handleChange} required className="w-full border rounded-lg px-4 py-2" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Unidad de Venta</label>
              <input type="text" name="unit" value={formData.unit} onChange={handleChange} required className="w-full border rounded-lg px-4 py-2" placeholder="kilo, saco, caja, docena..." />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Stock Disponible</label>
              <input type="number" name="stock" value={formData.stock} onChange={handleChange} required className="w-full border rounded-lg px-4 py-2" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Nombre del Productor</label>
              <input type="text" name="producer" value={formData.producer} onChange={handleChange} required className="w-full border rounded-lg px-4 py-2" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Comuna</label>
              <input type="text" name="commune" value={formData.commune} onChange={handleChange} required className="w-full border rounded-lg px-4 py-2" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Teléfono/WhatsApp</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} required className="w-full border rounded-lg px-4 py-2" placeholder="+569..." />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Descripción</label>
            <textarea name="description" value={formData.description} onChange={handleChange} required rows={3} className="w-full border rounded-lg px-4 py-2" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">URL de Imagen</label>
            <input type="url" name="image" value={formData.image} onChange={handleChange} required className="w-full border rounded-lg px-4 py-2" />
          </div>
          <button type="submit" className="w-full bg-verde-oscuro text-white py-3 rounded-lg font-bold hover:bg-green-800 transition-colors">
            Publicar Producto
          </button>
        </form>
      </div>
    </div>
  )
}
