import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Logo from '@/Components/Logo/Logo';
//import custom css
import '../../../assets/css/custom.css';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { Link, useForm, router } from '@inertiajs/react';

const Header = () => {
    return (
      <Router>
        <HeaderContent />
      </Router>
    );
}
const HeaderContent = () => { 
    const location = useLocation();
    console.log(location.pathname);
    return (
      <Navbar expand="lg" className="py-2">
        <Container>
          <Navbar.Brand href="/">
            <Logo   
              height="30px"
              style={{height: '30px'}}
              className="d-inline-block align-top"
            /> 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="/home" active={location.pathname === '/home'}>Home</Nav.Link> 
              <Nav.Link href="/how-it-works" active={location.pathname === '/how-it-works'}>How It Works?</Nav.Link> 
              <Nav.Link href="/pricing" active={location.pathname === '/pricing'}>Pricing</Nav.Link>
              <Nav.Link href="/faqs" active={location.pathname === '/faqs'}>FAQs</Nav.Link> 
              <Nav.Link href="/contact" active={location.pathname === '/contact'}>Contact</Nav.Link> 
              <Nav.Link href="/about-us" active={location.pathname === '/about-us'}>About us</Nav.Link>  


              
            </Nav>
            <Link href='/book-appointment' className='btn btn-primary'>Book an Appointment</Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    ); 
};

export default Header;