import { useContext } from "react"
import UseContext from "../context/use/useContext"

const DeleteProduct = () => {
    const { deleteProduct } = useContext(UseContext)

    const deleteProd = () => {
        deleteProduct()
    }
    return (
        <button style={{ margin: "10px", marginLeft: "50px" }} onClick={deleteProd} className="primary">Borrar Producto</button>
    )
}

export default DeleteProduct