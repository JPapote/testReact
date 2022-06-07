import { useContext, useState } from "react"
import UseContext from "../context/use/useContext" 

const AddProduct = () =>{
    const { addProduct } = useContext(UseContext)
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState(0);
    const [categoria, setCategoria] = useState("");
    const [imagen, setImagen] = useState("");

    const newProduct = () =>{
        const newProduct = {
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            categoria: categoria,
            imagen: imagen
        }
        addProduct(newProduct)
    }
    return(
        <div className="p-5">
         <input type="text"  onChange={(e) => setNombre(e.target.value)} placeholder="nombre" className="form-control m-2" />
         <input type="text"  onChange={(e) => setCategoria(e.target.value)} placeholder="categoria" className="form-control m-2" />
         <input type="text"  onChange={(e) => setDescripcion(e.target.value)} placeholder="descripcion" className="form-control m-2" />
         <input type="number"  onChange={(e) => setPrecio(e.target.value)} placeholder="precio" className="form-control m-2" />
         <input type="text"  onChange={(e) => setImagen(e.target.value)} placeholder="imagen" className="form-control m-2" />
        <button style={{margin:"10px", marginLeft:"50px"}} onClick={newProduct} className="btn btn-primary">Guardar</button>
        </div>
    )
}

export default AddProduct