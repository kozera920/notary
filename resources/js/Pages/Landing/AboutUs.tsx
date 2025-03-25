import React from 'react';
import { Container, Row, Col, Button, Card, ListGroup } from 'react-bootstrap';
import { FaCheckCircle, FaShieldAlt, FaUserCheck, FaFileUpload, FaVideo, FaDownload } from 'react-icons/fa';
import Header from "./components/Header";
import Footer from './components/Footer';
import { Head, Link } from '@inertiajs/react'; 
const AboutUs = () => {
  return (
    <>
    <Head title="About Us" />
      <Header />
      
      {/* Hero Section */}
      <section className="pb-5 hero-section not-home">
        <Container>
          <Row className="align-items-center text-center">
            <Col lg={12}>
              <div className="mb-4">
                <h1 className="display-5 fw-bold mb-3">
                  About TG Notary Now
                </h1>
                <p className="lead">
                  Arizona’s Premier Online Notary Service
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="fw-bold mb-4">Who We Are</h2>
                <p className="lead mb-5">
                At TG Notary Now, we are committed to revolutionizing the notarization process for individuals
                and businesses across Arizona. Based in Phoenix, AZ, we offer a secure, fast, and legally
                recognized remote online notarization (RON) service that allows you to notarize documents
                from anywhere. Additionally, we provide a mobile notary service where our licensed notaries
                travel to your location for added convenience. While we currently operate exclusively in Arizona,
                we have plans to expand into other states soon to provide even greater accessibility.
                </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center mb-5">
              <h2 className="fw-bold">Our Mission</h2>
              <p className="lead">
                Our mission is simple: to provide convenient, secure, and legally compliant online notary
                services that save you time and effort. Traditional notarization can be a hassle—requiring travel,
                waiting in lines, and dealing with limited availability. TG Notary Now eliminates these
                frustrations by bringing licensed Arizona notaries directly to you through a real-time video
                session.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center mb-5">
              <h2 className="fw-bold">Why Choose TG Notary Now?</h2>
            </Col>
          </Row>
          
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="border-0 shadow">
                <Card.Body className="p-4">
                  <ListGroup variant="flush">
                    <ListGroup.Item className="d-flex align-items-center">
                      <FaCheckCircle size={24} className="text-primary me-3" />
                      <span>Arizona State-Compliant Remote and Mobile Notarization – We follow Arizona Revised Statutes Title 41, Chapter 2, ensuring every notarization meets legal requirements.</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center">
                      <FaShieldAlt size={24} className="text-primary me-3" />
                      <span>Secure & Encrypted Technology – Your documents and personal information are protected with industry-leading security protocols.</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center">
                      <FaUserCheck size={24} className="text-primary me-3" />
                      <span>Flexible & Appointment-Based Availability – While we plan to offer 24/7 notarization in the future, customers must currently book an appointment in advance at a time that works for them.</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center">
                      <FaCheckCircle size={24} className="text-primary me-3" />
                      <span>Licensed Arizona Notaries – Every notarization is handled by a state-commissioned, background-verified notary public.</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center">
                      <FaCheckCircle size={24} className="text-primary me-3" />
                      <span>Legally Binding & Nationwide Recognition – Documents notarized through TG Notary Now are valid across Arizona and the U.S.</span>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Who We Serve Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center mb-5">
              <h2 className="fw-bold">Who We Serve</h2>
              <p className="lead">
                We provide mobile and remote online notarization services for:
              </p>
            </Col>
          </Row>
          
          <Row className="justify-content-center">
            <Col lg={10}>
              <Row>
                <Col md={6} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <h5 className="fw-bold">Arizona Residents</h5>
                      <p className="mb-0">Individuals who need notarization for personal or business documents.</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <h5 className="fw-bold">Real Estate Professionals</h5>
                      <p className="mb-0">Handling contracts, deeds, and closing documents.</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <h5 className="fw-bold">Legal Professionals</h5>
                      <p className="mb-0">Requiring affidavits, power of attorney, and sworn statements.</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <h5 className="fw-bold">Business Owners & Entrepreneurs</h5>
                      <p className="mb-0">Seeking reliable and efficient notary services.</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <h5 className="fw-bold">Individuals Outside Arizona</h5>
                      <p className="mb-0">Who need documents notarized under Arizona law.</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center mb-5">
              <h2 className="fw-bold">Our Process – Simple & Efficient</h2>
              <p className="lead">
                Using TG Notary Now is as easy as four simple steps:
              </p>
            </Col>
          </Row>
          
          <Row className="justify-content-center">
            <Col lg={10}>
              <Row>
                <Col md={3} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm text-center">
                    <Card.Body className="p-4">
                      <div className="mb-3">
                        <FaFileUpload size={40} className="text-primary" />
                      </div>
                      <h5 className="fw-bold">1. Upload Your Document</h5>
                      <p className="mb-0">Securely submit your document in PDF or image format.</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm text-center">
                    <Card.Body className="p-4">
                      <div className="mb-3">
                        <FaUserCheck size={40} className="text-primary" />
                      </div>
                      <h5 className="fw-bold">2. Confirm Your Identity</h5>
                      <p className="mb-0">Complete a quick, Arizona-compliant verification process.</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm text-center">
                    <Card.Body className="p-4">
                      <div className="mb-3">
                        <FaVideo size={40} className="text-primary" />
                      </div>
                      <h5 className="fw-bold">3. Connect with a Live Notary</h5>
                      <p className="mb-0">Join a secure video session with a licensed Arizona notary.</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm text-center">
                    <Card.Body className="p-4">
                      <div className="mb-3">
                        <FaDownload size={40} className="text-primary" />
                      </div>
                      <h5 className="fw-bold">4. Download Your Notarized Document</h5>
                      <p className="mb-0">Instantly access your legally notarized file for use.</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Looking Ahead Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="fw-bold mb-4">Looking Ahead</h2>
              <p className="lead mb-4">
                While we are currently only available in Arizona, TG Notary Now is actively working on
                expanding its services to additional states. Our goal is to make online notarization
                accessible to more individuals and businesses nationwide.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="border-0 shadow text-center p-5">
                <Card.Body>
                  <h2 className="fw-bold mb-4">Get Started Today!</h2>
                  <p className="lead mb-4">
                    Whether you need a single notarization or ongoing notary services, TG Notary Now is here
                    to help. Book an appointment today and experience the future of notarization—secure,
                    convenient, and Arizona-compliant.
                  </p>
                  <Button variant="primary" size="lg">Start Your Notarization</Button>
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

export default AboutUs;