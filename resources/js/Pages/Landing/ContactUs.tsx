import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaFileAlt, FaLock, FaCreditCard } from 'react-icons/fa';
import Header from "./components/Header";
import Footer from './components/Footer';
import { Head, Link } from '@inertiajs/react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend or API)
    console.log('Form Data Submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  return (
    <>
      <Head title="Contact Us" />
      <Header />
      
      {/* Hero Section */}
      <section className="pb-5 hero-section not-home">
        <Container>
          <Row className="align-items-center text-center">
            <Col lg={12}>
              <div className="mb-4">
                <h1 className="display-5 fw-bold mb-3">
                  Contact TG Notary Now
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Intro Section */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="fw-bold mb-4">Get in Touch with Our Arizona-Based Online Notary Team</h2>
              <p className="lead mb-5">
                At TG Notary Now, we are dedicated to providing secure, efficient, and legally compliant
                remote online notarization services for individuals and businesses across Arizona. If you
                have questions or need assistance, our team is ready to help.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Info and Form */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            {/* Contact Information */}
            <Col lg={5} className="mb-5 mb-lg-0">
              <Card className="border-0 shadow h-100">
                <Card.Body className="p-4">
                  <h3 className="fw-bold mb-4">Contact Information</h3>
                  
                  <div className="d-flex mb-4">
                    <div className="text-primary me-3">
                      <FaEnvelope size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">Email</h5>
                      <p className="mb-0">support@tgnotarynow.com</p>
                    </div>
                  </div>
                  
                  <div className="d-flex mb-4">
                    <div className="text-primary me-3">
                      <FaPhone size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">Phone</h5>
                      <p className="mb-0">(123) 456-7890</p>
                    </div>
                  </div>
                  
                  <div className="d-flex mb-4">
                    <div className="text-primary me-3">
                      <FaMapMarkerAlt size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold">Headquarters</h5>
                      <p className="mb-0">[Company Address], Phoenix, Arizona</p>
                    </div>
                  </div>
                  
                  <hr className="my-4" />
                  
                  <h4 className="fw-bold mb-3">Need to Book an Appointment?</h4>
                  <p>
                    While we plan to offer 24/7 notarization in the future, our services currently operate on an
                    appointment-only basis. To schedule a notarization at a time that's convenient for you, simply
                    visit our booking page and choose an available time slot.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            {/* Contact Form */}
            <Col lg={7}>
              <Card className="border-0 shadow">
                <Card.Body className="p-4">
                  <h3 className="fw-bold mb-4">Contact Us Online</h3>
                  <p className="mb-4">
                    For quick assistance, fill out our online contact form, and a member of our team will respond
                    as soon as possible.
                  </p>
                  
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="firstName">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="firstName"
                            placeholder="Enter your first name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="lastName">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="lastName"
                            placeholder="Enter your last name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="email">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="phone">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Form.Group className="mb-3" controlId="subject">
                      <Form.Label>Subject</Form.Label>
                      <Form.Select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Please select a topic</option>
                        <option value="general">General Inquiry</option>
                        <option value="security">Security & Compliance</option>
                        <option value="appointments">Appointments & Scheduling</option>
                        <option value="payments">Payments & Billing</option>
                        <option value="other">Other</option>
                      </Form.Select>
                    </Form.Group>
                    
                    <Form.Group className="mb-4" controlId="message">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" className="w-100">
                      Submit Message
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* How Can We Help Section */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center mb-5">
              <h2 className="fw-bold">How Can We Help?</h2>
            </Col>
          </Row>
          
          <Row>
            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body className="p-4">
                  <div className="text-primary mb-3">
                    <FaFileAlt size={50} />
                  </div>
                  <h5 className="fw-bold">General Inquiries</h5>
                  <p>
                    Questions about our Arizona-compliant online notarization services? Reach out via email or phone.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body className="p-4">
                  <div className="text-primary mb-3">
                    <FaLock size={50} />
                  </div>
                  <h5 className="fw-bold">Security & Compliance</h5>
                  <p>
                    Learn how we protect your personal data and follow Arizona's notary laws.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body className="p-4">
                  <div className="text-primary mb-3">
                    <FaCalendarAlt size={50} />
                  </div>
                  <h5 className="fw-bold">Appointments & Scheduling</h5>
                  <p>
                    Need to book, reschedule, or cancel a notarization? We'll assist you.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body className="p-4">
                  <div className="text-primary mb-3">
                    <FaCreditCard size={50} />
                  </div>
                  <h5 className="fw-bold">Payments & Billing</h5>
                  <p>
                    Get help with payment processing, pricing, and refund policies.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Map and CTA Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="border-0 shadow text-center">
                <Card.Body className="p-5">
                  <h3 className="fw-bold mb-4">We look forward to serving you!</h3>
                  <p className="lead">
                    Making your Arizona online notarization experience seamless and hassle-free is our top priority.
                  </p>
                  <div className="mt-4">
                    <Link href='/book-appointment' className='btn btn-primary btn-lg'>
                      Book an Appointment
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      
      <Footer />
    </>
  );
};

export default ContactUs;