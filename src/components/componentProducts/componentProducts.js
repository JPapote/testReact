import react, { useEffect, useState } from 'react'
import UserState from '../context/use/useState';
import React, { useContext } from 'react';
import UseContext from '../context/use/useContext';

import { Table } from 'react-bootstrap';
const ComponentProducts = () => {

    const [AllProduct, updateProduct] = useState([])
    const { products } = useContext(UseContext)

    useEffect(() => {
        if (products) {

            for (let clave in products) {
                updateProduct([...Object.values(products[clave])]);
            }


        }
    }, [products])


    return (
        
        <div className='p-5'>
            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Categoria</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>
                {AllProduct.length !== 0 ? AllProduct.map((p,key )=> {
                return (
                    <tr key={key}>
                        
                        <td>{p.nombre} </td>
                        <td>{p.descripcion} </td>
                        <td>{p.precio} </td>
                        <td>{p.categoria} </td>
                        <td>{p.imagen} </td>
                    </tr>
                )
            }) : <></>}
                   
                </tbody>
            </Table>
            
        </div>


    )
}

export default ComponentProducts;