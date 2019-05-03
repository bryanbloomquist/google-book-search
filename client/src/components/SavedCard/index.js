import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const SavedCard = ( props ) => {
  return (
    <Card key = { props.id } id = { props.id }>
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>{ props.title }</Card.Title>
          </Col>
          <Col className = "float-right">
            <Button onClick = {() => { props.view( props.link )}}>View</Button>
          </Col>
          <Col className = "float-right">
            <Button onClick = {() => { props.delete( props.id )}}>Delete</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>By { props.author }</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card.Img src = { props.image } alt = { props.title } />
          </Col>
          <Col>
            <p>{ props.description }</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default SavedCard;