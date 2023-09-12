import { NavLink, NavbarBrand } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const NavBar = () => {
  const CartProducts=useSelector(state=>state.cart)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <NavbarBrand href="#">Redux ToolKit</NavbarBrand>

        <Nav>
          <NavLink to="/" as={Link}>
            Products
          </NavLink>
        </Nav>  
        
        <NavbarCollapse className="justify-content-end">
          
            <NavLink to="/cart" as={Link}>
              My Bag {CartProducts.length}
            </NavLink>
          
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
