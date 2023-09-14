import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {EmployeeApi} from './Services/EmployeeApi'

export const store =configureStore({
    reducer:{[EmployeeApi.reducerPath]:EmployeeApi.reducer},
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(EmployeeApi.middleware)
})