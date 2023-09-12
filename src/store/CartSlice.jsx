import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name: 'Cart',
    initialState: [],
    reducers:{
        add(state,action){
            state.push(action.payload);
           
        },
        remove(state,action){
            return state.filter(item=>item.id !== action.payload)
        }
    }

})
export default CartSlice.reducer;
export const {add,remove} =CartSlice.actions;