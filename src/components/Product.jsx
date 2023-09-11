import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import { useDispatch, useSelector } from 'react-redux'

import { add } from '../store/cartSlice'

import { getProducts } from '../store/productSlice'


function Product() {
    const dispatch =useDispatch();
    const {data:products}=useSelector(state=>state.products);
    useEffect(() => {

        //api get n
        //dispatch an action fetchgetproduct 
        dispatch(getProducts());
    }, [])

    const addToCart=(product)=>{
        //dispatch an add action to the cart 
        dispatch(add(product))

    }
    const cards = products.map((product,index) => (
        
        <div key={index}className='col-md-3' style={{ marginBottom: '10px' }}>
            <Card key={product.id} className='h-100'>
                <div className='text-center'>
                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        ₹{product.price}
                    </Card.Text>

                </Card.Body>
                <Card.Footer style={{background:'white'}}>
                <Button variant="primary" onClick={()=>addToCart(product)}>Add To Cart</Button>
                </Card.Footer>
            </Card>
        </div>
        
    ))
    return (
        <div><h1>Product Dashboard</h1>

            <div className='row'>
                {cards}
            </div>
        </div>

    )
}

export default Product