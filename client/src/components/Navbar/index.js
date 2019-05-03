import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Google Book Search</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">Search</Nav.Link> */}
          <Nav.Link to = "/" className = { window.location.pathname === "/" ? "navl-link active" : "nav-link" }>
            Search
          </Nav.Link>
          {/* <Nav.Link href="#saved">Saved</Nav.Link> */}
          <Nav.Link to = "/saved" className = { window.location.pathname === "/saved" ? "navl-link active" : "nav-link" }>
            Saved
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;