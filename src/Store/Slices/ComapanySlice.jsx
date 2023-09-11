import { createSlice } from "@reduxjs/toolkit";

const ComapanySlice=createSlice({
    name :"Comapanies",
    initialState:[],
    reducers:{
        addComapany(state,action){
            state.push(action.payload);
            console.log(action.payload);
        }
    }
})
export default ComapanySlice.reducer