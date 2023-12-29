import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from "react-router-bootstrap"

function Header() {
  return (
    <Navbar expand="lg" bg="dark" expanded="lg" className="bg-body-tertiary" collapseOnSelect>
      <Container fluid>
        <LinkContainer to={"/"}>
        <Navbar.Brand>Brand ICON</Navbar.Brand>
        </LinkContainer>
        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
        <Form className="d-flex d-flex justify-content-center">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
          <Nav
            className="ml-auto my-2 my-lg-0 "
            style={{ maxHeight: '60' }}
            navbarScroll
          >
            <LinkContainer to={"/cart"}>
            <Nav.Link>Cart</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to={"/login"}>
            <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
