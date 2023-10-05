import React from 'react';
import { useLocation } from 'react-router-dom';

const Product = () => {
  const location = useLocation();
  const { data } = location.state;
  console.log(data);
  return (
    <div>
      <h1>This is the product</h1>
    </div>
  )
}

export default Product
