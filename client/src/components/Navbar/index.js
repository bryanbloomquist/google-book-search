import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand = "md">
      <Navbar.Brand>
        <h1>
          <span className = "font-weight-bold text-danger">Google </span>
          <span className = "font-weight-bold text-warning">Book </span>
          <span className = "font-weight-bold text-success">Search</span>
        </h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls = "basic-navbar-nav" />
      <Navbar.Collapse id = "basic-navbar-nav">
        <Nav className = "ml-auto">
          <Link to = "/" className = "m-2">
            <Button>Search For Books</Button>
          </Link>
          <Link to = "/saved" className = "m-2">
            <Button>Saved Books</Button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;