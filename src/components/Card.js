import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards(prop) {
  return (
    <Card onClick={prop.cardClick} style={{ width: "20rem" }}>
      <Card.Img src={prop.src} style={{ height: "10rem", width: '15rem' }} />
      <Card.Body>
        <Card.Title>{prop.title}</Card.Title>
        <Card.Text style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>${prop.price}</Card.Text>
        <Card.Text style={{ backgroundColor: 'green', color: 'white', width: '2.5rem', borderRadius: '2px', textAlign: 'center' }}>{prop.rating}★</Card.Text>
        <Card.Text>{prop.description}</Card.Text>
        <Button variant="primary" onClick={prop.handleClick}>
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
