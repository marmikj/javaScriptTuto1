import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";


function Cart() {
  const products = useSelector((state) => state.cart);
 const dispatch = useDispatch()
  const removeToCart=(id)=>{
    //useDispatch remove action 
    dispatch(remove(id));
  }
  console.log(products, "cart");

  //   const cards = products.map(product => (
  //     <div className='col-md-12' style={{ marginBottom: '10px' }}>
  //         <Card key={product.id} className='h-100'>
  //             <div className='text-center'>
  //                 <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
  //             </div>
  //             <Card.Body>
  //                 <Card.Title>{product.title}</Card.Title>
  //                 <Card.Text>
  //                     ₹{product.price}
  //                 </Card.Text>

  //             </Card.Body>
  //             <Card.Footer style={{background:'white'}}>
  //             <Button variant="primary">Remove Items</Button>
  //             </Card.Footer>
  //         </Card>
  //     </div>
  // ))

  /// map(product=>()) no need render
  ////map(product=>{}) you have to write render
  const cards = products.items.map((product,index) => (
    <div key={index}>
      <div className="col-md-12" style={{ marginBottom: "10px" }}>
        <Card key={product.id} className="h-100">
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "130px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>₹{product.price}</Card.Text>
          </Card.Body>
          <Card.Footer style={{ background: "white" }}>
            <Button variant="danger" onClick={()=>removeToCart(product.id)}>Remove Items</Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  ));

  return <div className="row">{cards}</div>;
}

export default Cart;
