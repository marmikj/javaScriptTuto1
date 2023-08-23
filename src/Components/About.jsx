import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>hello about page</p>
      <Link to="/">Go To Home Page</Link>
      <li>
        <Link to="/user/marmik" state={{name:'bhargav',age:27  }}>MArmik</Link>
      </li>
      <li>
        <Link to="/user/joshi">Joshi</Link>
      </li>
    </div>
  );
}

export default About;
