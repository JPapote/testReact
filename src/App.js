import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/componentProducts/componentProducts';
import UseState from './components/context/use/useState';
import AddProduct from './components/componentProducts/addProduct';
import DeleteProduct from './components/componentProducts/deleteProduct';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (

    <BrowserRouter >
        
        <UseState>
        <Routes>
        <Route path="/" element={<Products />} />
          
          <Route path="addProduct" element={<AddProduct />} />
          </Routes>
          </UseState>
         
        </BrowserRouter>
        );
}

        export default App;
