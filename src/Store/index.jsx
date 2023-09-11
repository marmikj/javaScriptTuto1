import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slices/UserSlice";
import ComapanySlice from "./Slices/ComapanySlice";



const store = configureStore({
  reducer: {
    users: UserSlice,
    companies:ComapanySlice,
  
  },
});
export default store;
