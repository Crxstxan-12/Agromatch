import { useEffect, useState } from 'react'

export default function MyOrders() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const savedOrders = localStorage.getItem('agromatch_orders')
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders))
    }
  }, [])

  return (
    <div className="flex-grow py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-verde-oscuro mb-8 text-center">Mis Solicitudes</h1>
        {orders.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            <p className="text-xl">No tienes solicitudes de pedido aún.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{order.productName}</h3>
                    <p className="text-gray-500">Productor: {order.producer} ({order.commune})</p>
                  </div>
                  <span className="bg-amarillo-suave text-verde-oscuro px-3 py-1 rounded font-medium">{order.status}</span>
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-gray-500 text-sm">Cantidad</p>
                    <p className="text-lg font-bold">{order.quantity}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Precio Unitario</p>
                    <p className="text-lg font-bold">${order.unitPrice.toLocaleString('es-CL')}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Precio Total</p>
                    <p className="text-lg font-bold text-verde-oscuro">${order.totalPrice.toLocaleString('es-CL')}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Fecha</p>
                    <p className="text-lg font-bold">{order.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
