import React, { useState } from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import { FaQuestion, FaRegClock, FaShieldAlt, FaCreditCard, FaRegFileAlt } from 'react-icons/fa';
import Header from "./components/Header";
import Footer from './components/Footer';
import { Head, Link } from '@inertiajs/react';

const FAQs = () => {
  const [activeKey, setActiveKey] = useState('0');
  
  const handleAccordionToggle = (eventKey:any) => {
    setActiveKey(activeKey === eventKey ? null : eventKey);
  };

  return (
    <>
    <Head title="FAQs" />
      <Header />
      
      {/* Hero Section */}
      <section className="pb-5 hero-section not-home">
        <Container>
          <Row className="align-items-center text-center">
            <Col lg={12}>
              <div className="mb-4">
                <h1 className="display-5 fw-bold mb-3">
                  Frequently Asked Questions
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
              <h2 className="fw-bold mb-4">Get Answers to Your Questions</h2>
              <p className="lead mb-5">
                At TG Notary Now, we understand that online notarization may be new to many people. 
                Below, we've answered some of the most common questions about our Arizona-compliant 
                remote notary services.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Categories */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Row>
                <Col md={6} lg={3} className="mb-4">
                  <Card className="h-100 border-0 shadow text-center">
                    <Card.Body className="p-4">
                      <FaQuestion size={40} className="text-primary mb-3" />
                      <h5 className="fw-bold">General Questions</h5>
                      <p className="mb-0">Basic information about our remote notary services</p>
                    </Card.Body>
                  </Card>
                </Col>
                
                <Col md={6} lg={3} className="mb-4">
                  <Card className="h-100 border-0 shadow text-center">
                    <Card.Body className="p-4">
                      <FaRegFileAlt size={40} className="text-primary mb-3" />
                      <h5 className="fw-bold">Process & Requirements</h5>
                      <p className="mb-0">How our notarization process works</p>
                    </Card.Body>
                  </Card>
                </Col>
                
                <Col md={6} lg={3} className="mb-4">
                  <Card className="h-100 border-0 shadow text-center">
                    <Card.Body className="p-4">
                      <FaCreditCard size={40} className="text-primary mb-3" />
                      <h5 className="fw-bold">Pricing & Payments</h5>
                      <p className="mb-0">Information about our transparent pricing</p>
                    </Card.Body>
                  </Card>
                </Col>
                
                <Col md={6} lg={3} className="mb-4">
                  <Card className="h-100 border-0 shadow text-center">
                    <Card.Body className="p-4">
                      <FaShieldAlt size={40} className="text-primary mb-3" />
                      <h5 className="fw-bold">Security & Compliance</h5>
                      <p className="mb-0">How we keep your information safe</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Accordion */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="border-0 shadow">
                <Card.Body className="p-4">
                  <h3 className="fw-bold mb-4">General Questions</h3>
                  <Accordion defaultActiveKey="0" className="mb-5">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>What is remote online notarization (RON)?</Accordion.Header>
                      <Accordion.Body>
                        Remote online notarization (RON) allows you to notarize documents electronically via a secure,
                        live video session with a licensed Arizona notary public. This process is legally recognized
                        across Arizona and the United States.
                      </Accordion.Body>
                    </Accordion.Item>
                    
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Is online notarization legal in Arizona?</Accordion.Header>
                      <Accordion.Body>
                        Yes! Arizona fully recognizes remote online notarization under Arizona Revised Statutes Title
                        41, Chapter 2. Our process meets all state and federal security and compliance requirements.
                      </Accordion.Body>
                    </Accordion.Item>
                    
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Who can use TG Notary Now?</Accordion.Header>
                      <Accordion.Body>
                        Our services are available to Arizona residents and businesses, as well as individuals outside
                        the state who need documents notarized under Arizona law. While we are currently only
                        licensed in Arizona, we plan to expand to other states in the near future.
                      </Accordion.Body>
                    </Accordion.Item>
                    
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>What types of documents can be notarized online?</Accordion.Header>
                      <Accordion.Body>
                        <p>We notarize a wide variety of documents, including:</p>
                        <ul>
                          <li>Affidavits & Sworn Statements</li>
                          <li>Power of Attorney (POA)</li>
                          <li>Real Estate Documents & Deeds</li>
                          <li>Contracts & Agreements</li>
                          <li>Financial & Business Forms</li>
                          <li>Legal Documents Requiring Notarization</li>
                        </ul>
                        <p className="mb-0">
                          <small><em>Note: Some documents, such as wills and trusts, may have additional legal requirements.
                          Please consult a legal professional if you are unsure.</em></small>
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  
                  <h3 className="fw-bold mb-4">Process & Requirements</h3>
                  <Accordion className="mb-5">
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>How does the online notarization process work?</Accordion.Header>
                      <Accordion.Body>
                        <p>The process is simple and consists of four steps:</p>
                        <ol>
                          <li><strong>Upload Your Document</strong> – Securely submit your document through our website.</li>
                          <li><strong>Confirm Your Identity</strong> – Verify your identity using government-issued ID and security questions.</li>
                          <li><strong>Connect with a Live Notary</strong> – Meet with a licensed Arizona notary via a real-time video call.</li>
                          <li><strong>Download Your Notarized Document</strong> – Instantly receive your legally notarized document.</li>
                        </ol>
                      </Accordion.Body>
                    </Accordion.Item>
                    
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>What do I need for an online notarization?</Accordion.Header>
                      <Accordion.Body>
                        <p>To complete an online notarization, you'll need:</p>
                        <ul>
                          <li>A valid government-issued ID (driver's license, passport, or state ID)</li>
                          <li>A computer, tablet, or smartphone with a camera and microphone</li>
                          <li>A stable internet connection</li>
                          <li>The document(s) you need notarized in PDF or image format</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    
                    <Accordion.Item eventKey="6">
                      <Accordion.Header>How long does the process take?</Accordion.Header>
                      <Accordion.Body>
                        Most notarizations take less than 10 minutes from start to finish!
                      </Accordion.Body>
                    </Accordion.Item>
                    
                    <Accordion.Item eventKey="7">
                      <Accordion.Header>Do I need to schedule an appointment?</Accordion.Header>
                      <Accordion.Body>
                        Yes. While we plan to offer 24/7 on-demand notarization in the future, our current hours of
                        operation vary. Customers must book an appointment in advance at a time that is convenient
                        for them.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  
                  <h3 className="fw-bold mb-4">Pricing & Payments</h3>
                  <Accordion className="mb-5">
                    <Accordion.Item eventKey="8">
                      <Accordion.Header>How much does online notarization cost?</Accordion.Header>
                      <Accordion.Body>
                        <p>Our pricing is transparent with no hidden fees:</p>
                        <ul>
                          <li>Standard Notarization – [$10 per document]</li>
                          <li>Additional Notarizations – [$10 per extra seal]</li>
                          <li>Expedited Service – [$25 for priority notarization]</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    
                    <Accordion.Item eventKey="9">
                      <Accordion.Header>What payment methods do you accept?</Accordion.Header>
                      <Accordion.Body>
                        We accept all major credit cards, debit cards, and secure online payment platforms.
                      </Accordion.Body>
                    </Accordion.Item>
                    
                    <Accordion.Item eventKey="10">
                      <Accordion.Header>Is my payment refundable?</Accordion.Header>
                      <Accordion.Body>
                        Once a notarization session is completed, fees are non-refundable. If you experience issues,
                        please contact our support team for assistance.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  
                  <h3 className="fw-bold mb-4">Security & Compliance</h3>
                  <Accordion className="mb-5">
                    <Accordion.Item eventKey="11">
                      <Accordion.Header>Is my personal information secure?</Accordion.Header>
                      <Accordion.Body>
                        Yes! We use encrypted technology to protect your information, and we never share or sell
                        your data. All notarization sessions are conducted in compliance with Arizona's strict security
                        regulations.
                      </Accordion.Body>
                    </Accordion.Item>
                    
                    <Accordion.Item eventKey="12">
                      <Accordion.Header>Will my notarization be legally recognized?</Accordion.Header>
                      <Accordion.Body>
                        Absolutely. All notarizations performed through TG Notary Now are legally binding in Arizona
                        and recognized across the United States.
                      </Accordion.Body>
                    </Accordion.Item>
                    
                    <Accordion.Item eventKey="13">
                      <Accordion.Header>How long do you retain notarized documents?</Accordion.Header>
                      <Accordion.Body>
                        Per Arizona law, all remote notarization records, including video recordings, are securely stored
                        for at least five years.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  
                  <h3 className="fw-bold mb-4">Support & Contact Information</h3>
                  <Accordion>
                    <Accordion.Item eventKey="14">
                      <Accordion.Header>How can I contact TG Notary Now?</Accordion.Header>
                      <Accordion.Body>
                        <p>If you have additional questions or need assistance, feel free to reach out:</p>
                        <ul className="list-unstyled">
                          <li>📧 Email: support@tgnotarynow.com</li>
                          <li>📞 Phone: (123) 456-7890</li>
                          <li>📍 Headquarters: Phoenix, Arizona</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Body>
              </Card>
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
                  <h2 className="fw-bold mb-4">Ready to Notarize Your Documents?</h2>
                  <p className="lead mb-4">
                    Click below to begin your secure, fast, and legal online notarization today!
                  </p>
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

export default FAQs;