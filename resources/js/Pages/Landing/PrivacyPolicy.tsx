import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import Header from "./components/Header";
import Footer from './components/Footer';
import { Head } from '@inertiajs/react';

const PrivacyPolicy = () => {
    const currentDateTime = new Date().toLocaleDateString();
  return (
    <>
    <Head title="Privacy Policy" />
      <Header />
      
      {/* Hero Section */}
      <section className="pb-5 hero-section not-home">
        <Container>
          <Row className="align-items-center text-center">
            <Col lg={12}>
              <div className="mb-4">
                <h1 className="display-5 fw-bold mb-3">
                  Privacy Policy
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
                At TG Notary Now, your privacy and security are our top priorities. We are committed to
                protecting your personal information while providing secure, Arizona-compliant remote
                online notarization services. This Privacy Policy outlines how we collect, use, and safeguard
                your data in accordance with Arizona law and federal privacy regulations.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Information We Collect Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="fw-bold mb-4">1. Information We Collect</h2>
              <p>
                To ensure a secure and legally valid notarization process, we collect the following
                information:
              </p>
              <ListGroup>
                <ListGroup.Item>
                  <strong>Personal Identification:</strong> Full name, address, phone number, and email to verify your
                  identity.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Government-Issued ID:</strong> A copy of your Arizona driver’s license, passport, or other
                  approved ID for identity verification as required by Arizona Revised Statutes Title 41,
                  Chapter 2.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Notarization Data:</strong> Details of your notarized documents, signatures, timestamps,
                  and session recordings, as mandated by Arizona law for record-keeping and
                  compliance.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Payment Information:</strong> We collect billing details for processing payments, but we do
                  not store credit card information. All transactions are handled via secure, third-party
                  payment processors.
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>

      {/* How We Use Your Information Section */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="fw-bold mb-4">2. How We Use Your Information</h2>
              <p>
                Your information is used strictly for the following purposes:
              </p>
              <ListGroup>
                <ListGroup.Item>
                  <strong>Identity Verification:</strong> To ensure compliance with Arizona’s online notarization laws.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Notarization Services:</strong> To complete and securely store your notarial transactions as
                  required by Arizona regulations.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Secure Transactions:</strong> To process payments and provide receipts for notarization
                  services.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Legal & Compliance Obligations:</strong> To comply with Arizona state and federal legal
                  requirements, including record retention policies.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Customer Support & Service Improvements:</strong> To respond to inquiries, resolve
                  disputes, and enhance user experience.
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>

      {/* How We Protect Your Information Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="fw-bold mb-4">3. How We Protect Your Information</h2>
              <p>
                TG Notary Now employs industry-leading security measures to protect your data, including:
              </p>
              <ListGroup>
                <ListGroup.Item>
                  <strong>Encryption:</strong> All personal and notarization data is protected using bank-level encryption.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Secure Storage:</strong> Notarial session recordings and documents are stored securely as per
                  Arizona law.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Restricted Access:</strong> Only authorized personnel can access sensitive data.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Compliance with Arizona Law:</strong> We follow all state-mandated privacy and security
                  standards.
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Your Privacy Rights Section */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="fw-bold mb-4">4. Your Privacy Rights</h2>
              <p>
                We respect your privacy and provide the following rights:
              </p>
              <ListGroup>
                <ListGroup.Item>
                  <strong>Access & Correction:</strong> You can request a copy of the data we have on file and correct
                  any inaccuracies.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Data Deletion Requests:</strong> Under Arizona’s privacy regulations, you may request
                  deletion of your personal data once legal retention requirements are met.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Opt-Out of Communications:</strong> You can unsubscribe from promotional emails, but
                  transactional and legal notifications will still be sent as required.
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Data Sharing & Third Parties Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="fw-bold mb-4">5. Data Sharing & Third Parties</h2>
              <p>
                TG Notary Now does not sell or share your personal data with unauthorized third parties.
                However, we may share information with:
              </p>
              <ListGroup>
                <ListGroup.Item>
                  <strong>Arizona State Agencies or Legal Authorities:</strong> When required for compliance.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Trusted Third-Party Service Providers:</strong> For payment processing and secure identity
                  verification.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Legal Entities:</strong> If necessary, to prevent fraud, enforce our terms, or comply with law
                  enforcement requests.
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Retention of Notarization Records Section */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="fw-bold mb-4">6. Retention of Notarization Records</h2>
              <p>
                Arizona law requires that remote notarization records be securely retained for at least five
                years. Your notarization session data, including video recordings, are stored according to these
                legal guidelines.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Updates to This Privacy Policy Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="fw-bold mb-4">7. Updates to This Privacy Policy</h2>
              <p>
                We may update this policy from time to time to reflect changes in Arizona law or industry best
                practices. Any updates will be posted on our website with the revised date.
              </p>
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
                If you have any questions regarding this Privacy Policy or wish to exercise your privacy rights,
                please contact us:
              </p>
              <ListGroup>
                <ListGroup.Item>
                  <strong>Email:</strong> privacy@tgnotarynow.com
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Phone:</strong> (123) 456-7890
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Address:</strong> [Company Address], Phoenix, AZ
                </ListGroup.Item>
              </ListGroup>
              <p className="mt-4">
                Your trust is important to us. Thank you for choosing TG Notary Now for your secure and
                compliant remote notarization needs!
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      
      <Footer />
    </>
  );
};

export default PrivacyPolicy;