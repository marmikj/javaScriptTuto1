import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add } from "../store/CartSlice";

function Products() {
  const [data, setData] = useState([]);
  const dispatch=useDispatch()
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      setData(response.data);
      console.log(response.data);
    };
    getData();
  }, []);

  const addToCart=(product)=>{
    //dispatch action 
    dispatch(add(product))
    
  }
  const cards = data.map((product, index) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }} key={index}>
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
          <Button variant="primary" onClick={()=>addToCart(product)}>Add To Cart </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <div>
      <h1>Products Dashboard</h1>
      <div className="row">{cards}</div>
    </div>
  );
}

export default Products;
