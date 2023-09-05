import React from "react";

import images from "../images/shopping-cart_1170678.png";

function Header(props) {
  console.warn("header", props.data);
  return (
    <div className="App">
      <h1>Header Componets</h1>
      <div className="add-to-cart">
        <span className="cart-count">{props.data.length}</span>
        <img src={images} />
      </div>
     
      
    </div>
  );
}

export default Header;
