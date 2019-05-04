import axios from "axios";
const URL = "https://www.googleapis.com/books/v1/volumes?q=?";

export default {
  getBooks: function() { // gets all books
    return axios.get( "/api/books" );
  },
  searchBooks: function( query ) { // search for books
    return axios.get( URL + query );
  },
  deleteBook: function( id ) { // deletes the book with the given id
    return axios.delete( "/api/books/" + id );
  },
  saveBook: function( bookData ) { // saves a book to the database
    debugger;
    return axios.post( "/api/books/" + bookData.id, bookData );
  }
};