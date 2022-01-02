import {createSlice} from  "@reduxjs/toolkit";
const cartslice  = createSlice({
 name:"cart",
 initialState:{
   products:[],
  quentity:0,
   totalprice:0,


 },
   reducers:{
     Addproduct:(state , action) =>{
     state.quentity += 1;
     state.products.push(action.payload);
     state.totalprice += action.payload.price*action.payload.quentity;

    },

  },
})
export const {Addproduct} = cartslice.actions;
export default cartslice.reducer;