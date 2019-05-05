import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Background from "./book-background.jpg";

const styles = {
  bgImage: {
    backgroundImage: "url(" + Background + ")"
  },
  bgContainer: {
    background: "#333333b3",
    textAlign: "center"
  }
}

const JumboTron = () => {
  return (
    <Jumbotron style = { styles.bgImage }>
      <Container 
        style = { styles.bgContainer }
        className = "width-auto"
      >
        <h1>
          <span className = "text-danger">&#40;React&#41; </span>
          <span className = "text-warning">Google </span>
          <span className = "text-success">Books </span>
          <span className = "text-primary">Search</span>
        </h1>
        <p className = "text-light">
          Search for and save Books of Interest
        </p>
      </Container>
    </Jumbotron>
  );
}

export default JumboTron;