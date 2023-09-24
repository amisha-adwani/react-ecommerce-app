import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cart(prop) {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img src={prop.src} style={{ height: "10rem", width: "15rem" }} />
      <Card.Body>
        <Card.Title>{prop.title}</Card.Title>
        <Card.Text style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
          ${prop.price}
        </Card.Text>
        <Card.Text
          style={{
            backgroundColor: "green",
            color: "white",
            width: "2.5rem",
            borderRadius: "2px",
            textAlign: "center",
          }}
        >
          {prop.rating}★
        </Card.Text>
        <Card.Text>{prop.description}</Card.Text>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button variant="primary" onClick={prop.handleClick}>
            {" "}
            -{" "}
          </Button>{" "}
          <span style={{ margin: '0 8px' }}> {prop.quantity}</span>
          <Button variant="primary" onClick={prop.handleClick1}>
            {" "}
            +{" "}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cart;
