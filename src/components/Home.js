import React, { useEffect, useState } from "react";
import Cards from "./Card";
import { Col, Row } from "react-bootstrap";
const Home = () => {
  const [cardData, setcardData] = useState([]);
  const cardDetail = async () => {
    let url = "https://fakestoreapi.com/products";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setcardData(parsedData);
  };
  useEffect(() => {
    cardDetail();
  }, []);
  return (
    <div>
      <Row>
        {cardData.map((product) => {
          return (
            <div key={product.id}>
              <Col className="m-4">
                <Cards
                  src={product.image}
                  title={product.title}
                  desc={product.descriptio}
                  button={cardDetail}
                />
              </Col>
            </div>
          );
        })}
      </Row>
    </div>
  );
};

export default Home;
