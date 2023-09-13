import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards(prop) {
  return (
    <Card style={{ width: "20rem"}}>
      <Card.Img src={prop.src} style={{ height: "10rem", width:'15rem'}} />
      <Card.Body>
        <Card.Title>{prop.title}</Card.Title>
        <Card.Text>${prop.price}</Card.Text>
        <Card.Text>{prop.rating}★</Card.Text>
        <Card.Text>{prop.description}</Card.Text>
        <Button variant="primary">
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
