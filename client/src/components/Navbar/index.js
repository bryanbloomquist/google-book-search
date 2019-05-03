import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg = "light" expand = "lg">
      <Navbar.Brand>Google Book Search</Navbar.Brand>
      <Navbar.Toggle aria-controls = "basic-navbar-nav" />
      <Navbar.Collapse id = "basic-navbar-nav">
        <Nav className = "mr-auto">
          {/* <Nav.Link href="#home">Search</Nav.Link> */}
          <Link to = "/" className = "m-2">
            Search
          </Link>
          {/* <Nav.Link href="#saved">Saved</Nav.Link> */}
          <Link to = "/saved" className = "m-2">
            Saved
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;