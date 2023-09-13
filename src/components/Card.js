import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards(prop) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={prop.src} />
      <Card.Body>
        <Card.Title>{prop.title}</Card.Title>
        <Card.Text>{prop.desc}</Card.Text>
        <Button variant="primary">
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
