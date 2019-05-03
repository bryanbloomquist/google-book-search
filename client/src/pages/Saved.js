import React, { Component } from "react";
import API from "../utils/API";
import Container from "react-bootstrap/Container";
import SavedCard from "../components/SavedCard";

class Saved extends Component {
  state = {
    results: []
  }

  getBooks() {
    API.loadBooks()
    .then(( res ) => {
      this.setState({ results: res.data })
    })
    .catch(( err ) => console.log( err ))
  }

  compnonentDidMount() {
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
      <div>
        <Container>
          { this.state.results.map(( book ) => (
            <SavedCard
              author = { book.authors }
              delete = { this.deleteBook }
              description = { book.description }
              id = { book._id }
              image = { book.image }
              key = { book._id }
              link = { book.link }
              title = { book.title }
              view = { this.handleView }
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default Saved;