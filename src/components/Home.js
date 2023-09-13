import React, { useEffect, useState } from "react";
import Cards from "./Card";
import { Col, Row } from "react-bootstrap";
import Navigation from "./Navigation";
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
    <>
      <Navigation/>
    <div className="container">
      <Row xs={1} md={2} lg={3} className="g-4">
        {cardData.map((product) => {
          return (
            <div key={product.id}>
              <Col className="m-4">
                <Cards
                  src={product.image}
                  title={product.title && product.title.slice(0,52)}
                  description={product.description && product.description.slice(0,80)}
                  price={product.price}
                  rating={product.rating.rate}
                />
              </Col>
            </div>
          );
        })}
      </Row>
    </div>
    </>
  );
};

export default Home;
