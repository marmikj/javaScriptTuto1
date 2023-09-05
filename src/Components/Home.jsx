import React from "react";


function Home(props) {
  console.warn("props", props.data);
  return (
    <div className="App">
      <h1>Home Components</h1>
      <div className="cart-wrapper">
       <>
          <img src="https://www.pngplay.com/wp-content/uploads/7/Apple-IPhone-Mobile-Transparent-File.png"  alt=""/>
      </>
          <div className="img-wrapper item ">
            <span>I-Phone</span>
          </div>
          <div className="img-wrapper item ">
            <span>Price :20000</span>
          </div>
          <div className="btn-wrapper item ">
            <button
              onClick={() => {
                props.addToCartHandler({
                  price: 20000,
                  name: "I Phone 13",
                });
              }}
            >
              Add To Cart
            </button>
            <button
              className="remove-cart-btn"
              onClick={() => {
                props.removeToCartHandler();
              }}
            >
              Remove Cart
            </button>
          </div>
        </div>
      </div>
    
  );
}

export default Home;
