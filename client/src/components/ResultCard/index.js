import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const styles = {
  images: {
    maxWidth: "150px",
    maxHeight: "200px"
  },
  bodyStyle: {
    background: "#bbf",
    border: "3px solid #c62"
  },
  descriptionStyle: {
    maxHeight: "200px",
    overflow: "auto"
  }
}

const ResultCard = ( props ) => {
  return (
    <Card key = { props.id } id = { props.id }>
      <Card.Body style = { styles.bodyStyle }>
        <Row>
          <Col>
            <Row>
              <Col>
                <Card.Title className = "text-primary"><h4>{ props.title }</h4></Card.Title>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5 className = "text-danger">By { props.author[0] }</h5>
              </Col>
            </Row>
          </Col>
          <Col xs = "auto" className = "float-right p-1">
            <Button onClick = {() => { props.save( )}}>Save</Button>
          </Col>
          <Col xs = "auto" className = "float-right p-1">
            <a href = { props.link } target = "_blank" rel = "noopener noreferrer">
              <Button>View</Button>
            </a>
          </Col>
        </Row>
        <Row>
          <Col xs = "auto">
            <Card.Img 
              style = { styles.images } 
              src = { props.image } 
              alt = { props.title }
            />
          </Col>
          <Col style = { styles.descriptionStyle }>
            <p className = "text-success bg-light p-2">{ props.description }</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ResultCard;