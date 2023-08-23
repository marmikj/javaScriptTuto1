import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Home() {

 const navigate =useNavigate()
 const location=useLocation()

 console.warn(location)

 const navToPage=(url)=>{
  navigate(url)

 }
  return (
    <div>
      <h1>Home page</h1>
      <p>welocme to Home Page </p>
      <br />
      <br />
      <p>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced
        below for those interested. Sections 1.10.32 and 1.10.33 from "de
        Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
        original form, accompanied by English versions from the 1914 translation
        by H. Rackham.
      </p>
      <br />
      <br />
      <Link to="/about">Go To About Page </Link><br/><br/>

      <button onClick={()=>navToPage('/about')}>Go To About Page</button>
      <button onClick={()=>navToPage('/filter')}>Go To Filter Page</button>
    </div>
  );
}

export default Home;
