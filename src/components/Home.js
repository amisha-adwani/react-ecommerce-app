import React, { useEffect, useState } from "react";
import Cards from "./Card";
import { Col, Row } from "react-bootstrap";
import Navigation from "./Navigation";
const Home = () => {
  const [cardData, setcardData] = useState([]);
  const [filteredList, setFilteredList] = useState(cardData);

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

  useEffect(() => {
    // Update filteredList whenever cardData changes
    setFilteredList(cardData);
  }, [cardData]);


  const handleChange = (e) => {
    //get value from search bar
    let query = e.target.value;
    //copy cardData in updatedList
    let updatedList = [...cardData];
    //filter the updatedList
    updatedList = updatedList.filter((product) => {
    //convert the product title and query to lowercase and check if the product title includes the specified query 
      return product.title.toLowerCase().includes(query.toLowerCase());
    });
    //update the filtered list state with the updatedList
    setFilteredList(updatedList);
  };

  return (
    <>
      <Navigation handleChange={handleChange} />
      <div className="container">
        <Row xs={1} md={2} lg={3} className="g-4">
          {filteredList.map((product) => {
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
