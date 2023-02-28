import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/common/Menu';
import Home from './components/views/Home';
import AdministrarProductos from "./components/views/products/AdministrarProductos";
import CrearProducto from "./components/views/products/CrearProducto";
import EditarProductos from "./components/views/products/EditarProductos";
import DetalleProducto from "./components/views/products/DetalleProducto";
import Error404 from "./components/views/Error404";
import Footer from './components/common/Footer';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Menu></Menu>

          <Routes>
            <Route exact path="/" element={<Home></Home>}></Route>
            <Route exact path="/administrar" element={<AdministrarProductos></AdministrarProductos>}></Route>
            <Route exact path="/administrar/crear" element={<CrearProducto></CrearProducto>}></Route>
            <Route exact path="/administrar/editar/:id" element={<EditarProductos></EditarProductos>}></Route>
            <Route exact path="/detalles/:id" element={<DetalleProducto></DetalleProducto>}></Route>

            <Route path='*' element={<Error404></Error404>}></Route>

          </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
