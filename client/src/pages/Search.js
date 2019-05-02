import React, { Component } from "react";
import API from "../utils/API";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ResultCard from "../components/ResultCard";
import Row from "react-bootstrap/Row";

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
    .then(( res ) => {
      event.preventDefault() {
        let bookList = [];
        API.searchBooks( this.state.search )
        .then(( res ) => {
          res.data.items.forEach(( book ) => {
            bookList.push( book );
          })
        });
        this.setState({ results: bookList });
        console.log( this.state );
      }
    })
    .catch(( err ) => {
      console.log( this.state, err );
    });
  };

  handleView( url ) { window.location.href = url; };

  handleSave = ( object ) => {
    console.log( object );
    API.saveBook( object )
    .then(( res ) => console.log( res ))
    .catch(( err ) => console.log( err ));
  };

  render() {
    return (

    )
  }

}