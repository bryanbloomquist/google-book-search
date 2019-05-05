import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const styles = {
  images: {
    width: "150px"
  }
}

const ResultCard = ( props ) => {
  return (
    <Card key = { props.id } id = { props.id }>
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>{ props.title }</Card.Title>
          </Col>
          <Col className = "float-right">
            <Button onClick = {() => { props.save( )}}>Save</Button>
          </Col>
          <Col className = "float-right">
            <Button className="btn-secondary">
              <a href = { props.link } target = "_blank" rel = "noopener noreferrer">View</a>
            </Button>
            {/* <Button onClick = {() => { props.view( props.link )}}>View</Button> */}
          </Col>
        </Row>
        <Row>
          <Col>
            <p>By { props.author }</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card.Img 
              style = { styles.images } 
              src = { props.image } 
              alt = { props.title } 
            />
          </Col>
          <Col>
            <p>{ props.description }</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ResultCard;