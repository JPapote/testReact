import { useContext } from "react"
import UseContext from "../context/use/useContext" 

const AddProduct = () =>{
    const { addProduct } = useContext(UseContext)

    const newProduct = () =>{
        addProduct()
    }
    return(
        <button style={{margin:"10px", marginLeft:"50px"}} onClick={newProduct} className="primary">Guardar Producto</button>
    )
}

export default AddProduct