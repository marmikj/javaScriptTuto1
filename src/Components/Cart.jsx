import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/CartSlice";

function Cart() {
  const data = useSelector((state) => state.cart);
  const dispatch =useDispatch();

  const removeItem=(id) => {
    //DISPATCH AS ACTION 
    dispatch(remove(id))
  }
  const cards = data.map((product, index) => (
    <div className="col-md-12" style={{ marginBottom: "10px" }} key={index}>
      <Card className="h-100" key={product.id}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>

        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR :{product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "white" }}>
          <Button variant="danger" onClick={()=>removeItem(product.id)}>
            Remove To Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return <div className="row">{cards}</div>;
}

export default Cart;
