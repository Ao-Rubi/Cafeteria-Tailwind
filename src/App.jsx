import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/common/Menu';
import Home from './components/views/Home';
import AdministrarProductos from "./components/views/products/AdministrarProductos"


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Menu></Menu>

          <Routes>
            <Route exact path="/" element={<Home></Home>}></Route>
            <Route exact path="/administrar" element={<AdministrarProductos></AdministrarProductos>}></Route>

          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
