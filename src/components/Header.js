//import logo from './logo.svg';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../images/logo.png'
import "../styles/styles.scss";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {

  const [show, setShow] = useState(false);
  const showDropdown = (e)=>{
      setShow(!show);
  }
  const hideDropdown = e => {
      setShow(false);
  }

  const [show1, setShow1] = useState(false);
  const showDropdown1 = (e)=>{
      setShow1(!show1);
  }
  const hideDropdown1 = e => {
      setShow1(false);
  }
  return (
    <header className='topnav'>
      <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top shadow">
        <Container>
          <Navbar.Brand as={Link} to="/"><img src={logo} width="150" className="d-inline-block align-top" alt="React Bootstrap logo" />
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='pt-3 pt-lg-0'>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/about" >About Us</Nav.Link>
              <NavDropdown href="#" title="Services" id="basic-nav-dropdown" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                <NavDropdown.Item href="#action/3.1">Training Sessions</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Meal Plans</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Rehab</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown href="#supplements" title="Supplement Store" id="basic-nav-dropdown" show={show1} onMouseEnter={showDropdown1} onMouseLeave={hideDropdown1}>
                <NavDropdown.Item href="#action/3.1">Creatine</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Mass Gainer</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Protein</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Pre-Workout</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Fat Burner</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Vitamins</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">All Products</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#academy">Academy</Nav.Link>
              <Nav.Link href="#Contact">Contact Us</Nav.Link>
              <Nav.Link href="#FAQ">FAQ</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>
  );
}


