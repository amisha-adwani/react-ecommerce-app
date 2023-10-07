import React, { useContext } from "react";
import Cart from "./Cart";
import { Col, Row } from "react-bootstrap";
import { ItemContext } from "../context/ItemContext";

const CheckoutPage = () => {
  const context = useContext(ItemContext);
  const { cartList, removeFromCart,getTotal,AddToCart } = context;
  return (
    <>
      <div className="container">
        <h1>Your cart</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {cartList.length > 0 ? (
            cartList.map((product) => {
              return (
                <div key={product.id}>
                  <Col className="m-4">
                    <Cart
                      src={product.image}
                      title={product.title && product.title.slice(0, 52)}
                      description={
                        product.description && product.description.slice(0, 80)
                      }
                      price={product.price}
                      rating={product.rating?.rate}
                      quantity={product.quantity}
                      handleClick={() => removeFromCart({ product })}
                      handleClick1={() => AddToCart({ product })}
                    />
                  </Col>
                </div>
              );
            })
          ) : (
            <p>Cart is empty</p>
          )}
        </Row>
        <h3>Total: {getTotal()}</h3>
      </div>
    </>
  );
};

export default CheckoutPage;
