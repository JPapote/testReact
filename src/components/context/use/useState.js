import React, { useEffect, useReducer } from "react";
import UserContext from "./useContext";
import UseReducer from "./useReducer";

const UseState = (props) => {

    const initialState = {
        products: []

    }

    const [state, dispatch] = useReducer(UseReducer, initialState);

    const addProduct = async (product) => {

        const response = await fetch(`https://test-lucas-594ea.firebaseio.com/products.json?auth=${sessionStorage.getItem('idToken')}`, {
            method: "POST",
            mode: "cors",
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(product)

        })
        const res = await response.json();
        console.log(res)
    }

    const deleteProduct = async () => {
        const product = {
            nombre: "Campera",
            descripcion: "Campera para el frio",
            precio: "2344",
            categoria: "Camperas",
            imagen: "campera.jpg"
        }
        const response = await fetch(`https://test-lucas-594ea.firebaseio.com/products.json?auth=${sessionStorage.getItem('idToken')}`, {
            method: "DELETE",
            mode: "cors",
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(product)

        })
        const res = await response.json();
        console.log(res)
    }


    const getProducts = async () => {

        const response = await fetch(`https://test-lucas-594ea.firebaseio.com/products.json?auth=${sessionStorage.getItem('idToken')}`, {
            mode: "cors",
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },

        })
        const res = await response.json();

        dispatch({
            type: "GET_PRODUCT",
            payload: res
        })


    }


    const auth = async () => {
        const user = {
            email: "test@test.com",
            password: "prueba",
            returnSecureToken: true
        }
        const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+process.env.REACT_APP_UNSPLASH_KEY, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)


        })
            .then((response) => response.json())
            .then(rs => sessionStorage.setItem("idToken", rs.idToken))

    }
    useEffect(() => {
        auth()

        getProducts()

    }, [])

    return (
        <UserContext.Provider value={{
            products: state,
            addProduct,
            getProducts,
            // deleteProduct
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UseState;