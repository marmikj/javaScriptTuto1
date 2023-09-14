import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { Employee } from '../Models/Employee.model'
export const EmployeeApi = createApi({
    reducerPath:'employeeApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://hub.dummyapis.com'}),
    endpoints:(builder)=>({
        getEmployee:builder.query<Employee[],void>({
            query:()=>'/employee'
        })
    }),
})

export const {useGetEmployeeQuery}=EmployeeApi