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
    let value = event.target.value;
    this.setState({
      search: value 
    });
  };

  handleFormSubmit = ( event ) => {
    event.preventDefault();
    API.searchBooks( this.state.search )
    .then(( res ) => {
      this.setState({ results: res.data.items })
    })
    .catch(( err ) => console.log( err ));
  };

  handleView( url ) { window.location.href = url; };
  // handleView( url ) { window.open( url ); };

  handleSave = ( ob ) => {
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
          { this.state.results.map(( book ) => {
            let currentBook = {
              "author": book.volumeInfo.authors ? book.volumeInfo.authors : "No Authors Available",
              "description": book.volumeInfo.description ? book.volumeInfo.description : "No Description Available",
              "id": book.id,
              "image": book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/150" ,
              "key": book.id,
              "link": book.volumeInfo.previewLink,
              "title": book.volumeInfo.title ? book.volumeInfo.title : "No Title Available"
            };
            return (
              <ResultCard
                author = { currentBook.author }
                description = { currentBook.description }
                id = { currentBook.id }
                image = { currentBook.image }
                key = { currentBook.id }
                link = { currentBook.link }
                save = {() => { this.handleSave( currentBook )}}
                title = { currentBook.title }
                // view = { this.handleView }
              />
            )
          })}
        </Container>
      </div>
    )
  };
}

export default Search;