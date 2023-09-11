import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";

const Navbar = () => {
  return (
    <Wrapper>
      <h1>Admin Table</h1>

      <section>
        <Router>
          <nav className="menuItems">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Project</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />}>
              home
            </Route>
            <Route path="/about" element={<About />}>
              About
            </Route>
            <Route path="/projects" element={<Projects/>}>
              projets
            </Route>
          </Routes>
        </Router>
        {/* <nav>
          <ul className="menuItems">
            <li>
              <a href="/" data-item="Home">
                Home
              </a>
            </li>
            <li>
              <a href="/about" data-item="About">
                About
              </a>
            </li>
            <li>
              <a href="/projects" data-item="Projects">
                Projects
              </a>
            </li>
            <li>
              <a href="/code" data-item="Code">
                Code
              </a>
            </li>
            <li>
              <a href="/contact" data-item="Contact">
                Contact
              </a>
            </li>
          </ul>
        </nav> */}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  nav {
    margin: 3rem 0;
    background: #f9f9f9;
    padding: 1rem 0;
  }
 .menuItems {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .menuItems  {
    margin: 1.6rem 5rem;
  }
 .menuItems  {
    text-decoration: none;
    color: #8f8f8f;
    font-size: 24px;
    font-weight: 400;
    transition: all 0.5s ease-in-out;
    position: relative;
    text-transform: uppercase;
  }
  .menuItems ::before {
    content: attr(data-item);
    transition: 0.5s;
    color: #8254ff;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0;
    overflow: hidden;
  }
.menuItems :hover::before {
    width: 100%;
    transition: all 0.5s ease-in-out;
  }

  @media screen and (max-width: 998px) {
    nav .menuItems  {
      margin: 0.6rem 5rem;
    }
  }
`;

export default Navbar;
