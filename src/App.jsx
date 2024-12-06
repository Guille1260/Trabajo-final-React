import { MainHeader } from "./components/header/MainHeader"
import { MainFooter } from "./components/footer/MainFooter"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Productos } from "./pages/Productos";
import { Ayuda } from "./pages/ayuda";
import { Detalles } from "./pages/Detalles";
import { Cuenta } from "./pages/Cuenta";
import { Home } from "./pages/Home";
import { CartProvider } from "./context/CartContext";
import DetalleCompra from "./pages/DetalleCompra";
function App() {
  
  return (
    <>
        <CartProvider>
          <BrowserRouter>
              <MainHeader/>
              <Routes>
                  <Route path="/" element={ <Home/>} />
                  <Route path="/productos/:id" element={ <Productos/>} />
                  <Route path="/ayuda" element={ <Ayuda/>} />
                  <Route path="/detalles/:id" element={ <Detalles/>} />
                  <Route path="/loggin" element={ <Cuenta/>} />
                  <Route path="/detalleCompra" element={<DetalleCompra />} />
                  {/* <Route path="*" element={<NotFound />} /> Ruta para errores 404 */}
              </Routes>
              <MainFooter/>
          </BrowserRouter>
        </CartProvider>
        
    </>
  )
}

export default App
