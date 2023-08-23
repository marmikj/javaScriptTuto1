import React from "react";
import { Link, Outlet } from "react-router-dom";

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      
          <Link to="channel">channel</Link>
        
          <Link to="company">company</Link>
        
          <Link to="other">other</Link>

          <Outlet/>
      
    </div>
  );
}

export default Contact;
