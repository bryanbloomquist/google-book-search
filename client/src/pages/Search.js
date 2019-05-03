import React, { Component } from "react";
import API from "../utils/API";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import ResultCard from "../components/ResultCard";

class Search extends Component {
  state = {
    results: [],
    search: ""
  }

  handleInputChange = ( event ) => {
    const { name, value } = event.target;
    this.setState({
      [ name ]: value 
    });
  };

  handleFormSubmit = ( event ) => {
    event.preventDefault();
    API.searchBooks( this.state.bookSearch )
    .then(( res ) => {
      this.setState({ results: res.data })
    })
    .catch(( err ) => console.log( err ));
  };

  handleView( url ) { window.location.href = url; };

  handleSave = ( ob ) => {
    console.log( ob );
    API.saveBook( ob )
    .then(( res ) => console.log( res ))
    .catch(( err ) => console.log( err ));
  };

  render() {
    return (
      <div>
        <Container>
          <Form.Group controlId = "searchForBook">
            <Form.Row>
              <Form.Label>Book Search</Form.Label>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Control 
                  type = "text"
                  value = { this.state.bookSearch }
                  onChange = { this.handleInputChange }
                />
              </Col>
              <Col>
                <Button className = "float-right" onClick = { this.handleFormSubmit }>
                  Search
                </Button>
              </Col>
            </Form.Row>
          </Form.Group>
        </Container>
        <Container>
          { this.state.results.map(( book ) => (
            <ResultCard
              author = { book.volumeInfo.authors }
              description = { book.volumeInfo.description }
              id = { book.id }
              image = { book.volumeInfo.imageLinks.thumbnail }
              key = { book.id }
              link = { book.volumeInfo.previewLink }
              save = {() => { this.handleSave( book )}}
              title = { book.volumeInfo.title }
              view = { this.handleView }
            />
          ))}
        </Container>
      </div>
    )
  }
}

export default Search;