import { createSlice } from "@reduxjs/toolkit";

const UsersSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload,1)
    },
    clearAllUsers(state, action) {
      return state=[];
    },
  },
});
console.log(UsersSlice.actions);
export default UsersSlice.reducer;

export const { addUser ,removeUser,clearAllUsers} = UsersSlice.actions;
