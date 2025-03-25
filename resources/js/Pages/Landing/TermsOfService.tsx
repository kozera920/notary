import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import Header from "./components/Header";
import Footer from './components/Footer';
import { Head } from '@inertiajs/react';

const TermsOfService = () => {
    const currentDateTime = new Date().toLocaleDateString();
  return (
    <>
        <Head title="Terms of Service" />
      <Header />
      
      {/* Hero Section */}
      <section className="pb-5 hero-section not-home">
        <Container>
          <Row className="align-items-center text-center">
            <Col lg={12}>
              <div className="mb-4">
                <h1 className="display-5 fw-bold mb-3">
                  Terms & Conditions
                </h1>
                <p className="lead">
                  Last Updated: {currentDateTime}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Introduction Section */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <p className="lead mb-5">
                Welcome to TG Notary Now! These Terms & Conditions govern your use of our Arizona-based
                remote online notary services. By accessing our website or utilizing our services, you agree to
                comply with these terms. Please read them carefully before proceeding.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Use of Our Services Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="fw-bold mb-4">1. Use of Our Services</h2>
              <p>
                By using TG Notary Now’s services, you agree to the following conditions:
              </p>
              <ListGroup>
                <ListGroup.Item>
                  You must be at least 18 years old to use our remote online notarization services.
                </ListGroup.Item>
                <ListGroup.Item>
                  You must provide accurate and truthful information during the notarization process.
                </ListGroup.Item>
                <ListGroup.Item>
                  You acknowledge that notarization does not validate the truthfulness of a
                  document’s content—it only verifies the identity of the signer.
                </ListGroup.Item>
                <ListGroup.Item>
                  TG Notary Now operates in compliance with Arizona Revised Statutes Title 41,
                  Chapter 2 regarding Remote Online Notarization (RON).
                </ListGroup.Item>
                <ListGroup.Item>
                  TG Notary Now reserves the right to refuse service if fraud or illegal activity is suspected.
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Payments & Refunds Section */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="fw-bold mb-4">2. Payments & Refunds</h2>
              <p>
                To maintain a seamless notarization process, our payment policies are as follows:
              </p>
              <ListGroup>
                <ListGroup.Item>
                  Payment is required at the time of service through our secure payment processing
                  system.
                </ListGroup.Item>
                <ListGroup.Item>
                  All notarization fees are non-refundable once a notarization session is completed.
                </ListGroup.Item>
                <ListGroup.Item>
                  If technical issues prevent notarization from being completed, you may be eligible for a
                  partial or full refund at our discretion.
                </ListGroup.Item>
                <ListGroup.Item>
                  Additional notarization requests or multiple document seals may incur additional
                  charges.
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Legal Compliance & Limitations Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="fw-bold mb-4">3. Legal Compliance & Limitations</h2>
              <p>
                Our services comply with Arizona’s notarial laws, but we are not legal advisors.
              </p>
              <ListGroup>
                <ListGroup.Item>
                  TG Notary Now provides notarial services only and does not offer legal advice.
                </ListGroup.Item>
                <ListGroup.Item>
                  We do not guarantee that notarized documents will be accepted by every institution—it
                  is your responsibility to confirm acceptance with the relevant party.
                </ListGroup.Item>
                <ListGroup.Item>
                  You are responsible for ensuring that your notarized document meets the legal
                  requirements for its intended use.
                </ListGroup.Item>
                <ListGroup.Item>
                  TG Notary Now follows Arizona’s record-keeping laws, which require us to retain
                  video recordings and notarization logs for at least five years.
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Privacy & Data Protection Section */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="fw-bold mb-4">4. Privacy & Data Protection</h2>
              <p>
                We are committed to protecting your privacy while providing secure notarization services.
              </p>
              <ListGroup>
                <ListGroup.Item>
                  Personal data collected during notarization is protected under strict encryption
                  protocols.
                </ListGroup.Item>
                <ListGroup.Item>
                  We do not sell or share your personal information with third parties except when
                  legally required.
                </ListGroup.Item>
                <ListGroup.Item>
                  We retain notarization records in accordance with Arizona’s legal requirements.
                </ListGroup.Item>
                <ListGroup.Item>
                  Please refer to our Privacy Policy for further details on data collection, storage, and
                  security measures.
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Technical Requirements & Responsibilities Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="fw-bold mb-4">5. Technical Requirements & Responsibilities</h2>
              <p>
                To successfully complete a remote notarization session, you must:
              </p>
              <ListGroup>
                <ListGroup.Item>
                  Have a stable internet connection, a webcam, and a microphone for identity
                  verification.
                </ListGroup.Item>
                <ListGroup.Item>
                  Provide a clear, valid government-issued ID that is not expired for authentication.
                </ListGroup.Item>
                <ListGroup.Item>
                  Follow the instructions of the licensed Arizona notary during your session.
                </ListGroup.Item>
                <ListGroup.Item>
                  Ensure that you are in a private, well-lit location during the video call to comply with
                  security regulations.
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Limitation of Liability Section */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="fw-bold mb-4">6. Limitation of Liability</h2>
              <p>
                TG Notary Now strives to provide a seamless and legally compliant online notarization
                experience, but we are not liable for:
              </p>
              <ListGroup>
                <ListGroup.Item>
                  Any damages resulting from improper document use or rejection by third parties.
                </ListGroup.Item>
                <ListGroup.Item>
                  Legal disputes arising from notarized documents.
                </ListGroup.Item>
                <ListGroup.Item>
                  Delays due to technical issues or internet connectivity problems on the user’s
                  end.
                </ListGroup.Item>
                <ListGroup.Item>
                  Loss of data due to circumstances beyond our control.
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Changes to These Terms Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="fw-bold mb-4">7. Changes to These Terms</h2>
              <p>
                We reserve the right to update these Terms & Conditions as laws and business practices
                evolve.
              </p>
              <ListGroup>
                <ListGroup.Item>
                  Any updates will be posted on our website with the revised date.
                </ListGroup.Item>
                <ListGroup.Item>
                  Continued use of our services after modifications signifies your acceptance of the
                  updated terms.
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Us Section */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="fw-bold mb-4">8. Contact Us</h2>
              <p>
                If you have any questions regarding these Terms & Conditions, please reach out to us:
              </p>
              <ListGroup>
                <ListGroup.Item>
                  <strong>Email:</strong> support@tgnotarynow.com
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Phone:</strong> (123) 456-7890
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Address:</strong> [Company Address], Phoenix, AZ
                </ListGroup.Item>
              </ListGroup>
              <p className="mt-4">
                Thank you for choosing TG Notary Now, Arizona’s trusted provider of secure and legally
                recognized online notarization services! 🚀
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      
      <Footer />
    </>
  );
};

export default TermsOfService;