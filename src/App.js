import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/componentProducts/componentProducts';
import UseState from './components/context/use/useState';
import AddProduct from './components/componentProducts/addProduct';
import DeleteProduct from './components/componentProducts/deleteProduct';
function App() {
  return (
    <UseState>
     <Products />
     <AddProduct />
     <DeleteProduct />
   </UseState>
  );
}

export default App;
