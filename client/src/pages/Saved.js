import React, { Component } from "react";
import API from "../utils/API";
import Container from "react-bootstrap/Container";
import SavedCard from "../components/SavedCard";

class Saved extends Component {
  state = {
    results: []
  }

  getBooks() {
    API.getBooks()
    .then(( res ) => {
      console.log( res.data );
      this.setState({ results: res.data })
    })
    .catch(( err ) => console.log( err ))
  }

  componentDidMount() {
    this.getBooks();
  }

  handleView( link ) {
    window.location.href = link;
  }

  deleteBook = ( id ) => {
    API.deleteBook( id )
    .then(( res ) => {
      this.getBooks();
    })
    .catch(( err ) => console.log( err ));
  };

  render() {
    return (
      <Container>
        { this.state.results.map(( book ) => (
          <SavedCard
            author = { book.author[0] }
            delete = { this.deleteBook }
            description = { book.description }
            id = { book._id }
            image = { book.image }
            key = { book.key }
            link = { book.link }
            title = { book.title }
            // view = { this.handleView }
          />
        ))}
      </Container>
    );
  }
}

export default Saved;