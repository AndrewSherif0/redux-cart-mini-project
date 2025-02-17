import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function AppNavbar() {
  const cart = useSelector(state => state.cart);
  return (
    <Navbar expand="lg" fixed='top' className="bg-body-tertiary">
      <Container>
        <Link className='nav-link' to="/home">CartApp </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to = "/Products" className='nav-link'>Products</Link>
            <Link className='nav-link' to ="/cart">cart - {cart.length}</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>                                    
    </Navbar>
  );
}
export default AppNavbar;