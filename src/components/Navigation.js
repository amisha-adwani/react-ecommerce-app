import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { ItemContext } from "../context/ItemContext";
import { useContext } from "react";

function Navigation(prop) {
  const context = useContext(ItemContext);
  const {searchFilter} = context;

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <LinkContainer to='/'>
          <Navbar.Brand>grab</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <LinkContainer to='/'>
            <Nav.Link>All</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Products" id="navbarScrollingDropdown">
              <LinkContainer to="/electronics">
                <NavDropdown.Item>Electronics</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/jewelery">
                <NavDropdown.Item>Jewelery</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/men's clothing">
                <NavDropdown.Item>Men's clothing</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/women's clothing">
                <NavDropdown.Item>Women's clothing</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/about">
              <Nav.Link>About us</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={searchFilter}
            />
            <LinkContainer to="/cart">
            <Button variant="success">Cart</Button>
            </LinkContainer>

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
