import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#">LATTE CAFETERÍA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">INICIO</Nav.Link>
            <Nav.Link href="#">NOVEDADES</Nav.Link>
            <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Café</NavDropdown.Item>
              <NavDropdown.Item href="#">Bebidas Frías</NavDropdown.Item>
              <NavDropdown.Item href="#">Pastelería</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Granos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar