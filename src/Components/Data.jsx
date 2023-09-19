import { Button, Card } from "react-bootstrap";
import { useGetSingleProductQuery } from "./ApiSlice";
import { useState } from "react";

const Data = () => {
  const[input,setInput]=useState()
  // const { data, isLoading, error, isError } = useGetAllProductsQuery();
  const {data:singleProduct,error,isError,isLoading}=useGetSingleProductQuery(input)

  console.log(singleProduct);
  if (isLoading) return <h1>Loading....</h1>;
  if (isError) return <h1>{error}</h1>;
  return (
    <div className="App">
      <div>
        <b>search product:</b>
      </div>
      <input type="text" onChange={(e)=>setInput(e.target.value)}/>
      <h1><i>Result</i></h1>
      <div>
       
        {singleProduct &&
          singleProduct.products.map((item, index) => {
            return (
              <Card key={index}>
                <Card.Img variant="top" src={item.images[4]} width={300} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text>{item.Price}</Card.Text>
                  <hr />
                  <Button variant="primary">Add TO Cart </Button>
                </Card.Body>
              </Card>
            );
          })}
  
      </div>
    </div>
  );
};

export default Data;
