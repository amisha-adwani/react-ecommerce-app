import React,{useContext} from 'react';
import { useLocation } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { ItemContext } from "../context/ItemContext";


const Product = () => {
  const location = useLocation();
  const { data } = location.state;
  const context = useContext(ItemContext);
const { AddToCart, removeFromCart } = context;

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
      <div className="custom-div" style={{ width: "50rem", height: "30rem", padding: '1rem', boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)', border: 'none' }}>
        <div className="d-flex">
          <img src={data.image} className="custom-div-img" alt={data.title} style={{ height: "20rem", width: '30rem' }} />
          <div className="custom-div-content" style={{ marginLeft: '1rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>{data.title}</h3>
            <p style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 'bold' }}>${data.price}</p>
            <p style={{ marginBottom: '1rem' }}>{data.description}</p>
          <Button variant="primary" onClick={() => AddToCart({ product: data })} style={{ marginRight: '10px' }}>
              Add to cart
            </Button>
          <Button variant="primary" onClick={() => removeFromCart({ product: data })} >
              Remove 
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
