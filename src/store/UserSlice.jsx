import { createSlice } from "@reduxjs/toolkit";

const UserSlice =createSlice({
    name: 'user',
    initialState:[],
    reducers:{
        add(state,action){
            state.push(action.payload);
        }
    }
})
export default UserSlice.reducer;
export const {add} = UserSlice.actions;