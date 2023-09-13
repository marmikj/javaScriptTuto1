import React from 'react'
import { useGetAllProductsQuery, useGetProductQuery } from './ApiSlice'

export const Data=()=>{
    const {data:getAllProducts,isLoading}= useGetAllProductsQuery()
    const {data:getProduct}= useGetProductQuery('iphone')
    console.log(getAllProducts)
    console.log(getProduct)

 if(isLoading) return <h1>Loading...</h1>
 return <div>data:</div>
}

export default Data