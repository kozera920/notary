import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Logo from '@/Components/Logo/Logo';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="mb-4">
          <Col md={3} className="mb-3">
            <div className="d-flex align-items-center mb-3">
              <Logo  
                height="30"
                className="d-inline-block align-top"
              /> 
            </div>
            <p className="small">
              We provide convenient, secure, and legally binding online notarization services. Available 24/7, connect with a licensed notary from anywhere with an internet connection.
            </p>
          </Col>
          
          <Col md={3} className="mb-3">
            <h6>Help Center</h6>
            <Nav className="flex-column">
              <Nav.Link href="/about-us" className="text-white p-0 mb-2">About Us</Nav.Link>
              <Nav.Link href="/faqs" className="text-white p-0 mb-2">FAQs</Nav.Link>
              <Nav.Link href="/contact" className="text-white p-0 mb-2">Contact</Nav.Link>
              <Nav.Link href="/privacy-policy" className="text-white p-0 mb-2">Privacy Policy</Nav.Link>
              <Nav.Link href="/terms-of-service" className="text-white p-0">Terms of Service</Nav.Link>
            </Nav>
          </Col>
          
          <Col md={3} className="mb-3">
            <h6>Contact Us</h6>
            <p className="small mb-1">Phone Number: 1-800-0000</p>
            <p className="small mb-1">Email: support@TGNotaryNow.com</p>
            <p className="small">Business Hours: 24/7</p>
          </Col>
          
          <Col md={3}>
            <h6>Legal Disclaimer</h6>
            <p className="small">
              Copyright © TG Notary Now 2025. All rights reserved. Consult with a legal professional regarding your specific situation.
            </p>
          </Col>
        </Row>
        
        <hr className="border-secondary" />
        
        <div className="text-center small">
          © 2025 TG Notary Now - All Rights Reserved
        </div>
      </Container>
    </footer>
  );
};

export default Footer;