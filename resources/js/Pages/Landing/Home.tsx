import React from 'react';
import { Container, Row, Col, Button, Card, Badge, Form, InputGroup } from 'react-bootstrap';
import { FaRegCheckCircle, FaShieldAlt, FaUserTie, FaCheckCircle, FaFileAlt, FaHeadset, FaLightbulb, FaThumbsUp, FaClock, FaBuilding } from 'react-icons/fa';
import Header from "./components/Header"
import Footer from './components/Footer'; 
import laptopImg from './images/upload.webp'; // Add device mockup images
import deviceImg from './images/connect.webp';
// import { faker } from '@faker-js/faker';
import { Head,Link } from '@inertiajs/react';

const Home = () => {
  // Sample customer review data
  const reviews = [
    { name: "John Doe", date: "12 May 2025", rating: 5, comment: "Easy to use!" },
    { name: "Jane Smith", date: "11 May 2025", rating: 5, comment: "Very fast and efficient process" },
    { name: "Sam Johnson", date: "7 May 2025", rating: 5, comment: "Great communication, fast and easy" },
    { name: "Emily Davis", date: "5 May 2025", rating: 5, comment: "Very reliable" },
  ];

  return (
    <>
    <Head title="Home" />
      <Header />

      {/* Hero Section */}
      <section className="pb-5 hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <div className="mb-4">
                <Badge bg="success" className="mb-2 p-2">Safe & Secure</Badge>
                <h1 className="display-5 fw-bold mb-3">
                  Arizona's Premier Online and Mobile <span className='special-word'>Notary</span> Service - Fast, Secure, and Legally Recognized
                </h1>
                <p className="lead mb-4">
                Do you need a document notarized in Arizona but don't have time to visit a notary in person?
                </p>



                <p>
                  TG Notary Now makes the process fast, convenient, and fully compliant with Arizona's
                  Remote Online Notarization (RON) laws. Whether you need a power of attorney, real estate
                  contract, business agreement, or any other notarized document, our licensed Arizona
                  notaries are ready to assist—all from the comfort of your home or office.
                </p>

                <div className="d-flex flex-wrap gap-2 mb-4"> 
                  <Link href='/signup' className='btn btn-primary btn-lg' >Create Your Account</Link>
                </div>

                {/* <div className="d-flex flex-wrap gap-3 align-items-center">
                  <img src={trustBadge1} alt="Trust Badge" height="50" />
                  <img src={trustBadge2} alt="Trust Badge" height="50" />
                  <img src={trustBadge3} alt="Trust Badge" height="50" />
                  <img src={trustBadge4} alt="Trust Badge" height="50" />
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <Badge bg="success" className="mb-2">Customer Reviews</Badge>
            <h2 className="fw-bold">People Love TG Notary Now! Here are some of our customer reviews:</h2>
          </div>

          <Row>
            {reviews.map((review, index) => (
              <Col md={3} key={index}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body>
                    <div className="mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-warning">★</span>
                      ))}
                    </div>
                    <Card.Title className="fs-6">{review.date}</Card.Title>
                    <Card.Text>{review.comment}</Card.Text>
                    <div className="text-muted small">{review.name}</div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Platform Features */}
      <section className="py-5 features-section">
        <Container>
          <div className="text-center mb-5">
            <Badge bg="success" className="mb-2">Platform Features</Badge>
            <h2 className="fw-bold">We have a wide of free, upgraded, and some unique features</h2>
          </div>

          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="text-primary mb-3">
                    <FaUserTie size={30} />
                  </div>
                  <h5 className="fw-bold">Business Notary Services</h5>
                  <p>
                    We provide document notarization that is legally recognized for businesses of all types and sizes. Our API will allow you to embed notary services directly into your applications.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="text-primary mb-3">
                    <FaShieldAlt size={30} />
                  </div>
                  <h5 className="fw-bold">Bank Grade Security</h5>
                  <p>
                    Your documents are protected by the best security protocols available, including the latest end-to-end encryption. We follow the highest standards for document handling and storage.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="text-primary mb-3">
                    <FaUserTie size={30} />
                  </div>
                  <h5 className="fw-bold">Experienced Agents</h5>
                  <p>
                    Our expert notary agents are certified and authorized to conduct legal notarizations. They can help guide you through the process with ease and professionalism.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="text-primary mb-3">
                    <FaCheckCircle size={30} />
                  </div>
                  <h5 className="fw-bold">Independent Verification</h5>
                  <p>
                    Every document goes through independent error detection checks to verify the accuracy of information. This helps protect against fraud and ensures the validity of notarizations.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="text-primary mb-3">
                    <FaFileAlt size={30} />
                  </div>
                  <h5 className="fw-bold">Print or Email your Documents</h5>
                  <p>
                    After notarization, your document is available to print directly to your physical printer or email in PDF format. Your documents are also securely stored for future access.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="text-primary mb-3">
                    <FaHeadset size={30} />
                  </div>
                  <h5 className="fw-bold">Excellent Support</h5>
                  <p>
                    From the moment you visit our site to the time you receive your completed document, our team is there to assist you with any questions you might have.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Technology Section */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h2 className="fw-bold mb-4">Why Choose TG Notary Now?</h2>

              <div className="d-flex mb-4">
                <div className="text-primary me-3">
                  <FaLightbulb size={24} />
                </div>
                <div>
                  <h5 className="fw-bold">100% Remote & Legally Binding</h5>
                  <p>Our notarizations are recognized across Arizona and
                  the United States, meeting all state and federal requirements</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="text-primary me-3">
                  <FaThumbsUp size={24} />
                </div>
                <div>
                  <h5 className="fw-bold">Secure & Compliant</h5>
                  <p>We adhere to Arizona Revised Statutes Title 41, Chapter 2 and
                  use bank-level encryption to protect your documents.</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="text-primary me-3">
                  <FaClock size={24} />
                </div>
                <div>
                  <h5 className="fw-bold">Fast & Convenient</h5>
                  <p>No more travel, waiting in line, or scheduling hassles—get
                  notarized in just minutes from anywhere</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="text-primary me-3">
                  <FaBuilding size={24} />
                </div>
                <div>
                  <h5 className="fw-bold">Licensed Arizona Notaries</h5>
                  <p>Work with professional, state-commissioned notaries
                  trained in Arizona's RON laws.</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="text-primary me-3">
                  <FaClock size={24} />
                </div>
                <div>
                  <h5 className="fw-bold">Transparent Pricing - No hidden fees</h5>
                  <p>just straightforward, affordable notarization with
                  multiple service options.</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="text-primary me-3">
                  <FaClock size={24} />
                </div>
                <div>
                  <h5 className="fw-bold">Available by Appointment </h5>
                  <p>Choose a time that works for you and complete your
                  notarization when it's most convenient.</p>
                </div>
              </div>

            </Col>
            <Col lg={6}>
              <img src={laptopImg} alt="Online Notary Platform" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* How it Works Section */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <Badge bg="success" className="mb-2">Step by Step</Badge>
            <h2 className="fw-bold">How it works?</h2>
            <p>Our online notarization process is remote, quick, secure, and legally binding in Arizona.</p>
          </div>

          <Row className="align-items-center mb-5">
            <Col md={6} className="order-md-1 order-2">
              <img src={deviceImg} alt="Upload Documents" className="img-fluid" />
            </Col>
            <Col md={6} className="order-md-2 order-1">
              <Badge bg="primary" className="mb-2">STEP 1</Badge>
              <h3 className="fw-bold">Upload Your Document</h3>
              <p>
              Securely submit your document in PDF, Word, or image format
              through our online platform.
              </p>
            </Col>
          </Row>

          <Row className="align-items-center mb-5">
            <Col md={6}>
              <Badge bg="primary" className="mb-2">STEP 2</Badge>
              <h3 className="fw-bold">Confirm Your Identity</h3>
              <p>
              Complete a quick and secure identity verification process using
              a government-issued ID and security questions.
              </p>
            </Col>
            <Col md={6}>
              <img src={deviceImg} alt="Connect with Notary" className="img-fluid" />
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6} className="order-md-1 order-2">
              <img src={deviceImg} alt="Receive Notarized Documents" className="img-fluid" />
            </Col>
            <Col md={6} className="order-md-2 order-1">
              <Badge bg="primary" className="mb-2">STEP 3</Badge>
              <h3 className="fw-bold">Connect with a Live Notary</h3>
              <p>
              Meet a certified Arizona notary via a secure video call to
              review and electronically sign your document.
              </p>
            </Col>
          </Row>

          <Row className="align-items-center"> 
            <Col md={12} className="order-md-2 order-1 text-center mt-4">
              <Badge bg="primary" className="mb-2">STEP 4</Badge>
              <h3 className="fw-bold">Download Your Notarized Document </h3>
              <p>
              Instantly access your tamper-proof notarized file
for submission, printing, or sharing.
              </p>
            </Col>
          </Row>


        </Container>
      </section>

      {/* Customer Testimonials */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">What our <span className="text-success">customers</span> say</h2>
            <p>By sharing this right things, we want customers, have the same of the most easiest reviews with for our loving customers.</p>
          </div>

          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-warning">★</span>
                    ))}
                  </div>
                  <p className="mb-4">"The process is fast, intuitive, and I saved a bunch of time doing this online instead of going to a physical location."</p>
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>JP</div>
                    <div className="ms-3">
                      <h6 className="fw-bold mb-0">James P.</h6>
                      <small className="text-muted">Business Owner</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-warning">★</span>
                    ))}
                  </div>
                  <p className="mb-4">"Quick in-and-out experience. The notary agent was professional and helpful throughout the entire process."</p>
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>MS</div>
                    <div className="ms-3">
                      <h6 className="fw-bold mb-0">Michelle S.</h6>
                      <small className="text-muted">Real Estate Agent</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-warning">★</span>
                    ))}
                  </div>
                  <p className="mb-4">"Absolutely amazed by the convenience! This service saved me hours of driving and waiting at traditional notary offices."</p>
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>SW</div>
                    <div className="ms-3">
                      <h6 className="fw-bold mb-0">Sarah W.</h6>
                      <small className="text-muted">Healthcare Professional</small>
                    </div>
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

export default Home;