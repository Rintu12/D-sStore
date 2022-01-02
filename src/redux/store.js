// in this file is global store 
// to handel  every pages the all component to passess  this state
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartredux"; // import reducer
// export  this store to use warap any pages to 
export default configureStore({

    reducer:{
       cart:cartReducer
    },
})



