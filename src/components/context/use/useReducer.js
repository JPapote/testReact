import { GET_PRODUCT } from "../type"
export default (state, action) =>{
   

    switch(action.type){
     
        case GET_PRODUCT:  return{
            ...state,
            products: action.payload
        } 
        
    }
}

