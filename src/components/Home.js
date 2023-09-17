import React, { useContext, useEffect } from "react";
import Cards from "./Card";
import { Col, Row } from "react-bootstrap";
import { ItemContext } from "../context/ItemContext";

const Home = ({ category }) => {
  const context = useContext(ItemContext);
  const { cardData, cardDetail, filteredList } = context;

  useEffect(() => {
    cardDetail(category);
  }, [category]);

  const dataToRender = filteredList.length > 0 ? filteredList : cardData;
  return (
    <>
      <div className="container">
        <Row xs={1} md={2} lg={3} className="g-4">
          {dataToRender.map((product) => {
            return (
              <div key={product.id}>
                <Col className="m-4">
                  <Cards
                    src={product.image}
                    title={product.title && product.title.slice(0, 52)}
                    description={
                      product.description && product.description.slice(0, 80)
                    }
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
