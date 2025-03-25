import React from 'react';
import { Container, Row, Col, Button, Card, Badge, Form, InputGroup } from 'react-bootstrap';
import { FaRegCheckCircle, FaFileAlt, FaIdCard, FaVideo, FaDownload, FaCheckCircle, FaCalendarAlt } from 'react-icons/fa';
import Header from "./components/Header"
import Footer from './components/Footer';
import deviceImg from './images/connect.webp'; // Reusing image from Home page
// import { faker } from '@faker-js/faker';
import { Head, Link } from '@inertiajs/react';
const HowItWorks = () => {
  return (
    <>
    <Head title="How it works?" />
      <Header />
      {/* Hero Section */}
      <section className="pb-5 hero-section not-home">
        <Container>
          <Row className="align-items-center text-center">
            <Col lg={12}>
              <div className="mb-4">
                <h1 className="display-5 fw-bold mb-3">
                  How it works?
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
              <h2 className="fw-bold mb-4">Arizona Online Notarization Made Simple</h2>
              <p className="lead mb-4">
                At TG Notary Now, we've streamlined the notarization process, making it fast, secure, and fully compliant with Arizona's Remote Online Notarization (RON) laws. Whether you're at home, in the office, or traveling, you can legally notarize documents online in just a few simple steps.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Step 1 */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <Badge bg="primary" className="mb-2">STEP 1</Badge>
              <h3 className="fw-bold">Upload Your Document</h3>
              <p>
                Start by securely uploading your document through our online portal. We support a variety of file formats, including PDF, Word, and image files. Need multiple documents notarized? No problem—our platform can handle multiple files in a single session.
              </p>
              
              <Card className="border-0 shadow-sm mt-4">
                <Card.Body>
                  <h5 className="fw-bold mb-3">What types of documents can you notarize?</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2"><FaRegCheckCircle className="text-success me-2" /> Real estate documents (deeds, contracts, refinancing forms)</li>
                    <li className="mb-2"><FaRegCheckCircle className="text-success me-2" /> Legal affidavits & sworn statements</li>
                    <li className="mb-2"><FaRegCheckCircle className="text-success me-2" /> Power of attorney (POA) forms</li>
                    <li className="mb-2"><FaRegCheckCircle className="text-success me-2" /> Business agreements & contracts</li>
                    <li className="mb-2"><FaRegCheckCircle className="text-success me-2" /> DMV-related forms</li>
                    <li className="mb-2"><FaRegCheckCircle className="text-success me-2" /> Personal and financial documents</li>
                  </ul>
                  <p className="small fst-italic mt-3">Note: If you're unsure whether your document qualifies for notarization, contact our support team before proceeding.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <div className="text-center">
                <div className="p-4 rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '120px', height: '120px' }}>
                  <FaFileAlt size={60} />
                </div>
                <img src={deviceImg} alt="Upload Documents" className="img-fluid rounded shadow-sm" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Step 2 */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="order-md-2">
              <Badge bg="primary" className="mb-2">STEP 2</Badge>
              <h3 className="fw-bold">Confirm Your Identity</h3>
              <p>
                Before we can notarize your document, we must verify your identity. TG Notary Now follows Arizona's strict identity verification process to ensure a secure, fraud-free notarization.
              </p>
              
              <Card className="border-0 shadow-sm mt-4">
                <Card.Body>
                  <h5 className="fw-bold mb-3">How does identity verification work?</h5>
                  <ul className="list-unstyled">
                    <li className="mb-3"><FaRegCheckCircle className="text-success me-2" /> You'll be asked to upload a valid, government-issued ID (driver's license, passport, or state-issued identification card).</li>
                    <li className="mb-3"><FaRegCheckCircle className="text-success me-2" /> Our system will perform real-time ID authentication to confirm your identity.</li>
                    <li className="mb-3"><FaRegCheckCircle className="text-success me-2" /> You may be required to answer a few security questions based on public records to further verify your identity.</li>
                  </ul>
                  <div className="bg-light p-3 rounded mt-3">
                    <h6 className="fw-bold">Security & Compliance:</h6>
                    <p className="small mb-0">We use bank-level encryption and multi-factor authentication to keep your personal information safe. Your identity verification is not stored or shared beyond the required legal recordkeeping.</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="order-md-1">
              <div className="text-center">
                <div className="p-4 rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '120px', height: '120px' }}>
                  <FaIdCard size={60} />
                </div>
                <img src={deviceImg} alt="Identity Verification" className="img-fluid rounded shadow-sm" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Step 3 */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <Badge bg="primary" className="mb-2">STEP 3</Badge>
              <h3 className="fw-bold">Connect with a Live Arizona Notary</h3>
              <p>
                Once your identity is confirmed, you'll be instantly connected to a licensed Arizona notary public via a secure, live video session.
              </p>
              
              <Card className="border-0 shadow-sm mt-4">
                <Card.Body>
                  <h5 className="fw-bold mb-3">During this session:</h5>
                  <ul className="list-unstyled">
                    <li className="mb-3"><FaRegCheckCircle className="text-success me-2" /> The notary will review your document to ensure everything is in order.</li>
                    <li className="mb-3"><FaRegCheckCircle className="text-success me-2" /> You'll electronically sign the document while the notary witnesses your signature.</li>
                    <li className="mb-3"><FaRegCheckCircle className="text-success me-2" /> The notary will apply an official Arizona digital seal and signature, making the document legally binding.</li>
                  </ul>
                  <div className="bg-light p-3 rounded mt-3">
                    <h6 className="fw-bold">How long does the notarization session take?</h6>
                    <p className="small mb-0">Most sessions take 10–15 minutes, but more complex documents may require additional time.</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <div className="text-center">
                <div className="p-4 rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '120px', height: '120px' }}>
                  <FaVideo size={60} />
                </div>
                <img src={deviceImg} alt="Video Session" className="img-fluid rounded shadow-sm" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Step 4 */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="order-md-2">
              <Badge bg="primary" className="mb-2">STEP 4</Badge>
              <h3 className="fw-bold">Download Your Notarized Document</h3>
              <p>
                Once the session is complete, you'll receive an officially notarized document with a tamper-proof digital seal.
              </p>
              
              <Card className="border-0 shadow-sm mt-4">
                <Card.Body>
                  <h5 className="fw-bold mb-3">Your document will be:</h5>
                  <ul className="list-unstyled">
                    <li className="mb-3"><FaCheckCircle className="text-success me-2" /> Legally recognized in Arizona and across the U.S.</li>
                    <li className="mb-3"><FaCheckCircle className="text-success me-2" /> Encrypted and stored securely for future access.</li>
                    <li className="mb-3"><FaCheckCircle className="text-success me-2" /> Available for instant download—ready for submission, printing, or sharing.</li>
                  </ul>
                  <div className="bg-light p-3 rounded mt-3">
                    <h6 className="fw-bold">Need additional copies or verification?</h6>
                    <p className="small mb-0">Your notarized document is stored securely in our system. If you need additional copies, you can access your document anytime through your account within 5 years.</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="order-md-1">
              <div className="text-center">
                <div className="p-4 rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '120px', height: '120px' }}>
                  <FaDownload size={60} />
                </div>
                <img src={deviceImg} alt="Download Document" className="img-fluid rounded shadow-sm" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="fw-bold mb-5">Why Choose TG Notary Now?</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body className="p-4">
                  <div className="text-primary mb-3 text-center">
                    <FaCheckCircle size={40} />
                  </div>
                  <h5 className="fw-bold">Arizona-Approved Remote and Mobile Notarization</h5>
                  <p className="small">We comply with Arizona Revised Statutes Title 41, Chapter 2.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body className="p-4">
                  <div className="text-primary mb-3">
                    <FaCheckCircle size={40} />
                  </div>
                  <h5 className="fw-bold">Fast & Convenient</h5>
                  <p className="small">No need to travel or schedule in-person meetings, we can visit you remotely.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body className="p-4">
                  <div className="text-primary mb-3">
                    <FaCheckCircle size={40} />
                  </div>
                  <h5 className="fw-bold">Secure & Legally Binding</h5>
                  <p className="small">Our notarizations are recognized nationwide.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 border-0 shadow-sm text-center">
                <Card.Body className="p-4">
                  <div className="text-primary mb-3">
                    <FaCalendarAlt size={40} />
                  </div>
                  <h5 className="fw-bold">Available by Appointment</h5>
                  <p className="small">Book a time that fits your schedule.</p>
                </Card.Body>
              </Card>
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
                  <h2 className="fw-bold mb-4">Start Your Notarization Today!</h2>
                  <p className="lead mb-4">Don't wait—get your document notarized in minutes! Click below to book your online notarization session now.</p>
                  <Link href='/book-appointment' className='btn btn-primary btn-lg' >Book an Appointment</Link>
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

export default HowItWorks;