import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const DataApi =createApi({
    reducerPath:'categories',
   baseQuery:fetchBaseQuery({baseUrl:'https://dummyjson.com/'}),
   endpoints:(builder)=>({
    getAllProducts:builder.query({
        query:()=>'products'
    }),
    getSingleProduct:builder.query({
        query:(product)=>`products/search?q=${product}`
    })
   })

})
export const{useGetAllProductsQuery,useGetSingleProductQuery}=DataApi