import React from 'react';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import { FaRegCheckCircle, FaCheckCircle, FaCreditCard, FaShieldAlt, FaFileSignature, FaCalendarCheck } from 'react-icons/fa';
import Header from "./components/Header";
import Footer from './components/Footer';
import { Head } from '@inertiajs/react';

const Pricing = () => {
  return (
    <>
    <Head title="Pricing" />
      <Header />
      
      {/* Hero Section */}
      <section className="pb-5 hero-section not-home">
        <Container>
          <Row className="align-items-center text-center">
            <Col lg={12}>
              <div className="mb-4">
                <h1 className="display-5 fw-bold mb-3">
                  Pricing
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
              <h2 className="fw-bold mb-4">Arizona's Affordable & Transparent Notary Pricing</h2>
              <p className="lead mb-5">
                At TG Notary Now, we believe in straightforward pricing with no hidden fees. Our remote
                online notarization services are affordable, legally recognized, and convenient for individuals
                and businesses throughout Arizona. Whether you need a single document notarized or
                require multiple notarizations, we offer clear, competitive rates to suit your needs.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} className="text-center mb-5">
              <h2 className="fw-bold">Our Pricing</h2>
            </Col>
          </Row>
          
          <Row className="justify-content-center">
            <Col lg={3} md={6} className="mb-4">
              <Card className="h-100 border-0 shadow text-center">
                <Card.Header className="bg-primary text-white py-4">
                  <h5 className="fw-bold mb-0">Standard Notarization</h5>
                </Card.Header>
                <Card.Body className="p-4">
                  <div className="pricing-value my-4">
                    <h2 className="fw-bold mb-0">$10</h2>
                    <p className="text-muted">per document</p>
                  </div>
                  <p className="mb-4">
                    Perfect for affidavits, powers of attorney, real estate documents, and more. Each
                    notarization includes a live video session with a licensed Arizona notary and a secure,
                    tamper-proof digital certificate.
                  </p>
                  <Button variant="primary" className="w-100">Choose Plan</Button>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={3} md={6} className="mb-4">
              <Card className="h-100 border-0 shadow text-center">
                <Card.Header className="bg-primary text-white py-4">
                  <h5 className="fw-bold mb-0">Additional Notarizations</h5>
                </Card.Header>
                <Card.Body className="p-4">
                  <div className="pricing-value my-4">
                    <h2 className="fw-bold mb-0">$10</h2>
                    <p className="text-muted">per additional seal</p>
                  </div>
                  <p className="mb-4">
                    Need multiple documents notarized? Each additional notarization within the same session is
                    available at a reduced rate.
                  </p>
                  <Button variant="primary" className="w-100">Choose Plan</Button>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={3} md={6} className="mb-4">
              <Card className="h-100 border-0 shadow text-center">
                <Card.Header className="bg-primary text-white py-4">
                  <h5 className="fw-bold mb-0">Expedited Service</h5>
                </Card.Header>
                <Card.Body className="p-4">
                  <div className="pricing-value my-4">
                    <h2 className="fw-bold mb-0">$25</h2>
                    <p className="text-muted">for priority notarization</p>
                  </div>
                  <p className="mb-4">
                    Need your notarization ASAP? Get priority service to move to the front of the line and have
                    your document notarized in the shortest possible time.
                  </p>
                  <Button variant="primary" className="w-100">Choose Plan</Button>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={3} md={6} className="mb-4">
              <Card className="h-100 border-0 shadow text-center">
                <Card.Header className="bg-primary text-white py-4">
                  <h5 className="fw-bold mb-0">Business & Bulk Packages</h5>
                </Card.Header>
                <Card.Body className="p-4">
                  <div className="pricing-value my-4">
                    <h2 className="fw-bold mb-0">Custom</h2>
                    <p className="text-muted">contact for pricing</p>
                  </div>
                  <p className="mb-4">
                    For businesses and organizations needing multiple documents notarized regularly, we offer
                    custom bulk pricing. Contact us for a tailored package to fit your needs.
                  </p>
                  <Button variant="primary" className="w-100">Contact Us</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* What's Included */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center mb-5">
              <h2 className="fw-bold">What's Included in Our Pricing?</h2>
            </Col>
          </Row>
          
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="border-0 shadow">
                <Card.Body className="p-4">
                  <Row>
                    <Col md={6} className="mb-3">
                      <div className="d-flex align-items-center">
                        <div className="me-3 text-primary">
                          <FaRegCheckCircle size={24} />
                        </div>
                        <div>
                          <p className="mb-0">Remote online notarization with a licensed Arizona notary</p>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} className="mb-3">
                      <div className="d-flex align-items-center">
                        <div className="me-3 text-primary">
                          <FaRegCheckCircle size={24} />
                        </div>
                        <div>
                          <p className="mb-0">Secure identity verification compliant with Arizona laws</p>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} className="mb-3">
                      <div className="d-flex align-items-center">
                        <div className="me-3 text-primary">
                          <FaRegCheckCircle size={24} />
                        </div>
                        <div>
                          <p className="mb-0">Encrypted digital recordkeeping for legal compliance</p>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} className="mb-3">
                      <div className="d-flex align-items-center">
                        <div className="me-3 text-primary">
                          <FaRegCheckCircle size={24} />
                        </div>
                        <div>
                          <p className="mb-0">Instant access to your notarized document</p>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} className="mb-3">
                      <div className="d-flex align-items-center">
                        <div className="me-3 text-primary">
                          <FaRegCheckCircle size={24} />
                        </div>
                        <div>
                          <p className="mb-0">Customer support for any notarization questions</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Payment Methods */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center mb-5">
              <h2 className="fw-bold">Accepted Payment Methods</h2>
              <p className="mt-3">
                We accept all major credit/debit cards and secure online payments. Payments are processed
                before your notarization session to ensure a seamless experience.
              </p>
            </Col>
          </Row>
          
          <Row className="justify-content-center">
            <Col lg={10} className="text-center">
              <div className="bg-white p-4 rounded shadow">
                <Row className="justify-content-center">
                  <Col xs={6} md={3} className="mb-3 mb-md-0">
                    <div className="p-3">
                      <FaCreditCard size={40} className="text-primary mb-2" />
                      <p className="mb-0">Credit Cards</p>
                    </div>
                  </Col>
                  <Col xs={6} md={3} className="mb-3 mb-md-0">
                    <div className="p-3">
                      <FaCreditCard size={40} className="text-primary mb-2" />
                      <p className="mb-0">Debit Cards</p>
                    </div>
                  </Col>
                  <Col xs={6} md={3}>
                    <div className="p-3">
                      <FaCreditCard size={40} className="text-primary mb-2" />
                      <p className="mb-0">Online Payments</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center mb-5">
              <h2 className="fw-bold">Why Choose TG Notary Now?</h2>
            </Col>
          </Row>
          
          <Row className="justify-content-center">
            <Col lg={10}>
              <Row>
                <Col md={6} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="d-flex">
                        <div className="text-primary me-3">
                          <FaShieldAlt size={30} />
                        </div>
                        <div>
                          <h5 className="fw-bold">Legally recognized in Arizona and nationwide</h5>
                          <p className="mb-0">Our remote online notarization services are compliant with Arizona laws and recognized across the United States.</p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                
                <Col md={6} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="d-flex">
                        <div className="text-primary me-3">
                          <FaFileSignature size={30} />
                        </div>
                        <div>
                          <h5 className="fw-bold">Simple, transparent pricing – no hidden fees</h5>
                          <p className="mb-0">What you see is what you pay. We believe in complete transparency and straightforward pricing.</p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                
                <Col md={6} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="d-flex">
                        <div className="text-primary me-3">
                          <FaCheckCircle size={30} />
                        </div>
                        <div>
                          <h5 className="fw-bold">Fast, secure, and completely online</h5>
                          <p className="mb-0">Get your documents notarized quickly and securely without leaving your home or office.</p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                
                <Col md={6} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="d-flex">
                        <div className="text-primary me-3">
                          <FaCalendarCheck size={30} />
                        </div>
                        <div>
                          <h5 className="fw-bold">Available by appointment at a time that suits you</h5>
                          <p className="mb-0">Schedule your notarization session at your convenience, any day of the week.</p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="border-0 shadow text-center p-5">
                <Card.Body>
                  <h2 className="fw-bold mb-4">Book Your Online Notary Session Today!</h2>
                  <p className="lead mb-4">
                    Get your documents notarized from the comfort of your home or office in just minutes.
                    Choose a plan that works for you and book an appointment today!
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

export default Pricing;