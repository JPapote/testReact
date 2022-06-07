import react, { useEffect, useState } from 'react'
import UserState from '../context/use/useState';
import React, { useContext } from 'react';
import UseContext from '../context/use/useContext';

import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
    const dataFilter = (event) => {
        let val = event.target.value
        if (val != '') {

            for (let clave in products) {
                updateProduct([...Object.values(products[clave]).map(pr => {

                    return pr.categoria.toLowerCase().startsWith(val.toLowerCase()) ? pr : ""

                })

                ])
            };


        }
        else {
            for (let clave in products) {
                updateProduct([...Object.values(products[clave])]);
            }
        }
    };



    return (

        <div className='p-5'>
            <div 
                className="form-outline p-2">
                <input type="search" id="form1" onChange={dataFilter} placeholder="Buscar Producto Por Categoria" className="form-control me-2" />


            </div>
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
                    {AllProduct.length !== 0 ? AllProduct.map((p, key) => {
                        return (
                            <tr key={key}>

                                <td>{p.nombre} </td>
                                <td>{p.descripcion} </td>
                                <td>{p.precio} </td>
                                <td>{p.categoria} </td>
                                <td>{p.imagen} </td>
                            </tr>
                        )
                    }) : null}

                </tbody>
            </Table>

            <button style={{margin:"10px", marginLeft:"50px"}} >
            <Link to="/addProduct" style={{textDecoration: "none"}} >GuardarProduct</Link></button>

            
        </div>


    )
}

export default ComponentProducts;