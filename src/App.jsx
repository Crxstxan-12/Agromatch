import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import AddProduct from './pages/AddProduct'
import ProductDetail from './pages/ProductDetail'
import MyOrders from './pages/MyOrders'
import ProducerPanel from './pages/ProducerPanel'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/publicar" element={<AddProduct />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/mis-solicitudes" element={<MyOrders />} />
          <Route path="/panel" element={<ProducerPanel />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
